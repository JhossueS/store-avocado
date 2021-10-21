import {
  Toolbar, AppBar, Container, Box,
} from '@mui/material';
import BurgerMenu from '../BurgerMenu';
import logo from '../../assets/images/fruit.png';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Container maxWidth='md'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={logo} alt='logo' width={48} />
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
