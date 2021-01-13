import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import AboutUs from '../components/AboutUs';
import Floating from '../components/Floating';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

const Landing = () => {
    return (
        <ChakraProvider>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Header />
            <AboutUs />
            <Footer />
            <Floating />
        </ChakraProvider>
    );
};

export default Landing;
