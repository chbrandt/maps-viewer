import React from 'react';
import { Session } from 'meteor/session';


export default class Menu extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="col-xs-8 col-offset-xs-2 mx-auto">
          <div className="btn-group" role="group">
            {this.renderBodyLinks()}
          </div>
        </div>
        <div className="col-xs-2 col-offset-xs-10">
          {this.renderSearchBox()}
        </div>
      </nav>
    );
  }

  renderBodyLinks() {
    return this.props.bodies.map((body,i) => {
      return (
        <button type="button" className="btn btn-secondary text-capitalize" onClick={this.onBodySelect.bind(this)} key={body} value={body}>
          {body}
        </button>
      );
    });
  }

  onBodySelect(event) {
    // Call 'setBody' from parent component (i.e., 'App')
    this.props.setBody(event.target.value);
  }

  renderSearchBox() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input id="searchboxInput" className="form-control mr-sm-2"
          type="search" placeholder="Search" aria-label="Search"
          onChange={this.onTextChange}
          />
          {/*onKeyPress={(e)=>{if(e.key === 'Enter'){alert(e.target.value)}}}
        />*/}
        <button id="searchboxButton" className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={this.onTextSubmit}>
          Search
        </button>
      </form>
    );
  }

  onTextChange(event) {
    const value = event.target.value.toLowerCase().trim();
    // Select text from list of options...and build a dropdown:
    //https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
    //https://stackoverflow.com/questions/45007712/bootstrap-4-dropdown-with-search
    //https://bootsnipp.com/snippets/2q81r
    //https://codepen.io/Rio517/pen/NPLbpP
    if (value.length && !utils.isLatLng_orLngLat(value)) {
      // document.getElementById("searchboxInput").style.color = "red";
      document.getElementById("searchboxButton").disabled = true;
    } else {
      // document.getElementById("searchboxInput").style.color = "initial";
      document.getElementById("searchboxButton").disabled = false;
    }
  }

  onTextSubmit(event) {
    event.preventDefault();
    const latlng = document.getElementById("searchboxInput").value;
    Session.set('latlng', utils.parseCoords(latlng));
  }

}



/**** Let's declare a namespace for utilities ****/
var utils = {

  isLatLng_orLngLat: function(text) {
    var vals = utils.splitText(text);
    if (vals.length === 2 && utils.isNumber(vals[0]) && utils.isNumber(vals[1])) {
      return true;
    }
    return false;
  },

  splitText: function(text) {
    return String(text).replace(',',' ').split(/\s+/).filter((v)=>{return v.length});
  },

  isNumber: function(text) {
    return ! Number.isNaN(Number.parseFloat(text));
  },

  parseCoords: function(text) {
    const vals = utils.splitText(text);
    return vals.map(txt => Number.parseFloat(txt));
  }
}
