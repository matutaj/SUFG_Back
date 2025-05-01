import { PrismaClient } from "@prisma/client";

<<<<<<< HEAD
const prisma = new PrismaClient({
  log: ["warn", "error"],
});

/* import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate()); */
export default prisma;
=======
export const prisma = new PrismaClient();
>>>>>>> d92e43e15bf9abd533f70547a505a886f0e4faaa
