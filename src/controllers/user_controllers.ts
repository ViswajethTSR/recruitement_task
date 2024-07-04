import { Request, Response } from 'express';
import { UserModel } from '../models/user_model';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, age, ph_no, city } = req.body;
        const user = new UserModel({ name, age, ph_no, city });
        await user.save();
        res.status(201).json(user);
    } catch (e) {
        res.status(500).json({ message: e });
    }
};

export const fetchUser = async (req: Request, res: Response) => {
    try {
        const { name, page, limit, minAge, maxAge, sort } = req.query;

        const query = name || minAge && maxAge ? {
            name: new RegExp(name as string, 'i'),
            age: minAge && maxAge ? { $gte: minAge, $lte: maxAge } : { $gte: 0 }
        } : {};

        const sortOrder = sort === 'des' ? -1 : 1

        const users = await UserModel.find(query, { __v: 0, _id: 0 })
            .sort({ age: sortOrder })
            .skip((Number(page === '0' ? 1 : page) - 1) * Number(limit))
            .limit(Number(limit));

        res.json(users);
    } catch (e) {
        res.status(500).json({ message: e });
        console.log(e);
    }
};


