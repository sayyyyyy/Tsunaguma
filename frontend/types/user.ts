// src/types/user.ts

export type User = {
    allow_password_change: boolean;
    email: string;
    id: string;
    image: string | null;
    nickname: string;
    provider: string;
    uid: string;
  }