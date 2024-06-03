import { User } from "@prisma/client";

export type CreateUserDto = Omit<User, "id">;
export type UpdateUserDto = Partial<CreateUserDto>;
export type UserDto = Omit<User, "password">;
export type UserType = "admin" | "client";
