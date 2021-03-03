import { Link } from "react-router-dom";

export default function NavBar({view, setView}) {
    const style = {
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'space-around'
    }
    const handleClick = e => {
        console.log(e.target.name)
        setView(e.target.name)
    }
    return (
        <nav style={style}>
            <button onClick={handleClick} name='add'>Add Friend</button>
            <button onClick={handleClick} name='edit'>Edit Friend</button>
            <button onClick={handleClick} name='delete'>Delete Friend</button>
        </nav>
    )
}