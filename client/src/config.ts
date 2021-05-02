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
        name: 'Alcoding Summer Challenge 2020',
        tags: [{ color: 'purple', tag: 'Space' }],
        problemsURL: 'https://pes-alcoding-club.github.io/editorials/',
        solutionURL: 'https://pes-alcoding-club.github.io/editorials/',
        date: '14-06-2020',
    },
];
