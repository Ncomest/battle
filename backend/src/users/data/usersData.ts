type User = {
  id: number;
  login: string;
  password: string;
  online: boolean;
};

export const usersData: User[] = [
  { id: 1, login: "Ncom", password: "123", online: false },
  { id: 2, login: "Stas", password: "1234", online: false },
];
