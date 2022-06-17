import { React, useState, useEffect } from "react";
import { data, color } from "../../data/data";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import a from "../../data/images/logo_skills/html.png";

const TabListStyle = makeStyles((theme) => ({
  container: {
    margin: "2rem 0",
    color: `${color.fifthColor}`,
  },
  tab_list_button_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "3rem 0",
  },
  tab_list_button: {
    padding: "0.2rem 0.5rem ",
    fontSize: "22px",
    cursor: "pointer",
    "&:hover": {
      color: `${color.thirdColor}`,
    },
  },
  tab_list_button_active: {
    color: `${color.thirdColor}`,
    borderBottom: `0.2rem solid ${color.primaryColor}`,
  },
  tab_content_box: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  tab_content_box_passive: {
    display: "none",
  },
  // ============= SKILL PANEL ==============
  skills_panel: {
    display: "grid",
    gridGap: "4vw",
    maxWidth: "50rem",
    gridTemplateColumns: "repeat(4,1fr)",
    ["@media (min-width:540px)"]: {
      gridTemplateColumns: "repeat(5,1fr)",
    },
  },
  skill_box: {
    "&:hover": {
      color: `${color.thirdColor}`,
    },
    "& img": {
      width: "100%",
    },
  },
  // ============= EDUCATION PANEL ==============
  /* The actual timeline (the vertical ruler) */
  education_panel: {
    // background: "green",
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
    /* The actual timeline (the vertical ruler) */
    "&:after": {
      position: "absolute",
      content: '""',
      top: 0,
      bottom: 0,
      left: "50%",
      background: `${color.primaryColor}`,
      width: "0.2rem",
      marginLeft: "-3px",
      ["@media (max-width:720px)"]: {
        left: "0",
      },
    },
  },
  /* Container around content */
  education_box: {
    padding: "10px 40px",
    position: "relative",
    backgroundColor: "inherit",
    width: "50%",
    /* The circles on the timeline */
    "&:after": {
      position: "absolute",
      content: '""',
      top: "15px",
      right: "-15px",
      width: "30px",
      height: "30px",
      background: `${color.thirdColor}`,
      borderRadius: "50%",
      zIndex: "1",
      ["@media (max-width:720px)"]: {
        left: "-15px"
      },
    },
    ["@media (max-width:720px)"]: {
      width: "100%",
      paddingLeft: "3rem",
    },
  },
  /* Place the container to the left */
  education_box_left: {
    left: "0",
    // ["@media (max-width:720px)"]: {
    //   left: "0",
    // },
  },
  /* Place the container to the right */
  education_box_right: {
    left: "50%",
    /* Fix the circle for containers on the right side */
    "&:after": {
      left: "-16px",
      
    },
    ["@media (max-width:720px)"]: {
      left: "0",
    },
  },
  /* The actual content */
  education_box_content: {
    padding: "20px 30px",
    minWidth: "20rem",
    backgroundColor: `${color.secondaryColor}`,
    border: `0.1rem solid ${color.primaryColor}`,
    position: "relative",
    textAlign: "left",
    "&:hover": {
      color: `${color.thirdColor}`,
    },
  },
  education_box_time: {
    color: `${color.thirdColor}`,
    background: `${color.primaryColor}`,
    padding: "0.3rem",
    fontWeight: "600",
  },
}));
function TabList() {
  const tabListStyle = TabListStyle();
  const [currentTab, setCurrentTab] = useState(1);

  console.log(currentTab);

  return (
    <div className={tabListStyle.container}>
      {/* ============= TAB LIST BUTTONS ============== */}
      <div className={tabListStyle.tab_list_button_container}>
        <Tab value={1} currentTab={currentTab} setCurrentTab={setCurrentTab}>
          <div className={tabListStyle.tab_list_button}>Skills</div>
        </Tab>
        {/* <Tab value={2} currentTab={currentTab} setCurrentTab={setCurrentTab}>
          <div className={tabListStyle.tab_list_button}>Experience</div>
        </Tab> */}
        <Tab value={3} currentTab={currentTab} setCurrentTab={setCurrentTab}>
          <div className={tabListStyle.tab_list_button}>Education</div>
        </Tab>
      </div>
      {/* ============= TAB LIST CONTENT ============== */}
      <div>
        {/* ============= SKILLS ============== */}
        <TabPanel value={currentTab} index={1}>
          <SkillsPanel />
        </TabPanel>
        {/* ============= EXPERIENCE ============== */}
        {/* <TabPanel value={currentTab} index={2}>
          <div
            style={{ background: "yellow" }}
            className={tabListStyle.tab_content_box}
          >
            ss
          </div>
        </TabPanel> */}
        {/* ============= EDUCATION ============== */}
        <TabPanel value={currentTab} index={3}>
          <EducationPanel />
        </TabPanel>
      </div>
    </div>
  );
}

function Tab({ value, currentTab, setCurrentTab, children }) {
  const tabListStyle = TabListStyle();
  var tabStyle = classNames({
    [tabListStyle.tab_list_button_active]: currentTab === value,
    [tabListStyle.tab_list_button]: true,
  });
  return (
    <div
      onClick={() => {
        setCurrentTab(value);
      }}
      className={tabStyle}
    >
      {children}
    </div>
  );
}
function TabPanel({ value, index, children }) {
  const tabListStyle = TabListStyle();
  var tabPanelStyle = classNames({
    [tabListStyle.tab_content_box]: true,
    [tabListStyle.tab_content_box_passive]: value !== index,
  });
  return <div className={tabPanelStyle}>{children}</div>;
}

function SkillsPanel() {
  const tabListStyle = TabListStyle();
  return (
    <div className={`${tabListStyle.tab_content_box}`}>
      <div className={tabListStyle.skills_panel}>
        {data.skills.map((skill) => {
          return (
            <div className={tabListStyle.skill_box}>
              <img style={{ width: "100%" }} src={skill.link}></img>
              <div>{skill.name}</div>
            </div>
          );
        })}
      </div>
      {/* <img style={{width: "10rem"}} src={skill.link}></img> */}
    </div>
  );
}

function EducationPanel() {
  const tabListStyle = TabListStyle();
  return (
    <div className={`${tabListStyle.tab_content_box}`}>
      <div className={tabListStyle.education_panel}>
        {data.education.map((school, index) => {
          if (index % 2 === 0) {
            return <div className={`${tabListStyle.education_box} ${tabListStyle.education_box_left}`}>
              <div className={tabListStyle.education_box_content}>
                <div>School: {data.education[index].name}</div>
                <div>Degree: {data.education[index].Degree}</div>
                <div>Major: {data.education[index].Major}</div>
                <div>{data.education[index].GPA}</div>
             </div>
              <div className={tabListStyle.education_box_time}>{data.education[index].year}</div>
            </div>;
          }
          else{
            return <div className={`${tabListStyle.education_box} ${tabListStyle.education_box_right}`}>
              <div className={tabListStyle.education_box_content}>
              <div>School: {data.education[index].name}</div>
                <div>Degree: {data.education[index].Degree}</div>
                <div>Major: {data.education[index].Major}</div>
                <div>{data.education[index].GPA}</div>
              </div>
              <div className={tabListStyle.education_box_time}>{data.education[index].year}</div>
            </div>;
          }
        })}
      </div>
    </div>
  );
}
export default TabList;
