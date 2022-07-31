export interface UserCardProps {
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  phone: number | undefined;
  isLoading: boolean;
  error: string;
}
