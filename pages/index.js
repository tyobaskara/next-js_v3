import React from 'react';
import Layout from '../lib/Layout';
import Head from 'next/head';
import indexCss from '../styles/index.css';
import BannerHome from '../components/BannerHome.js';

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Next-js_v3</title>
                    {process.env.NODE_ENV === 'development' && <link rel="stylesheet" href="../static/index.css" />}
                </Head>
                {process.env.NODE_ENV !== 'development' && <style dangerouslySetInnerHTML={{ __html: indexCss }} />}

                <BannerHome />
            </Layout>
        )
    }
}