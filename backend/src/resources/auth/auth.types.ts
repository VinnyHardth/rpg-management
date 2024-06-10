import { User } from "@prisma/client";

// define the Credential type
type Credential = Pick<User, "email" | "username" | "password">;

// define the LoginDto type, which is a type that extends the Credential type
// and adds a password field that is required
export type LoginDto = {
  password: NonNullable<Credential["password"]>;
} & Partial<Omit<Credential, "password">>;
