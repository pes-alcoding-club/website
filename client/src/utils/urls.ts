export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const BASEURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/'
        : SERVER_URL;
