import { useEffect , useState} from "react";
import './MainBody.css'
import QualificationCard from './QualificationCard' 
import SkillCard from './SkillCard'
import ProjectsCard from './ProjectsCard'
import MicrosoftImage from '../assets/Microsoft.jpg'
import MusicImage from '../assets/MusicApp.png'
import TicImage from '../assets/TicTacToe2.png'
import CtaeMapsImage from '../assets/mapProject.png'

export default function MainBody(props){    
    
    const [classname, setClassName] = useState(".main-body");
    
    function goTo(classname) {
        const element = document.querySelector(classname);
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY - 160;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
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
                <h2>About</h2>
                <p>Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work. I am passionate about staying current with industry trends and continually expanding my skill set to incorporate new technologies and methodologies. My goal is to leverage my expertise to contribute to innovative projects that drive user engagement and business success.</p>
                <h2>Education</h2>
                <div className='qualifications'>
                    <QualificationCard name="High School" place="Kendriya Vidhyalya, Ghaziabad, U.P" date="2019-2021"/>
                    <QualificationCard name="B. Tech" place="C.T.A.E, Udaipur, Rajasthan" date="2022-2026"/>
                </div>

                <h2 >Skills</h2>
                <div className='skillSection'>
                <SkillCard name='HTML' percent={90}></SkillCard>
                <SkillCard name='CSS' percent={80}></SkillCard>
                <SkillCard name='JavaScript' percent={70}></SkillCard>
                <SkillCard name='React.js' percent={75}></SkillCard>
                <SkillCard name='Python' percent={90}></SkillCard>
                <SkillCard name='C and C++' percent={85}></SkillCard>
                </div>

                <h2>Projects</h2>
                <div className='project-container'>
                    <ProjectsCard name="Microsoft Clone" image={MicrosoftImage} website="https://github.com/Hemant-29/Project-Website-Microsoft" tech="HTML, CSS, Javascript, React.js" aboutText="This is the landing page of the Microsoft that I created using HTML, CSS, Javascript. It has complete frontEnd functionality as the original page."></ProjectsCard>
                    <ProjectsCard name="Music App" image={MusicImage} website="https://github.com/Hemant-29/Gui-music-player" tech="Python, PyQt5" aboutText="A sleek and elegent music app which can help you browse and listen to songs on your drive"></ProjectsCard>
                    <ProjectsCard name="Tic-Tac-Toe" image={TicImage} website="https://github.com/Hemant-29/Project-TicTacToe" tech="HTML, CSS, Javascript" aboutText="This is a classic game of Tic-Tac-Toe which can be played by 2 users."></ProjectsCard>
                    <ProjectsCard name="C.T.A.E College Maps" image={CtaeMapsImage} website="https://github.com/Hemant-29/CTAE_Maps" tech="HTML, CSS, Javascript, Leaflet, Open Street Maps" aboutText="A College Maps website. Made this as a Hackathon Project. It has features to identify various college building and provide their floor-plan so that students can search for any Lab or Classroom from their home."></ProjectsCard>
                </div>
            </div>
    )
}