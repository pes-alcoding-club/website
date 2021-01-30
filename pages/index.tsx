import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import AboutUs from '../components/AboutUs';
import Floating from '../components/Floating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';
import Carousel from '../components/Carousel';

const Landing = () => {
    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Header />
            <AboutUs />
            <Carousel />
            <Footer />
            <Floating />
        </>
    );
};

export default Landing;
