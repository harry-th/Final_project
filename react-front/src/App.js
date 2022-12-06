import './App.css';
import { useState } from 'react';
import styles from './Display.module.css'
import Home from './Home';
import login from './Api/login';
import topics from './data/topics';




function App() {

  let api_key = process.env.REACT_APP_api_key

  const [subs, setSubs] = useState(null)
  const [channel, setChannel] = useState(null)
  const [reccomended, setReccomended] = useState(null)
  const [hovered, setHovered] = useState({ hovering: false })

  return (
    <div className={styles.container}>
      {!subs ? <div className={styles.landingpage}>
        <div 
          className={styles.landingtitle}>YT Discovery App
        </div>
        <button 
          className={styles.landingbutton} 
          onClick={() => { login(setSubs, topics, api_key, setChannel) }}>
            hello
          </button>
        </div>
        : <Home 
            subs={subs} 
            hovered={hovered} 
            setHovered={setHovered} 
            topics={topics} 
            channel={channel} 
            reccomended={reccomended} 
            setReccomended={setReccomended} 
          />}
    </div >
  );
}


export default App;
