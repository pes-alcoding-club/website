import { Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
// help from: https://www.youtube.com/watch?v=l1MYfu5YWHc :)

const images = [
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1611855435748-0320fd485dd7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1611493056239-9f15dfe79373?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

const Carousel = () => {
    const [current, setCurrent] = useState<number>(0);
    const increment = () => setCurrent((current + 1) % images.length);
    const decrement = () => {
        setCurrent(current !== 0 ? current - 1 : images.length - 1);
    };
    return (
        <>
            <MediaQuery minDeviceWidth={1224}>
                <Box
                    my="10"
                    w="100%"
                    display="flex"
                    justifyContent="center"
                    userSelect="none"
                    position="relative"
                >
                    <FaArrowCircleLeft
                        cursor="pointer"
                        size="35"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '20%',
                            zIndex: 10,
                        }}
                        onClick={decrement}
                    />
                    {images.map((src, key) => (
                        <Box
                            position="relative"
                            zIndex="1"
                            key={key}
                            opacity={key === current ? '1' : '0'}
                            transitionDuration={
                                key === current ? '1s' : '1s ease'
                            }
                            transform={`scale(${
                                key === current ? '1.08' : '1'
                            })`}
                        >
                            {key === current && (
                                <Image w="600px" h="400px" src={src} />
                            )}
                        </Box>
                    ))}
                    <FaArrowCircleRight
                        z="10"
                        cursor="pointer"
                        size="35"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '20%',
                            zIndex: 10,
                        }}
                        onClick={increment}
                    />
                </Box>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <Box
                    my="10"
                    w="140%"
                    display="flex"
                    justifyContent="center"
                    userSelect="none"
                    position="relative"
                >
                    <FaArrowCircleLeft
                        cursor="pointer"
                        size="35"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10%',
                            zIndex: 10,
                        }}
                        onClick={decrement}
                    />
                    {images.map((src, key) => (
                        <Box
                            position="relative"
                            zIndex="1"
                            key={key}
                            opacity={key === current ? '1' : '0'}
                            transitionDuration={
                                key === current ? '1s' : '1s ease'
                            }
                            transform={`scale(${
                                key === current ? '1.08' : '1'
                            })`}
                        >
                            {key === current && (
                                <Image w="328px" h="216px" src={src} />
                            )}
                        </Box>
                    ))}
                    <FaArrowCircleRight
                        z="10"
                        cursor="pointer"
                        size="35"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10%',
                            zIndex: 10,
                        }}
                        onClick={increment}
                    />
                </Box>
            </MediaQuery>
        </>
    );
};

export default Carousel;
