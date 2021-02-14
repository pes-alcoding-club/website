import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import MediaQuery from 'react-responsive';
import Link from 'next/link';

const Floating = () => {
    return (
        <>
            <MediaQuery minDeviceWidth={1224}>
                <Link href="/register">
                    <Button
                        size="lg"
                        _hover={{ textColor: 'whitesmoke' }}
                        boxShadow="lg"
                        bgColor="#e94560"
                        zIndex="100"
                        opacity="1"
                        position="fixed"
                        bottom="30px"
                        right="30px"
                        fontSize="lg"
                    >
                        Apply Now
                    </Button>
                </Link>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <Link href="/register">
                    <Box
                        _hover={{
                            color: 'whitesmoke',
                            textColor: 'whitesmoke',
                        }}
                        bgColor="#e94560"
                        color="black"
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
                            Apply to our Monthly Challenge
                        </Text>
                    </Box>
                </Link>
            </MediaQuery>
        </>
    );
};
export default Floating;
