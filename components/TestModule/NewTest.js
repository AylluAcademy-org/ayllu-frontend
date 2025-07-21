import React, { useState } from 'react';
import axios from 'axios';
import { useToken } from '../../utils/TokenContext';
import baseUrl from '../../utils/baseUrl';
import { Description } from '@mui/icons-material';
import { value } from '@meshsdk/core';

const NewTest = ({ moduleId, onTestSaved }) => {
    const { token } = useToken();

    const [questions, setQuestions] = useState([]);

    const apiTest = "tests/createTest";
    const API_URL = `${baseUrl}${apiTest}`;

    const apiQuestion = "questions/createQuestion";
    const API_URL_QUESTION = `${baseUrl}${apiQuestion}`;

    const apiOptions = "options/createOption";
    const API_URL_OPTIONS = `${baseUrl}${apiOptions}`;

    const addQuestion = () => {
        const newQuestion = {
            text: '',
            options: ['', '', '', ''],
            correctIndex: null,
        };
        setQuestions([...questions, newQuestion]);
    };

    const updateQuestionText = (index, value) => {
        const updated = [...questions];
        updated[index].text = value.slice(0, 250);
        setQuestions(updated);
    };

    const updateOption = (qIndex, optIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[optIndex] = value.slice(0, 250);
        setQuestions(updated);
    };

    const setCorrectOption = (qIndex, optIndex) => {
        const updated = [...questions];
        updated[qIndex].correctIndex = optIndex;
        setQuestions(updated);
    };

    const removeQuestion = (index) => {
        const updated = questions.filter((_, i) => i !== index);
        setQuestions(updated);
    };

    const handleSubmit = async () => {
        console.log("antes de validacion");
        // Validación básica
        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            if (!q.text.trim() || q.options.some(o => !o.trim()) || q.correctIndex === null) {
                alert(`Completa todos los campos en la pregunta ${i + 1}`);
                return;
            }
        }

        console.log("antes de try");
        try {
            console.log("anrtes de axios");
            const requestData = {
                moduleId: parseInt(moduleId),
                description: "Test del módulo" + moduleId,
            };

            const response = await axios.post(API_URL, requestData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("despues de guardar test");

            //recorrer las preguntas
            for (let i = 0; i < questions.length; i++) {
                const q = questions[i];
                const requestDataQuestion = {
                    text: q.text,
                    order: i + 1,
                    status: true,
                    testId: response.data.test_id,
                };
                console.log("antes de guardar pregunta");
                const responseQuestion = await axios.post(API_URL_QUESTION, requestDataQuestion, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log("despues de guardar pregunta");

                //recorrer las opciones
                for (let j = 0; j < q.options.length; j++) {
                    const opt = q.options[j];
                    const requestDataOption = {
                        text: opt,
                        order: j + 1,
                        status: true,
                        value: j === q.correctIndex ? true : false,
                        questionId: responseQuestion.data.question_id,
                    };
                    console.log("antes de guardar opcion");
                    await axios.post(API_URL_OPTIONS, requestDataOption, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    console.log("despues de guardar opcion");
                }

                alert('Test guardado correctamente');
                onTestSaved?.();
            }
        } catch (error) {
            console.error('Error al guardar el test:', error);
            alert('Error al guardar el test...');
        }
    };

    return (
        <div className="container my-4">
            <h3>Crear Test para el Módulo</h3>

            {questions.map((q, qIndex) => (
                <div key={qIndex} className="card mb-3 p-3">
                    <div className="mb-2">
                        <label>Pregunta {qIndex + 1}</label>
                        <input
                            type="text"
                            value={q.text}
                            onChange={(e) => updateQuestionText(qIndex, e.target.value)}
                            className="form-control"
                            maxLength={250}
                        />
                    </div>

                    {q.options.map((opt, optIndex) => (
                        <div key={optIndex} className="input-group mb-1">
                            <span className="input-group-text">
                                <input
                                    type="radio"
                                    checked={q.correctIndex === optIndex}
                                    onChange={() => setCorrectOption(qIndex, optIndex)}
                                />
                            </span>
                            <input
                                type="text"
                                value={opt}
                                onChange={(e) => updateOption(qIndex, optIndex, e.target.value)}
                                className="form-control"
                                placeholder={`Opción ${optIndex + 1}`}
                                maxLength={250}
                            />
                        </div>
                    ))}

                    <button
                        className="btn btn-danger mt-2"
                        onClick={() => removeQuestion(qIndex)}
                    >
                        Eliminar pregunta
                    </button>
                </div>
            ))}

            <button className="btn btn-primary me-2" onClick={addQuestion}>Agregar Pregunta+++</button>
            <button className="btn btn-success" onClick={handleSubmit}>Guardar Test...</button>
        </div>
    );
};

export default NewTest;
