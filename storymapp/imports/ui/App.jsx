import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

import Map from './Map/Map.jsx';

const App = () => (
  <main style={{width:'500px', height:'500px'}}>
    <Map body="mars"/>
  </main>
);

export default App;
