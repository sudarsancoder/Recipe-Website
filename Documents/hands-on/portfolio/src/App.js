import './App.css';
import Header from './components/Header/Header';
import TopContainer from './components/topcontainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
     <Header />
     <TopContainer/>
     <SkillContainer/>
     <ProjectContainer/>
     <ExperienceContainer/>
     <Contact />
    </div>
  );
}

export default App;
