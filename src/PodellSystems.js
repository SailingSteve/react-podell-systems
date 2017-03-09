import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar, Panel,
         Button } from 'react-bootstrap';
import ConsoleManagerComponent from './ConsoleManagerComponent.jsx';
import PrintManagerComponent from './PrintManagerComponent.jsx';
import PcWeekComponent from './PcWeekComponent.jsx';
import SchedulingComponent from './SchedulingComponent.jsx';
import LanTimesComponent from './LanTimesComponent.jsx';
import CmDemoComponent from './CmDemoComponent.jsx';
import Version312Component  from './Version312Component.jsx';
import UpdatesComponent  from './UpdatesComponent.jsx';
import AboutComponent  from './AboutComponent.jsx';
import HistoryComponent  from './HistoryComponent.jsx';
import WeatherComponent from './WeatherComponent.jsx';
import ContractComponent from './ContractComponent.jsx';
import Y2kComponent from './Y2kComponent.jsx';
import DanceLike1999Component from './DanceLike1999Component.jsx';
import CertsComponent from './CertsComponent.jsx';
import V210Component from './V210Component.jsx';


class NavbarInstance extends React.Component {
  constructor(props) {
    super(props);
    this.onNavSelect = this.onNavSelect.bind(this);
  }

  onNavSelect(eventKey) {
    console.log('onNavSelect eventKey = ' + eventKey);
    this.props.onUserInput(eventKey);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand pullLeft>
             &nbsp;&nbsp; <a href="http://podell.com/podellsystems/">Podell Systems</a> 
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
             <NavDropdown eventKey={2} title="Products" id="basic-nav-dropdown">
               <MenuItem eventKey={2.1} onSelect={this.onNavSelect}>Console Manager for NetWare</MenuItem>
               <MenuItem eventKey={2.2} onSelect={this.onNavSelect}>&nbsp;&nbsp;Console Manager V2.10</MenuItem>
               <MenuItem eventKey={2.3} onSelect={this.onNavSelect}>Print Manager for Netware</MenuItem>
              </NavDropdown>
             <NavDropdown eventKey={3} title="Reviews" id="basic-nav-dropdown">
               <MenuItem eventKey={3.1} onSelect={this.onNavSelect}>PC Week review of Console Manager</MenuItem>
               <MenuItem eventKey={3.2} onSelect={this.onNavSelect}>LAN Times preview on Console Manager</MenuItem>
               <MenuItem eventKey={3.3} onSelect={this.onNavSelect}>NetWare Certifications</MenuItem>
              </NavDropdown>
             <NavDropdown eventKey={4} title="Demos" id="basic-nav-dropdown">
               <MenuItem eventKey={4.1} onSelect={this.onNavSelect}>Download a free Console Manager 30 day Demo</MenuItem>
               <MenuItem eventKey={4.2} onSelect={this.onNavSelect}>Download a free Print Manager 30 day Demo</MenuItem>
              </NavDropdown>
             <NavDropdown eventKey={5} title="Support" id="basic-nav-dropdown">
               <MenuItem eventKey={5.1} onSelect={this.onNavSelect}>Scheduling events with Console Manager</MenuItem>
               <MenuItem eventKey={5.2} onSelect={this.onNavSelect}>Updates to Console Manager</MenuItem>
               <MenuItem eventKey={5.3} onSelect={this.onNavSelect}>Important Note for 3.12 312PT9 users</MenuItem>
               <MenuItem divider />
               <MenuItem eventKey={5.4} onSelect={this.onNavSelect}>Year 2000 Notice</MenuItem>
              </NavDropdown>
             <NavDropdown eventKey={6} title="About" id="basic-nav-dropdown">
               <MenuItem eventKey={6.1} onSelect={this.onNavSelect}>Podell Systems</MenuItem>
               <MenuItem eventKey={6.2} onSelect={this.onNavSelect}>History of Podell Systems</MenuItem>
               <MenuItem eventKey={6.3} onSelect={this.onNavSelect}>Contract Programming and System Design</MenuItem>
               <MenuItem eventKey={6.4} onSelect={this.onNavSelect}>Weather in San Francisco</MenuItem>
               <MenuItem divider />
               <MenuItem eventKey={6.5} onSelect={this.onNavSelect}>1999 Website</MenuItem>
              </NavDropdown>
          </Nav>
         </Navbar.Collapse>
      </Navbar>
    );
  }
}

class WorkArea extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
    this.onClose = this.onClose.bind(this);
  }

  onClose(eventKey) {
    console.log('onNavSelect eventKey = ' + eventKey);
    this.props.handleCloseButton();
  }


  render() {
    var key = this.props.eventKey;
    const comp = ModalContentX(key);
    console.log('WorkArea open =  ' + this.state.open); 

    if(key == 0) {
       return(<div />);
    }
    else {
      return (
        <div>
         <Panel collapsible expanded={this.state.open} style={panelStyle}>
          {comp}
          </Panel>
          <div style={centerButton}>
            <Button onClick={this.onClose}>Close</Button>
          </div>
        </div>
      );
    }
  }
}

const panelStyle = {
  marginLeft: "20px",
  marginRight: "20px",
  paddingTop: "10px",
  paddingRight: "5px",
  paddingBottom: "10px",
  paddingLeft: "5px"
}

const centerButton = {
  textAlign: "center",
  paddingBottom: "10px"
}

function ModalContentX(props) {
    console.log('ModalContentX2 props = ' + props);

    switch(props) {
      case 2.1: return(<div><ConsoleManagerComponent key="cm" /></div>);
      case 2.2: return(<div><V210Component key="v2" /></div>);
      case 2.3: return(<div><PrintManagerComponent key="pm" /></div>);
      case 3.1: return(<div><PcWeekComponent key="pc" /></div>);
      case 3.2: return(<div><LanTimesComponent key="lt" /></div>);
      case 3.3: return(<div><CertsComponent key="c"/></div>);
      case 4.1: return(<div><CmDemoComponent key="cd1" /></div>);
      case 4.2: return(<div><CmDemoComponent key="cd2" /></div>);
      case 5.1: return(<div><SchedulingComponent key="s" /></div>);
      case 5.2: return(<div><UpdatesComponent key="u" /></div>);
      case 5.3: return(<div><Version312Component key="v312" /></div>);
      case 5.4: return(<div><Y2kComponent key="y2k" /></div>);
      case 6.1: return(<div><AboutComponent key="a" /></div>);
      case 6.2: return(<div><HistoryComponent key="h" /></div>);
      case 6.3: return(<div><ContractComponent key="con" /></div>);
      case 6.4: return(<div><WeatherComponent  key="2"/></div>);
      case 6.5: return(<div><DanceLike1999Component  key="1999"/></div>);
      default:  return(<div  key="def">default</div>);
    }
 }

// The filtered table, make a local handler handleNavbarSelection, that listens for state variable changes, and responds by re-rendering the component
class  PodellSystemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: 0.0,
      showPanel: false
    };
    
    this.handleNavbarSelection = this.handleNavbarSelection.bind(this);
    this.handleCloseButton     = this.handleCloseButton.bind(this);
  }

  handleNavbarSelection(eventKey) {
    console.log('handleNavbarSelection eventKey = ' + eventKey);
    var sp = ( eventKey > 0 );
    this.setState({
        eventKey: eventKey,
        showPanel: sp
    });
   }

  handleCloseButton() {
    this.setState({
      eventKey: 0.0,
      showPanel: false
    });
  }

  render() {
    return (
      <div>
        <header>
           <NavbarInstance onUserInput={this.handleNavbarSelection} />
        </header>
        <WorkArea eventKey={this.state.eventKey} showPanel={this.state.showPanel} handleCloseButton={this.handleCloseButton} />
        <div id="pageContent" ></div>    
    </div>
     );
  }
}

ReactDOM.render(
  < PodellSystemsPage  />,
  document.getElementById('container')
);

const faviconStyle = {
  maxWidth: "100%",
  height: "auto"
};

