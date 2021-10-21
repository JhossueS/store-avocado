import {
  Grid,
  Paper,
  TextField,
  Button,
} from '@mui/material';

const Signin = () => {
  const paperStyle = {
    padding: '30px 20px',
    maxWidth: 350,
    minWidth: 275,
    margin: '20px auto',
  };
  const headerStyle = { margin: 0 };
  const marginInput = { margin: '12px 0' };
  const gripStyle = {
    height: '80vh',
    alignContent: 'center',
    display: 'grid',
  };
  return (
    <Grid style={gripStyle}>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <h2 style={headerStyle}>Sign In</h2>
        </Grid>
        <form>
          <TextField fullWidth style={marginInput} label='Email' placeholder='Enter your email' />
          <TextField fullWidth style={marginInput} label='Password' placeholder='Enter your password' />
          <Button type='submit' variant='contained' color='primary'>Sign In</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signin;
