export type FormDataType = {
  firstName: string;
  surname: string;
  birth: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  address: string;
  postIndex: number;
  monthlyIncome: number;
  loanSum: number;
  loanTerm: number;
};

export type FormProps = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};
