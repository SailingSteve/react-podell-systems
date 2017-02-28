import React from 'react';


export default class ConsoleManagerComponent extends React.Component {
  render() {
    return (
    	<div style={indentedStyle}>
    		<h1><img src="./images/logo.gif" align="BOTTOM"/>Console Manager for NetWare, Version 2.1</h1>
			<h2>Works directly from the file server console without a client workstation.</h2>
			<ul>
				<li><b>Easier Access to DOS Partition</b></li>
				<li><b>Copy between DOS and NetWare</b></li>
				<li><b>Enhanced NLM Scheduler</b></li>
				<li><b>Copy between different servers on the WAN</b></li>
			</ul>
			<h2/>
			<p>San Francisco, CA -- Podell Systems, Inc., developer and manufacturer of easy-to-use Windows-like network management tools that work directly from the Novell server console, has announced the beta release of Console Manager for NetWare version 2.1, which is a major rework of the original product and incorporates many new significant features, improvements, and optimizations that were requested by end users. This release is Tested and Approved by Novell Labs for NetWare 3.x, 4.1, and SFT III.</p>
			<p class="c1"><a href="v210.htm">What is New in Version 2.1</a></p>
			<p>Console Manager for NetWare is designed to be fully functional without a client and to work directly from the Novell server console and also can be run through RCONSOLE on a client workstation. Console Manager for NetWare greatly enhances the limited server based command-line utilities supplied by Novell Inc. with a combination of utilities normally found in high end client based file managers, enhanced with powerful server-oriented functions, in a easy-to use Windows-like package.</p>
			<p class="c1" style={indentedStyle}><a href="./images/mnlgscrn.gif"><img src="./images/mnscrn.gif" align="middle" alt="** PLEASE DESCRIBE THIS IMAGE **" /></a>&nbsp;&nbsp;&nbsp;Console Manager Screens&nbsp;&nbsp;&nbsp;<a href="./images/dsklgmnu.gif"><img src="./images/dskmnu.gif" align="middle" alt="** PLEASE DESCRIBE THIS IMAGE **" /></a></p>
			<h5 class="c2" style={indentedStyle}>click to enlarge</h5>
			<p>NetWare users now have the ability to copy between file servers while working at the file server console: Any file or group of files can now be copied between any volumes on any two NetWare servers on the WAN. Appropriate login security is also provided. With release 2.1 of Console Manager for NetWare, systems administrators can now copy to and from the DOS partition with greater ease and can manipulate directories, find files, change attributes and more.</p>
			<p class="c1" style={indentedStyle}><a href="./images/dosacclg.gif"><img src="./images/dosacc.gif" align="bottom" alt="** PLEASE DESCRIBE THIS IMAGE **" /></a></p>
			<h5 class="c2" style={indentedStyle}>click to enlarge</h5>
			<p>Previously, in release 1 of Console Manager for NetWare, users could look at and access a file from the DOS partition, but had to remember its name and path in order to copy it. The NLM scheduler has also been greatly enhanced with the addition of five new commands that can be run at the console command line while Console Manager for NetWare is loaded: COPY, DELETE, PRINT, TYPETO, and PURGE.</p>
			<p class="c1" style={indentedStyle}><a href="./images/scdllg.gif"><img src="./images/scdl.gif" align="bottom" alt="** PLEASE DESCRIBE THIS IMAGE **" /></a></p>
			<h5 class="c2" style={indentedStyle}>click to enlarge</h5>
			<p>The new COPY command allows scheduled commands to copy files to and from remote servers. DELETE removes files from the local or remote servers. The new TYPETO command allows any feature in any NLM to be automatically controlled: For example MONITOR could be loaded at midnight, a PrintScreen could be taken of a memory utilization display, and then MONITOR could be unloaded. Console Manager for NetWare could be set to purge the subdirectory containing database journal files every night at a certain time. A PrintScreen could be taken of Console Manager's active connections every night at a certain time. Keystrokes could be sent to a NLM based database server to unload it at a certain time for backup.</p>
			<p>Podell Systems, founded in the Fall of 1992, is currently working on adding new features to both Console Manager for NetWare and Print Manager for NetWare and developing other, unique server-based network management tools. Podell Systems also develops and manufactures Print Manager for NetWare, which manages printer queues and provides all of the functionality of Novell's PCONSOLE.EXE at the server console.</p>
		</div>
    );
  }
}

const indentedStyle = {
 	marginLeft: "100px",
};
