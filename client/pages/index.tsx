import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import AboutUs from '../src/components/landing/AboutUs';
import Carousel from '../src/components/landing/Carousel';
import { images } from '../src/config';

const Landing = () => {
    const containerRef = useRef();
    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Box ref={containerRef}>
                <Header containerRef={containerRef} showApplyBtn />
                <AboutUs />
                <Carousel data={images} />
                <Footer />
            </Box>
        </>
    );
};

export default Landing;
