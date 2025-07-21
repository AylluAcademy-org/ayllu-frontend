import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";

const SeeCourses = () => {
    const [categorias, setCategorias] = useState([]);
    const [cursosAuthor, setCursosAuthor] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const router = useRouter();
    const { token, userID } = useToken();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesRes, authorCoursesRes] = await Promise.all([
                    axios.get(`${baseUrl}categories`, { headers: { Authorization: `Bearer ${token}` } }),
                    axios.get(`${baseUrl}courses/getCourseByAuthorId?authorId=${userID}`, { headers: { Authorization: `Bearer ${token}` } })
                ]);

                setCategorias(categoriesRes.data);
                setCursosAuthor(authorCoursesRes.data);
            } catch (error) {
                console.error("Error al obtener los datos", error);
            }
        };

        if (token) fetchData();
    }, [token, userID]);

    const buscarCursoPorCategoria = async () => {
        try {
            const response = await axios.post(
                `${baseUrl}courses/getByCategory`,
                { categoryId: selectedCategory },
                { headers: { 'Content-Type': 'application/json' } }
            );
            setCursosAuthor(response.data);
        } catch (error) {
            console.error("Error al obtener cursos por categoría", error);
        }
    };

    const verCursoIndividual = (curso) => {
        router.push({
            pathname: "/course-teacher-view-course",
            query: { idCourse: curso.course_id }
        });
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Mis Cursos</h2>

            {/* Filtro de Categoría */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="category"><strong>Filtrar por Categoría:</strong></label>
                    <select 
                        className="form-control"
                        id="category" 
                        value={selectedCategory} 
                        onChange={e => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Selecciona una categoría</option>
                        {categorias.map(cat => (
                            <option key={cat.category_id} value={cat.category_id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-3 d-flex align-items-end">
                    <button className="btn btn-primary w-100" onClick={buscarCursoPorCategoria}>
                        Buscar
                    </button>
                </div>
            </div>

            {/* Listado de Cursos */}
            <h3 className="mb-3">Cursos Creados por Ti</h3>
            <div className="row g-4">
  {cursosAuthor.length > 0 ? (
    cursosAuthor.map((curso) => (
      <div key={curso.course_id} className="col-sm-6 col-md-4 col-lg-3">
        <div className="card curso-card h-100" onClick={() => verCursoIndividual(curso)} style={{ cursor: 'pointer' }}>
          <img
            src={curso.image || "/images/default-course.jpg"}
            alt={curso.name}
            className="card-img-top curso-img"
          />
          <div className="card-body">
            <h6 className="card-title text-center fw-bold">{curso.name}</h6>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-muted">No tienes cursos creados aún.</p>
  )}
</div>

        </div>
    );
};

export default SeeCourses;
