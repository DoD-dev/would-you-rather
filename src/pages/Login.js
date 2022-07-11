import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthendUser } from "../actions/authendUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const users = Object.values(useSelector((state) => state.users));
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    let userId = document.getElementById("user-login").value;
    if (userId) {
      dispatch(setAuthendUser(userId));
    }
    navigate(window.location.pathname, { replace: true });
  };

  return (
    <div className="center login">
      <div className="header">
        <h4>Welcome to Would You Rather App!</h4>
        <p>Please sign in to continue</p>
      </div>
      <div>
        <img src="/logo512.png" alt="React logo" />
      </div>
      <div>
        <h2>Sign in</h2>
      </div>
      <div>
        <select defaultValue={null} id="user-login">
          <option value={null} disabled>
            Select User
          </option>
          {users?.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button onClick={handleLogin}>Sign in</button>
      </div>
    </div>
  );
};

export default Login;
