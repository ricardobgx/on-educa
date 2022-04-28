interface ISignFormFieldProps {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
}

interface ISignFormProps {
  signFormType: number;
  switchSignForm: (signFormType?: number) => void;
}
