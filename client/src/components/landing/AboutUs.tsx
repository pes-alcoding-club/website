import { Box, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const AboutUs = () => (
    <Box w="100%" p="5">
        <Heading
            fontSize="4xl"
            textAlign="center"
            my={{ lg: '35px', base: '10px' }}
            mx="auto"
        >
            About Us
        </Heading>
        <Box
            w={{ xl: '45%', lg: '60%', base: '95%' }}
            mx="auto"
            textAlign="justify"
        >
            <Text fontSize={{ lg: 'xl', base: 'lg' }} my="5" lineHeight="32px">
                The Alcoding Club is the official Competitive Programming Club
                under the CSE Department of PES University. The club aims to
                cultivate and promote the skills of competitive programming and
                problem solving in the campus through our workshops and
                discussions sessions, where we discuss previous online
                competition problems and try to come up with solutions to those
                problems. The competitions we participate in can be found here
                on our{' '}
                <span style={{ color: '#fd6378' }}>
                    <Link href="https://calendar.google.com/calendar?cid=N3RsZGt1dXEwcW1mOW9ub2Jxb3ByZ2Z1cDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                        calendar
                    </Link>
                </span>
                .
            </Text>
            <Text fontSize={{ lg: 'xl', base: 'lg' }} my="5" lineHeight="32px">
                The Alcoding Club is also responsible for representing the
                university in various regional and international coding
                competitions, from college fests, to major events like the ACM
                ICPC, Google Kickstart and more. The Club also hosts various
                competitions throughout the year.
            </Text>
            <Text fontSize={{ lg: 'xl', base: 'lg' }} my="5" lineHeight="32px">
                While most of the competitions we host are online, we also host
                an annual flagship coding competition where students from
                colleges all over the country compete. Finally, the Alcoding
                Club undertakes various development projects every year, and
                offers summer internships to work on the same. You can check out
                our previous and ongoing projects{'  '}
                <Link
                    color="#fd6378"
                    href="https://github.com/pes-alcoding-club"
                    userSelect="none"
                >
                    here
                </Link>
                .
            </Text>
        </Box>
    </Box>
);

export default AboutUs;
