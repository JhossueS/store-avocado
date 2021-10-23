import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Register from '../components/Form';
import { actionCreators } from '../state/index';

const Signup = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  if (Object.keys(user).length !== 0) {
    history.push('/');
  }
  const { registerUser } = bindActionCreators(actionCreators, dispatch);
  const handleSubmit = async (e, { name, email, password }) => {
    e.preventDefault();
    const data = {
      name: name?.value,
      email: email.value,
      password: password.value,
    };
    registerUser(data);
  };
  return (
    <Register isSignup handleEvent={handleSubmit} />
  );
};

export default Signup;
