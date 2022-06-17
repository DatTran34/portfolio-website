import React from "react";
import { data, color } from "../data/data";
import { makeStyles } from "@mui/styles";
import avatar from "../data/images/avatar.png";
import TabList from "./Tabs/TabList";
import Resume from "../data/resume.pdf";
const AboutMeStyle = makeStyles((theme) => ({
  container: {
    padding: "2rem 0",
  },
  introduce_container: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    ["@media (min-width:640px)"]: {
      gridTemplateColumns: "1fr 3fr",
    },
  },
  avatar: {
    border: `0.2rem solid ${color.primaryColor}`,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  introduce_content_box: {
    color: `${color.thirdColor}`,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    textAlign: "left",
    "& $introduce_title": {
      fontSize: "3.5vw",
    },
    "& $introduce_content": {
      transform: "translate(0, 50%)",
      fontSize: "2.5vw",
    },
    ["@media (min-width:640px)"]: {
      padding: "0rem 1.5rem",
      "& $introduce_title": {
        fontSize: "2vw",
      },
      "& $introduce_content": {
        fontSize: "1.5vw",
      },
    },
    ["@media (min-width:1024px)"]: {
      "& $introduce_title": {
        fontSize: "2vw",
      },
      "& $introduce_content": {
        fontSize: "1vw",
      },
    },
  },
  introduce_title: {
    fontFamily: "Bad Script",
  },
  introduce_content: {},
  download_resume: {
    marginTop: "1rem",
    border: `0.2rem solid ${color.primaryColor}`,
    padding: "0.5rem 1.5rem",
    display: "inline-block",
    cursor: "pointer",
    "&:hover": {
      //color: `${color.primaryColor}`,
      background: `${color.primaryColor}`,
    },
    "& a": {
      color: "white",
      textDecoration: "none"
    },
  },
}));

function AboutMeComponent() {
  const aboutMeStyle = AboutMeStyle();
  return (
    <div className={aboutMeStyle.container}>
      <div className={aboutMeStyle.introduce_container}>
        <div className={aboutMeStyle.avatar}>
          <img src={avatar}></img>
        </div>
        <div className={aboutMeStyle.introduce_content_box}>
          <div>
            <span className={aboutMeStyle.introduce_title}>
              {data.introduce_tilte}
            </span>
            <span className={aboutMeStyle.introduce_content}>
              {data.introduce}
            </span>
          </div>
          <div>
            <div className={aboutMeStyle.download_resume}>
              <a href={Resume} target="_blank">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TabList></TabList>
      </div>
    </div>
  );
}

export default AboutMeComponent;
