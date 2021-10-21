import { useState } from 'react';
import {
  MenuItem, Menu, Button, IconButton, useMediaQuery, Typography, ListItemIcon, ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconMenu from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from '../Link';
import papperBag from '../../assets/images/paper-bag.png';

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
            Iniciar Secion
          </Link>
        </Button>
        <Link to='/checkout' flex>
          <img src={papperBag} alt='papperBag' width={40} />
          <Typography> Canasta (0) </Typography>
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
              Logout
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/checkout' flex>
              <ListItemIcon>
                <AddShoppingCartIcon fontSize='small' />
                <ListItemText primary='canasta (0)' />
              </ListItemIcon>
            </Link>

          </MenuItem>
        </Menu>
      </>

    )
  );
};

export default BurgerMenu;
