import React from 'react';
import { Box, Typography, Card, CardContent, Paper, Grid } from '@mui/material'; // No other local imports needed

const Skills = ({ skills, id }) => {
  return (
    <Box id="skills" sx={{ my: 4, mt: { xs: 15, sm: 10 } }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" component="h2" gutterBottom color="primary">
 Skills
        </Typography>
        {Object.keys(skills).map((category) => (
          <Card key={category} sx={{ mb: 3, '&:last-child': { mb: 0 } }}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                {category}
              </Typography>
              <Grid container spacing={1}>
                {skills[category].map((skill) => (
                  <Grid item key={skill}>
 <Paper elevation={1} sx={{ padding: '5px 10px', borderRadius: '20px', textAlign: 'center', backgroundColor: '#e0e0e0', '&:hover': { elevation: 3, boxShadow: 6, cursor: 'default' } }}>
 <Typography variant="body2">{skill}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Paper>
    </Box>
  );
};
export default Skills;