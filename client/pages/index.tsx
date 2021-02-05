import Head from 'next/head';
import React from 'react';
import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';
import Floating from '../components/Floating';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Landing = () => {
    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Header
                showApplyBtn
                l1="Calendar"
                l2="Editorials"
                l3="Contact Us"
            />
            <AboutUs />
            <Carousel />
            <Footer />
            <Floating />
        </>
    );
};

export default Landing;