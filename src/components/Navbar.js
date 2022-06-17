import {React,useState,useEffect} from "react";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import { color } from "../data/data";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "./useMediaQuery";
const NavbarStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    margin: "1rem auto",
    flexDirection: "row",
    justifyContent: "center",
    padding: "0.5rem 2rem",
    borderBottom: `0.2rem solid ${color.primaryColor}`,
    
  },
  box: {
    position: "relative",
    display: "grid",
    gridGap: "1vw",
    height: "3.5vw",
    width: "50vw",
    padding: "0.5rem 2vw",
    background: "pink",
    gridTemplateColumns: "repeat(5, 1fr)",
    borderBottom: `0.2rem solid ${color.primaryColor}`,
    color: `${color.thirdColor}`,
    "& div": {
      cursor: "pointer",
    },
  },
  button: {
    height: "1.8rem",
    fontFamily: "Share",
    fontSize: "22px",
    position: "relative",
    margin: "0 1rem",
    color: `${color.thirdColor}`,
    cursor: "pointer",
    "&:hover": {
      borderBottom: `0.2rem solid ${color.primaryColor}`,
    },
  },
  underline: {
    height: "0.2rem",
    width: "1rem",
    opacity: "100",
    background: `${color.primaryColor}`,
  },
  // ================ NAVBAR TOGGLE ===============
  hambuger: {
    position: "fixed",
    left: "0.5rem",
    top: "1rem",
    width: "2rem",
    cursor: "pointer",
    zIndex: "11",
    display: "grid",
    gridGap: "0.3rem",
    "& div": {
      background: `${color.primaryColor}`,
      height: "0.4rem"
    },
  },
  toggle_navbar: {
    position: "fixed",
    background: `${color.primaryColor}`,
    top: "0",
    left: "3.8rem",
    height: "100vh",
    width: "87%",
    zIndex: "10",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  toggle_navbar_element: {
    textAlign: "center",
    padding: "1rem 0",
    fontFamily: "Share",
    fontSize: "22px",
    fontWeight: "650",
    width: "20rem",
    color: `${color.secondaryColor}`,
    cursor: "pointer",
    "&:hover": {
      background: `${color.secondaryColor}`,
      color: `${color.thirdColor}`
    },
  },
}));

function Navbar({homeRef,projectsRef,aboutMeRef,contactMeRef}) {
  const navbarStyle = NavbarStyle();
  let navigate = useNavigate();
  let isPageWide = useMediaQuery("(min-width: 720px)");
  //let isPageMedium = useMediaQuery("(min-width: 540px)");
  const [toggle,setToggle] = useState(false);
  
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContactMe = () => {
    contactMeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      {isPageWide ? (
        <div
          style={{
            position: "fixed",
            background: `${color.secondaryColor}`,
            bottom: "0",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            zIndex: "10",
          }}
        >
          <div style={{ width: "3.5rem" }}></div>
          <div className={navbarStyle.container}>
            <div className={navbarStyle.button} onClick={()=>{scrollToHome()}}>Home</div>
            <div className={navbarStyle.button} onClick={()=>{scrollToProjects()}}>Experience</div>
            <div className={navbarStyle.button}>Resume</div>
            <div className={navbarStyle.button} onClick={()=>{scrollToContactMe()}}>Contact Me</div>
            <div className={navbarStyle.button} onClick={()=>{scrollToAboutMe()}}>About Me</div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className={navbarStyle.hambuger}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          {toggle === true && (
            <div className={navbarStyle.toggle_navbar}>
              <div style={{textAlign:"center"}}>
                <div className={navbarStyle.toggle_navbar_element}>Home</div>
                <div className={navbarStyle.toggle_navbar_element}>
                  Experience
                </div>
                <div className={navbarStyle.toggle_navbar_element}>Resume</div>
                <div className={navbarStyle.toggle_navbar_element}>
                  Contact Me
                </div>
                <div className={navbarStyle.toggle_navbar_element}>
                  About Me
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
{
  /* <div
onClick={() => {
  navigate("/projects");
}}
>
Projects
</div> */
}
