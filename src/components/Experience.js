import React from 'react'; // This is already a relative import from 'react'
import { Typography, Card, CardContent, List, ListItem, ListItemText, Box } from '@mui/material';

function Experience({ experiences }) {
  return (
    <Box id="experience" sx={{ mb: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom color="primary">
            Work Experience
          </Typography>
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              sx={{ 
                mb: 2, 
                boxShadow: 1, 
                transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.01)', boxShadow: 3 } 
              }}> {/* Nested Card */}
              <CardContent>
                <Typography variant="h6" component="h3">
                  {exp.company} - {exp.role}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {exp.dates}
                </Typography>
                <List dense sx={{ listStyleType: 'disc', pl: 3 }}>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', listStyleType: 'disc' }}>
                      <ListItemText primary={responsibility} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Experience;