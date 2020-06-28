import React, { useState } from 'react';
import data from './data.json';
import Loader from "./loader";

console.log(data);

function App() {
    const [loaderList, setLoaderList] = useState([]);

    const handleClick = () => {
        setLoaderList(data.loaders);
    }

    return (
        <div>
            que linda app
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