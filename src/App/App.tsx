import React from 'react';
import AppBar from '../Components/AppBar/AppBar';
import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

export default (): React.ReactElement<HTMLElement> => {
  return (
    <>
      <AppBar />
      <Header />
      <Form />
    </>
  );
}