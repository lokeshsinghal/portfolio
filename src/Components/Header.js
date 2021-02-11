import React,{Component} from 'react';
import Profile from './profile.jpg';

import {motion} from 'framer-motion';

import Typewriter from 'typewriter-effect';

import './style.css';

class HeaderComponent extends Component{
	render(){
		return(
			<div>
			<div className="bg header-top" id="home">
				<motion.div className="text-center pt-4 pb-3" initial={{opacity:0}} animate={{opacity:1}}>
					<img src={Profile} alt="profile" width="200" height="200" className="profile-img-border"/>
				</motion.div>
				<motion.div className="pb-4"
					initial={{y: -250}}
					animate={{y: -0}}
				>
				
					<div className="d-flex-center fw-25"><div className="font-blue mr-2">Lokesh Singal</div></div>
					<div className="d-flex-center fw-25"><div className="font-white mr-2"><Typewriter options={{ strings: ['Frontend Developer', 'React Js Developer'], autoStart: true, loop: true,}}/></div></div> 
				</motion.div>
				

			</div>
			</div>
		);
	}
}

export default HeaderComponent;