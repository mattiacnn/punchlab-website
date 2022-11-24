
//import '../styles/normalize.css';
import Head from 'next/head'
import '../styles/global.css';


function App({ Component, pageProps }) {

  return (<>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    </Head>
    <Component {...pageProps} />
  </>)

}//App

export default App