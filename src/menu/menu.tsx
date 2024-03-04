import { Link } from "react-router-dom";
const Menu = () => {
    return ( 
    <header className="home-header">
        <div className="home-menu">
            <Link to={'/'}>Home</Link>
            <Link to={'/table'}>Registros</Link>
        </div>
    </header>
     );
}
 
export default Menu;
