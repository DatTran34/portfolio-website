import React from "react";
import { data, color } from "../data/data";
import { makeStyles } from "@mui/styles";

const HeroStyle = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridGap: "2rem",
    gridTemplateColumns: "1fr 1fr",
    minHeight: "100vh",
  },
  left: {
    //background: "pink",
    textAlign: "left",
  },
  right: {
    //background: "pink",
  },
  hello: {
    color: `${color.primaryColor}`,
    fontSize: "96px",
    marginTop: "5rem",
  },
  name: {
    color: `${color.thirdColor}`,
    fontSize: "96px",

  },
  job_position: {
    color: `${color.primaryColor}`,
    fontFamily: "Bad Script",
    fontSize: "36px",
    marginTop: "2rem",
  },
  contact_me: {
    margin: "2rem 0",
    display: "inline-block",
    padding: "0.5rem 1rem",
    color: `${color.thirdColor}`,
    fontSize: "22px",
    border: `0.2rem solid ${color.primaryColor}`,
    cursor: "pointer",
    "&:hover": {
      //color: `${color.primaryColor}`,
      background: `${color.primaryColor}`,
    },
  },
  //============ Skill CSS ==============
  skill_box: {
    maxWidth: "28rem",
    display: "grid",
    gridGap: "0.5rem",
    gridTemplateColumns: "repeat(5,1fr)",
    paddingTop: "2rem"
  },
  skill_element: {
    textAlign: "left",
    fontSize: "18px",
  },
  skill_content: {
    display: "inline-block",
    fontSize: "18px",
    color: `${color.thirdColor}`,
    borderBottom: `0.2rem solid ${color.primaryColor}`,
    "&:hover": {
      color: `${color.primaryColor}`,
      borderBottom: `0.2rem solid ${color.thirdColor}`,
    },
  },
}));

function SkillComponent() {
  const heroStyle = HeroStyle();
  return <div className={heroStyle.container}></div>;
}

function HeroComponent() {
  const heroStyle = HeroStyle();
  return (
    <div className={heroStyle.container}>
      <div className={heroStyle.left}>
        <div className={heroStyle.hello}>Hello !</div>
        <div className={heroStyle.name}>I'm {data.name}</div>
        <div className={heroStyle.job_position}>{data.job_position}</div>
        <div className={heroStyle.skill_box}>
          {data.skills.map((skill,key) => {
            return (
              <div className={heroStyle.skill_element} key={key}>
                <div className={heroStyle.skill_content}>{skill.name}</div>
              </div>
            );
          })}
        </div>
        <div className={heroStyle.contact_me}>Contact Me</div>
      </div>
      <div className={heroStyle.right}></div>
    </div>
  );
}

export default HeroComponent;
