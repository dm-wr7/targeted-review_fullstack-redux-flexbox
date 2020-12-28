import React from 'react';
import './normalize.css';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    axios
      .get('/api/cars')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <img src='http://static.skaip.org/img/emoticons/180x180/f6fcff/cricket.gif' alt='cricket' />
        <img src='http://static.skaip.org/img/emoticons/180x180/f6fcff/cricket.gif' alt='cricket' />
        <img src='http://static.skaip.org/img/emoticons/180x180/f6fcff/cricket.gif' alt='cricket' />
        <img src='http://static.skaip.org/img/emoticons/180x180/f6fcff/cricket.gif' alt='cricket' />
        <img src='http://static.skaip.org/img/emoticons/180x180/f6fcff/cricket.gif' alt='cricket' />
      </div>
    );
  }
}

export default App;
