import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@mui/material';
import logo from '../../assets/images/maluma.jpg';

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
        <CardMedia
          component='img'
          image={logo}
          alt='avocado'
        />
        <CardContent>
          <Typography variant='h5' component='div'>
            Maluma Has Avocado
          </Typography>
          <typography variant='body2'>
            1.15$
          </typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardFruit;
