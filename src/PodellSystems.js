import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar, Panel } from 'react-bootstrap';
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

// https://facebook.github.io/react/docs/thinking-in-react.html
// http://codepen.io/snakajima/pen/JbYQvL?editors=0010
// https://react-bootstrap.github.io/components.html#navigation
// http://stackoverflow.com/questions/42053078/getting-a-json-error-after-importing-react-bootsrap-components-into-fb-create-re/42091624#42091624


class NavbarInstance extends React.Component {
  constructor(props) {
    super(props);
    this.onNavSelect = this.onNavSelect.bind(this);
  }

  onNavSelect(eventKey) {
    console.log(eventKey);
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
               <MenuItem eventKey={2.2} onSelect={this.onNavSelect}>Print Manager for Netware</MenuItem>
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

const faviconStyle = {
  maxWidth: "100%",
  height: "auto"
};

 
class WorkArea extends React.Component {
  render() {
    var key = this.props.eventKey;

    switch(key) {
      case 2.1: return(<div><ConsoleManagerComponent /></div>);
      case 2.2: return(<div><PrintManagerComponent /></div>);
      case 3.1: return(<div><PcWeekComponent /></div>);
      case 3.2: return(<div><LanTimesComponent /></div>);
      case 3.3: return(<div><CertsComponent /></div>);
      case 4.1: return(<div><CmDemoComponent /></div>);
      case 4.2: return(<div><CmDemoComponent /></div>);
      case 5.1: return(<div><SchedulingComponent /></div>);
      case 5.2: return(<div><UpdatesComponent /></div>);
      case 5.3: return(<div><Version312Component /></div>);
      case 5.4: return(<div><Y2kComponent /></div>);
      case 6.1: return(<div><AboutComponent /></div>);
      case 6.2: return(<div><HistoryComponent /></div>);
      case 6.3: return(<div><ContractComponent /></div>);
      case 6.4: return(<div><WeatherComponent /></div>);
      case 6.5: return(<div><DanceLike1999Component /></div>);
      default:  return(<div/>);
    }
  }
}

// The filtered table, make a local handler handleUserInput, that listens for state variable changes, and responds by re-rendering the component
class  PodellSystemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: ''
    };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(eventKey) {
    this.setState({
      eventKey: eventKey
    });
  }

  render() {
    return (
      <div>
        <header>
           <NavbarInstance onUserInput={this.handleUserInput} />
        </header>
        <WorkArea eventKey={this.state.eventKey} />
        <div id="pageContent" ></div>    
    </div>
     );
  }
}



ReactDOM.render(
  < PodellSystemsPage  />,
  document.getElementById('container')
);
