import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css';
import Container  from 'react-bootstrap/Container'
import Navbar  from 'react-bootstrap/Navbar/'
import Nav from 'react-bootstrap/esm/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       title:'Sayed Kassem',
       headerLinks :[{title:'Home',path:'/'},{title:'About',path:'/about'},{title:'Contact',path:'/contact'}],
       home : {
         title: 'Stay On Track ',
         subTitle:'Projects that make a difference',
         text: 'Checkout my projects below'
       },
       about : {
        title: 'About Me ',
       
      },
      contact : {
        title: 'Contact me ',
      },
    };
  };
  

  render(){

  return (
    <div>
      <Router>
          <Container fluid={true} className="p-0">
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Sayed Kassem</Navbar.Brand>
            

            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route  path="/" exact render={()=><HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route  path="/about" exact render={()=><AboutPage title={this.state.about.title}/>}/>
          <Route  path="/contact" exact render={()=><ContactPage title={this.state.contact.title}/>}/>
           <Footer/>
          </Container>
      </Router>
    </div>
  );
}

}
export default App;
