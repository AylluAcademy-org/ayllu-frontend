import React from 'react';

const TestView = () => {
    
    return (
        
            <div className='test-part'>
                <div className="container " >
                    <span classname="name-module-test ">Module 3:Exam</span>     
                    <span className='number-question'> Pregunta 1 de</span> 5  
                                      
                </div>

                <div className='container question-area'>
                    <p>Lorem ipsum?</p>
                    <div className='answer-area row'>
                        <div><span>A</span><button>Respuesta 1</button></div>
                        <div><span>B</span><button>Respuesta 2</button></div>
                        <div><span>C</span><button>Respuesta 3</button></div>
                        <div><span>D</span><button>Respuesta 4</button></div>
                    </div>

                </div>




                
            </div>
           
            
        
    );
}

export default TestView;