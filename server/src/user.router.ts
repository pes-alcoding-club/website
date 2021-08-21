import { Router, Response, Request } from 'express';
import User, { IUser } from './user.model';

const router = Router();

router.get('/', async (_, res: Response) => {
    try {
        const users = await User.find({}).exec();
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ err });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, email, srn, graduationYear, contestCode } = req.body;

        const user = new User({
            name,
            email,
            srn,
            graduationYear,
            contestCode,
        });

        await user.save();
        res.status(200).send();
    } catch (err) {
        res.status(500).json({
            err,
        });
    }
});

export default router;
