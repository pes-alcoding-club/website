export const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];

export const BASEURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/'
        : 'https://alcoding-website-backend.herokuapp.com/';

export interface IContest {
    name: string;
    tags: { tag: string; color: string }[];
    problemsURL: string;
    solutionURL: string;
    date: string;
}

export const contests: IContest[] = [
    {
        name: 'Alcoding Summer Challenge 2021',
        tags: [{ color: 'orange', tag: 'medium' }],
        problemsURL: 'http://www.google.com',
        solutionURL: '/problems',
        date: 'May 9th, 2021',
    },
];
