import {React,useRef } from "react";
import { data, color, a } from "../data/data";
import { makeStyles } from "@mui/styles";
import Navbar from "../components/Navbar";
import HeroComponent from "../components/HeroComponent";
import { display } from "@mui/system";
import Projects from "../components/Projects";
import AboutMeComponent from "../components/AboutMeComponent";
import ContactMeComponent from "../components/ContactMeComponent";

const HomePageStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: "auto",
    padding: `1rem calc(3.5rem + 8vw)`,
    paddingRight: "8vw",
    ["@media (max-width:720px)"]: {
      padding: `1rem calc(3.5rem + 5vw)`,
      paddingRight: "5vw",
    },
  },
  box: {
    position: "relative",
    marginBottom: "2rem",
  },
  // =========== TITLE BOX =================
  title_box: {
    left: "0",
    textAlign: "left",
  },
  title_box_content1: {
    color: `${color.primaryColor}`,
    fontSize: "22px",
  },
  title_box_content2: {
    color: `${color.thirdColor}`,
    fontSize: "36px",
  },
  title_box_line: {
    height: "0.5rem",
    width: "3rem",
    background: `${color.primaryColor}`,
  },
  // =======================================
  media_container: {
    position: "fixed",
    left: "0",
    height: "100vh",
    width: "3.5rem",
    borderRight: `0.2rem solid ${color.primaryColor}`,
    zIndex: "11",
    padding: "0.7rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
  },
  media_box: {
    padding: "0.5rem 0",
    cursor: "pointer",
    "& img": {
      width: "100%",
    },
  },
  page_number: {
    position: "absolute",
    right: "0",
    top: "0",
    color: `${color.thirdColor}`,
    fontSize: "48px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

function HomePage() {
  const homePageStyle = HomePageStyle();

  const homeRef = useRef()
  const projectsRef = useRef()
  const aboutMeRef = useRef()
  const contactMeRef = useRef()
  return (
    <div style={{ position: "relative" }}>
      <div className={homePageStyle.media_container}>
        {data.social_media.map((media, key) => {
          return (
            <div className={homePageStyle.media_box} key={key}>
              <a href={media.link} target="_blank">
                <img src={media.img} />
              </a>
            </div>
          );
        })}
      </div>
      <Navbar homeRef={homeRef} projectsRef={projectsRef} aboutMeRef={aboutMeRef} contactMeRef={contactMeRef}></Navbar>

      <div className={homePageStyle.container}>
        <div className={homePageStyle.box}  ref={homeRef}>
          <PageNumber page_number={1}/>
          <HeroComponent></HeroComponent>
        </div>
        <div className={homePageStyle.box} ref={projectsRef}>
          <PageNumber page_number={2}/>
          <TitleBox content1={"What I do"} content2={"My Projects"} />
          <Projects />
        </div>
        <div className={homePageStyle.box} ref={aboutMeRef}>
          <PageNumber page_number={3} />
          <TitleBox content1={"Main Info"} content2={"About Me"} />
          <AboutMeComponent></AboutMeComponent>
        </div>
        <div className={homePageStyle.box} ref={contactMeRef}>
          <PageNumber page_number={4} />
          <TitleBox content1={"Get Touch"} content2={"Contact Me"} />
          <ContactMeComponent/>
        </div>
      </div>
    </div>
  );
}

function TitleBox({ content1, content2 }) {
  const homePageStyle = HomePageStyle();
  return (
    <div className={homePageStyle.title_box}>
      <div className={homePageStyle.title_box_content1}>{content1}</div>
      <div className={homePageStyle.title_box_content2}>{content2}</div>
      <div className={homePageStyle.title_box_line}></div>
    </div>
  );
}

function PageNumber({page_number}) {
  const homePageStyle = HomePageStyle();
  return (
    <div className={homePageStyle.page_number}>
      <div>{page_number}</div>
      <div
        style={{
          background: `${color.primaryColor}`,
          height: "0.5rem",
          width: "2vw",
        }}
      ></div>
    </div>
  );
}

export default HomePage;
