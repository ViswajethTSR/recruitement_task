import { Router, Request, Response } from 'express';
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

// Get users with filters, sorting, and pagination
export const fetchUser = async (req: Request, res: Response) => {
    try {
        const { name, sort, order = 'asc', page, limit } = req.query;

        const query = name ? { name: new RegExp(name as string, 'i') } : {};

        const sortOrder = order === 'asc' ? 1 : -1;

        const users = await UserModel.find(query)
            .sort({ age: sortOrder })
            .skip((Number(page === '0' ? 1 : page) - 1) * Number(limit))
            .limit(Number(limit));

        res.json(users);
    } catch (e) {
        res.status(500).json({ message: e });
        console.log(e);
    }
};


