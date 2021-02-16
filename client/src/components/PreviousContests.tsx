import { Heading, Box } from '@chakra-ui/react';
import React from 'react';
import { contestData } from '../config';
import Carousel from './Carousel';

const PreviousContests = () => {
    return (
        <Box>
            <Heading textAlign="center" my="10">
                Previous Contests
            </Heading>
            <Carousel data={contestData} />
        </Box>
    );
};

export default PreviousContests;
