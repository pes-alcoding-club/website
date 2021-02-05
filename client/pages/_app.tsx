import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import '../styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
