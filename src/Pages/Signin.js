import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import Login from '../components/Form';
import { actionCreators } from '../state/index';

const Signin = () => {
  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);
  const handleSubmit = async (e, { name, email, password }) => {
    e.preventDefault();
    const data = {
      name: name?.value,
      email: email.value,
      password: password.value,
    };
    loginUser(data);
  };
  return (
    <Login handleEvent={handleSubmit} />
  );
};

export default Signin;
