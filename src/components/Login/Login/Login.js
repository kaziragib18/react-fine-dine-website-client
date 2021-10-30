import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import './Login.css'

const Login = () => {
      const { signInUsingGoogle, signInUsingFacebook } = useAuth();
      const { error, isLogin, toggleLogin, handleRegistration, handleEmailChange, handlePasswordChange, handleResetPassword, handleNameChange } = useFirebase();


      return (
            <div>
                  <div className="login-box d-flex align-items-center justify-content-center">
                        <div className="login">
                              <div className="login-box">
                                    <h2 className="text-danger mt-5 p-3">Please {isLogin ? 'Login' : 'Register'}</h2>
                                    <hr className="text-light" />
                                    
                                    <form onSubmit={handleRegistration}>
                                          {!isLogin && <input onBlur={handleNameChange}
                                                className="input-felid p-5 py-2 mb-3"
                                                type="text"
                                                name="Name"
                                                placeholder="Enter your name"
                                                required />}  
                                          <br />
      
                                          <input onChange={handleEmailChange}
                                                className="input-felid p-5 py-2"
                                                type="email"
                                                name="email"
                                                placeholder="Enter your Email"
                                                required />
                                          <br />

                                          <input onChange={handlePasswordChange}
                                                className="input-felid p-5 py-2 m-3"
                                                type="password"
                                                name="password"
                                                placeholder="Enter your Password"
                                                required />
                                          <br />

                                          <input onChange={toggleLogin} type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                          <label className="form-check-label text-light" htmlFor="exampleCheck1">Already Registered?</label>
                                          <br />

                                          <div className="row text-warning">{error}</div>

                                          <button className="mt-3 mb-5 py-2 px-4 rounded-pill btn btn-danger m-auto">{isLogin ? 'Login' : 'Register'}</button>

                                          <span className="m-2">                                          
                                          <button onClick={handleResetPassword} className="mt-3 mb-5 py-2 px-3 rounded-pill btn btn-dark m-auto">Reset Password</button>
                                          </span>

                                    </form>
                              </div>
                              <p className="text-danger">You can also Sign in with:</p>
                              <hr className="text-light"/>

                              <button className="btn me-2" onClick={signInUsingGoogle}><img className="login__icon" src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="" /></button>
                              
                              {/* <button className="btn me-2" onClick={signInUsingFacebook}><img className="login__icon" src="https://cdn-icons-png.flaticon.com/128/1384/1384053.png" alt="" /></button> */}

                        </div>
                  </div>

            </div>
      );
};

export default Login;