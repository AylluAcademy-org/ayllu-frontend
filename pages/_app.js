import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import '../styles/meanmenu.min.css'
import '../styles/flaticon.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-tabs/style/react-tabs.css'
import 'react-image-lightbox/style.css'
import '../styles/style.css'
import '../styles/responsive.css'
import Layout from '../components/_App/Layout';
import {useEffect} from 'react';
const MyApp =  ({ Component, pageProps }) => {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
    return (       
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp