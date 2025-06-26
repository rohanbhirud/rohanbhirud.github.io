import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub'; // This is a Material UI icon, no path change needed
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
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            {project.liveDemoLink && (
              <Button size="small" component="a" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Button>
            )}
            {project.githubLink && (
              <Button size="small" component="a" href={project.githubLink} target="_blank" rel="noopener noreferrer">
 <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />
                GitHub
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </section>
  );
}

export default Projects;