import React, { useState } from 'react';
import { Grid, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core';
import { DataValues } from '../Table/ITable';
import { IForm } from '../Form/IForm';
import FizzBuzz from '../../Controllers/FizzBuzz';

export default (): React.ReactElement<HTMLElement> => {
  const [state] = useState(DataValues);

  return (
    <>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          md={12}
          xs={12}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                state.map((s: IForm): React.ReactElement<HTMLElement> => (
                  <TableRow key={s.id}>
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.valueToFizz}</TableCell>
                    <TableCell>
                      {
                        FizzBuzz(s.valueToFizz)
                      }
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
}