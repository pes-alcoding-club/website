export const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];

export interface IContest {
    name: string;
    tags: { tag: string; color: string }[];
    problemsURL: string;
    solutionURL: string;
    date: string;
}

export const contests: IContest[] = [
    {
        name: 'Alcoding Summer Challenge',
        tags: [{ color: 'red', tag: 'summer' }],
        date: 'Jun 14 2020',
        problemsURL:
            'https://www.hackerrank.com/contests/alcoding-summer-challenge/challenges',
        solutionURL: 'https://pes-alcoding-club.github.io/editorials/',
    },
];
