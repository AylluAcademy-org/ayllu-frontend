import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, ListItemIcon, ListItemText } from '@mui/material';
import { School, Quiz } from '@mui/icons-material';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Router from 'next/router'

const iconStyle = {
  color: '#fe4a55',
  marginRight: '8px',
};

const ContentDetail = ({ loading, error, errorMessage, dataCourse ,userId,userOnCourseId}) => {

useEffect(() => {
  console.log("🟢 ContentDetail cargado");
  console.log("loading:", loading);
  console.log("error:", error);
  console.log("dataCourse:", dataCourse);
}, [loading, error, dataCourse]);
  function handleClick(testId) {
    Router.push({
      pathname: "/course-test-v2",
      query: {
        testId: testId,
        courseId: dataCourse.course_id,
        userId: userId,
        userOnCourseId: userOnCourseId
      }
    });
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ocurrió un error: {errorMessage}</p>;
  }
  function handleLessonClick(lessonId) {
    console.log('Lección seleccionada:', lessonId);
    Router.push({
      pathname: Router.pathname,
      query: {
        ...Router.query,
        sessionId: lessonId
      }
    }, undefined, { shallow: true });
  }

  return (
    <div>
      {dataCourse.modules.map((module, moduleIndex) => (
        <Accordion key={moduleIndex}>
          <AccordionSummary style={{ backgroundColor: '#F9F5F4' }}>
            <div className="d-flex justify-content-between align-items-center" style={{ color: 'black', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
              <span> {module.name}</span>
            </div>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: '#f0f0f0' }}>
            <ul>
              {module.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex} style={{ listStyleType: 'none' }}>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleLessonClick(lesson.lesson_id)}
                  >
                    <ListItemIcon>
                      <School sx={iconStyle} />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="courses-name">{lesson.name}</span>
                    </ListItemText>
                  </div>
                </li>
              ))}
              {module.test && module.test.length > 0 && (
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  {module.test.map((test, testIndex) => (
                    <li key={testIndex}>
                      <div className="d-flex justify-content-between align-items-center" onClick={() => handleClick(test.test_id)}>
                        <ListItemIcon>
                          <Quiz sx={iconStyle} style={{ cursor: 'pointer' }} />
                        </ListItemIcon>
                        <ListItemText>
                          <span className="d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }}>{test.description}</span>
                        </ListItemText>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ContentDetail;
