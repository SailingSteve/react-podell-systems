import React from 'react';

export default class ContractComponent extends React.Component {
  render() {
    return (
    	<div>
        <h1>Podell Systems Software Contracting Services</h1>

        <p>Podell systems offers off site contract programming</p>
        <ul>
        	<li>Novell NetWare NLMs</li>
        	<li>Novell NetWare Windows Client Programs</li>
        	<li>Networking software</li>
        	<li>Windows Custom Programs</li>
        	<li>Embedded Microprocessor Firmware for Industrial Control</li>
        	<li>Scientific and Medical Instrument Firmware</li>
        	<li>Analog and Digital Custom Control Electronics Design</li>
        	<li>C, C++. Java, Assembly Language, Device Drivers</li>
      	</ul>
      	Contract options
      	<ul>
        	<li>Fixed Price Contracts Preferred</li>
        	<li>Hourly Services Available</li>
      	</ul>
      	In addition to our staff of software engineers who develop our retail
      	products, we also have an extensive network of contract programmers in
      	nearby Silicon Valley to draw on.&nbsp; Each one of our engineers has years
      	of industry experience and is uptodate on the latest technologies.
      	<br />&nbsp;
        <center>
          <table style={tableStyle} >
            <tbody>
              <tr>
                <td style={cellStyle}>
                  We deliver projects on time, and at a reasonable and fixed price.
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        Give us at call at 415/292-7700 to discuss your project.
        <br />
           To contact us via EMAIL&nbsp; <a href="mailto:sales@podell.com">sales@podell.com</a>
        <br/>
  		</div>
    );
  }
}

const tableStyle = {
	marginLeft: "200px",
	backgroundColor: "#80FFFF",
	border: "1px solid black",
	fontSize: "30px",
	padding: "15px"
};

const cellStyle = {
	backgroundColor: "#80FFFF",
	border: "1px solid black",
	fontSize: "30px",
	padding: "15px"
};
