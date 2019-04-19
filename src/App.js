import React from 'react'
import Description from './components/Description'
import Form from './components/Form'
import Weather from './components/Weather'
import Nav from './components/Nav'
import Units from './components/Units'
import { Container, Col, Row } from 'react-bootstrap'
import './App.css'

const API_KEY = '608536d5ccb2a8806cb642e5c8162189'

class App extends React.Component {
  state = {
    tempuratue: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null,
    celcius: false
  }

  unitChange = () => {
    if (this.state.celcius) {
      this.setState({
        celcius: false
      })
    } else {
      this.setState({
        celcius: true
      })
    }
  }


  getWeather = async (e) => {
    e.preventDefault()
    // let unit = 'imperial'
    // if (this.state.celcius) {
    //   unit = 'metric'
    // } else {
    //   unit = 'imperial'
    // }
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    const data = await api_call.json()

    if (data.name && data.sys.country) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:''
      })
    } else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error:'Please Enter Valid Inputs'
      })
    }
    document.getElementById('get-weather-form').reset()
  }

  // componentDidMount() {
  //   const city = localStorage.getItem('city')
  //   const country = localStorage.getItem('country')
  //   if (city && country) {
  //
  //   } else {
  //
  //   }
  // }

  render () {
    return (
      <div>



        <Container id='container'>
          <Row id='row1'>
            <Nav />
          </Row>
          <Row id='row2'>
            <Col id='col1'>
              <Description />
            </Col>
            <Col id='col2'>
              <Form getWeather={this.getWeather}/>
              <Units unitChange={this.unitChange} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </Col>
          </Row>
        </Container>




      </div>
    )
  }
}

export default App
