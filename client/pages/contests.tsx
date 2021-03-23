import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import ContestGrid from '../src/components/contests/ContestGrid';

interface ContestsProps {}

const Contests: React.FC<ContestsProps> = ({}) => {
    const containerRef = useRef();
    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Box ref={containerRef}>
                <Header containerRef={containerRef} showApplyBtn />
                <Heading textAlign="center" my="10">
                    Previous Contests
                </Heading>
                <ContestGrid />
                <Footer />
            </Box>
        </>
    );
};

export default Contests;
