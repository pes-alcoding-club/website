import { Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import MediaQuery from 'react-responsive';

const AboutUs = () => {
    return (
        <>
            <MediaQuery minDeviceWidth={1224}>
                <div>
                    <Heading
                        style={{
                            textAlign: 'center',
                            margin: '70px auto 50px',
                        }}
                    >
                        About Us
                    </Heading>
                    <Text
                        align="center"
                        style={{
                            padding: '0 110px 0 110px',
                            margin: '0 0 70px 0',
                        }}
                        fontSize="lg"
                    >
                        Nulla sit amet sapien vitae mauris tempor ultricies nec
                        finibus sapien. Nunc id nisi in velit vulputate finibus.
                        Aenean bibendum magna sit amet pellentesque rhoncus.
                        Vestibulum et finibus arcu, in posuere nibh. Praesent
                        sagittis lectus ac enim porttitor maximus. Pellentesque
                        varius, nulla at suscipit ornare, ipsum erat facilisis
                        leo, sit amet congue diam sapien et nulla. In ut turpis
                        non arcu maximus congue. Nulla facilisi. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus.
                    </Text>
                    <Divider />
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <div style={{ width: '140%' }}>
                    <Heading
                        style={{
                            textAlign: 'center',
                            margin: '70px auto 50px',
                        }}
                    >
                        About Us
                    </Heading>
                    <Text
                        align="center"
                        style={{
                            padding: '0 110px 0 110px',
                            margin: '0 0 70px 0',
                        }}
                        fontSize="lg"
                    >
                        Nulla sit amet sapien vitae mauris tempor ultricies nec
                        finibus sapien. Nunc id nisi in velit vulputate finibus.
                        Aenean bibendum magna sit amet pellentesque rhoncus.
                        Vestibulum et finibus arcu, in posuere nibh. Praesent
                        sagittis lectus ac enim porttitor maximus. Pellentesque
                        varius, nulla at suscipit ornare, ipsum erat facilisis
                        leo, sit amet congue diam sapien et nulla. In ut turpis
                        non arcu maximus congue. Nulla facilisi. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus.
                    </Text>
                    <Divider />
                </div>
            </MediaQuery>
        </>
    );
};
export default AboutUs;
