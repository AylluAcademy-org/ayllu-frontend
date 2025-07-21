import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import '../styles/meanmenu.min.css'
import '../styles/flaticon.css'
import '../styles/style.css'
import '../styles/responsive.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-tabs/style/react-tabs.css'
import 'react-image-lightbox/style.css'
import '../styles/style.css'
import '../styles/responsive.css'
import "@meshsdk/react/styles.css";
import { MeshProvider } from "@meshsdk/react";

import { TokenProvider } from '../utils/TokenContext';

import Layout from '../components/_App/Layout';

const MyApp =  ({ Component, pageProps }) => {   
    const initialToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const initialUserName = typeof window !== 'undefined' ? localStorage.getItem('userName') : null;
    const initialUserID = typeof window !== 'undefined' ? localStorage.getItem('userID') : null;

    return (
        <MeshProvider>
        <TokenProvider initialToken={initialToken} initialUserName={initialUserName} initialUserID={initialUserID}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </TokenProvider>
        </MeshProvider>
        
    )
}

export default MyApp