import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Omoba George",
    "title": "Hey, I'm George",
    "description": "A passionate IT Enthusiast with skills in Product Management, Front-End Web Developement, Technical Support, Network and Hardware Maintenance Engineering, Data Management, Software Management and lately Blockchain Development. Having an experience of building and handling teams in building Websites, Web Apps and Mobile Apps with JavaScript / Reactjs / Nodejs / Python / Django / Flask / C++ / PHP and some other cool libraries, frameworks and Cross Platform Mobile Apps.",
    "resumeLink": "https://drive.google.com/file/d/1MkPSk7xBRQU8mbtRIGsvHDOMViuxUaJn/view"
}

export const openSource = {
  githubUserName: 'omobadev',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://web.facebook.com/george.devlin.144/?viewas=100000686899395",
    "instagram": "https://www.instagram.com/omoba_devlin?r=nametag",
    "twitter": "#",
    "github": "#",
    "linkedin": "https://www.linkedin.com/in/george-omoba-3a957a93/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY TECH ENTHUSIAST / DEVELOPER WHO WANTS TO EXPLORE EVERYTHING TECH',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
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
      Stack: 'All Things Programming',
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
      descBullets: ['Project work on the Hadoop Distribuition Framework'],
    },
]

export const experience = [
  {
    role: 'Technical Project/Product Manager',
    company: 'Edrop Co',
    companylogo: Edrop,
    date: 'Nov 2019 – April 2020',
    desc:
      'Generally over seeing all processes throughout product lifecycle',
    descBullets: [
      'Working closely and quickly with a team of UI/UX Designer, Front/Back End developers, DevOps Engineer, Content Creator and Social media manager. To achieve a fully functional product ',
      'Product roadmap and growth analysis',
    ],
  },
  {
    role: 'Product Manager',
    company: 'PalmTaxy',
    companylogo: PalmTaxy,
    date: 'May 2019 – Sep 2019',
    desc:
      'Regular maintenance and troubleshooting of the mobile application. Working closely with the software developers in solving all customer related issues Drivers/Riders.',  
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
    desc: "Part of a team tasked to build a group chat mobile application",
    link: {
      name: "Omoba",
      url: "https://www.linkedin.com/in/george-omoba-3a957a93"
    }
  }
]