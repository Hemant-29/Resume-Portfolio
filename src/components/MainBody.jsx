import { useEffect, useState } from "react";
import "./MainBody.css";
import QualificationCard from "./QualificationCard";
import SkillCard from "./SkillCard";
import ProjectsCard from "./ProjectsCard";
import MicrosoftImage from "../assets/Microsoft.jpg";
import MusicImage from "../assets/MusicApp.png";
import TicImage from "../assets/TicTacToe2.png";
import CtaeMapsImage from "../assets/mapProject.png";
import StoreImage from "../assets/screenshot_store.png";
import telestreamImage from "../assets/telestream3.png";

export default function MainBody(props) {
  const [classname, setClassName] = useState(".main-body");

  function goTo(classname) {
    const element = document.querySelector(classname);
    if (element) {
      const topPosition =
        element.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (props.scrollTo) {
      setClassName(props.scrollTo);
      goTo(props.scrollTo);
    }
  }, [props.scrollTo]);

  return (
    <div className="main-body">
      <div className="main-body-relative">
        <h2>About</h2>
        <p>
          Web developer, with extensive knowledge and years of experience,
          working in web technologies and UI/UX design, delivering quality work.
          I am passionate about staying current with industry trends and
          continually expanding my skill set to incorporate new technologies and
          methodologies. My goal is to leverage my expertise to contribute to
          innovative projects that drive user engagement and business success.
        </p>
        <h2>Education</h2>
        <div className="qualifications">
          <QualificationCard
            name="High School"
            place="Kendriya Vidhyalya, Ghaziabad, U.P"
            date="2019-2021"
          />
          <QualificationCard
            name="B. Tech"
            place="C.T.A.E, Udaipur, Rajasthan"
            date="2022-2026"
          />
        </div>

        <h2>Skills</h2>
        <div className="skillSection">
          <SkillCard name="HTML, CSS" percent={90}></SkillCard>
          <SkillCard name="JavaScript" percent={70}></SkillCard>
          <SkillCard name="React.js" percent={85}></SkillCard>
          <SkillCard name="Node.js, Express.js" percent={75}></SkillCard>
          <SkillCard name="MongoDB" percent={80}></SkillCard>
          <SkillCard name="Django" percent={65}></SkillCard>
          <SkillCard name="Python" percent={90}></SkillCard>
          <SkillCard name="C and C++" percent={85}></SkillCard>
        </div>

        <h2>Projects</h2>
        <div className="project-container">
          <ProjectsCard
            name="TeleStream Video Streaming Platform"
            image={telestreamImage}
            website="https://tele-stream.vercel.app/"
            tech="React.js, Node.js, Express.js, MongoDb Atlas, cloudinary, Multer"
            aboutText="TeleStream is a full-stack video streaming platform inspired by modern video-sharing services, designed to allow users to upload, watch, and interact with video content in real time. Built with React.js on the frontend and Node.js with Express.js on the backend, the platform features secure user authentication, profile management, and RESTful APIs for seamless data exchange. A key highlight of the application is its support for adaptive bitrate streaming, enabling videos to automatically adjust their quality based on the user’s internet bandwidth to ensure smooth and uninterrupted playback. Videos are stored and streamed using Cloudinary, allowing efficient media handling and optimized delivery. Users can like, comment on videos, subscribe to channels, and manage their profiles. The application is deployed with Vercel for the frontend and Render for the backend, providing a responsive and scalable hosting environment. This project demonstrates practical experience with media streaming, authentication, and full-stack architecture."
          ></ProjectsCard>
          <ProjectsCard
            name="Full-Stack Store Website"
            image={StoreImage}
            website="https://the-store-app.vercel.app/"
            tech="React.js, Node.js, Express.js, MongoDb Atlas, cloudinary, Multer"
            aboutText="This is a full-stack furniture store website. Sellers have the ability to log in and manage their inventory, which includes listing new products with detailed descriptions, images, and pricing. They can also update product information or remove items from their listings as needed. 
                On the user side, the platform allows all users to browse the extensive range of furniture products available. Each product page provides detailed information on colors, sizes etc., and user reviews. By creating an account, users gain access to additional features such as adding items to their cart or wishlist. They can also leave reviews on products they have purchased and upvote helpful reviews. "
          ></ProjectsCard>

          <ProjectsCard
            name="Microsoft Clone"
            image={MicrosoftImage}
            website="https://github.com/Hemant-29/Project-Microsoft-Page"
            tech="HTML, CSS, Javascript, React.js"
            aboutText="This is the landing page of the Microsoft that I created using HTML, CSS, Javascript. It has complete frontEnd functionality as the original page."
          ></ProjectsCard>
          <ProjectsCard
            name="Music App"
            image={MusicImage}
            website="https://github.com/Hemant-29/Gui-music-player"
            tech="Python, PyQt5"
            aboutText="A sleek and elegent music app which can help you browse and listen to songs on your drive"
          ></ProjectsCard>

          <ProjectsCard
            name="C.T.A.E College Maps"
            image={CtaeMapsImage}
            website="https://github.com/Hemant-29/CTAE_Maps"
            tech="HTML, CSS, Javascript, Leaflet, Open Street Maps"
            aboutText="A College Maps website. Made this as a Hackathon Project. It has features to identify various college building and provide their floor-plan so that students can search for any Lab or Classroom from their home."
          ></ProjectsCard>
          <ProjectsCard
            name="Tic-Tac-Toe"
            image={TicImage}
            website="https://github.com/Hemant-29/Project-TicTacToe"
            tech="HTML, CSS, Javascript"
            aboutText="This is a classic game of Tic-Tac-Toe which can be played by 2 users."
          ></ProjectsCard>
        </div>
      </div>
    </div>
  );
}
