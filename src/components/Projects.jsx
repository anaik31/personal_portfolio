import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Expense Tracker",
    description: "Tracks income and expenses using React, Node.js, MySQL.",
    image: "../expensetracker.png",
    github: "https://github.com/anaik31/expense-tracker-react",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and MUI.",
    image: "../personalportfolio.jpg",
    github: "https://github.com/arpeetnaik/personal-portfolio",
  },
  {
    title: "Rock, Paper, Scissors",
    description: "A simple rock, paper, scissors game with JavaScript(JS) functionality.",
    image: "../rockpaperscissors.png",
    github: "https://github.com/anaik31/rock-paper-scissors",
  },
];

function Projects() {
  // Hooks must be at the top of the function
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (

    <div>
      <h2 className = "projectHeader">My Projects</h2>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center", p: 3 }}>
      {projects.map((project, index) => (
        <Card key={index} sx={{ width: 300, cursor: "pointer" }} onClick={() => handleOpen(project)}>
          <CardMedia component="img" height="140" image={project.image} alt={project.title} />
          <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary">{project.description}</Typography>
          </CardContent>
        </Card>
      ))}

      {/* Modal */}
      {selectedProject && (
        <Dialog open={openModal} onClose={handleClose}>
          <DialogTitle>{selectedProject.title}</DialogTitle>
          <DialogContent>
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", marginBottom: "1rem" }} />
            <Typography>{selectedProject.description}</Typography>
          </DialogContent>
          <DialogActions>
            <Button component="a" href={selectedProject.github} target="_blank" startIcon={<GitHubIcon />}>
              GitHub
            </Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
    </div>
  );
}

export default Projects;
