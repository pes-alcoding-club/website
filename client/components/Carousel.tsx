import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
// help from: https://www.youtube.com/watch?v=l1MYfu5YWHc :)

const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];

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
                                <Image width="678px" height="456px" src={src} />
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
                                <Image width="337px" height="236px" src={src} />
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
