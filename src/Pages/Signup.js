import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import Link from '../components/Link';

const Signup = () => {
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
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <form>
          <TextField fullWidth style={marginInput} label='Name' placeholder='Enter your name' />
          <TextField fullWidth style={marginInput} label='Email' placeholder='Enter your email' />
          <TextField fullWidth style={marginInput} label='Password' placeholder='Enter your password' />
          <TextField fullWidth style={marginInput} label='Confirm Password' placeholder='Confirm your password' />
          <FormControlLabel
            control={<Checkbox name='checkedA' />}
            label='I accept the terms and conditions.'
          />
          <Button type='submit' variant='contained' color='primary' sx={{ marginRight: '135px' }}>Sign up</Button>
          <Button type='button' variant='outlined' color='primary'>
            <Link to='/sign-in'>
              Sign in
            </Link>
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
