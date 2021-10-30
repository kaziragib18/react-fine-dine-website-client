import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, FacebookAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
      const [user, setUser] = useState({});
      const [isLoading, setIsLoading] = useState(true);

      // const history = useHistory();
      // const location = useLocation();
      // const url = location.state?.from||"/home"

      // const { from } = location.state || { from: { pathname: "/" } };


      const auth = getAuth();

      //Email and password validation
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('')
      const [isLogin, setIsLogin] = useState(false);

      //Login & Registration toggle
      const toggleLogin = e => {
            setIsLogin(e.target.checked);
      }

      const handleNameChange = e => {
            setName(e.target.value);
      }

      const handleEmailChange = e => {
            setEmail(e.target.value);
      }

      const handlePasswordChange = e => {
            setPassword(e.target.value);
      }

      const handleResetPassword = () => {
            sendPasswordResetEmail(auth, email)
                  .then(result => {
                        setError('');
                  })
                  .catch(error => {
                        setError(error.message);

                        setTimeout(()=>{
                              setError('');
                            },5000);
                   
                  })

            window.confirm('Reset passward email has been sent');
      }

      const handleRegistration = e => {
            e.preventDefault();
            // console.log(email, password);
            if (password.length < 6) {
                  setError("Password should be at least 6 characters")
                  return;
            }
            if (!/^(?=.*[A-Z].*[A-Z])/.test(password)) {
                  setError("Password must contain 2 upper case letter!")
            }
            isLogin ? processLogin(email, password) : registerNewUser(email, password);
      }

      const processLogin = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        const user = result.user;
                        // history.push(url);
                        // console.log(user);
                        setError('');
                  })
                  .catch(error => {
                        setError(error.message);
                  })
                  .finally(() => setIsLoading(false));
      }

      const registerNewUser = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                        setError('');
                        verifyEmail();
                        setUserName();
                  })
                  .catch(error => {
                        setError(error.message);
                  })
                  .finally(() => setIsLoading(false));
      }

      const setUserName = () => {
            updateProfile(auth.currentUser, { displayName: name })
                  .then(result => {

                  })
      }

      const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                  .then(result => {
                        // console.log(result);
                  })
      }


      const signInUsingGoogle = () => {
            setIsLoading(true);
            const googleProvider = new GoogleAuthProvider();

            signInWithPopup(auth, googleProvider)
                  .then(result => {
                        setUser(result.user);
                        // history.replace(from);

                  })
                  .finally(() => setIsLoading(false));
      }

      const signInUsingFacebook = () => {
            setIsLoading(true);
            const facebookProvider = new FacebookAuthProvider();

            signInWithPopup(auth, facebookProvider)
                  .then(result => {
                        setUser(result.user);
                        // history.push(url);
                  })
                  .finally(() => setIsLoading(false));
      }

      //observed state change
      useEffect(() => {
            const unsubscribed = onAuthStateChanged(auth, user => {
                  if (user) {
                        setUser(user);
                  }
                  else {
                        setUser({})
                  }
                  setIsLoading(false);
            });
            return () => unsubscribed;
      }, [])

      const logOut = () => {
            setIsLoading(true);
            signOut(auth)
                  .then(() => { })
                  .finally(() => setIsLoading(false));
      }

      return {
            user,
            email,
            password,
            isLoading,
            isLogin,
            error,
            signInWithEmailAndPassword,
            signInUsingGoogle,
            signInUsingFacebook,
            toggleLogin,
            handleNameChange,
            handleEmailChange,
            handlePasswordChange,
            handleResetPassword,
            handleRegistration,
            logOut
      }
}

export default useFirebase;