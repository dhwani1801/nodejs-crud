import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUserService = async (data: { name: string; email: string }) => {
  return prisma.user.create({ data });
};

export const getUsersService = async () => {
  return prisma.user.findMany();
};

export const getUserService = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};

export const updateUserService = async (id: number, data: { name?: string; email?: string }) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUserService = async (id: number) => {
  return prisma.user.delete({ where: { id } });
};
