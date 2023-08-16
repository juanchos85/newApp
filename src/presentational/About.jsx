import Style from "./About.module.css";
import img from "../assets/profile.jpg";
import { BsListCheck } from "react-icons/bs";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";
export default function About() {
  return (
    <div className={Style.head} id="about">
      <Slide>
        <main className={Style.mainAbout}>About</main>

        <div className={Style.containerAbout}>
          <div className={Style.imgContainer1}>
            <img className={Style.imageAbout} src={img} alt="" />
          </div>

          <div className={Style.about}>
            <h2>I am Juan Bosque</h2>
            <span>Full Stack Web Developer</span>
            <p className={Style.abouText}>
              I am passionate about developing, learning, and doing things look
              different. I like to make interesting and interactive websites;
              where find data end have a good experience surfing there.
            </p>

            <div className={Style.iconContainer}>
              <a href="https://www.linkedin.com/in/juan-bosque"  rel="noreferrer" target="_blank">
                <i>
                  <AiFillLinkedin className={Style.icon} />{" "}
                </i>
              </a>
              <a href="https://www.github.com/juanchos85"  rel="noreferrer" target="_blank">
                <i>
                  <AiFillGithub className={Style.icon} />{" "}
                </i>
              </a>
              <a href="https://drive.google.com/file/d/1oGIMfEbyTZ3EHaZAng8p64fEcZLsNQin/view?usp=drive_link" rel="noreferrer" target="_blank">
                <i>
                  <BsListCheck  className={Style.icon} />{" "}
                </i>
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
