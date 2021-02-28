import { Link } from "react-router-dom";

export default function NavBar() {
    let style = {
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (
        <nav style={style}>
            <Link to='/addfriend'>Add Friend</Link>
            <Link to='/editfriend'>Edit Friend</Link>
            <Link to='/deletefriend'>Delete Friend</Link>
        </nav>
    )
}