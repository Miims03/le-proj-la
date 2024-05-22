
// import { dark } from '@material-ui/core/styles/createPalette'
import React, { Component } from 'react'
import Calendar from 'react-calendar'


export class Picker extends Component {
    
    state = { 
        date : new Date(),
    }
    onChange = date => {
        this.setState({ date })
    }
    validation = () => {
        this.setState({
            showFate: true,
        })
    }
    
render() {
    return (
      <div>
        <Calendar
        onChange={this.onChange} />
        <p>Date choisie : {this.state.date.toLocaleDateString()}</p>
    </div>
    )
  }
}

export default Picker