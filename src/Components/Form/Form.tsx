import React from 'react';
import { withFormik, FormikProps } from 'formik';
import { Grid, TextField, Button } from '@material-ui/core';
import { IForm, initialValues } from './IForm';
import Table from '../Table/Table';
import DataValues from '../Table/ITable';
import Validation from './Form.validation';

const MyForm = (props: FormikProps<IForm>): React.ReactElement<HTMLElement> => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleReset,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              id="name"
              name="name"
              label="Name"
              title="Name"
              margin="dense"
              variant="outlined"
              type="text"
              value={values.name}
              error={touched.name as any && errors.name as any}
              helperText={(touched.name && errors.name) && errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              id="valueToFizz"
              name="valueToFizz"
              label="Value To Fizz"
              title="Value To Fizz"
              margin="dense"
              variant="outlined"
              type="number"
              value={values.valueToFizz}
              error={touched.valueToFizz as any && errors.valueToFizz as any}
              helperText={(touched.valueToFizz && errors.valueToFizz) && errors.valueToFizz}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              fullWidth
            >
              FizzBuzz!
            </Button>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Button
              variant="contained"
              color="inherit"
              onClick={handleReset}
              fullWidth
            >
              Erase
            </Button>
          </Grid>
        </Grid>
      </form>

      <Table />
    </>
  );
};

export default withFormik({
  displayName: 'MyForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => (initialValues),
  validationSchema: Validation,
  handleSubmit: (values: IForm, { resetForm, setSubmitting }) => {
    DataValues.push({
      id: DataValues.length,
      name: values.name,
      valueToFizz: values.valueToFizz,
    });
    setSubmitting(false);
    resetForm();
  },
})(MyForm);
