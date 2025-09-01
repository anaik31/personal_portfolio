import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

const projects = [
  {
    title: "Expense Tracker",
    description: "Tracks income and expenses using React, Node.js, MySQL.",
    image: "img/expensetracker.png",
    github: "https://github.com/anaik31/expense-tracker-react",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and MUI.",
    image: "img/personalportfolio.jpg",
    github: "https://github.com/arpeetnaik/personal-portfolio",
  },
  {
    title: "Rock, Paper, Scissors",
    description: "A simple rock, paper, scissors game with JavaScript(JS) functionality.",
    image: "img/rockpaperscissors.png",
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
      <h2 className="projectHeader">My Projects</h2>
      <ThemeProvider theme={theme}>
        <Box className="projectsContainer">
          {projects.map((project, index) => (
            <div key={index} className="projectCard" onClick={() => handleOpen(project)}>
              <img src={project.image} alt={project.title} />
              <div className="projectCardContent">
                <h6>{project.title}</h6>
                <p>{project.description}</p>
              </div>
            </div>
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

      </ThemeProvider>

      <h2 className="projectHeader">Skills</h2>
      <div className="skillsContainer">
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="React" />
          <p>React.js</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML5" />
          <p>HTML5</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="GitHub" />
          <p>GitHub</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000" alt="Express" />
          <p>Express.js</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=6X0_MfxrYEea&format=png&color=000000" alt="MySQL" />
          <p>mySQL</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=45348&format=png&color=000000" alt="Selenium" />
          <p>Selenium</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="Python" />
          <p>Python</p>
        </div>
        <div className="skillBubble">
          <img src="https://img.icons8.com/?size=100&id=55497&format=png&color=000000" alt="RESTful API's" />
          <p>RESTful API's</p>
        </div>
      </div>

    </div>
  );
}

export default Projects;
