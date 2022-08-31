import React from 'react'; 

const SubscribeForm = () => {
    return (
        <div className="subscribeV2-area bg-f9f9f9 ptb-50">
            <div className="container">
                <div className="subscribe-content">
                    <h2>Mantente al tanto</h2>
                    <p>Nuestro Proyecto aún se encuentra en etapas de desarrollo, si deseas mantenerte al tanto de nuestro progreso, suscríbete! (No hacemos Spam)</p>
                    
                    <form className="newsletter-form">
                        <input type="text" className="input-newsletter" placeholder="Escribe tu dirección de email" name="EMAIL" required />

                        <button type="submit" className="default-btn">Suscríbete!</button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}

export default SubscribeForm;