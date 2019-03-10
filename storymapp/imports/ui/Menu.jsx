import React from 'react';

export default class Menu extends React.Component {
  shouldComponentUpdate () {
    return false;
  }

  render () {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="mx-auto">
          <div className="btn-group" role="group">
            {this.renderBodyLinks()}
          </div>
        </div>
      </nav>
    );
  }

  renderBodyLinks () {
    return this.props.bodies.map((body,i) => {
      console.log(body);
      return (
        <button type="button" className="btn btn-secondary text-capitalize" onClick={this.onBodySelect.bind(this)} key={body} value={body}>
          {body}
        </button>
      );
    });
  }

  onBodySelect (event) {
    // Call 'setBody' from parent component (i.e., 'App')
    this.props.setBody(event.target.value);
  }
}
