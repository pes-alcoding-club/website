import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const AboutContest = ({}) => {
    return (
        <Box w="100%" p="5">
            <Heading
                fontSize="4xl"
                textAlign="center"
                my={{ lg: '35px', base: '10px' }}
                mx="auto"
            >
                About the Contest
            </Heading>
            <Box w={{ xl: '45%', lg: '60%', base: '95%' }} mx="auto">
                <Text
                    fontSize={{ lg: 'xl', base: 'lg' }}
                    my="5"
                    lineHeight="32px"
                >
                    The Alcoding Club, the official Coding Club of PES
                    University presents to you, The Summer Challenge '21!
                </Text>
                <Text
                    fontSize={{ lg: 'xl', base: 'lg' }}
                    my="5"
                    lineHeight="32px"
                >
                    Duke it out with your fellow competitors in this three hour
                    contest of competitive coding from 7:30PM to 10:30PM on May
                    9th, and emerge victorious.
                </Text>
                <Text
                    fontSize={{ lg: 'xl', base: 'lg' }}
                    my="5"
                    lineHeight="32px"
                >
                    This is a chance for you to find out what competitive coding
                    is all about, and maybe put yourselves on our radar!
                </Text>
                <Text
                    fontSize={{ lg: 'xl', base: 'lg' }}
                    my="5"
                    lineHeight="32px"
                >
                    The contest is open to anyone who wants to participate, so
                    go ahead and register
                </Text>
            </Box>
        </Box>
    );
};

export default AboutContest;
