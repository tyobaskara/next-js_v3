import React from 'react';
import Layout from '../lib/Layout';
import Link from 'next/link';
import Head from 'next/head';
import BannerHome from '../components/BannerHome.js';

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Shopee</title>
                </Head>

                <BannerHome />
            </Layout>
        )
    }
}