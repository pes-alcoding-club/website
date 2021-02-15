export const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];

export const BASEURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/'
        : 'https://alcoding-website-backend.herokuapp.com/';

export const contestData = [
    {
        name: 'September Contest',
        status: 'Finished',
        theme: 'Space',
        problemsURL: 'www.google.com',
        solutionURL: 'www.google.com',
    },
    {
        name: 'September Contest',
        status: 'Finished',
        theme: 'Space',
        problemsURL: 'www.google.com',
        solutionURL: 'www.google.com',
    },
    {
        name: 'September Contest',
        status: 'Finished',
        theme: 'Space',
        problemsURL: 'www.google.com',
        solutionURL: 'www.google.com',
    },
];
