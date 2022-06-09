import React from 'react';
import { useEffect, useState } from "react";



const TestView = ( { onClick,currentQ}) => {
    let contL=0;
    const AB=['A','B','C','D','E','F','G','H','I'];
    
    return (
        
            <div className='test-part'>
               
                <div className='question-area'>
                    <p>{currentQ.quest}</p>
                    <div className='answer-area '>
                        {currentQ.answ.map((item,index) => ( 
                                                      
                            <div ><button className='buttonUnAnswer'  onClick={()=> onClick(item)}><span>{AB[index]}</span>{item}</button></div>
                            
                        ))}                      
                      
                        
                    </div>

                </div>                
            </div>
           
            
        
    );
}

export default TestView ;
