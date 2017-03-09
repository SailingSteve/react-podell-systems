import React from 'react';
import ImageTable from './ImageTable.jsx';

export default class V210Component extends React.Component {
  render() {
  	   return (
 			 	<div style={{marginLeft: "10px", fontSize: "18px"}}>
				  <h2>New Features in Release 2.10</h2>
				  <ol>
			    <li>Major enhancement to DOS partition access:  delete files, make and remove
			      directories, find files, load NLMs, edit files, and change file attributes.  In 
			      addition for every file -- date, time,  size, and attributes are displayed. 
			      Directly edit DOS partition files without copying them to NetWare first.
	          <ImageTable smallImg="./images/dosacc.gif" largeImg="./images/dosacclg.gif" label="enlarge" title="V2.1 DOS Partition Enhancements" 
                       tableStyle={tableStyle} cellStyle={cellStyle} />
			    </li>
			    <li>Ability to run an NCF file on multiple selected days of the week.  The &quot;weekly&quot; dialog now has push buttons 
			      instead of radio buttons, so multiple days can be selected.
	          <ImageTable smallImg="./images/dw.gif" largeImg="./images/dwlg.gif" label="enlarge" title="V2.1 Scheduling Enhancements" 
                       tableStyle={tableStyle} cellStyle={cellStyle} />
			    </li>
			    <li>Significant upgrade to the integrated text editor.
		        <ul>
							<li>Cut and paste editing is now supported.</li>
							<li>Read in another file to the currently edited file.</li>
							<li>&lt;Ctrl+RightArrow&gt; and &lt;Ctrl+LeftArrow&gt;to move between words in the editor.</li>
							<li>List of the last 5 files edited are now listed at the bottom of the Edit menu, to provide instant edit access.</li>
							<li>Word processing files are now broken into 80 character lines for editing. Binary characters are now converted to viewable characters.</li>
						</ul>
	          <ImageTable smallImg="./images/te.gif" largeImg="./images/telg.gif" label="enlarge" title="V2.1 Text Editor Enhancements" 
                       tableStyle={tableStyle} cellStyle={cellStyle} />
					</li>
					<li>A list of file locks that each user/connection has in place (View menu, File Locks item).  Also a list of locks for a given file, and what
						user/connection has asserted them(Server menu, Connections Dialog, Lock button).
	          <ImageTable smallImg="./images/clfs.gif" largeImg="./images/clfslg.gif" label="enlarge" title="File Locks Display Enhancements" 
                       tableStyle={tableStyle} cellStyle={cellStyle} />
					</li>
					<li>A new PURGE command has been added to the system console screen for easier automation of purges.
	          <ImageTable smallImg="./images/ps.gif" largeImg="./images/pslg.gif" label="enlarge" title="Purge Command Enhancements" 
                       tableStyle={tableStyle} cellStyle={cellStyle} />
					</li>
					<li>The AUTOEXEC.NCF can now be easily edited when placed on the C: Drive.  The locations of AUTOEXEC.NCF and STARTUP.NCF are now persistent. </li>
					<li>Trustee rights are (optionally) preserved on copies between servers.  (When same named users are configured.) </li>
					<li>Optional long file names viewer for Macintosh and Windows 95 (Preferences dialog, Long name space display item).</li>
					<li>Audit logs that show final status and any errors on file copys (configurable/optional).</li>
					<li>Overwrite warnings on copy/move.  Allows overwrite if user says to for ALL.</li>
					<li>File server list is now alphabetically sorted. </li>
					<li>A new button Clears all of the attributes in the F7 dialog. </li>
				</ol>
			</div>
    );
  }
}

const tableStyle = {
	marginLeft: "25px",
	padding: "15px",
	tableLayout: "auto"
};

const cellStyle = {
	padding: "15px",
	width:   "160px",
	textAlign: "center",
    verticalAlign: "middle"
};
