import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 10
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        
      }
      
      
        
    return (
    <div className='parentBarprogres' style={Parentdiv}>
      <div style={Childdiv}>
        <span >{``}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;