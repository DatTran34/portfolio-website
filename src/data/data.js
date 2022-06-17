import html from "../data/images/logo_skills/html.png"
import css from "../data/images/logo_skills/css.png"
import javascript from "../data/images/logo_skills/javascript.png"
import nodejs from "../data/images/logo_skills/nodejs.png"
import react from "../data/images/logo_skills/react.png"
import docker from "../data/images/logo_skills/docker.png"
import firebase from "../data/images/logo_skills/firebase.png"
import github_media from "../data/images/logo_media/github.png"
import linkedin from "../data/images/logo_media/linkedin.png"
import java from "../data/images/logo_skills/java.png"
import mongodb from "../data/images/logo_skills/mongodb.png"
import nextjs from "../data/images/logo_skills/nextjs.png"
import typescript from "../data/images/logo_skills/typescript.png"

var url = "/data/images/logo_skills"
const a = () => {
  var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
  console.log(dir)
}

const data = {
  name: "DAT TRAN",
  description:
    "Graphic designer with vast expertise in both print and digital media who is self-assured, enthusiastic, and creative. Individual with two years of graphic design experience working on a variety of projects and a strong sense of deadlines. Over the years, I've acquired a strong desire to combine my understanding of traditional art with current technology. I'm always on the lookout for new ideas and feel that great design is founded on thorough research.",
  job_position: "Frontend - Backend Development",
  skills: [
    { name: "HTML", link: html },
    { name: "CSS", link: css },
    { name: "JAVASCRIPT", link: javascript },
    { name: "NODEJS", link: nodejs },
    { name: "REACTJS", link: react },
    { name: "DOCKER", link: docker },
    { name: "FIREBASE", link: firebase },
    { name: "JAVA", link: java },
    { name: "MONGODB", link: mongodb },
    { name: "NEXTJS", link: nextjs },
    { name: "TYPESCRIPT", link: typescript },
    { name: "FIREBASE", link: firebase },
    { name: "NODEJS", link: nodejs },
    { name: "REACTJS", link: react },
    { name: "DOCKER", link: docker },
    // "CSS",
    // "React.Js",
    // "Rest API",
    // "MySQL",
    // "Java",
    // "Python",
    // "Docker",
    // "Firebase",
    // "Github",
  ],
  social_media: [
      {img: github_media,link:"https://github.com/DatTran34?tab=repositories",name: "Github"},
      {img: linkedin, link: "https://www.linkedin.com/in/dat-tran-388454156/", name: "Linkedin"}
  ],
  address: "120 First North Street Syracuse NY 13208",
  email: "tridat1vn@gmail.com",
  phone: "315-746-1287",
  linkedin: "linkedin",
  github: "github.com",
  projects: [
    {
      name: "PEERSET",
      description:
        "PeerSet is a web application that was designed to help college professors facilitate Calibrated Peer Review (CPR) in their classes. CPR is a method of peer review in which students are provided with grading instructions and examples of low, medium and high quality solutions to the assignments posed by their professors.",
      skills: ["HTML", "CSS", "React.Js", "Restful API", "MySQL", "Java","Open Liberty", "Maven", "Microservices", "JSON Web TokensE"],
      link : "https://github.com/vanessamaike/CSC480-21F"
    
    },
    {
      name: "WATCHAILER",
      description:
        "Watchailer is a web application that collect most movies in the world and rank up by rating and feedback of user.",
      skills: ["HTML", "CSS", "React.Js", "Restful API", "MySQL"], 
      link: "https://watchailer.netlify.app"
    },
    {
      name: "DOTTY TAP",
      description:
        "This is a small project which we made through Unity Engine and we completed about more than 2 months before releasing on Google Play.",
      skills: ["HTML", "CSS", "React.Js", "Restful API", "MySQL"],
      link : "https://play.google.com/store/apps/details?id=com.TwinDProduction.DottyTap"
    },
    {
      name: "BLACKJACK & BINGO",
      description:
        "Vietnamese BlackJack and Bingo Version With Friends. This project is built by Unity Engine and Photon Network. People can download this project on CH Play and enjoy it with friends.",
      skills: ["HTML", "CSS", "React.Js", "Restful API", "MySQL"],
      link: "https://play.google.com/store/apps/details?id=com.TwinD.GameTet"
    },
    {
      name: "Gaming Gear",
      description:
        "Gaming Gear is a processing project that is built for customers to be able to meet the best gaming keyboards, mice, headsets, and other gears at good prices.",
      skills: ["HTML", "CSS", "React.Js", "Restful API", "MySQL"],
      link: "https://play.google.com/store/apps/details?id=com.TwinD.GameTet"
    }
  ],
  introduce_tilte: "Hi! My name is Dat Tran, I am a Web Developer.",
  introduce:
    "Graphic designer with vast expertise in both print and digital media who is self-assured, enthusiastic, and creative. Individual with two years of graphic design experience working on a variety of projects and a strong sense of deadlines. Over the years, I've acquired a strong desire to combine my understanding of traditional art with current technology. I'm always on the lookout for new ideas and feel that great design is founded on thorough research.",
  education: [
    {
      name: "Edmonds Community College",
      year: "2017-2020",
      GPA: "3.72",
      Degree: "Associate of Art",
      Major: "Computer Science",
    },
    {
      name: "SUNY Oswego",
      year: "2020-2022",
      GPA: "3.72",
      Degree: "Bachelor of Science",
      Major: "Computer Science",
    }
  ],
};

const color = {
  primaryColor: "#F09667",
  secondaryColor: "#2B2A3C",
  thirdColor: "#F2F2F2",
  fourthColor: "#413F5E",
  fifthColor: "#7D7D7D",
};

//, "CSS", "React.Js", "Restful API", "MySQL", "Java", "Python"

export { data, color, a};
