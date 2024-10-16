import logo from '../assets/logo.png';

function Header() {
    return (
        <header style={{
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',  // Align content to the left
            padding: '15px',
            width: '100%',  // Full width header
          }}>
            <img src={logo} alt="logo" style={{ height: '50px', marginLeft: '15px'  }} />
        </header>
    )
};

export default Header;