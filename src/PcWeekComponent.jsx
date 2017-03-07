import React from 'react';


export default class ConsoleManagerComponent extends React.Component {
  render() {
    return (
    	<div>
			<h4><img src="./images/pcweek.gif" align="BOTTOM"/> March18, 1996 - page N11</h4>
			<h4>Lab Note</h4>
			<h2>Utility provides door to NetWare</h2>
			<p> By Charles Lin</p>
			<p>Quick: What do you do when a hardware failure brings your LAN to its knees and you desperately need to retrieve a file from a NetWare partition?</p>
			<p>Unless you've got Version 2.0 of Podell Systems Inc's Console Manager, you pound the wall.</p>
			<p>Providing convenience that every administrator can appreciate, the $425 utility brings together key features of MONITOR.NLM, INSTALL.NLM, and NetWare partition accessibility via NetWare's server console. Released last week, Console Manager also cuts system overhead by removing the necessity of having client workstation in the server room.</p>
			<p>PC Week Labs was particularly impressed that Console Manager let us maneuver through directories in both DOS and NetWare partitions from the server console --this ability will prove invaluable to those administrators looking for a specific NLM among the scads they've collected over the years. Using ASCII-based graphics, its interface let us prowl through directories with ease.</p>
			<p>Console Manager allowed us to copy files from a DOS partition to a NetWare partition and vice versa; until now, there had to be a second machine attached to the NetWare partition. The utility also let us manipulate files in any mounted volume from either the local server or another file server.</p>
			<center>GETTING ROUND ABOUT</center>
			<center>Console Manager let us maneuver</center>
			<center>through directories in both DOS</center>
			<center>and NetWare partitions from the server</center>
			<center>console--a very useful feature</center>
			<center>when trying to locate a specific NLM.</center>
			<p></p>
			<center> ADDENDUM, NOT A REPLACEMENT</center>
			<p>Although it's not a replacement for INSTALL.NLM, Console Manager provides some of the more frequently used portions of that Novell Inc. utility.</p>
			<p>For instance, instead of loading INSTALL.NLM to edit AUTOEXE.NCF and STARTUP.NCF, Console Manager can edit both, as well as any text file on the NetWare partition.</p>
			<p>Console Manager let us navigate throughout the directory tree to load and unload any NLM. However, we discovered that loading the modules from the DOS partition still required us to enter the full file path. A simple workaround is to browse the DOS partition for the file and then copy it to the NetWare partition, where it will always be within easy reach.</p>
			<p>One very useful Console Manager feature we found is its inclusion of a real-time CPU utilization counter on the menu bar. And although utilization percentage can be viewed using NetWare's MONITOR.NLM, Console Manager goes one step further and incorporates CPU utilization figures and a real-time system clock in its screen saver. Instead of NetWare's crawling worm screen saver, Console Manager's screen saver gave us a reassuring glance at system performance.</p>
			<center>DO IT LATER</center>
			<p>Console Manager also let us schedule various tasks from the NetWare console--say, server backup--as long as the task can be initiated from the command line.</p>
			<p>Much like a macro language, we were also able to schedule delivery of keystrokes to any console view. By experimenting with the macro, almost any job can be automated, no matter how complex.</p>
			<p>For instance, by scheduling jobs that activated the serial port of the server and then loading a remote-management package, we were able to specify a window of time in which the server could be managed remotely. This is a terrific way to allow administrators to periodically check on remote servers without leaving a system vulnerable all the time.</p>
			<p>Anyone currently managing multiple NetWare servers will find Console Manager an incredible bargain.</p>
			<p>Based in San Francisco, Podell Systems can be reached a (800) 350-0001. </p>
			<p>_______________________________________</p>
			<p>Charles Lin is a free-lance writer based in New York.</p>
			<p></p>
			<center><a href="http://www.pcweek.com/">Checkout the PC Week web site.</a></center>
		</div>
    );
  }
}
