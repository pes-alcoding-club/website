export const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const BASEURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/'
        : SERVER_URL;

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
        tags: [{ color: 'red', tag: 'summer' }],
        date: 'Jun 14 2020',
        problemsURL:
            'https://www.hackerrank.com/contests/alcoding-summer-challenge/challenges',
        solutionURL: 'https://pes-alcoding-club.github.io/editorials/',
    },
    {
        name: 'Alcoding Summer Challenge 2021',
        tags: [{ color: 'red', tag: 'summer' }],
        date: 'May 9 2021',
        problemsURL:
            'https://www.hackerrank.com/alcoding-summer-challenge-2021',
        solutionURL: 'https://pes-alcoding-club.github.io/editorials/',
    },
];
