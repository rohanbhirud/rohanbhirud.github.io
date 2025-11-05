
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  const skillsData = {
    'Programming Languages': [
      'Java',
      'C#',
      'JavaScript',
      'TypeScript',
      'Python',
      'HTML',
      'CSS'
    ],
    'Frameworks': [
      'React',
      '.NET Core',
      'Spring Boot'
    ],
    'Databases': [
      'SQL',
      'Microsoft SQL Server'
    ],
    'Tools/Practices': [
      'Git',
      'Agile Development',
      'CI/CD',
      'Microservices',
      'REST APIs',
      'AI',
      'ML',
      'AI Agents'
    ]
  };

  const experienceData = [
    {
      company: 'Honeywell',
      role: 'Software Engineer',
      dates: 'Apr 2023 – Present',
      responsibilities: [
        'Architected and developed features for the Aspire Pipe Network Design Tool using Java, Spring Boot, React and delivered multiple releases.',
        'Developed and integrated a distributed tools notification system, reducing manual communication efforts and leading to a 15% improvement in overall operational effectiveness.',
        'Enhanced the Fusion tool by custom implementing the drag-and-fill functionality, thereby extending the core features of the ag-Grid library.',
        'Collaborated cross-functionally across the globe with testing, offering, and design teams to discuss and refine technical software features, ensuring alignment and successful features delivery.',
        'Collaborated in an Agile environment, contributing to sprint planning, code reviews, and continuous integration workflows.'
      ]
    },
    {
      company: 'Reliance Retail',
      role: 'Senior Executive (Data Analyst)',
      dates: 'Jul 2021 – Sep 2022',
      responsibilities: [
        'Utilized Python libraries to analyze large datasets for inventory management, leading to a 25% improvement in productivity and a 15% boost in material handling accuracy.',
        'Collaborated with cross-functional teams to design custom dashboards and generate actionable insights, enhancing operational efficiency.'
      ]
    }
  ];

  const educationData = [
    {
      institution: 'Birla Institute of Technology And Science, Pilani',
      degree: 'Work Integrated M.Tech in Artificial Intelligence and Machine Learning',
      dates: 'Nov 2024 – Sep 2026'
    },
    {
      institution: 'Centre for Development of Advanced Computing',
      degree: 'Post Graduate Diploma in Advanced Computing',
      dates: 'Sep 2022 – Mar 2023',
      grade: 'A'
    },
    {
      institution: 'Vishwakarma Institute of Information Technology',
      degree: 'B.Tech',
      dates: 'Jul 2018 – Jun 2021',
      cgpa: '9.37'
    }
  ];

  const projectsData = [
    {
      title: 'Aspire Pipe Network Design Tool',
      description: [
        'Refactored a legacy Java codebase into a modular Maven project using Spring Boot, improving build flexibility and maintainability.',
        'Designed and implemented scalable backend architecture using SOLID principles and core OOP concepts.',
        'Developed RESTful APIs to manage pipe network components and simulate flow dynamics.',
        'Integrated efficient data structures and algorithms to optimize performance for complex network calculations.',
        'Built a responsive React.js frontend for managing pipe network configurations.',
        'Conducted root cause analysis of production issues using structured logging and debugging tools, leading to improved system reliability.',
        'Delivered multiple feature releases on schedule, ensuring high code quality and performance benchmarks.'
      ]
    },
    {
      title: 'CLSS Site Manager',
      description: [
        'Developed and integrated a distributed tools notification system, reducing manual communication efforts and leading to a 15% improvement in overall operational effectiveness.',
        'Designed and implemented SQL Server schemas, stored procedures, and queries to support the distributed tools notification system, enabling reliable message delivery.',
        'Built RESTful APIs using .NET to support scalable and maintainable backend services.',
        'Integrated backend APIs with React components to enable seamless data flow and user interaction.',
        'Developed dynamic front-end interfaces using React, enhancing usability and performance.'
      ]
    },
    {
      title: 'CLSS Config Tool',
      description: [
        'Enhanced the tool by custom implementing the drag-and-fill functionality, thereby extending the core features of the ag-Grid library.',
        'Built RESTful APIs following clean architecture patterns.'
      ]
    },
    {
      title: 'Requirement Analyser AI Agent',
      description: [
        'Developed an intelligent project management agent as part of Microsoft\'s AI Agents Hackathon using Taiga APIs to automate CRUD operations on projects, epics, and user stories.',
        'Leveraged Azure AI Foundry\'s hosted GPT-4o-mini with the OpenAI SDK and Python to decompose high-level epics into detailed user stories.'
      ]
    },
    {
      title: 'Hospital Management System',
      description: [
        'Implemented JPA repositories and Hibernate entities for efficient data access.',
        'Architected and developed a full-stack Hospital Management System.',
        'Worked collaboratively to meet project milestones and deliver a robust, user-friendly solution.'
      ]
    }
  ];

  const awardsData = [
    'Patent Approval: Granted approval for patent filing for innovative LED-based authentication system in FaastFlex Detector at Honeywell.',
    'People\'s Choice Award: Recognized at Honeywell Technology Roadshow for outstanding project presentation and innovation.',
    'Copilot Championship Award: Awarded first place in a Honeywell-hosted competition for innovative use of GitHub Copilot.',
    'Be a Zealot for Growth Award at Honeywell: Recognized for spearheading multiple successful releases within the Advanced Detection portfolio.',
    'Drive Accountability Culture Bravo Award: Awarded for initiative and driving early completion of critical milestones.',
    'Fullstack Development | LinkedIn Learning'
  ];


  return (
    <div className="portfolio-container">
      <Header
        name="ROHAN BHIRUD"
        linkedin="https://www.linkedin.com/in/rohanbhirud"
        github="https://github.com/rohanbhirud"
        phone="+91 9860512009"
        email="rohanbhirud25@gmail.com"
      />
      <Skills id="skills" skills={skillsData} />
      <Experience id="experience" experiences={experienceData} />
      <Education id="education" educationEntries={educationData} />
      <Projects id="projects" projects={projectsData} />
      <Awards awards={awardsData} />
      <Footer id="footer" />
    </div>
  );
}

export default App;

