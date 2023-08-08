import React, { FC } from "react";
import { Card, CardContent, TextField, Button } from '@mui/material';

const ExchangePoolForm: FC = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h2>Exchange Pool</h2>
        <TextField label="From" variant="outlined" />
        <TextField label="To" variant="outlined" />
        <Button variant="contained" color="primary">Swap</Button>
      </CardContent>
    </Card>
  );
};

export default ExchangePoolForm;
