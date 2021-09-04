import emoji from 'react-easy-emoji';

import Nubia from './assets/img/icons/common/Nubia.png'
import Edrop from './assets/img/icons/common/Edrop.png'
import PalmTaxy from './assets/img/icons/common/PalmTaxy.png'
 
export const greetings = {
    "name": "Omoba George",
    "title": "Hey there, I'm George.",
    "description": "A passionate IT Enthusiast with skills in Blockchain Smart Contracts, Product Management/Design, Front-End Web Developement, Network/Hardware Maintenance, Data, Software Management. Having an experience building and handling teams in building Websites, Web and Mobile Apps with JavaScript / Reactjs / Nodejs / Python / Django / Flask / C++ / PHP across other libraries and frameworks. 'A Linux OS Administrator'.",
    "resumeLink": "https://drive.google.com/file/d/1MVwOG0qp5pul1I4LgBUDRyXtGzEOXfwk/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'omobadev',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "#",
    "instagram": "https://www.instagram.com/omoba_devlin?r=nametag",
    "twitter": "#",
    "github": "https://github.com/omobadev",
    "linkedin": "https://www.linkedin.com/in/george-omoba-3a957a93/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'INNOVATIVE TECH ENTHUSIAST / DEVELOPER / SKETCH ARTIST WHO EXPLORES EVERYTHING DESIGN AND PRODUCTION',
    skills: [
      emoji(
        '⚡ Development of Highly Innovative Products'
      ),
      emoji('⚡ BlockChain Smart Contracts Developement / Audit'),
      emoji(
        '⚡ IT Systems Maintenance'
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
      Stack: 'Product Design/Management', //Insert stack or technology you have experience in
      progressPercentage: '80', //Insert relative proficiency in percentage
    },
    {
      Stack: 'BlockChain Developement',
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
      progressPercentage: '70',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'ISFOP-BENIN UNIVERSITY',
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'September 2013 - October 2017',
      desc:
        'Advanced Applied Siences Program. With courses on Software Engineering, Artificial Intelligence, Web Security, Operating Systems, Etc.',
      descBullets: ['Project work on the Hadoop Framework Distribution System.'],
    },
]

export const experience = [
  {
    role: 'Support Blockchain Developer',
    company: 'Nubia Inc',
    companylogo: Nubia,
    date: 'Nov 2020 – Present',
    desc:
      'Developing, Deploying and Auditing Blockchain Smart Contracts (Solidity)',
  },
  {
     role: 'Technical Project/Product Manager',
    company: 'Edrop Co',
    companylogo: Edrop,
    date: 'Nov 2019 – April 2020',
    desc:
      'Generally over seeing all processes throughout product lifecycle. Working with a team of UI/UX Designer, Front/Back End developers, DevOps Engineer, Content Creator/Social media manager. To achieve a fully functional product.',
  },
  {
    role: 'Product Manager',
    company: 'PalmTaxy',
    companylogo: PalmTaxy,
    date: 'May 2019 – Sep 2019',
    desc:
      'Regular troubleshooting, maintenance and configuration of the PalmTaxy Taxi hailing mobile application. Working with the software developers in solving all customer related issues for Drivers and Riders.',
  },
]

export const projects = [
  {
    name: "CayWoodBrown Foundation",
    desc: "Youth Sensitisation of The Usefulness of Web Developement and Digital Marketing. CayWoodBrown is a Foundation created by the Deputy Governor of Rivers State, Nigeria, in 2018 to Educate the youths on a few ICT Skills. ",
  },
  {
    name: "Nubia",
    desc: "TRC20 Open Source Peer to Peer Digital Currency ",
    link: {
      name: "Nubia OGD",
      url: "https://tronscan.org/#/token20/TW8SB94JtoPvKnzd17rLiUZcW9ayuEKuVv"
    }
  }
]