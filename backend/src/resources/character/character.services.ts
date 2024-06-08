import { PrismaClient, Character } from "@prisma/client";
import { CreateCharacterDto, UpdateCharacterDto } from "./character.types";

const prisma = new PrismaClient();

export const createCharacter = async (
  character: CreateCharacterDto
): Promise<Character> => {
  return prisma.character.create({ data: character });
};

export const updateCharacter = async (
  id: string,
  character: UpdateCharacterDto
): Promise<Character> => {
  return prisma.character.update({
    where: { id },
    data: character,
  });
};

export const deleteCharacter = async (id: string): Promise<Character> => {
  return prisma.character.delete({ where: { id } });
};

export const getCharacter = async (id: string): Promise<Character | null> => {
  return prisma.character.findUnique({ where: { id } });
};

export const getCharacters = async (): Promise<Character[]> => {
  return prisma.character.findMany();
};
