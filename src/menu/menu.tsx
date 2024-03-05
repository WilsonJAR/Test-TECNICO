import { Link, useNavigate} from "react-router-dom";
import { LinkButton, HeaderMenu } from "../styles";
const Menu = () => {
    const navigate = useNavigate();
    return ( 
    <header className="home-header">
        <HeaderMenu>
            <LinkButton onClick={()=>navigate('/')}>Home</LinkButton>
            <LinkButton onClick={()=>navigate('/table')}>Registros</LinkButton>
            <LinkButton onClick={()=>navigate('/form')}>Form</LinkButton>
        </HeaderMenu>
    </header>
     );
}
 
export default Menu;
