import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const CoursesDetailsSidebar = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
            
            <div className="courses-details-info">
                <div className="image">
                    <img src="/images/courses/courses1.jpg" alt="image" />

                    <Link href="#play-video">
                        <a
                            onClick={e => {e.preventDefault(); openModal()}}
                            className="link-btn popup-youtube"
                        ></a>
                    </Link>

                    <div className="content">
                        <i className="flaticon-play"></i>
                        <span>Course Preview</span>
                    </div>
                </div>

                <ul className="info">
               
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-teacher"></i> Instructor</span>
                            Juán Perez
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-time"></i> Duration</span>
                            20 hrs
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-distance-learning"></i> Lessons</span>
                            25
                        </div>
                    </li>

                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-lock"></i> Access</span>
                            Lifetime
                        </div>
                    </li>
                </ul>

                <div className="btn-box">
                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-shopping-cart"></i> Add to Cart <span></span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-tag"></i> Buy Now <span></span>
                        </a>
                    </Link>
                </div>

            
            </div>
        </React.Fragment>
    )
}

export default CoursesDetailsSidebar;