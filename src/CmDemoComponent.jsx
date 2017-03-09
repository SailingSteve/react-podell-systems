import React from 'react';


export default class ConsoleManagerComponent extends React.Component {
  render() {
    return (
    	<div style={{marginLeft: "10px", fontSize: "18px"}}>
			<center><table style={tableStyle}>
			<tbody>
				<tr>
					<td style={cellStyle}>
						<center><p>Console Manager for NetWare<br/>
						Free 30 Day Demo</p></center>
					</td>
				</tr>
			</tbody></table></center>

			<p><font size="+1">Console Manager Version 2.10d Demo</font></p>

			<ul>
				<p><font size="+1">Same as the currently shipping released product.<br/>
				New NDS login feature, gets you going quickly.<br/>
				Minor bug fixes from the 2.10 version.<br/>
				Demo expires after 30 days.<br/>
				All configurations, scheduled jobs, and saved changes are retained when the product is purchased and installed.<br/>
				<br/>
				<a href="./images/condemo.exe">Download the demo version 2.10d</a></font></p>
			</ul>
			<ul>
				<p><img src="http://www.hooked.net/cgi-bin/counter?corp/podell/demo" height="16" width="56"/></p>
			</ul>
		</div>
    );
  }
}


const tableStyle = {
	backgroundColor: "#F5DEB3",
	border: "1px solid black",
	fontSize: "30px"
};

const cellStyle = {
	padding: 5,
};
