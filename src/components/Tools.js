import React, {Component} from 'react';

class Tools extends Component {
  render() {
    return (
      <div className="Tools container">
        <h1 id="tools">Tools</h1>
        <p>
          A lumberjack can chop down a tree with a knife, but it might be better
          if they used an axe.
        </p>
        <p>
          Developers sling text around. That is your primary objective. You'll
          be putting real and fake words in the right order and grouping them in
          patterns. Patterns are defined by syntax and despite what many devs
          will say, that pattern is determined by you, your team, and/or the
          language you're coding in. There is no right way to code, only wrong
          ways to avoid. The more you write code, the more opinions you'll have.
          It's good to have structure, but let's get to that once you start
          coding sloppily but somehow making it work.
        </p>
        <h4>Text Editor</h4>
        <p>
          Most, if not all text editors are the same. Pick one you like or pick
          them all like me.
        </p>
        <ul>
          <li>
            <a href="https://code.visualstudio.com/" target="_blank">
              Visual Studio Code 
            </a> - I use this for React development, new fav.
          </li>
          <li>
            <a href="https://www.sublimetext.com/" target="_blank">
              Sublime Text
            </a> - Small, fast. I used this for years.
          </li>
          <li>
						<a href="https://atom.io" target="_blank">
              Atom
            </a> - Was huge last year, most devs I know use this or have switched to VSCode
          </li>
          <li>
						<a href="https://www.vim.org/" target="_blank">
              Vim
            </a> - Tryhard mode. Work from the command line, pretty much anywhere, (it's on my phone). The best in my opinion, but has a learning curve. I actually use NeoVim.
          </li>
        </ul>
        <h4>Command Line</h4>
				<ul>
					<li><a href="https://www.iterm2.com/" target="_blank">iTerm2</a> - I use this</li>
					<li>Terminal - This comes with MacOS. It works, but it's not pretty. </li>
				</ul>
        <p>
          A lot of people think the command line is scary. Mainly because of the
          power it has. I think you should break everything. You <em>should</em>{' '}
          be scared, that's fine. Our job is to fix bugs. All bugs are created
          by us, and can be fixed by us. Remember that when you think a language
          is wonky or a website breaks. It's our fault. Anyhow, learn the
          command line.
        </p>
        <p>
          Looks like OpenClassrooms has a command line course taught by an
          android judging by the thumbnail:{' '}
          <a
            href="https://openclassrooms.com/en/courses/4614926-learn-the-command-line-in-terminal"
            target="_blank">
            here
          </a>
          .
        </p>
        <p>I recommend learning enough to be dangerous for now if you haven't used the command line.</p>
        <p>
          Simple commands like <code>cd</code> to change directories and{' '}
          <code>ls</code> to see the directories on your <code>pwd</code>{' '}
          (present working directory).
        </p>
        <p>
          If the command line doesn't scare you, then you can try tackling{' '}
          <a href="https://www.youtube.com/watch?v=wlR5gYd6um0" target="_blank">
            vim
          </a>
          , my favorite text editor of all time. Seriously, it's amazing and
          changed my development workflow and life. Now I live in the command
          line. If you are interested in Vim, let me know and I'll add a vim section for ya.
        </p>
				<h4>Version Control</h4>
				<p>You should keep track of your code, but even better, let tools do it for you.</p>
				<ul>
					<li><a href="https://github.com" target="_blank">Github</a> - I use this, cause everyone does.</li>
					<li><a href="https://bitbucket.org/" target="_blank">Bitbucket</a></li>
				</ul>
				<h4>Online Editors/Code Playgrounds</h4>
				<p>This concept has grown the past year or so. You can have full blown editors that update live for you. Great for testing concepts or dinking around. Another great feature is browsing through what other people have built. Try hopping onto codepen and search for portfolio.</p>
				<p>There's plenty out there, but here's a start.</p>
				<ul>
					<li><a href="https://codepen.io/" target="_blank">Codepen</a></li>
					<li><a href="https://plnkr.co/" target="_blank">Plunker</a></li>
					<li><a href="https://jsfiddle.net/" target="_blank">JSFiddle</a></li>
				</ul>
      </div>
    );
  }
}

export default Tools;
