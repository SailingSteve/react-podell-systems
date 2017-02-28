import React from 'react';

export default class HistoryComponent extends React.Component {
  render() {
    return (
    	<div style={indentedStyle}>

			<h1>The History of Podell Systems</h1>
			 
			<p><img src="./images/logo.gif"/></p>
			

			<p>Podell Systems is dedicated to finding and resolving poorly addressed
			network administrative problems and working to make LAN administrators
			and network Engineers more productive through the creation of superior
			and unusual software tools.</p>

			<p>Steve Podell, President of Podell Systems, founded the company in 1992
			as a result of his work with Phaser Systems. Steve Podell was VP of Engineering
			at Phaser Systems, a software startup company owned by Ray Noorda, CEO
			of Novell. Phaser Systems, based in South San Francisco, was developing
			a line based on SNA internetwork Routers. One of these products, the <i>SNA
			Links</i> was purchased in entirety by Novell, and today is sold as part
			of Novell as part of their <i>NetWare for SAA</i> product line.</p>

			<p>The lab at Phaser had dozens of NetWare 3.x servers which were used
			to evaluate Router output and compatibility issues in the products from
			Phaser and Novell, in combination with IBM SNA and Mainframe based products.
			The test configurations included multiple file server internetworks, these
			test setups were configured and broken apart many times a day.</p>

			<p>It was a perpetual problem finding an available client workstation to
			help configure the servers, since the workstations were often &quot;stolen&quot;
			for use in other test setups, or were taken out of the lab and into the
			office area. When setting up the internetworks, prior to the network coming
			up, a client was needed at each server for administration. Token ring was
			used to talk to the IBM 3174 communication multiplexers and twisted pair
			or coaxial Ethernet were the most common topologies in the lab, there never
			seemed to be enough appropriately configured client machines. Reconfiguring
			network interface cards in a client for the sole reason of changing a software
			configuration file on the server, was a common, but painfully time wasting
			occurrence.</p>

			<p>It was common at Phaser to be testing many similarly named NLMs for
			different SNA topologies. As anyone knows, who has spent a fair amount
			of time working with NetWare servers, if you don't know the name of an
			NLM you can't load it, and you can't find the name of an NLM from the server
			with the standard NetWare 3.11 server utilities. Also, even if you know
			the name of an NLM, you sometimes can't remember it's location in the directory
			structure (to look for README.TXT files) or the command line arguments
			necessary to successfully load the NLM.</p>

			<p>There are a good number of other common activities that you just can't
			do from the server with the Novell utilities, like editing or printing
			a text file, changing or making a new directory, or even copying a file
			from the floppy disk drive. Not to mention more sophisticated activities
			like scheduling a console command for later execution or the loading of
			an NLM at a specific time.</p>

			<p>So while at Phaser, Steve Podell did a literature search on CompuServe,
			trying to find some third party utilities that would allow the software
			engineers to perform some simple operations directly on the server without
			having to &quot;go down the hall&quot; to a client workstation. A few little
			command line shareware tools were found, but they were uncertified NLMs
			and there were some legitimate concerns about bringing anonymous and minimally
			tested NLMs into Phaser's lab. There were also a few third party C- Worthy/NUT
			based utilities that addressed pieces of the problem, but these were mostly
			uncertified and did not really address the big picture of configuring file
			servers. (NUT is the C- Worthy derived user interface tool that MONITOR.NLM
			and others use to manage the on screen user interface.)</p>

			<p>In the fall of 1992, Steve Podell left Phaser and started Podell Systems,
			a NetWare file server tools company. Podell Systems, started out as three
			people working out of their homes and communicating via voice mail and
			CompuServe: Steve Podell as President, David Neale as VP of Engineering,
			and Tom McLamore as VP of Marketing and Sales.</p>

			<p>During the development stage, Podell Systems worked with a number of
			NetWare users to help refine the concept of the <i>Console Manager for
			NetWare.</i> None of these power users liked the standard Novell C- Worthy/NUT
			user interface (exemplified by &quot;Press Esc when done&quot;, to <i>save</i>
			your setup!). Users clearly wanted a Windows like user interface. The development
			team, working within the constraints provided by the character mode displays
			used by NetWare servers, ported a sophisticated character mode windowing
			package to native NetWare so that it could generate User Interface NLMs
			without having to use NUT.NLM.</p>

			<p>Then piece by piece, with careful testing every step of the way, the
			development team built up the <i>Console Manager for NetWare</i> NLM. It
			is an absolutely unique product, that is so helpful that it has been used
			it internally for months at Podell Systems <i>as it was being built.</i>
			It is designed in an extremely robust manner, and was designed from day
			one to meet and in many cases exceed the Novell NLM certification requirements.
			Novell labs subsequently granted full &quot;Tested and Approved&quot; certification
			status to the <i>Console Manager for NetWare</i> NLM, on all current NetWare
			operating systems: NetWare 3.11, 3.12, and 4.10, NetWare SFT , NetWare
			SMP, and soon on NetWare 4.11. Podell Systems is now shipping <a href="http://www.hooked.net/podell/cminfo.htm">Console
			Manager for NetWare V.2.10</a> and also has released a new product <a href="http://www.hooked.net/podell/pminfo.htm">Print
			Manager for NetWare</a>. </p>

			<p>Currently, Podell Systems working on future versions of Console Manager
			for NetWare. We are also working on efforts for new features for Print
			Manager and are continuing to work on other products in our evolving family
			of network tools.</p>

			<p>Podell Systems is now located into a much larger facility at 3701 Sacramento
			Street, in <a href="http://www.hooked.net/podell/sanfran.htm">San Francisco</a>,
			where all Marketing, Sales, Engineering, and Support efforts are centralized.</p>
			<br/>
			<br/>
			After a long good run, with the dot com bust coming on strong in 2001, Podell Systems ceased operations in an orderly way.
	 		<br/><br/>
		</div>
    );
  }
}

const indentedStyle = {
 	marginLeft:  "100px",
 	marginRight: "100px",
}

