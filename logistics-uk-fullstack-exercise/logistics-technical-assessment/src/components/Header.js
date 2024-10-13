import logo from '../assets/logo.png';

function Header() {
    return (
        <header style={{ backgroundColor: 'grey', padding: '15px'}}>
            <img src={logo} alt="logo" style={{ height: '50px' }} />
        </header>
    )
};

export default Header;