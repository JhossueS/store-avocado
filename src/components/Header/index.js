import {
  Toolbar, AppBar, Container, Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu';
import logo from '../../assets/images/avocado.png';

const Header = () => {
  return (
    <AppBar position='static' sx={{ marginBottom: '18px' }}>
      <Toolbar variant='dense'>
        <Container maxWidth='md'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to='/'>
              <img src={logo} alt='logo' width={48} />
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <BurgerMenu />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
