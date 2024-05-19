import { useFormik } from "formik";
import { userSchema } from "../validation/UserValidation";
import "./Login.css";

const Login = () => {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=3a8b66c95fbd4c63ba1ab75ee1c2562f&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played";

  const formSubmit = async (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: userSchema,
      onSubmit: formSubmit,
    });

  return (
    <div className="form-wrap">
      <div id="form-ui">
        <form onSubmit={handleSubmit} action="" method="post" id="form">
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-2">Welcome Back, Loyd</div>
            </div>
            <div id="input-area">
              <div className="form-inp">
                <input
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Email Address"
                  type="email"
                />
                {errors.email && touched.email && (
                  <p className="error-text text-[12px] text-red-500 font-semibold">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="form-inp">
                <input
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Password"
                  type="password"
                />
                {errors.password && touched.password && (
                  <p className="error-text text-[12px] text-red-500 font-semibold">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>
            <div id="submit-button-cvr">
              <a
                className="p-3 flex items-center justify-center text-black rounded-md border-2 bg-green-500 border-green-500 hover:bg-green-600 hover:text-white h-[40px]"
                href={AUTH_URL}
              >
                Login to Spotify
              </a>
            </div>
            <div id="forgot-pass">
              <a href="#">Forgot password?</a>
            </div>
            <div id="bar"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
