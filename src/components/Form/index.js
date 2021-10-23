import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import Link from '../Link';
import useInput from '../../hooks/useInput';

const Form = ({ isSignup, handleEvent }) => {
  const username = useInput({ type: 'text' });
  const email = useInput({ type: 'email' });
  const password = useInput({ type: 'password' });
  const handleSubmit = (e) => {
    handleEvent(e, { name: username, email, password });
  };

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
          <h2 style={headerStyle}>{isSignup ? 'Sign up' : 'Sign in'}</h2>
          <Typography variant='caption' gutterBottom>
            {isSignup
              ? 'Please fill this form to create an account !'
              : 'Please fill this form to sign-in'}

          </Typography>
        </Grid>
        <form>
          {
            isSignup
              ? <TextField fullWidth style={marginInput} label='Name' placeholder='Enter your name' {...username} />
              : null
          }
          <TextField fullWidth style={marginInput} label='Email' placeholder='Enter your email' {...email} />
          <TextField fullWidth style={marginInput} label='Password' placeholder='Enter your password' {...password} />
          <Button type='submit' variant='contained' color='primary' sx={{ marginRight: '135px' }} onClick={handleSubmit}>
            {isSignup ? 'Sign up' : 'Sign in'}
          </Button>
          <Button type='button' variant='outlined' color='primary'>
            <Link to={isSignup ? '/sign-in' : '/sign-up'}>
              {isSignup ? 'Sign in' : 'Sign up'}
            </Link>
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Form;
