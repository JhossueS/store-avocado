import { useState } from 'react';
import {
  MenuItem, Menu, Button, IconButton, useMediaQuery, ListItemIcon,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconMenu from '@mui/icons-material/Menu';
import Link from '../Link';
import useLogged from '../../hooks/useLogged';
import Cart from '../Cart';

const BurgerMenu = () => {
  const theme = useTheme();
  // breckPoint for hidden menu
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  // handle open Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const userState = useLogged();
  const isLogged = userState.user.length === 0 ? 'Sign-up' : 'Logout';
  return (
    matches ? (
      <>
        <Button
          color='secondary'
          variant='outlined'
          sx={{ marginRight: '18px' }}
          size='small'
        >
          <Link to='/sign-up' flex>
            {isLogged}
          </Link>
        </Button>
        <Link to='/checkout' flex>
          <Cart />
        </Link>
      </>
    ) : (
      <>
        <IconButton
          size='large'
          edge='end'
          color='inherit'
          aria-label='menu'
          aria-haspopup='true'
          aria-controls='basic-menu'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <IconMenu />
        </IconButton>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link to='/sign-in' flex>
              {isLogged}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to='/checkout' flex>
              <ListItemIcon>
                <Cart sm />
              </ListItemIcon>
            </Link>
          </MenuItem>
        </Menu>
      </>

    )
  );
};

export default BurgerMenu;
