import React from 'react'
import { data, color } from "../data/data";
import { makeStyles } from "@mui/styles";

const ProjectStyle = makeStyles((theme) => ({
  container: {
    padding: "2rem 0",
    display: "grid",
    gridGap: "2rem",
    gridRowGap: "7rem",
    gridTemplateColumns: "repeat(2,1fr)",
    ["@media (min-width:480px)"]: {
      gridTemplateColumns: "repeat(2,1fr)",
    },
    ["@media (min-width:720px)"]: {
      gridTemplateColumns: "repeat(3,1fr)",
    },
    ["@media (min-width:960px)"]: {
      gridTemplateColumns: "repeat(4,1fr)",
    },
  },
  box: {
    position: "relative",
    aspectRatio: "250/150",
    color: `${color.thirdColor}`,

    "&:hover": {
      background: `${color.primaryColor}`,
      "& $child1": {
        transform: "translate(0, -50%)",
        background: `${color.primaryColor}`,
        transition: "all 300ms",
      },
      "& $child2": {
        transform: "translate(0, 50%)",
        transition: "all 300ms",
      },
    },
  },
  child1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    cursor: "pointer",
    background: `${color.fourthColor}`,
    zIndex: "2",
    padding: "0.5rem",
    fontSize: "5vw",
    ["@media (min-width:480px)"]: {
        fontSize: "5vw",
    },
    ["@media (min-width:720px)"]: {
        fontSize: "3vw",
    },

  },
  child2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    cursor: "pointer",
    background: `${color.fourthColor}`,
    zIndex: "1",
    textAlign: "left",
    fontSize: "2.5vw",
    ["@media (min-width:480px)"]: {
        fontSize: "2.5vw",
    },
    ["@media (min-width:720px)"]: {
        fontSize: "1.5vw",
    },
    ["@media (min-width:960px)"]: {
        fontSize: "1vw",
    },
  },
}));

function Projects() {
    const projectStyle = ProjectStyle()
  return (
    <div className={projectStyle.container}>
        {data.projects.map((project,key) => {
            return (
              <div className={projectStyle.box} key={key}>
                <div className={projectStyle.child1}>{project.name}</div>
                <div className={projectStyle.child2}>
                  <div>{project.description}</div>
                    <a style={{ color: `${color.primaryColor}`, textDecoration: "none" }} href={project.link} target="_blank">
                      READ MORE
                    </a>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default Projects