/* eslint-disable no-unused-vars */
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import classes from "../../Styles/Login.module.css";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Spinner from "../../Utls/Spinner";
import { toast } from "react-toastify";

export default function Login() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [user, loading] = useAuthState(auth);

  const authenticationErrorMessage = googleError || githubError || emailError;
  const authenticationLoading =
    googleLoading || githubLoading || emailLoading || loading;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
  } = useForm();

  const errorMsg = "*This field is required";

  //handling the user *********************
  if (authenticationErrorMessage) {
    toast.error(
      authenticationErrorMessage.message.includes("invalid")
        ? "Wrong password"
        : "Something went wrong!!",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "customId",
      }
    );
  }
  if (authenticationLoading) {
    return <Spinner />;
  }

  if (user) {
    return <Navigate to={from} replace:true />;
  }

  //handling sign in with email and pass *********************
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password).then((res) => {
      if (res?._tokenResponse.idToken) {
        navigate("/");
      }
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <fieldset>
          <legend>Login</legend>
          <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={email && classes.error}
              {...register("email", { required: true })}
              placeholder="Enter your email"
              type="email"
            />

            {email && (
              <span className={`${email && classes.error} ${classes.span}`}>
                {errorMsg}
              </span>
            )}
            <input
              className={password && classes.error}
              {...register("password", { required: true })}
              placeholder="Enter your password"
              type="password"
            />
            {password && (
              <span className={`${password && classes.error} ${classes.span}`}>
                {errorMsg}
              </span>
            )}

            <input type="submit" value="Login" />

            <p className={classes.signUpText}>
              New here? <Link to="/registration">Sign up</Link> with email.
            </p>
          </form>
          <div className={classes.socialBtns}>
            <div
              onClick={() => signInWithGoogle()}
              className={classes.googleBtn}
            >
              <img
                width={"36px"}
                height={"36px"}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-vector-graphic-pixabay-15.png"
                alt=""
              />
              <button>Continue with google</button>
            </div>
            <div
              onClick={() => signInWithGithub()}
              className={classes.githubBtn}
            >
              <img
                width={"42px"}
                height={"36px"}
                src="https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png"
                alt=""
              />
              <button>Continue with github</button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
