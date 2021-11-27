export interface ISignProps {
  loadAnimation(): void;
  minHeight: string;
}

export interface ISignFormProps {
  loadAnimation(): void;
  isStudent(): boolean;
  changeUserType(): void;
  userType: string;
}
