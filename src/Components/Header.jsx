const Header = () => {
  return (
    <header style={headerStyles.header}>
      <h1 style={headerStyles.title}>pre -flight-checklist</h1>
    </header>
  );
};

const headerStyles = {
  header: {
    backgroundColor: '#26547c',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
    fontFamily: 'Roboto Bold',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontFamily: 'Roboto Regular',
  },
};

export default Header;
