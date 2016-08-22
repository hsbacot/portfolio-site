import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Contact } from './Contact.jsx';
import { Stack } from './Stack.jsx';
import { Experience } from './Experience.jsx';
import { Education } from './Education.jsx';
import { Extras } from './Extras.jsx';
import styles from './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>Hunter Bacot</h1>
        <Contact />
        <Stack
          currentStack={["Javascript", "ES2015+", "React", "Node"]}
        />
        <Experience />
        <Education />
        <Extras />
      </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
