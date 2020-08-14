import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title}/>
                <Content>
                  <p>  Hello, my name is Sayed Kassem, I'm a web developer with experience in HTML5, CSS3, Javascript, React JS, PHP mySQL.</p>
                   
                   <p> My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>
                   
                   
                    <p>I'm constantly learning new things, currently those things include gaining more experience with React JS.</p>

                    <p>My latest project, E Cash , is a social network. You can check it out <a href="https://drive.google.com/file/d/1KyJ_B0NFLZzuf765zX1Ymgml3uN-15Wa/view" target="_blank" rel="noopener noreferrer">here</a> or on the homepage. It is built with HTML5,CSS3, Javascript and Firebase/FireStore NoSQL. I will be rebuilding it using React in the coming months.</p>

                    <p>When i am not learning something new chances are I'm at the gym or probably hiking :) </p>
                </Content>   
        </div>
    )
}

export default AboutPage
