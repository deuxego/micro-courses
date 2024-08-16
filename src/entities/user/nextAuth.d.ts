import { SessionEntity, UserEntity } from './domain/types';

declare module 'next-auth' {
  interface Session {
    user: SessionEntity['user'];
  }

  interface User extends UserEntity {}
}
