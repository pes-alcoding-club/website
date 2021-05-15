import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import Upcoming from '../src/components/upcoming/Upcoming';

const Landing = () => {
    const containerRef = useRef();
    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Box ref={containerRef}>
                <Header containerRef={containerRef} showApplyBtn />
                <Upcoming />
                <Footer />
            </Box>
        </>
    );
};

export default Landing;
