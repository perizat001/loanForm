import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { FormDataType } from './utils/consts';

const initialData: FormDataType = {
  firstName: '',
  surname: '',
  birth: '',
  phoneNumber: '',
  email: '',
  country: '',
  city: '',
  address: '',
  postIndex: 0,
  monthlyIncome: 0,
  loanSum: 0,
  loanTerm: 0,
};

function App() {
  const [formData, setFormData] = useState<FormDataType>(() => {
    const saved = localStorage.getItem('formData');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <Routes>
      <Route path="/step1" element={<Step1 formData={formData} setFormData={setFormData} />} />
      <Route path="/step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
      <Route path="/step3" element={<Step3 formData={formData} setFormData={setFormData} />} />
    </Routes>
  );
}

export default App;
