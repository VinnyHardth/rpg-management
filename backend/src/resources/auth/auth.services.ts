import { PrismaClient, User } from "@prisma/client";
import { LoginDto } from "./auth.types";
import { compare } from "bcryptjs";
import { UserDto } from "../user/user.types";

const prisma = new PrismaClient();

export const checkCredentials = async (
  loginDto: LoginDto
): Promise<UserDto | null> => {
  const { username, email, password } = loginDto;

  if (!username && !email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: username ? { username } : { email },
  });

  if (!user) {
    return null;
  }

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  // Convertendo o objeto User para UserDto
  const userDto: UserDto = {
    id: user.id,
    email: user.email,
    username: user.username,
    userTypeId: user.userTypeId,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return userDto;
};
