import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      {process.env.NODE_ENV === 'development' && <link rel="stylesheet" href="../static/main.css" />}
    </Head>
    {process.env.NODE_ENV !== 'development' && <style dangerouslySetInnerHTML={{ __html: prodCss }} />}
    {props.children}
  </div>
)

export default Layout