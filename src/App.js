import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      today: [],
      addInput: '',
      removeInput: '',
      pairs: []
    }
    this.today = []
  }

  postStudent(name) {
    axios.post(`/api/poststudent`, { name })
  }

  removeStudent(name) {
    axios.delete(`/api/removestudent/${name}`)
  }

  getStudents() {
    axios.get('/api/getstudents').then(res => {
      this.setState({ today: res.data })
    })
  }

  getPairs() {
    this.today = [...this.state.today]

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    this.today = shuffle(this.today);
    console.log(this.today)
    const {today} = this
    console.log(today)
    let pairs = []
    let updatedYesArrays = []

    for (let i = 0; i < today.length; i++) {
      for (let j = i+1; j < today.length; j++) {
        if(today[i].yes.indexOf(today[j].id) === -1) {
          today[i].yes.push(today[j].id)
          today[j].yes.push(today[i].id)
          updatedYesArrays.push(today[i], today[j])
          pairs.push([today[i].name, today[j].name])
          today.splice(i, 1)
          today.splice(j-1, 1)
          i--
          break;
        }
      }
    }
    if(today.length !== 0) {
      for(let i = 0; i < today.length; i++) {
        if(today.length % 2 === 0) {
          pairs.push([today[i].name, today[i+1].name])
          updatedYesArrays.push(today[i], today[i+1])
          today.splice(i, 2)
          i--
        } else {
          today.push({id: 1337, name: 'Mentors'})
          i--
        }
      }
    }
    console.log(updatedYesArrays)
    this.setState({pairs})
    for(let i = 0; i < updatedYesArrays.length; i++) {
      axios.put('/api/updateyes', {student: updatedYesArrays[i]})
    }
  }

  render() {
    let mappedStudents = this.state.today.map(x => {
      return <p>{x.name}</p>
    })
    let mappedPairs = this.state.pairs.map(x => {
      return <p>{`${x[0]} / ${x[1]}`}</p>
    })
    return (
      <div className="App">
        <input placeholder='Add student to db' onChange={e => this.setState({ addInput: e.target.value })} />
        <button onClick={() => this.postStudent(this.state.addInput)}>Add</button>
        <br /><br />
        <input placeholder='Remove student from db' onChange={e => this.setState({ removeInput: e.target.value })} />
        <button onClick={() => this.removeStudent(this.state.removeInput)}>Remove</button>
        <br /><br />
        <button onClick={() => this.getStudents()}>Get Students</button>
        <button onClick={() => this.getPairs()}>Get Pairs</button>
        <section className='row'>
          <div>
            {mappedStudents}
          </div>
          <div>
            {mappedPairs}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
