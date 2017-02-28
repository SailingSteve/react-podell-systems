import React from 'react';

export default class Y2kComponent extends React.Component {
  render() {
    return (
    	<div style={indentedStyle}>
			<h1><img src="./images/logo.gif" align="BOTTOM"/></h1>
			<h2>Podell Systems, Year 2000 Compliance Statement:</h2>
			<br/>&nbsp;

			<p><b>Console Manager for NetWare is year 2000 compliant on all versions
			of NetWare that have been updated to be year 2000 compliant.</b></p>

			<p>Explanation:&nbsp; Console Manager was carefully designed to calculate
			all dates using CLIB functions.&nbsp; The benefit of this design decision
			is that, on any given server, if CLIB is up to date and the NetWare Operating
			System has Novell's year 2000 patches installed, then Console Manager will
			automatically calculate dates correctly.</p>
			<center>&nbsp;</center>

			<center>&nbsp;</center>

			<center>&nbsp;</center>

			<table style={tableStyle}>
				<tr>
					<td style={cellStyle}>
						<center>Novell's Latest Year 2000 patches are available at&nbsp;</center>
						<center>&nbsp;</center>
						<center><a href="http://support.novell.com/misc/patlst.htm#y2k">http://support.novell.com/misc/patlst.htm#y2k</a></center>
						<center></center>
						<center>or if the link has changed</center>
						<center><a href="http://support.novell.com/"></a></center>
						<center><a href="http://support.novell.com/">http://support.novell.com/</a></center>
						<center>&nbsp;</center>
					</td>
				</tr>
			</table>
			<center>&nbsp;</center>
		</div>
    );
  }
}

const indentedStyle = {
 	marginLeft: "100px",
};

const tableStyle = {
	marginLeft: "300px",
	backgroundColor: "#F5DEB3",
	border: "1px solid black",
	fontSize: "30px",
	padding: "15px"
};

const cellStyle = {
	backgroundColor: "#F5DEB3",
	border: "1px solid black",
	fontSize: "20px",
	padding: "10px"
};
