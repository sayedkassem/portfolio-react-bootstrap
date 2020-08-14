import React, { Component } from 'react'
import taskManager from '../assets/images/taskManager.png'
import linkedIn from '../assets/images/LinkedIn.png'
import WeatherApp from '../assets/images/WeatherApp.png'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [{
                    id: 0,
                    Title: 'React',
                    subTitle: 'Task Manager',
                    imgSrc: taskManager,
                    link: 'https://task-manager-dfbd0.web.app/',
                    selected: false

                },
                {
                    id: 1,
                    Title: 'Sayed Kassem',
                    subTitle: 'LinkedIn',
                    imgSrc: linkedIn,
                    link: 'https://www.linkedin.com/in/sayed-kassem',
                    selected: false

                },
                {
                    id: 2,
                    Title: 'Weather App',
                    subTitle: 'WeatherApp',
                    imgSrc: WeatherApp,
                    link: 'https://weather-app-1df71.web.app/',
                    selected: false

                }

            ]
        };
    };


    handleCardClick = (id, card) => {
        console.log(id)
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })
        this.setState({
            items
        })



    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item = { item }
            click = { e => this.handleCardClick(item.id, e) }
            key = { item.id }
            />
        })
    }

    render() {
        return ( 
        <div>
            <Container fluid = { true } >
            <Row className = "justify-content-around" > { this.makeItems(this.state.items) } </Row>

            </Container>
             </div>
        )
    }
}

export default Carousel