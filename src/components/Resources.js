import React, { Component } from 'react'

class Resources extends Component {
	render() {
		return (
			<div className='Resources container'>
				<h1 id="resources">Resources</h1>
				<ul>

					<h3>Online Courses</h3>
					<li>
						<a 
							target="_blank"	
							href="https://watchandcode.com/p/practical-javascript">
							Practical Javascript
						</a> - Free step-by-step course in building a todo list in JS
					</li>
					<li>
						<a 
							target="_blank"	
							href="https://www.freecodecamp.org/">
							freeCodeCamp
						</a> - Free and guided 'bootcamp'
					</li>
					<li>
						<a 
							target="_blank"	
							href="https://youtube.com">
							YouTube
						</a> - Fantastic, really. Lots of great content mixed in with shitty content.
					</li>

					<h3>Tools</h3>
					<li>
						<a 
							target="_blank"	
							href="https://stackoverflow.com">
							Stack Overflow
						</a> - Your best friend when starting out
					</li>

					<li>
						<a 
							target="_blank"	
							href="https://Github.com">
							Github
						</a> - Version control
					</li>
					<h3>Text Editors</h3>
					<li>
						<a 
							target="_blank"	
							href="https://code.visualstudio.com/">
							Visual Studio Code
						</a> - The best for flexiblity. I use this for React coding.
					</li>
					<li>
						<a 
							target="_blank"	
							href="https://www.sublimetext.com/">
							Sublime Text
						</a> - Small, fast, expandable.
					</li>
					<li>
						<a 
							target="_blank"	
							href="https://atom.io/">
							Atom
						</a> - Too bulky for me, but great.
					</li>

					<h3>Books</h3>
					<li>
						<a 
							target="_blank"	
							href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189">
							HTML and CSS: Design and Build Websites
						</a> - My favorite book mainly because design. It might be outdated, but the core concepts are expressed.
					</li>
				</ul>
			</div>
		)
	}
}

export default Resources
