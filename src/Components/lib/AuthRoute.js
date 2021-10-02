import { Context } from '../../Contexts/userContext';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
export default function AuthRoute({ component: Component, ...rest }) {
  const user = useContext(Context);
  console.log(user);
  let authenicated = false;
  if (user.state.googleId) {
    authenicated = true;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return authenicated ? <Component {...props} /> : <Redirect to='/' />;
      }}
    />
  );
}
