import React from 'react';

export default class UpdatesComponent extends React.Component {
  render() {
    return (
    	<div style={{marginLeft: "10px", fontSize: "18px"}}>
			<h1>Updates to Console Manager</h1>
			<h2 align="LEFT"><strong><b>Upgrades</b></strong></h2>
			<table style={tableStyle}>
				<tbody>
					<tr>
						<td style={cellStyle}><strong>1.xx to 2.10</strong></td>
						<td style={cellStyle}><strong>$100.00</strong></td>
					</tr>
					<tr>
						<td style={cellStyle}><strong>2.00 to 2.10</strong></td>
						<td style={cellStyle}><strong>$ 75.00</strong></td>
					</tr>
				</tbody>
			</table>
			<br/>
			<p>Call or Email Us for Upgrades</p>
			<br/>
			<h2>What&apos;s New in 2.10</h2>
			<h2>Fixes in Version 2.00c:</h2>

			<ol>
			<li>CLIB 4.10h (dated April 16, 1996 in LIBUP8.EXE) for NetWare 4.10,
			introduced a problem where the screen saver jammed on and would restart
			immediately after each keystroke.</li></ol>
			<h2>Fixes in Version 2.00b:</h2>
			<ol>
			<li>The word &quot;February&quot; was misspelled inside the Console NLM, as a
			result, the Maintain Error Logs feature was not correctly removing entries made
			in February.</li>
			<li>Problems with the delete key while editing files were fixed.</li></ol>
			<h2>Fixes in Version 2.00a:</h2>
			<ol>
			<li>The scheduled event queue name was changed from &quot;PTOOLSQ_0&quot; to
			CMQ_server, where &quot;server&quot; is the name of the server. This change is
			needed for 4.x servers where multiple servers are installed in the exact same
			context. This fix will cause the older style event queue to be abandoned.</li>
			<li>On the View menu, the letter 'D' was highlighted in both &quot;Deselect All&quot;
			and in &quot;File Details&quot;, therefore pressing the 'D' key would not always
			open the desired function.</li>
			<li>Dismounted CD-ROM volumes were not being handled correctly. In some cases
			could cause an abend if the volume was refreshed with F10 or automatically
			refreshed.</li>
			<li>Volumes that were greater than 4 gigabyte in size, were not always
			displaying the correct sizes in bytes in volume information fields.</li></ol>
		</div>
    );
  }
}

const emailStyle = {
	fontFamily: "Times New Roman",
	fontSize: "18px"
};

const tableStyle = {
	marginLeft: "200px",
	backgroundColor: "#F5DEB3",
	border: "1px solid black",
	fontSize: "30px",
	padding: "15px"
};

const cellStyle = {
	backgroundColor: "#F5DEB3",
	border: "1px solid black",
	fontSize: "30px",
	padding: "15px"
};