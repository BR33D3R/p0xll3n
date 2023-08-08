import React, { FC } from "react";
import { Card, CardContent, TextField, Button } from '@mui/material';

const BuySellForm: FC = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h2>Buy / Sell</h2>
        <TextField label="Amount" variant="outlined" />
        <TextField label="Price" variant="outlined" />
        <Button variant="contained" color="primary">Submit</Button>
      </CardContent>
    </Card>
  );
};

export default BuySellForm;
