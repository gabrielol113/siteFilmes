import './style.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
            <header>                
                    <Link className='logo' to="/">PrimeFlix</Link>
                    <Link className='favoritos' to="/favoritos">Favoritos</Link>            
            </header>
            
        </div>
        
    )
}

export default Header;