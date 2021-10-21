import {
  Grid,
  Paper,
  Typography,
} from '@mui/material';

import Link from '../components/Link';

const NotFound = () => {
  const paperStyle = {
    padding: '30px 20px',
    maxWidth: 350,
    minWidth: 275,
    margin: '20px auto',
  };
  const headerStyle = { margin: 0 };
  const gripStyle = {
    height: '80vh',
    alignContent: 'center',
    display: 'grid',
  };

  return (
    <Grid style={gripStyle}>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Typography variant='h1' style={headerStyle} fontWeight='bold'>Not Found 404!</Typography>
          <Link to='/'>Go to Home</Link>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default NotFound;
