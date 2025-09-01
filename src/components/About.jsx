import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LaptopIcon from "@mui/icons-material/Laptop";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

function About() {
  return (
    <div className="aboutContainer">
      <h2 className="aboutHeader">Hi, my name is Arpeet!</h2>
      <h4 className="aboutParagraph">I’m a software developer passionate about building
        full-stack applications and learning emerging technologies. I enjoy
        problem-solving and continuously improving my skills to tackle
        challenging projects.</h4>

      <div className="imageContainer">
        <a href="/portfolio/resume.pdf" download="Arpeet-Naik-Resume.pdf">
          <button className="resumeButton">Download Resume</button>
        </a>

        <img className="aboutPicture" src="img/aboutpic.JPEG" description="aboutPicture" alt="aboutPicture"></img>
      </div>

      <h3>My Timeline</h3>

      <ThemeProvider theme={theme}>
        <Timeline position="alternate">
          {/* Education */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
              August 2019 - December 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Clemson University</Typography>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>Bachelor of Computer Science</Typography>
              <Typography>
                Full-stack programming, Algorithms & Data Structures, Software Engineering, Web Development, Database Management.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Internship */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
              May 2023 - August 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Information Technology Intern</Typography>
              <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>BlueCross BlueShield of South Carolina</Typography>
              <Typography>
                Built Java scripts/XPATH locators and automated web/mobile testing using Selenium.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Training */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
              May 2024 - October 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Entry-Level Training Program</Typography>
              <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>BlueCross BlueShield of South Carolina</Typography>
              <Typography>
                Hands-on training for enterprise application development using industry-standard tools and Agile.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Developer */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
              October 2024 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="warning">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Developer</Typography>
              <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>BlueCross BlueShield of South Carolina</Typography>
              <Typography>
                Designing and developing applications to streamline testing workflows and improve efficiency.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </ThemeProvider>
    </div>
  );
}

export default About;