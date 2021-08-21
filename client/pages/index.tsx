import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
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

export const getStaticProps: GetStaticProps = async () => ({
    props: {},
});

export default index;
