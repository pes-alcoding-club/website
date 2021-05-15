import { Box, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Upcoming = () => (
    <Box w="100%" p="5">
        <Heading
            fontSize="4xl"
            textAlign="center"
            my={{ lg: '35px', base: '10px' }}
            mx="auto"
        >
            Alcoding Challenge 2021
        </Heading>
        <Heading
            fontSize="2xl"
            textAlign="center"
            // my={{ lg: '35px', base: '10px' }}
            mx="auto"
        >
            September 31st, 2069
        </Heading>
        <Box
            w={{ xl: '45%', lg: '60%', base: '95%' }}
            mx="auto"
            textAlign="justify"
        >
            <Text fontSize={{ lg: 'xl', base: 'lg' }} my="5" lineHeight="32px">
                If its a contest, mention rules and stuff, if its a seminar, mention topic and location.
                Add link to {' '}
            <span style={{ color: '#fd6378' }}>
                    <a href="https://discord.com/invite/WJyMrRyfW8">
                        register
                    </a>
                </span>
                .
            </Text>
        </Box>
        <Heading
            fontSize="3xl"
            textAlign="center"
            my={{ lg: '30px', base: '8px' }}
            mx="auto"
        >
            To get faster updates, join our{' '}
            <span style={{ color: '#fd6378' }}>
                    <a href="https://discord.com/invite/WJyMrRyfW8">
                        discord
                    </a>
                </span>
                .
        </Heading>
    </Box>
);

export default Upcoming;
