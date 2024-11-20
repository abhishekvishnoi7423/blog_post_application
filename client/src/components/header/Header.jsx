import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between; /* Distribute space between the items */
    align-items: center; /* Align items vertically centered */
    background-color: white;
    padding: 0 20px; /* Adjust horizontal padding */
     font-weight: bold;
`;

const LinksContainer = styled('div')`
    display: flex;
    justify-content: center; /* Center the links */
    flex-grow: 1; /* Allow this container to take up the remaining space */
    gap: 20px; /* Add space between the links */
     font-weight: bold;
`;

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
    font-size:20px;
    font-style:italic;
`;



const Header = () => {
    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <StyledLink to="/" style={{ paddingLeft: "0",fontSize: "40px",fontStyle:"italic" }}>BlogWorld</StyledLink>
                <LinksContainer>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                    <StyledLink to="/account">Logout</StyledLink>
                </LinksContainer>
                    {/* <div to="/account" style={{cursor:"pointer",fontSize: "20px"}} onClick={logout}><div>Logout</div></div> */}
            </Container>
        </Component>
    );
}

export default Header;
