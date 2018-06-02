import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content="Prasetya Aji Baskara" />
      <link rel="shortcut icon" type="image/x-icon" href="../static/images/favicon.ico" />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    {props.children}
  </div>
)

export default Layout