import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Login from '../components/Form';
import { actionCreators } from '../state/index';

const Signin = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  if (Object.keys(user).length !== 0) {
    history.push('/');
  }

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
