import {useState} from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const handleChange = (value: string, name: keyof T) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const resetFormValues = (form: T) => setState(form);
  const reset = () => setState(initialState);
  return {
    ...state,
    handleChange,
    resetFormValues,
    reset,
  };
};

export default useForm;
