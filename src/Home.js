import { useState } from "react";

const Home = (props) => {

    let dataFromProps = props.SomeProp;

    const [name, setName ] = useState('mario')
    const handleClick = (name) => {
        setName('luigi')
    }

    return ( 
        <div className="home">
            <h2>homepage</h2>
            <h3>{dataFromProps}</h3>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;