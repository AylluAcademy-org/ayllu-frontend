import React from 'react';
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Courses = () => {
    return (
        <div className="profile-quizzes pb-70">
            <h3 className="title">Listado de cursos</h3>

            <div className='container'>
            <div className="row">
                <div className="col-lg-9 col-md-9">
                    <h1>Modulos</h1>
                    <div>
                    <div>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Módulo 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>Módulo 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>Módulo 3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2">
                <div className="courses-reviews">
                                            <h3>Course Rating</h3>
                                            <div className="rating">
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star"></span>
                                            </div>

                                        </div>
                                        
                                        <div className="courses-review-comments">
                                            <h3>3 Reviews</h3>
                                            <div className="user-review">
                                                <img src="/images/user1.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                    </div>

                                                    <span className="d-inline-block">James Anderson</span>
                                                </div>

                                                <span className="d-block sub-comment">Excellent</span>
                                                <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user2.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                    </div>

                                                    <span className="d-inline-block">Sarah Taylor</span>
                                                </div>

                                                <span className="d-block sub-comment">Video Quality!</span>
                                                <p>Was really easy to implement and they quickly answer my additional questions!</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user3.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                    </div>

                                                    <span className="d-inline-block">David Warner</span>
                                                </div>

                                                <span className="d-block sub-comment">Perfect Coding!</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user4.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star'></i>
                                                    </div>

                                                    <span className="d-inline-block">King Kong</span>
                                                </div>

                                                <span className="d-block sub-comment">Perfect Video!</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>
                                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Courses;