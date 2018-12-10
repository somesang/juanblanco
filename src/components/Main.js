import React, {Component} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/styles/prism';

class Main extends Component {
  render() {
    const JSExample = () => {
      const JSCodeEx = `var JuanBlanco = "An up and coming developer.";`;
      return (
        <div>
          <SyntaxHighlighter language="javascript" style={tomorrow}>
            {JSCodeEx}
          </SyntaxHighlighter>
        </div>
      );
    };

    const HTMLExample = () => {
			const HTMLCodeEx = 
`<div class="html-example">HTML Example</div>
  ^    ^           ^           ^         ^
tag  attribute  className   content   closing tag
`;
      return (
        <div>
          <SyntaxHighlighter language="html" style={tomorrow}>
            {HTMLCodeEx}
          </SyntaxHighlighter>
        </div>
      );
    };
    const CSSExample = () => {
      const CSSCodeEx = `.html-example {
	color: blue;
	font-family: 'Dank Mono';
	font-size: 16px;
}
`;
      return (
        <div>
          <SyntaxHighlighter language="css" style={tomorrow}>
            {CSSCodeEx}
          </SyntaxHighlighter>
        </div>
      );
    };
    const HTMLTags = () => {
			const Tags = `<!-- Here's a simple 'tooltip' -->
<div id="tooltip">
	<h1>Here's what HTML markup looks like</h1>
	<p class="main-copy red">Some copy in the body.</p>
	<div class="text-box">
		<p class="secondary-copy">Maybe there's some copy in here too</p>
		<ul>
			<li>Here's an unordered list with list items</li>
			<li>A list item</li>
			<li>Another list item</li>
			<li>It's nested in the "text-box" div</li>
		</ul>
	</div>
	<p>Below is an "a" tag with an "href" attribute used for links to different pages:</p>
	<a href="https://google.com">Google.com link</a>
	<!-- Notice how content is inside tags and how you can nest tags -->
</div>

`;
      return (
        <SyntaxHighlighter language="html" style={tomorrow}>
          {Tags}
        </SyntaxHighlighter>
      );
    };

    return (
      <div className="container">
        <h1 id="basic-syntax">Basic syntax</h1>
        <div className="code-block">
          <h2>HTML</h2>
          <p>The foundation and structure.</p>
          <p>
            First things first: Learn HTML, like really learn it. Honestly,
            there's nothing to it in the grand scheme of things. There's an
            opening tag, the contents, and a closing tag. Tags can have
						attributes like a class or id. The structure will 99% stay the same. Opening tag, attribute if needed, property of attribute, content, closing tag. Like this:
						<HTMLExample />
            Check out an actual component below. To be blunt, if HTML is{' '}
            <em>too complicated</em> for you, I have bad news.{' '}
            <a href="https://html.com/tags/" target="_blank">
              Here's a reference to all html tags
            </a>
            . You don't have to memorize them all, they'll come naturally when
            you need them and you'll know what to google for.
          </p>
          <HTMLTags />
          <h2>CSS</h2>
          <p>The styles applied to the structure.</p>
          <CSSExample />
          <h2>Javascript</h2>
          <p>The functionality of the elements.</p>
          <JSExample />
        </div>
      </div>
    );
  }
}

export default Main;
