import emoji from 'react-easy-emoji';

import Edrop from './assets/img/icons/common/Edrop.png'
import PalmTaxy from './assets/img/icons/common/PalmTaxy.png'
import TC from './assets/img/icons/common/TC.png'

export const greetings = {
    "name": "Omoba George",
    "title": "Hey there, I'm George.",
    "description": "A passionate IT Enthusiast with skills in Product Management, Front-End Web Developement, Network/Hardware Maintenance Engineering, Data, Software Testing/Management and lately Blockchain Development. Having an experience building and handling teams in building Websites, Web and Mobile Apps with JavaScript / Reactjs / Nodejs / Python / Django / Flask / C++ / PHP and other cool libraries, frameworks and Cross Platform Mobile Apps. 'A huge Linux OS Fan'.",
    "resumeLink": "https://drive.google.com/file/d/1O4XVEH6PWTJ1UIhlWaw-ALlNIef4xJjh/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'omobadev',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/george.devlin.144",
    "instagram": "https://www.instagram.com/omoba_devlin?r=nametag",
    "twitter": "#",
    "github": "https://github.com/omobadev",
    "linkedin": "https://www.linkedin.com/in/george-omoba-3a957a93/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'INNOVATIVE TECH ENTHUSIAST / DEVELOPER / SKETCH ARTIST WHO WANTS TO EXPLORE EVERYTHING DESIGN AND PRODUCTION',
    skills: [
      emoji(
        '⚡ Develop highly innovative Products / Applications'
      ),
      emoji('⚡ Progressive Network and Hardware Maintenance / Repair and Upgrade'),
      emoji(
        '⚡ Integration of all Modern Day technology as I take on New Experimental Projects'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'flutter',
        fontAwesomeClassname: 'logos:flutter',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Product Management/Design', //Insert stack or technology you have experience in
      progressPercentage: '80', //Insert relative proficiency in percentage
    },
    {
      Stack: 'IT Network/Hardware Engineering',
      progressPercentage: '70',
    },
    {
      Stack: 'Basketball',
      progressPercentage: '80',
    },
    {
      Stack: 'Programming Stack',
      progressPercentage: '65',
    },
    {
      Stack: 'Sketch Art',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'ISFOP-BENIN UNIVERSITY',
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'September 2013 - October 2017',
      desc:
        'Ranked top 10% in the program. Took courses on Software Engineering, Artificial Intelligence, Web Security, Operating Systems, Etc.',
      descBullets: ['Project work on the Hadoop Framework Distribution System.'],
    },
]

export const experience = [
  {
    role: 'Technical Project/Product Manager',
    company: 'Edrop Co',
    companylogo: Edrop,
    date: 'Nov 2019 – April 2020',
    desc:
      'Generally over seeing all processes throughout product lifecycle. Working closely with a team of UI/UX Designer, Front/Back End developers, DevOps Engineer, Content Creator/Social media manager. To achieve a fully functional product.',
  },
  {
    role: 'Product Manager',
    company: 'PalmTaxy',
    companylogo: PalmTaxy,
    date: 'May 2019 – Sep 2019',
    desc:
      'Regular maintenance and troubleshooting of the mobile application. Working with the software developers in solving all customer related issues Drivers/Riders.',  
  },
  {
    role: 'Front-End Developer',
    company: 'Riv TechCreek',
    companylogo: TC,
    date: 'Sep 2018 – March 2019',
    desc:
      'joining a team of Front-End developers, UI/UX Designers, Back-End developers and Dev-Ops Engineers to build a self learning Patient database for all Government Hospitals in the State.',
  },
]

export const projects = [
  {
    name: "CayWoodBrown Foundation",
    desc: "Lectured the youths on the basics of web design. CayWoodBrown is a Foundation started by the deputy Governor of Rivers State, in 2018 to Educate the youths on a few ICT Skills. ",
  },
  {
    name: "Riv TechCreek",
    desc: "Part of a team tasked to build a group-chat mobile application",
    link: {
      name: "George",
      url: "https://www.linkedin.com/in/george-omoba-3a957a93"
    }
  }
]