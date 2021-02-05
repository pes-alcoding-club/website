import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import MediaQuery from 'react-responsive';
import Link from 'next/link';

const Floating = () => {
    return (
        <>
            <MediaQuery minDeviceWidth={1224}>
                <Button
                    size="lg"
                    _hover={{ textColor: 'whitesmoke' }}
                    boxShadow="lg"
                    bgColor="#e94560"
                    style={{
                        zIndex: 100,
                        opacity: 1,
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                    }}
                >
                    Apply Now
                </Button>
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
                        style={{
                            bottom: '0',
                            width: '100%',
                            height: '80px',
                            zIndex: 100,
                            position: 'fixed',
                        }}
                    >
                        <Text
                            align="center"
                            style={{ margin: '25px auto', fontSize: '25px' }}
                            fontWeight="500"
                        >
                            Apply To Our Monthly Challenge
                        </Text>
                    </Box>
                </Link>
            </MediaQuery>
        </>
    );
};
export default Floating;
