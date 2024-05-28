import { prisma } from "@gospel/database";

import { PrismaUserRepository } from "./repositories/user-repository.ts";

export const Service = {
  userRepository: new PrismaUserRepository(prisma),
};

export type { User } from "./shared/dtos.ts";

export { helloWorld } from "./shared/utils.ts";
