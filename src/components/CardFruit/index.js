import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@mui/material';
import ButtonAddCart from '../ButtonAddCart';
import Link from '../Link';

const CardFruit = ({
  img, name, price, id,
}) => {
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
        <Link to={`/fruit/${id}`}>
          <CardMedia
            component='img'
            image={img}
            alt='avocado'
          />
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography variant='h5' component='h3'>
          {name}
        </Typography>
        <Typography variant='body2' component='p'>
          {price}
        </Typography>
        <ButtonAddCart id={id} />
      </CardContent>
    </Card>
  );
};

export default CardFruit;
