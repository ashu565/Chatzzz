import GoogleLogin from 'react-google-login';
import Button from '../ui/Button';
import { Context } from '../../Contexts/userContext';
import { useContext } from 'react';

export default function GoogleOAuth({ ...props }) {
  const user = useContext(Context);

  const SuccessLoginHandler = (res) => {
    console.log(res.profileObj);
    localStorage.setItem('googleLogin', JSON.stringify(res.profileObj));
    const profile = { ...res.profileObj };
    user.Login(profile);
  };
  const FailureLoginHandler = (err) => {
    console.log(err);
  };
  return (
    <div {...props}>
      <GoogleLogin
        clientId='17859477427-dejs6iqogl23lfhhv4s6ra75v2o8e9sn.apps.googleusercontent.com'
        buttonText='Sign In Using Google'
        render={(renderProps) => {
          return (
            <Button onClick={renderProps.onClick} btnType='primary' {...props}>
              Sign In Using Google
            </Button>
          );
        }}
        onSuccess={SuccessLoginHandler}
        onFailure={FailureLoginHandler}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}
