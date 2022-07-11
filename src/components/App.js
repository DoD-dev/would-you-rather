import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "../pages/HomePage";
import NewQuestion from "../pages/NewQuestion";
import LeaderBoard from "../pages/LeaderBoard";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import LoadingBar from "react-redux-loading-bar";
import QuestionCard from "./QuestionCard";

const App = () => {
  const authendUser = useSelector((state) => state.users[state.authendUser]);

  return (
    <div>
      <div className="app-header">Would you rather ?</div>
      <div className="container">
        <BrowserRouter>
          <NavigationBar />
          <LoadingBar />
          <hr />
          <Routes>
            {authendUser ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/newQuestion" element={<NewQuestion />} />
                <Route path="/leaderBoard" element={<LeaderBoard />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  exact
                  path="/question/:questionId"
                  element={<QuestionCard />}
                />
              </>
            ) : (
              <>
                <Route path="*" element={<Login />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
