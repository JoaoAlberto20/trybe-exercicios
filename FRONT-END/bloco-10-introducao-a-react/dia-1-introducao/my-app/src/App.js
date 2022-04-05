import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const list = ['Participar do momento incial', 'Participar da aula ao vivo', 'participar do fechamento'];


class App extends React.Component {
  render() {
    return (
      <ul>
        {list.map((item) => Task(item))}
      </ul>
    )
  }

}

export default App;
