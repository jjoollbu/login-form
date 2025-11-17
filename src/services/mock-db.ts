import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'src/data/users.json');

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export const mockDB = {
  getUserByEmail: async (email: string): Promise<User | undefined> => {
    try {
      const fileContent = await fs.readFile(dbPath, 'utf-8');
      const users: User[] = JSON.parse(fileContent);
      
      return users.find((user) => user.email === email);
    } catch {
      return undefined;
    }
  },

  createUser: async (user: User) => {
    const fileContent = await fs.readFile(dbPath, 'utf-8');
    const users: User[] = JSON.parse(fileContent);
    
    users.push(user);
    
    await fs.writeFile(dbPath, JSON.stringify(users, null, 2));
    return user;
  }
};