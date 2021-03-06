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
  camronDropTrack = () => {
    let move = ""
    if(this.state.nasHP > 0) {
      let camronTrackList = [
        "Hey Ma",
        "Oh Boy",
        "Down and Out",
        "Dipset Anthem",
        "Welcome to New York City",
        "Get 'em Girls",
        "What Means the World to You",
        "Suck It or Not",
        "Horse & Carriage",
        "You Gotta Love It",
        "Losin Weight",
        "I'm Ready",
        "Get It In Ohio",
        "Killa Cam",
        "Daydreaming",
        "I Really Mean It",
        "Live My Life",
        "Crunk Muzik",
        "More Gangsta Music",
        "Sports, Drugs & Entertainment",
      ]
      let track = Math.floor(Math.random()*camronTrackList.length)
      move = "Cam'ron drops " + camronTrackList[track]
    } else {
      move = "Nas bows out"
    }
    this.setState({
      nasHP: this.state.nasHP - 10, 
      battleStatus: move,
    })
  }
  nasDropTrack = () => {
    let move = ""
    if(this.state.camronHP > 0) {
      let nasTrackList = [
        "If I Ruled The World",
        "N.Y. State of Mind",
        "Nas Is Like",
        "Hate Me Now",
        "Life's a Bitch",
        "One Mic",
        "The World is Yours",
        "The Message",
        "It Aint Hard to Tell",
        "Got Ur Self A Gun",
        "Affirmative Action",
        "Street Dreams",
        "Oochie Wally",
        "Ether",
        "One Love",
        "Get Down",
        "Halftime",
        "I Can",
        "Represent",
        "Memory Lane",
      ]
      let track = Math.floor(Math.random()*nasTrackList.length)
      move = "Nas drops " + nasTrackList[track]
    } else {
      move = "Cam'ron bows out"
    }
    this.setState({
      camronHP: this.state.camronHP - 10, 
      battleStatus: move,
    })
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
