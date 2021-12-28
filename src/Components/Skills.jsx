import React from 'react';
import './style.css';

 
function SkillsComponent() {
  return(
  	<div id="skills" className="bg pb-3 text-white">
  		<div className="text-center mt-4 pt-2">
  			<h1 className="font-blue heading-border"><span className="border-bottom-white">Skills</span></h1>
		  </div>
      <div className="skill-center">
      <div>
          React
          <div className="bar ReactLanguage"></div>
        </div>
      <div>
          Javascript
          <div className="bar javascriptLanguage"></div>
        </div>
        <div>
          Material-UI
          <div className="bar MaterialUI"></div>
        </div>
        <div>
          HTML
          <div className="bar htmlLanguage"></div>
        </div>
        <div>
          CSS
          <div className="bar cssLanguage"></div>
        </div>
        <div>
          Bootstrap
          <div className="bar bootstrapLanguage"></div>
        </div>
      </div>
            {/*<div className="ml-4 mr-4 skills-card-container">
              <div className="skills-card">
                <img src={project} width="100" height="100"/>
                <div className="card-text text-black text-center pt-3">HTML</div>
              </div>
              <div className="skills-card">
                <img src={project} width="100" height="100"/>
                <div className="card-text text-black text-center pt-3">CSS</div>
              </div>
              <div className="skills-card">
                <img src={project} width="100" height="100"/>
                <div className="card-text text-black text-center pt-3">Bootstrap</div>
              </div>
              <div className="skills-card">
                <img src={project} width="100" height="100"/>
                <div className= " text-black text-center pt-3">Javascript</div>
              </div>
              <div className="skills-card">
                <img src={project} width="100" height="100"/>
                <div className=" text-center text-black pt-3">React</div>
              </div>
              <div className="skills-card">
                <img src={project} width="100" height="100"/>
                <div className=" text-center text-black pt-3">Redux</div>
              </div>
              <div className="skills-card">
                <img src={project} width="100" height="100"/>
                <div className=" text-center text-black pt-3">React Router</div>
              </div>
              <div className="skills-card">
                <img src={project} width="100" height="100"/>
                <div className= "text-center text-black pt-3">Git</div>
              </div>
            </div>*/}
  	</div>

 	)
}
 
export default SkillsComponent;