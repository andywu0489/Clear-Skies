import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const Weather = props => (

    <Jumbotron>
      { props.city && props.country&& <p>Location: { props.city }, { props.country }</p>}
      { props.temperature && <p>Current Temp: { props.temperature }</p>}
      { props.humidity && <p>Humidity: { props.humidity }%</p>}
      { props.description && <p>Conditions: { props.description.split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') }</p>}
      { props.error && <p>{props.error}</p> }
    </Jumbotron>
)

export default Weather
