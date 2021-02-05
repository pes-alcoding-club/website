import { Router, Response, Request } from 'express';
import User, { IUser } from './user.model';

const router = Router();

router.get('/', async (_, res: Response) => {
    await User.find({}, (err, user: IUser) => {
        res.json({ err, user });
    });
});

router.post('/', async (req: Request, res: Response) => {
    const { name, email } = req.body;

    const user = new User({
        name,
        email,
    });

    await user
        .save()
        .then(() => res.status(200).json())
        .catch((err) => res.json(err));
});

export default router;
