import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthendUser } from "../actions/authendUser";

const NavigationBar = () => {
  const authendUser = useSelector((state) => state.users[state.authendUser]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setAuthendUser(null));
    navigate("/", { replace: true });
  };

  return (
    <nav className="nav">
      <ul className="page-nav">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/newQuestion">New Question</Link>
        </li>
        <li className="link">
          <Link to="/leaderBoard">Leader Board</Link>
        </li>
      </ul>
      {authendUser && (
        <ul className="user-info">
          <li>Hello, {authendUser.name}</li>
          <li>
            <img
              className="avatar"
              src={authendUser.avatarURL}
              alt="User Avatar"
            />
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
