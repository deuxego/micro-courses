export type UserId = string;
export type Role = 'ADMIN' | 'USER';

export type UserEntity = {
  id: UserId;
  email: string;
  role: Role;
  name?: string;
  image?: string;
  emailVerified?: Date | null;
};

export type SessionEntity = {
  user: {
    id: UserId;
    email: string;
    role: Role;
    name?: string;
    image?: string;
    emailVerified?: Date | null;
  };
  expires: string;
};

// Projections

export type Profile = {
  email?: string;
  name?: string;
  image?: string;
};
