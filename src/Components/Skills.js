import React from 'react';
import { FaReact, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiSpringboot, SiMysql, SiPostman, SiHtml5, SiCss3 } from "react-icons/si";

const Skills = ({ skill }) => {

  const icon = {
    Java: <FaJava />,
    'Spring Boot': <SiSpringboot />,
    JDBC: <FaJava />,
    Hibernate: <FaJava />,
    MySQL: <SiMysql />,
    'React.js': <FaReact />,
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
    JavaScript: <DiJavascript1 />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Postman: <SiPostman />
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill] || <span>{skill}</span>}
    </div>
  );
};

export default Skills;
