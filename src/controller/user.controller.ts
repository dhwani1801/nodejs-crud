import { Request, Response } from 'express';
import { createUserService, getUsersService, getUserService, updateUserService, deleteUserService } from '../services/user.services';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (error : any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error : any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id; // Explicit base 10 for parseInt
    const convert = parseInt(userId)
    const user = await getUserService(convert);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await updateUserService(Number(req.params.id), req.body);
    res.status(200).json(user);
  } catch (error : any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await deleteUserService(Number(req.params.id));
    res.status(204).send();
  } catch (error : any) {
    res.status(400).json({ error: error.message });
  }
};
