import React from 'react';

import Menu from './Menu.jsx';
import Map from './Map/Map.jsx';
// import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.bodies[0]
    }
    this.setBody = this.setBody.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.body + this.state.body);
    return nextState.body !== this.state.body;
  }

  render() {
    /*
      'render' will be called either when 'state' or 'props' change.
      currently, at least, it means the "body" has changed;
      when that happens, we get a bunch of new data from somewhere -- e.g., WMS --,
      "locations" in particular is the list of locations ("label", "coordinates")
      of interest, which will be used in the search box auto-completion.
    */
    var locations = undefined;

    return (
      <main style={{height:'100%'}}>
        <Menu bodies={this.props.bodies}
              setBody={this.setBody}
              locations={locations}/>
        <div style={{height:'90%'}}>
          <Map body={this.state.body}/>
        </div>
      </main>
    );
  }
  // <List items=props.stories/>

  setBody(body) {
    console.log(body);
    this.setState({body:body});
  }
}

export default App;
