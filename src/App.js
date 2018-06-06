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

  removeStudentToday(id) {
    let copy = this.state.today.slice()
    for(let i = 0; i < copy.length; i++) {
      if(copy[i].id === id) {
        copy.splice(i, 1)
        break;
      }
    }
    this.setState({today: copy})
  }

  getPairs() {
    let today = [...this.state.today]
    console.log(today)

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array
    }
    shuffle(today)
    let pairs = []
    let updatedYesArrays = []

    for (let i = 0; i < today.length; i++) {
      for (let j = i + 1; j < today.length; j++) {
        if (today[i].yes.indexOf(today[j].id) === -1) {
          today[i].yes.push(today[j].id)
          today[j].yes.push(today[i].id)
          updatedYesArrays.push(today[i], today[j])
          pairs.push([today[i].name, today[j].name])
          today.splice(i, 1)
          today.splice(j - 1, 1)
          i--
          break;
        }
      }
    }
    if (today.length !== 0) {
      for (let i = 0; i < today.length; i++) {
        if (today.length % 2 === 0) {
          pairs.push([today[i].name, today[i + 1].name])
          updatedYesArrays.push(today[i], today[i + 1])
          today.splice(i, 2)
          i--
        } else {
          today.push({ id: 1337, name: 'Mentors' })
          i--
        }
      }
    }
    console.log(updatedYesArrays)
    this.setState({ pairs })
    axios.put('/api/updateyes', { student: updatedYesArrays })
  }
  
  render() {
    let mappedStudents = this.state.today.map(x => {
      return <div key={x.id + 'Hey there'} className='center studentsToday'>
        <p className='center'>{x.name}</p>
        <h5 onClick={() => this.removeStudentToday(x.id)} className='removeStudent'>X</h5>
      </div>
    })
    let mappedPairs = this.state.pairs.map(x => {
      return <p key={x[0] + 'tacos'} className='center studentsToday'>{`${x[0]} / ${x[1]}`}</p>
    })
    return (
      <div className="pairRandomizer">
        <header>

        </header>
        <div className='randomizerBody'>
          <input placeholder='Add student to db' onChange={e => this.setState({ addInput: e.target.value })} />
          <button onClick={() => this.postStudent(this.state.addInput)}>Add</button>
          <br /><br />
          <input placeholder='Remove student from db' onChange={e => this.setState({ removeInput: e.target.value })} />
          <button onClick={() => this.removeStudent(this.state.removeInput)}>Remove</button>
          <br /><br />
          <button onClick={() => this.getStudents()}>Get Students</button>
          <button onClick={() => this.getPairs()}>Get Pairs</button>
          <section className='row blocks'>
            <div className='todaysStudents'>
              {mappedStudents}
            </div>
            <div className='todaysStudents'>
              {mappedPairs}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
