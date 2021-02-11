import React,{Component} from 'react';
import './style.css';
import todo from './Todo.png'
import movie from './movie.png'
import portfolio from './portfolio.png'

class Project extends Component{
	render(){
		return(
			<div id="projects">
		  		<div className="text-center mt-4">
		  			<h1 className="font-blue heading-border"><span className="border-bottom-dark">Projects</span></h1>
				  </div>
		      	<div className=" projects-card-container">
			        {/* First Project */}
			        <div className="card card-width bg mb-3 mt-3 ml-3 mr-3">
			        	<img className="card-img-top card-img-style" src={todo} height="230" alt="project"/>
			        	<div className="card-text text-white text-center">TODO App</div>
			        	<a href="https://todo-awesome-lokesh.netlify.app/" className="text-center"><button type="button" className="view-project mt-3 mb-3">View Project</button></a>
			        </div>
			        {/* Second Project */}
			        <div className="card card-width bg mb-3 mt-3 ml-3 mr-3">
			        	<img className="card-img-top card-img-style" src={movie} height="230" alt="project"/>
			        	<div className="card-text text-white text-center">Movie App</div>
			        	<a href="https://knowratingbylokesh.netlify.app/#/" className="text-center"><button type="button" className="view-project mt-3 mb-3">View Project</button></a>
			        </div>
			    	{/* Fourth Project */}
			        <div className="card card-width bg mb-3 mt-3 ml-3 mr-3">
			        	<img className="card-img-top card-img-style" src={portfolio} height="230" alt="project"/>
			        	<div className="card-text text-white text-center">My Portfolio</div>
			        	<a href="https://lokeshsinghal.github.io/portfolio/" className="text-center"><button type="button" className="view-project mt-3 mb-3">View Project</button></a>
			        </div>
		      	</div>
		  	</div>
			);
	}
}

export default Project;