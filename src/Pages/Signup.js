import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import Register from '../components/Form';
import { actionCreators } from '../state/index';

const Signup = () => {
  const dispatch = useDispatch();
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
