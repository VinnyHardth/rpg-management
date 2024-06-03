import { PrismaClient, User } from "@prisma/client";
import { genSalt, hash } from "bcryptjs";

import { UserTypes } from "../userType/userType.constants";
import { CreateUserDto, UpdateUserDto, UserDto, UserType } from "./user.types";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<UserDto[]> => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      username: true,
      userTypeId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return users;
};

export const getUserById = async (id: string): Promise<UserDto | null> => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      username: true,
      userTypeId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

export const getUserByEmail = async (
  email: string
): Promise<UserDto | null> => {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      username: true,
      userTypeId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

export const getUserByUsername = async (
  username: string
): Promise<UserDto | null> => {
  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      email: true,
      username: true,
      userTypeId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

export const createUser = async (
  user: CreateUserDto,
  userType: UserType
): Promise<UserDto> => {
  const rounds = parseInt(process.env.BCRYPT_ROUNDS!);
  const salt = await genSalt(rounds);
  const password = await hash(user.password, salt);

  const createdUser = await prisma.user.create({
    select: {
      id: true,
      email: true,
      username: true,
      userTypeId: true,
      createdAt: true,
      updatedAt: true,
    },
    data: {
      ...user,
      password,
      userTypeId: userType === "admin" ? UserTypes.ADMIN : UserTypes.CLIENT,
    },
  });

  return createdUser;
};

export const updateUser = async (
  id: string,
  user: UpdateUserDto
): Promise<UserDto | null> => {
  const updatedUser = await prisma.user.update({
    where: { id },
    select: {
      id: true,
      email: true,
      username: true,
      userTypeId: true,
      createdAt: true,
      updatedAt: true,
    },
    data: user,
  });

  return updatedUser;
};

export const deleteUser = async (id: string): Promise<UserDto | null> => {
  const deletedUser = await prisma.user.delete({
    where: { id },
    select: {
      id: true,
      email: true,
      username: true,
      userTypeId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return deletedUser;
};
