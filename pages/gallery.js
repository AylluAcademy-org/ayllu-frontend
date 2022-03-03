import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';
import Lightbox from 'react-image-lightbox';
import Link from 'next/link';

const images = [
    ('images/courses/courses1.jpg'),
    ('images/courses/courses2.jpg'),
    ('images/courses/courses3.jpg'),
    ('images/courses/courses4.jpg'),
    ('images/courses/courses5.jpg'),
    ('images/courses/courses6.jpg'),
    ('images/courses/courses7.jpg'),
    ('images/courses/courses8.jpg'),
    ('images/courses/courses9.jpg'),
];

const Gallery = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Gallery" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Gallery" 
            />  

            <div className="gallery-area pt-100 pb-70">
                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                    >
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                    >
                                        <img src="/images/courses/courses2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                    >
                                        <img src="/images/courses/courses3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                    >
                                        <img src="/images/courses/courses4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                    >
                                        <img src="/images/courses/courses5.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                    >
                                        <img src="/images/courses/courses6.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                    >
                                        <img src="/images/courses/courses7.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                    >
                                        <img src="/images/courses/courses8.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/courses/courses9.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubscribeForm />
      
            <Footer />
        </React.Fragment>
    )
}

export default Gallery;