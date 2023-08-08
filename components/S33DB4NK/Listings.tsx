import React, { FC } from "react";
import { Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const Listings: FC = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h2>Listings</h2>
        <List>
          <ListItem>
            <ListItemText primary="Listing 1" secondary="Details 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Listing 2" secondary="Details 2" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Listings;