import React from 'react'

const Form = props => (
  <form id='get-weather-form' onSubmit={props.getWeather}>
    <input type='text' name='city' placeholder='City'/>
    <input type='text' name='country' placeholder='Country'/>
    <button>Submit</button>
  </form>
)

export default Form