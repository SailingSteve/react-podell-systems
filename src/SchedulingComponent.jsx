import React from 'react';


export default class ConsoleManagerComponent extends React.Component {
  render() {
    return (
    	<div>
			<h2 align="CENTER"><img src="./images/logo.gif" height="107" width="87" align="CENTER"/>&nbsp;&nbsp;Easy to use Scheduling for Novell Servers</h2>

			<p>On Novell NetWare networks, there are certain administrative jobs that require manual intervention by an operator, often at late night when the users are not present. There are other simple jobs that need to be consistently executed on a daily or weekly basis that are good candidates for automation. Console Manager for NetWare provides the automation capability necessary to do these jobs. Console Manager, is a Novell Labs certified "Tested and Approved" NLM, that runs on the Novell file server console. Console Manager provides many significant, otherwise unavailable, utilities all combined in a familiar and consistent user interface. Console Manager is  a general purpose file manager that allows files to be manipulated and copied between volumes, servers, and the DOS boot-up partition. Console Manager also provides a large collection of NetWare server oriented integrated management features. Console Manager's automation capability resides in it's "Scheduled Commands" feature. NetWare batch files (NCF files) and individual NetWare 3.x/4.x console commands can be scheduled to beexecuted at any future time. Scheduled commands can be executed periodically: Daily, Weekly, Monthly, etc. or can be scheduled to execute once at some future time. In addition to loading and unloading NLMs (NetWare Loadable Modules), and the other native commands available at the NetWare file server, Console Manager extends the console command line interface with five additional commands:</p>
			<ul>
				<li>COPY Copy files between directories, volumes, or servers. Example:  Distributing databases or reports to other servers</li>
				<li>DELETE Delete files on the local server or on a remote server. Example: Delete database server error logs at a certain time of the week.</li>
				<li>PRINT Print files to any local print queue. Example: Print error report at a certain time to a certain printer.</li>
				<li>TYPETO Send keystrokes to the screen of any NLM loaded on the server. Example: Do an orderly unload of a database server by sending an Alt+E, then an Enter, then an Esc to the database server's screen.</li>
				<li>PURGE Purge a subdirectory. For example purge a database server's deleted transaction files each night.</li>
			</ul>

			<p>Most importantly the Console Manager scheduling feature is very simple to use. There is no new complex scripting language to learn. Any feature in any NLM, including the features of Console Manager itself, can be automated.</p>

			<center>
				<p><a href="./images/scdllg.gif"><img src="./images/scdl.gif" height="70" width="90" align="BOTTOM"/></a>
					&nbsp;Click on picture for better view 
				</p>
			</center>

			<p>This screen capture shows the entry form filled in for automatically unloading Btrieve at a certain time each week -- that is all there is to it. Console Manager whenever possible uses the same keystrokes that the Microsoft Windows uses, so most new users never need to look at the users manual.</p>

			<p><b>Customer's have used Console Manager's Scheduling feature to:</b></p>

			<ul><li>Unload the Btrieve (or Oracle or Sybase) database server guaranteeing that the database files will be closed and consistent before running a tape backup system. Then after the tape backup has been run, the database server is reloaded by another scheduled command.</li>

			<li>Copy pricing databases over the WAN at night to remote servers in all of the stores.</li>

			<li>Copy files from multiple servers to a central server for night-time post processing.</li>

			<li>Delete database transaction files that prevent the Database server from restarting.</li>

			<li>Have a printed error report from the previous week waiting at the administrators printer every Monday morning.</li>

			<li>Create a file that is used as to flag the start up a client based process.</li>

			<li>Resetting the NetWare Router each night.</li>

			<li>Purging a directory that has lots of transaction files in it. Volumes may also be purged in entirety.</li>

			<li>Downing and restarting a NetWare 3.12 server early Sunday morning to reallocate all of the memory pools.</li>

			<li>Taking a printscreen of MONITOR.NLM's cache utilization statistics every hour and sending it to the administrator's printer.</li>
			</ul>

			<p><b>Scheduling is one of many powerful, yet easy to use features in Console Manager for NetWare.</b></p>

			<p>In the early 1980's, servers were isolated on separate LANs and there was little need for direct contact with the console. In the 1990's with
			complex wide area networks, database servers, internetwork Routers and Mainframe gateways, the server room is a much busier and more critical
			place. Client side network management tools have evolved enormously and are very appropriate tools for solving many problems. Server side network
			management tools have barely evolved at all. Console Manager was designed to put the most commonly used client side tools with a collection of NetWare
			specific server side tools in one consistent easy to use application on the file server, where it is needed. Console Manager is commonly run through
			RCONSOLE from a client workstation. We at Podell Systems are dedicated to finding and resolving poorly addressed network administration problems,
			and working to make LAN administrators and Network Engineers more productive through the creation of superior and unusual software tools. We work closely
			with Novell Labs to achieve the "Tested and Approved" certification for all of our products. We also maintain close contact with the Novell
			R&amp;D departments: Console Manager has been used at Novell to help test their recent new products and as a result has been certified on NetWare
			3.x, NetWare 4.1, InterNetWare 4.11. We are currently hard at work on customer requested new features for Console Manager, and on other products in our
			evolving family of network tools.</p>
		</div>
    );
  }
}



