import React from 'react';

export default class Version312Component extends React.Component {
  render() {
    return (
    	<div style={{marginLeft: "10px", fontSize: "18px"}}>
    		<h2>Warning to NetWare 3.12 users who have loaded 312PT9&#58;</h2>

			<p>Within 312PT9 is a patch NLM named EAWRNFX.NLM that has a serious bug.
			If you have a command line command in an NCF file that requires and is
			presented with a command line that is longer than 100 characters long,
			EAWRNFX.NLM (3/19/96) will abend the server. The abend appears to corrupt
			the internal data space in NetWare and occasional causes a warm re-boot
			of the server.</p>

			<p>This problem is of special significance of to Console Manager customers
			who are using the command line COPY command to copy between servers since
			the command lines for these commands can get very long.</p>

			<p>Until there is a released 312pt9, we will make the updated NLM available here.</p>
			<br/>
			<div style={{marginLeft: "100px"}}>
				<h3>Updated patch NLM&nbsp;&nbsp;
					<a href="./images/EAWRNFX.ZIP">EAWRNFX.ZIP</a>
				</h3>
			</div>
			<br/><br/>

			<div style={emailStyle}>
				<p>
				Subject: Incident 120997<br/>
				Date: Mon, 21 Oct 1996 16:31:33 -0600 <br/>
				From: Rex Kuhn &lt;REX_KUHN@novell.com&gt; <br/>
				To: steve@podell.com
				</p>

				<p>Steve, I was able to reproduce the ABEND with the LONG.NLM, EAWRNFX.NLM,
				and the L101.NCF files. Thanks again for providing the files to assist
				in reproducing the ABEND.</p>

				<p>I discussed this problem with a CPR (Critical Problem Resolution) team
				engineer. He was aware of the problem, but he had not received any feedback
				from the customer as to whether the &quot;patched&quot; version of EAWRNFX.NLM
				resolved the problem. Therefore, the &quot;patched&quot; version was not
				included in 312PT9.</p>

				<p>It is important that I receive information in the form of results from
				you. If this NLM works for you and your customers, please let me know.
				If it works, then we will include it in the next release of the patch kit.
				Thanks for your help in this matter.</p>
				<br/>
				<p>Thank you.</p>
				<br/>
				<p>Rex Kuhn <br/>
				Software Engineer <br/>
				Novell Developer Support</p>
			</div>
			<p/>
			<br/>

			<p>Note from Podell Systems: We have tested the NLM and responded to Rex Kuhn. The updated NLM should be in the next 312PTx.</p>

			<p><br/></p>
		</div>
    );
  }
}

const emailStyle = {
	fontFamily: "Times New Roman",
	fontSize: "20px",
	marginLeft: "100px"

}