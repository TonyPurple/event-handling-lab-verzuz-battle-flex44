import './App.css';
import React from 'react';
import Rapper from './components/Rapper/Rapper'
import Status from './components/Status/Status'
import CamronImg from './Images/camron.jpeg'
import NasImg from './Images/nas.jpeg'

class App extends React.Component {
  state = {
    camronHP: 225,
    nasHP: 225,
    battleStatus: "Ready to Battle"
  }
  
  render() {
    return (
      <div className="App">
        <Rapper
          pic={CamronImg}
          DropTrack={this.camronDropTrack}
          HP={this.state.camronHP}
        />
        <Rapper
          pic={NasImg}
          DropTrack={this.nasDropTrack}
          HP={this.state.nasHP}
        />
        <Status battleStatus={this.state.battleStatus}/>
      </div>
    );
  }
}
export default App;
