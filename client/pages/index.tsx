import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';
import Floating from '../components/Floating';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Landing = () => {
    const containerRef = useRef();
    const goToBottom = () => {
        // @ts-ignore
        containerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };
    
    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Box ref={containerRef}>
                <Header showApplyBtn goToBottom={goToBottom} />
                <AboutUs />
                <Carousel />
                <Footer />
                <Floating />
            </Box>
        </>
    );
};

export default Landing;
