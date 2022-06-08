import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    Person: {
      fullName: "Ghayth",
      bio: "Im a star ",
      imgSrc:
        "https://qph.fs.quoracdn.net/main-qimg-7255de96aedfc75746644f9e401b0896-lq",
      profession: "HHHHHHHH",
    },
    shows: true,
  };
  change = () =>
    this.setState(this.state.shows ? { shows: false } : { shows: true });
  render() {
    return (
      <div>
        {this.state.shows?this.state.Person.fullName+" "+this.state.Person.bio+" "+this.state.Person.profession:null}
        <br/>
        
        <br/>
        {this.state.shows?
        <img src={this.state.Person.imgSrc} alt="luka" width={200}></img>:null}<br/>
        <button onClick={this.change} >Display</button>
      </div>
    );
  }
}

export default App;
