import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
function Projects({ projects }) {
  return (
    <section id="projects">
      <Typography variant="h4" color="primary" gutterBottom>
        Project Work
      </Typography>
      {projects.map((project, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: '20px',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }
          }}
          elevation={3} // Initial elevation
        >
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
              {project.title}
            </Typography>
            <List dense sx={{ listStyleType: 'disc', pl: 3 }}>
                  {project.description.map((d, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', listStyleType: 'disc' }}>
                      <ListItemText primary={d} />
                    </ListItem>
                  ))}
                </List>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

export default Projects;