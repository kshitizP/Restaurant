import './App.css';
import { useRef } from 'react';
import landing_image from './landing_image.jpg';
import { MenuPanel } from './MenuPanel';

function App() {

  return (
    <div  className="App">
      <nav id="nav-main" role="navigation" >
        <ul className="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#content-menu">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Private Events</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Social</a></li>
        </ul>
      </nav>
      <section className="bgd" style={{backgroundImage: `url(${landing_image})`}}>
        <header className="welcome-text">Welcome to Our Restaurant</header>
        <div className="menu-anchor">
          <p>Today's Menu</p>
          <p className="down-button"><a href='#content-menu'><i className="arrow down"></i></a></p>
        </div>
      </section>
      <section id="content-menu">
        <div style={{width: '100%'}}>
          <MenuPanel/>
        </div>
      </section>
    </div>
  );
}

export default App;
