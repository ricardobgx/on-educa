export interface ISignProps {
  loadAnimation(): void;
  minHeight: number;
}

export interface ISignFormProps {
  loadAnimation(): void;
  isStudent(): boolean;
  changeUserType(): void;
  userType: string;
}