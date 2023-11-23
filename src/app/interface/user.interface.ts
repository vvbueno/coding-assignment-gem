export interface User {
  username: string;
  clientId: string;
  email: string;
  familyName: string;
  firstName: string;
  profilePicture: string | null;
  roles: string[];
  password?: string
}
