import React from 'react';


export default class PrintManagerComponent extends React.Component {
  render() {
    return (
    	<div  style={indentedStyle}>
			<h2><img src="./images/logo.gif" align="BOTTOM"/> PrintManager for NetWare</h2>
			<p>Print Manager for NetWare is a one more powerful tool to have at hand to make a LAN administrator's time more productive.  If all it did was to manage print queues, it would be invaluable at many sites.  Print Manager's ability to view print jobs while they are in the queue is one more powerful feature that is not available elsewhere.</p>
			<p>Print Manager compliments and works cooperatively with Podell's Console Manager for NetWare, a console based file manager and NLM scheduler.  Print Manager manages printer queues directly from the server console without a dedicated client, and has a convenient Windows® style user interface.  Print Manager for NetWare provides all of the functionality of Novell's PCONSOLE.EXE, <i>and more</i>, at the server console.</p>
			<p>With Print Manager for NetWare, queued text files can be viewed on screen, queues can be held from spooling, queue operators can be specified, and queues can be created or destroyed.</p>
			<p  style={indentedStyle}><a href="./images/quepmssl.gif"><img src="./images/quepmss.gif"></img></a></p>
			<h5 style={indentedStyle}><strong><b>click to enlarge</b></strong></h5>
			<p>The software utility will allow print server definitions to be created, modified, or removed.  Queues can be associated with servers, and printer definitions can be changed.  Many of these same operations can be performed directly on the data displayed on the screen.  The Print Server screen allows the administrator to modify print server definitions that can be run with the NetWare 3.x PSERVER.NLM, with PSERVER.EXE running on a dedicated PC, and with external hardware print servers (from HP, Intel, Eagle, and others).</p>
			<p  style={indentedStyle}><a href="./images/defpmssl.gif"><img src="./images/defpmss.gif"></img></a></p>
			<h5 style={indentedStyle}><strong><b>click to enlarge</b></strong></h5>
			<p>This first release of Print Manager for NetWare manages NetWare® 4.x queues, but does not modify 4.x Directory Services print Server definitions.</p>
			<p></p>
		</div>
    );
  }
}

const indentedStyle = {
 	marginLeft: "100px",
};
