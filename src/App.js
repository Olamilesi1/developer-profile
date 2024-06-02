import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#2662EA"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "black"
  },
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skill-list">
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="unsplash.jpeg" alt="developerImage" />
  ;
}

function Intro() {
  return (
    <div className="intro">
      <h1>Jonas Schemdtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When bot coding or
        preparing a course, I like to play board games, to cook (and eat), or
        just enjoy the Portugese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
{skills.map((skill) => (
<Skill skill={skill.skill} color= {skill.color} level= {skill.level}/>
))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span> {skill}</span>
      <span>
      {level === 'beginner' && '👶'}
      {level === 'intermediate' && '👍'}
      {level === 'advanced' && '👊'}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App