import React, { useState } from 'react';
import data from './data.json';
import Loader from "./loader";

import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

console.log(data);

function App() {
    const [loaderList, setLoaderList] = useState([]);

    const handleClick = () => {
        setLoaderList(data.loaders);
    }

    return (
        <div>
            que linda app
            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} alt="" width={40} />
            </p>
            <ul>
                {
                    loaderList.map( item => <Loader {...item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}>Mostrar</button>
        </div>
    )
}

export default App;