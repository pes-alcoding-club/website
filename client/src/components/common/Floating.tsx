import { Box, Button, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import MediaQuery from 'react-responsive';

const Floating = () => {
    return (
        <>
            <MediaQuery minDeviceWidth={1224}>
                <Link href="/register" as={NextLink}>
                    <Button
                        size="lg"
                        textColor="whitesmoke"
                        _hover={{
                            bg: '#b0152f',
                            textColor: 'whitesmoke',
                        }}
                        boxShadow="lg"
                        bgColor="#e94560"
                        zIndex="100"
                        opacity="1"
                        position="fixed"
                        bottom="30px"
                        right="30px"
                        fontSize="lg"
                    >
                        Participate
                    </Button>
                </Link>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <Link href="/register" as={NextLink}>
                    <Box
                        _hover={{
                            bg: '#b0152f',
                            textColor: 'whitesmoke',
                        }}
                        textColor="whitesmoke"
                        bgColor="#e94560"
                        bottom="0"
                        w="100vw"
                        h="80px"
                        zIndex="100"
                        position="fixed"
                    >
                        <Text
                            align="center"
                            my="25px"
                            mx="auto"
                            fontSize="xl"
                            fontWeight="bold"
                        >
                            Participate in our Monthly Challenge
                        </Text>
                    </Box>
                </Link>
            </MediaQuery>
        </>
    );
};

export default Floating;
