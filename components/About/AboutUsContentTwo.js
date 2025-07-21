import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const AboutUsContentTwo = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <div className="about-area-two ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-content-box">
                                <span className="sub-title">Ayllu</span>
                                <h2>Potenciar el Desarrollo Educacional y Tecnológico en LatinoAmérica</h2>
                                <p>Con un diverso equipo, nuestra misión y nuestras raíces nos mantienen motivados a hacer todo lo posible por mejorar los estándares de educación en nuestra linda región.</p>
                                <p><strong>Cerremos las brechas tecnológicas, innovemos, y aportemos juntos al desarrollo de LatinoAmérica..</strong></p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="about-video-box">
                                <div className="image">
                                    <img src="/images/about-img5.jpg" alt="image" />
                                </div>
    
                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="flaticon-play"></i>
                                    </a>
                                </Link>

                                <div className="shape10">
                                    <img src="/images/shape9.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="shape3">
                    <img src="/images/shape3.png" alt="image" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/images/shape2.png" alt="image" />
                </div>

                {/* If you want to change the video need to update videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={!isOpen} 
                    videoId='jwKKxMx65zE' 
                    onClose={() => setIsOpen(!isOpen)} 
                />
            </div>
        </React.Fragment>
    )
}

export default AboutUsContentTwo;