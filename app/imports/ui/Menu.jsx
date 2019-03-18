import React from 'react';

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

  renderSearchBox() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input type="search" className="form-control mr-sm-2" id="searchlocbox"
          placeholder="Search" aria-label="Search"
          onChange={this.onTextChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
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
      document.getElementById("searchlocbox").style.color = "red";
    } else {
      document.getElementById("searchlocbox").style.color = "initial";
    }
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
}



/**** Let's declare a namespace for utilities ****/
var utils = {
  isLatLng_orLngLat: function(value) {
    var vals = String(value).replace(',',' ').split(/\s+/).filter((v)=>{return v.length});
    if (Number.isNaN(Number.parseFloat(vals[0]))) {
      return false;
    }
    return true;
  }
}
