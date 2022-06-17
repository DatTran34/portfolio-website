import React from 'react'
import { data, color } from "../data/data";
import { makeStyles } from "@mui/styles";
const ContactMeStyle = makeStyles((theme) => ({
    container: {
      padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
   title:{
    fontSize: "36px",
     color: `${color.primaryColor}`,
     fontWeight: "650",
     fontFamily: "Bad Script",
   },
   description:{
    fontSize: "18px",
    color: `${color.fifthColor}`,
   },
   contact_box_container: {
       padding: "2rem 0",
       display: "grid",
       gridGap: "2rem",
       gridTemplateColumns: "repeat(2,1fr)"
   },
   contact_box:{
       width: "5rem",
       aspectRatio: "1/1",
       "& img": {
        width: "100%",
      },
   },
   contact_box_name:{
    fontSize: "18px",
    color: `${color.thirdColor}`,
    textDecoration: "none"
   }
  }));

function ContactMeComponent() {
    const contactMeStyle = ContactMeStyle()
  return (
    <div className={contactMeStyle.container}>
        <div className={contactMeStyle.title}>CONTACT {data.name}</div>
        <div className={contactMeStyle.description}>Here is some ways to get in touch with me</div>
        <ContactBoxComponent/>
    </div>
  )
}

function ContactBoxComponent() {
    const contactMeStyle = ContactMeStyle()
  return (
    <div className={contactMeStyle.contact_box_container}>
       {data.social_media.map((media, key) => {
          return (
            <div className={contactMeStyle.contact_box} key={key}>
              <a href={media.link} target="_blank">
                <img src={media.img} />
              </a>
              <div className={contactMeStyle.contact_box_name}>{media.name}</div>
            </div>
          );
        })}
    </div>
  )
}


export default ContactMeComponent