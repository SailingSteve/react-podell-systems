import React from 'react';

export default class CertsComponent extends React.Component {
  render() {
    return (
    	<div style={indentedStyle}>
    		<h2><img src="./images/logo.gif"> Podell Systems, Inc.</img> has partnered with <img src="./images/Novell.jpg" /></h2>
    		<br/>
    		<h3>
				<a href="http://netwire.novell.com/home/novlabs/"><img alt="" src="./images/YesNetware.jpg" height="100" /></a>
				Console Manager has been fully tested and certified by <a href="http://netwire.novell.com/home/novlabs/">Novell Labs</a>			
				<a href="http://netwire.novell.com/home/novlabs/"><img alt="" src="./images/TestedAndApproved.png" /> </a>
			</h3>
			<a href="http://devsup.novell.com/"><img alt="" src="./images/dnlogo.gif"/></a>
			<br/>
		</div>
    );
  }
}

const indentedStyle = {
 	marginLeft: "100px",
};

