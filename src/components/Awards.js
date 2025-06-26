import React from 'react';
import { Typography, Box, Card, CardContent, Paper } from '@mui/material';

function Awards({ awards }) {
  return (
    <Box id="awards" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom color="primary">Awards and Certificates</Typography>
        {awards.map((award, index) => (
          <Box key={index} sx={{ marginBottom: 2, '&:last-child': { marginBottom: 0 } }}>
            <Card
              variant="outlined"
              sx={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent>
                <Typography variant="body1">{award}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}

export default Awards;