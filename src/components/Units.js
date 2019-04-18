import React from 'react'

class Units extends React.Component {

  render() {
    return (
      <button onClick={this.props.unitChange}>°C/°F</button>
    )
  }
}

export default Units
