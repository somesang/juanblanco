import React, {Component} from 'react';
import Roadmap from '../images/roadmap.png';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/styles/prism';

class Intro extends Component {
  render() {
    return (
      <div className="Intro container">
        <h1 id="intro">So you want to be a Front End developer?</h1>
        <p>
          I'm super pumped for you. Programming is a wonderfully flexible and
          rewarding career path. With the right attitude, you can build
          anything. That being said, shit gets hairy sometimes. Especially when
          you're starting out but <em>especially</em> once you start building
          real world sites and apps.
        </p>
        <p>
          You've probably already noticed that there's a lot of stuff out there.
          It's overwhelming -- but if you fine tune your road map, the path to
          development zen will be easier to take.
        </p>
        <p>Speaking of road map, check this out: </p>
        <img class="roadmap" src={Roadmap} />
        <p>
          <small>
            Roadmap from{' '}
            <a
              href="https://codeburst.io/the-2018-web-developer-roadmap-826b1b806e8d"
              target="_blank">
              this article
            </a>
            .
          </small>
        </p>
        <p>
          <em>WTF</em>? There's just so much! And half of the words aren't even
          real!
        </p>
        <p>
          My advice: Don't worry about it. There's a lot to learn, but you don't
          have to learn everything.{' '}
          <strong>Master the basics and understand what's out there</strong> -
          waiting for you. Take it step by step.
        </p>
        <p>
          Front End developement will be much easier when you can code HTML and
          CSS with your eyes closed. Javascript is important, but that will take
          a lot more investment to understand and execute properly.
        </p>
        <h2>TL;DR?</h2>
        <p>
          I highly, <em>highly</em> suggest doing{' '}
          <a
            href="https://watchandcode.com/p/practical-javascript"
            target="_blank">
            this course
          </a>{' '}
          first and taking it from there. Let me know how it went and if you
          have struggles with it. With that, I can help steer your course a
          little better. You'll be building a functional todo list and the learning the core
          concepts of pretty much every app out there. There's a following that
					believes that every app can be boiled down to a todo list stucture. See <a href="http://todomvc.com/" target="_blank">this</a>.
        </p>
				<p>My biggest piece of advice is to practice every day. Just do it. Be disciplined. Building projects is great, but the hard part is knowing what to build to actually practice. Theory only gets you so far.</p>
				<p>I didn't really learn to code until I was tasked with building something I knew nothing about. That's why you gotta learn your tools and learn how to search for help.</p>
				<p>It's hard to search for a solution when the problem is hypothetical. Don't copy/paste. Type everything. Muscle memory is underrated.</p>
				<p>The process I took to learn was to saturate myself with the code. I read everything I could and built a portfolio site over and over. Find examples you like and figure out how to build it.</p>
      </div>
    );
  }
}

export default Intro;
