import React, { useState } from "react";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
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

const skills = [
  { name: "React.js", img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
  { name: "JavaScript", img: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
  { name: "HTML5", img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
  { name: "CSS", img: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" },
  { name: "GitHub", img: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000" },
  { name: "Express.js", img: "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000" },
  { name: "mySQL", img: "https://img.icons8.com/?size=100&id=6X0_MfxrYEea&format=png&color=000000" },
  { name: "Selenium", img: "https://img.icons8.com/?size=100&id=45348&format=png&color=000000" },
  { name: "Python", img: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
  { name: "RESTful API's", img: "https://img.icons8.com/?size=100&id=55497&format=png&color=000000" },
];

function Projects() {
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
      <h2 className="projectHeader slideDown delay-1">My Projects</h2>
      <ThemeProvider theme={theme}>
        <Box className="projectsContainer">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`projectCard slideDown delay-${(index % 5) + 1}`}
              onClick={() => handleOpen(project)}
            >
              <img src={project.image} alt={project.title} />
              <div className="projectCardContent">
                <h6>{project.title}</h6>
                <p>{project.description}</p>
              </div>
            </div>
          ))}

          {selectedProject && (
            <Dialog open={openModal} onClose={handleClose}>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogContent>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", marginBottom: "1rem" }}
                />
                <Typography>{selectedProject.description}</Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  component="a"
                  href={selectedProject.github}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
          )}
        </Box>
      </ThemeProvider>

      <h2 className="projectHeader slideDown delay-2">Skills</h2>
      <div className="skillsContainer">
        {skills.map((skill, idx) => (
          <div key={idx} className={`skillBubble slideDown delay-${(idx % 5) + 1}`}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
