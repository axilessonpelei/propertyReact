import "./Header.css"
import { Link } from "react-router-dom";
import Service from "../../../service/service.js";
const Header = () => {

    const handler = async () => {
        await window.ethereum.request({method:'eth_requestAccounts'}).then((response) => {
            console.log(response[0]);
            Service.wallet = response[0]
            console.log(Service.wallet);
        })
    }

    return (
        <header className="header">
            <div className="text">
                <h1 onClick={handler}>alelua</h1>
                <Link to='/deposit' className='cc'> залог</Link>
                <p></p>
                <Link to='/gift' className='cc'>дарение</Link>
                <p></p>
                <Link to='/sale' className='cc'> продажа</Link>
                <p></p>
                <Link to="/property" className='cc'>моя недвижиммость</Link>
                <Link to='/' className='cc'> HOME </Link>
            </div>
        </header>
    );
};

export default Header;
