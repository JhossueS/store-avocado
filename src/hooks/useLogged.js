import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useLogged = (isRedirect) => {
  const stateUser = useSelector(({ user }) => user);
  const location = useHistory();
  if (stateUser.user.length === 0 && isRedirect) location.push('/sign-up');

  return stateUser;
};

export default useLogged;
