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

  render () {
    return (
      <main style={{height:'100%'}}>
        <Menu bodies={this.props.bodies} setBody={this.setBody}/>
        <div style={{height:'90%'}}>
          <Map body={this.state.body}/>
        </div >
      </main>
    );
  }
  // <List items=props.stories/>

  setBody (body) {
    console.log(body);
    this.setState({body:body});
  }
}

export default App;
