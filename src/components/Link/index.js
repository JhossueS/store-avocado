import { Link as LinkRouter } from 'react-router-dom';

const Link = ({ children, to, flex }) => {
  return (
    <LinkRouter
      to={to}
      style={{
        textDecoration: 'none', display: flex ? 'flex' : 'block', alignItems: 'center', color: 'inherit',
      }}
    >
      {children}
    </LinkRouter>

  );
};

export default Link;
