import React from 'react'
import '../css/Form.css'

const Form = props => (
  <form id='get-weather-form' onSubmit={props.getWeather}>
    <input class='form' type='text' name='city' placeholder='City'/>
    <input class='form' type='text' name='country' placeholder='Country'/>
    <button class='form' id='submit'>Submit</button>
  </form>
)

export default Form
