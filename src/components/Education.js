import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

function Education({ educationEntries }) {
  return (
    <section id="education" style={{ marginBottom: '20px' }}>
      <Typography variant="h4" gutterBottom color="primary"> {/* Changed color here */}
        Education
      </Typography>
      {educationEntries.map((entry, index) => (
        <Card 
          key={index} 
          sx={{ 
            marginBottom: '15px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
          }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {entry.institution}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>{entry.degree}</strong> | {entry.dates}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginBottom: '10px' }}>
              Grade/CGPA: {entry.grade || entry.cgpa}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

export default Education;