import './App.css';
import { useRef } from 'react';
import landing_image from './landing_image.jpg';
import { MenuPanel } from './MenuPanel';

function App() {

  return (
    <div  className="App">
      <section className="bgd" style={{backgroundImage: `url(${landing_image})`}}>
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
