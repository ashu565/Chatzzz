import GoogleLogin from 'react-google-login';

export default function GoogleOAuth() {
  const SuccessLoginHandler = (res) => {
    console.log(res);
    console.log(res.profileObj);
  };
  const FailureLoginHandler = (err) => {
    console.log(err);
  };
  return (
    <div>
      <GoogleLogin
        clientId='17859477427-dejs6iqogl23lfhhv4s6ra75v2o8e9sn.apps.googleusercontent.com'
        buttonText='Sign In Using Google'
        onSuccess={SuccessLoginHandler}
        onFailure={FailureLoginHandler}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}
