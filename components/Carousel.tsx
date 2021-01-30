import { Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
// help from: https://www.youtube.com/watch?v=l1MYfu5YWHc :)

const images = [
    'https://lh3.googleusercontent.com/pw/ACtC-3eAOr_3m8nkwHFxUGVCocpqAsfRXF9iBmFBJ9Vsu6cUNNBf1KblJizIy-ouzALEPFiO3cPxHnBdcnGmWSzupTLDEdmjrjyTsEiG9OnGPSL_Oq8VED1IQ3Wn3MSpokTIJXZANbbmcmg3Loq_rv-YK_8jJQ=w1258-h944-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3eRo1AoiFwa2Ae5_SHXdEWVHcCEOIELaImOC832EgsRSCjUmjfXXEPd9QMvYfiHfCW9yJhZWFc_Zj0pwBMcBf4MeqOEV-QwLYD8CTOjzWudM8BcO1Zj-cnOtQGdliJ8ggUliYJcorb-tbWrOGob4eXCAA=w1258-h944-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3cnkp2xlwwIbF8sYZ4U3ODlOg4MHlX4UNA2ZhM8XQ01IYLkT5ig7VmCMyHoJHz2-cBehp4_7kwn7jK7d5ruXbLUeLiqtHjuglkXUX4j8bll4x0AjNzZg9424ep6VQqEgCh9TOUdhc3qGgEoAmMt_PFLzg=w1258-h944-no?authuser=0',
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
