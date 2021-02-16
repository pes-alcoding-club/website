import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import AboutUs from '../src/components/AboutUs';
import Carousel from '../src/components/Carousel';
import Floating from '../src/components/Floating';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import { images } from '../src/config';

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
                <Carousel isImg data={images} />
                <Footer />
                <Floating />
            </Box>
        </>
    );
};

export default Landing;
