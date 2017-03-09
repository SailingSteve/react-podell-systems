import React from 'react';
import { Modal, Button } from 'react-bootstrap';


export default class BigImageModal extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      show: false
    };
  }

  render() {
  	var source = this.props.source;
  	var label  = this.props.label;  	
  	var title  = this.props.title;

    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          {label}
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
          dialogClassName="big-image-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={source}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// line 31,       <div className="modal-container" style={{height: 200}}>
