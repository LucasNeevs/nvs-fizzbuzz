export interface IForm {
  id: number;
  name: string;
  valueToFizz: number;
}

export const initialValues: IForm = {
  id: 0,
  name: '',
  valueToFizz: 0,
}