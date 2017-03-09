import React from 'react';
import BigImageModal from './BigImageModal.jsx';

export default class ImageTable extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    var ts = this.props.tableStyle;
    var si = this.props.smallImg;
    var li = this.props.largeImg;
    var ti = this.props.title;
    var cs = this.props.cellStyle;
    return (
      <div>
        <table style={this.props.tableStyle} >
          <tbody>
            <tr>
              <td style={this.props.cellStyle}>
                <img src={this.props.smallImg} align="bottom" alt="** PLEASE DESCRIBE THIS IMAGE **" />
              </td>
            </tr>
            <tr>
              <td style={this.props.cellStyle}>
                <BigImageModal source={this.props.largeImg} label="enlarge" title={this.props.title} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
