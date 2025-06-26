
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
    Languages: ['Java', 'C#', 'SQL', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
    'Technologies & Tools': ['Spring Boot', 'React', 'Angular', '.NET Core Web API', 'Docker', 'Kafka', 'Microservices', 'REST APIs', 'Azure', 'OpenAI SDK', 'AI Agents', 'Git']
  };

  const experienceData = [
    {
      company: 'Honeywell, Bangalore',
      role: 'Software Engineer',
      dates: 'Apr 2023 – Present',
      responsibilities: [
        'Architected and developed multiple features for the Aspire Pipe Network Design Tool using Java, Spring Boot, and React, implementing RESTful APIs and designing UI components for an improved user experience.',
        'Developed and integrated a distributed tools notification system, reducing manual communication and improving operational effectiveness by 15%.',
        'Migrated the SmartConfig App from .NET to React Native, designing type-safe components and a custom SQLite schema for offline support, boosting user engagement by 30%.',
        'Enhanced the Fusion tool with custom drag-and-fill functionality by extending ag-Grid capabilities.',
        'Built CI/CD pipelines using GitHub Actions, reducing deployment time by 30% and increasing release frequency.',
        'Collaborated globally with testing, offering, and design teams to ensure delivery of high-quality software features.'
      ]
    },
    {
      company: 'Reliance Retail, Pune',
      role: 'Data Analyst (Senior Executive)',
      dates: 'July 2021 – Aug 2022',
      responsibilities: [
        'Analyzed large datasets using Python (Pandas), improving product availability by 25% and reducing waste by 15%.',
        'Used SQL and Excel to derive actionable insights and supported dynamic inventory strategies.'
      ]
    }
  ];

  const educationData = [
    {
      institution: 'Centre for Development of Advanced Computing, Bengaluru',
      degree: 'P.G. Diploma in Advanced Computing',
      dates: 'Sep 2022 – Mar 2023',
      grade: 'A',
      coursework: ['OOP', 'Databases', 'DSA', 'Full-stack Development']
    },
    {
      institution: 'Vishwakarma Institute of Information Technology, Pune',
      degree: 'B.Tech in Mechanical Engineering',
      dates: 'July 2018 – June 2021',
      cgpa: '9.37',
      coursework: []
    }
  ];

  const projectsData = [
    { 
      title: 'Requirement Analyzer for Project Management (AI Agent)', 
      description: 'Developed an AI-based project management tool for Microsoft’s AI Agents Hackathon. Utilized Taiga APIs and OpenAI SDK (GPT-4o-mini) to automate CRUD operations and decompose epics into detailed user stories.',
      liveDemoLink: '',
      githubLink: ''
    },
    { 
      title: 'Hospital Management System', 
      description: 'Designed a full-stack web application using React and Spring Boot. Implemented backend REST APIs and data access layers with JPA, Hibernate, and an optimized SQL schema.',
      liveDemoLink: '',
      githubLink: ''
    }
  ];

  const awardsData = [
    'Copilot Championship Award – 1st place in Honeywell-hosted innovation competition using GitHub Copilot',
    'Be a Zealot for Growth Award – For successful releases in the Advanced Detection portfolio at Honeywell',
    'Drive Accountability Culture Bravo Award – For early completion of critical milestones',
    'AZ-900 Azure Fundamentals (Udemy)',
    'Crash Course on Python (Coursera)',
    'Fullstack Development (LinkedIn Learning)'
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

