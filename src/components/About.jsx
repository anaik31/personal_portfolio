import { Chrono } from "react-chrono";

const items = [
  { title: "August 2019 - December 2023", cardTitle: "Graduated from Clemson University", cardDetailedText: "Took classes like Algorithms & Data Structures, Software Engineering, Web Development, Database Management, etc. Really improved my full-stack programming skills and taught me everything I needed to succeed in entry-level roles " },
  { title: "May 2023 - August 2023", cardTitle: "Interned at BCBSSC my senior year.", cardDetailedText: "Built Java scripts/XPATH locators and ran them to automate web/mobile testing using BCBSSC-based Selenium Engine." },
  { title: "May 2024 - October 2024", cardTitle: "Entry-Level Training Program (ELTP)", cardDetailedText: "Completed an intensive, hands-on training program focused on enterprise application development using industry-standard tools and Agile methodologies." },
  { title: "October 2024 - Present", cardTitle: "Developer", cardDetailedText: "Designing and developing internal applications to streamline and enhance organizational testing workflows." }
];

function About() {
  return (
    <div className="aboutContainer">
    <h2 class = "aboutHeader">Hi, my name is Arpeet!</h2>
    
    <img className = "aboutPicture" src = "../aboutpic.JPG" description = "aboutPicture" alt = "aboutPicture"></img>

      <Chrono items={items} cardHeight={150}/>
    </div>
  );
}

export default About;