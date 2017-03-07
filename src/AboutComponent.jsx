import React from 'react';

export default class AboutComponent extends React.Component {
  render() {
    return (
    	<div>
			<h1>About Podell Systems</h1>
			<h2><img src="./images/logo.gif"> Podell Systems, Inc.</img></h2>
			<dl>
			<dd>
			<i>3701 Sacramento Street, Suite 350</i></dd>

			<dd>
			<i>San Francisco, CA 94118</i></dd>
			</dl>

			<dl>
			<dd>
			<i>415/292-7700</i></dd>

			<dd>
			<i>800/350-0001</i></dd>

			<dd>
			<i>415/292-6938 Fax</i></dd>
			</dl>
			Podell Systems is located in the marina district of <a href="http://www.podell.com/podell/sanfran.htm">San
			Francisco</a>
			<dl>
			<dd>
			Contacting us via email</dd>
			</dl>

			<dl>
			<dd>
			<b>Sales and Pricing</b> <a href="mailto:sales@podell.com">sales@podell.com</a></dd>

			<dd>
			<b>Technical Support</b> <a href="mailto:support@podell.com">support@podell.com</a></dd>

			<dd>
			<b>Order Status</b> <a href="mailto:nancy@podell.com">nancy@podell.com</a></dd>
			</dl>
			<br/>
		</div>
    );
  }
}

const emailStyle = {
	fontFamily: "Times New Roman",
	fontSize: "18px"
}

const tableStyle = {
	marginLeft: "200px",
	backgroundColor: "#80FFFF",
	border: "1px solid black",
	fontSize: "30px",
	padding: "15px"
};

const cellStyle = {
	backgroundColor: "#80FFFF",
	border: "1px solid black",
	fontSize: "30px",
	padding: "15px"
};
