import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { isRoleMatch } from '@utils/authUtils';
import { selectLogin, selectToken } from '@containers/Client/selectors';

const Client = ({ login, children, token }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (token && !isRoleMatch(token, 'user')) {
      navigate('/admin');
    } else if (!login) {
      navigate('/sign-in');
    }
  }, [login, navigate, token]);
  return children;
};

Client.propTypes = {
  login: PropTypes.bool,
  children: PropTypes.element,
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
  token: selectToken,
});

export default connect(mapStateToProps)(Client);
