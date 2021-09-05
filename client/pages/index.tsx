import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import Floating from '../src/components/common/Floating';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import AboutUs from '../src/components/landing/AboutUs';
import Carousel from '../src/components/landing/Carousel';
import { images } from '../src/config';

interface indexProps {}

const index: React.FC<indexProps> = () => {
    const containerRef = useRef();
    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
                <meta
                    name="description"
                    content="The official Competitive Programming Club under the CSE Department of PES University."
                />
                <meta property="og:title" content="The Alcoding Club" />
                <meta
                    property="og:description"
                    content="The official Competitive Programming Club under the CSE Department of PES University."
                />
                <meta
                    property="og:url"
                    content="https://thealcodingclub.vercel.app/"
                />
                <meta property="og:type" content="website" />
            </Head>
            <Box ref={containerRef}>
                <Header containerRef={containerRef} showApplyBtn />
                <AboutUs />
                <Carousel data={images} />
                <Footer />
                <Floating />
            </Box>
        </>
    );
};

export default index;
