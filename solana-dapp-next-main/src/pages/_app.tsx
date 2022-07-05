import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');
require('../styles/contentContainer.css');
require('../styles/tailwind.css');
require('../styles/navbar.css');
require('../styles/carrousel.css');
const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head
          
          >
            <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Staatliches&display=swap" rel="stylesheet"/>
            <title>Solana Scaffold Lite</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen font-color bg-black tracking-wide">
              <Notifications />
              
              <ContentContainer>
                <AppBar/>
                <Component {...pageProps} />
                 <Footer/>
              </ContentContainer>
             
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
