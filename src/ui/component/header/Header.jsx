import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {



    return (
        <header className="header">
            <div className="text">
                <h1 >alelua</h1>
                <Link to='/deposit' className='cc'> залог</Link>
                <p></p>
                <Link to='/gift' className='cc'>дарение</Link>
                <p></p>
                <Link to='/sale' className='cc'> продажа</Link>
                <p></p>
                <Link to='/' className='cc'> HOME </Link>
            </div>
        </header>
    );
};

export default Header;
