import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@mui/material';
import logo from '../../assets/images/maluma.jpg';
import ButtonBuy from '../ButtonBuy';
import Link from '../Link';

const CardFruit = () => {
  return (
    <Card
      sx={{
        maxWidth: '360px',
        minWidth: '180px',
        margin: '20px 25px',
        '&:hover': {
          transform: 'scale(1.1)',
          transition: '1, ease',

        },
      }}
    >
      <CardActionArea>
        <Link to='/fruit'>
          <CardMedia
            component='img'
            image={logo}
            alt='avocado'
          />
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography variant='h5' component='h3'>
          Maluma Has Avocado
        </Typography>
        <Typography variant='body2' component='p'>
          1.15$
        </Typography>
        <ButtonBuy />
      </CardContent>
    </Card>
  );
};

export default CardFruit;
