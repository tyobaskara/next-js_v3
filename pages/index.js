import React from 'react';
import Layout from '../lib/Layout'
import Link from 'next/link';
import Head from 'next/head';

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>TyoBaskara nextjs-2</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="author" content="Prasetya Aji Baskara" />
                    <link rel="shortcut icon" type="image/x-icon" href="../static/images/favicon.ico" />
                    <meta name="robots" content="noindex, nofollow" />
                </Head>

                <div className="container container--wrap">
                    <h1>Hello Next Js , Tyobaskara Version 2</h1>
                </div>
            </Layout>
        )
    }
}