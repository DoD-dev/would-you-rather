import React from "react";
import { useSelector } from "react-redux";
import ScoreCard from "../components/ScoreCard";

const LeaderBoard = () => {
  const users = Object.values(useSelector((state) => state.users));
  let leaderBoard = users.map(
    ({ id, name, avatarURL, answers, questions }) => ({
      id: id,
      name: name,
      avatarURL: avatarURL,
      answers: Object.entries(answers).map(([key, value]) => ({
        id: key,
        option: value,
      })).length,
      questions: questions.length,
    })
  );
  leaderBoard.sort(
    (a, b) => b.answers + b.questions - (a.answers + a.questions)
  );
  return (
    <ul className="leader-board">
      {leaderBoard ? (
        leaderBoard.map((user, index) => (
          <li key={user.id}>
            <ScoreCard user={user} top={index} />
          </li>
        ))
      ) : (
        <li>No user on leader board</li>
      )}
    </ul>
  );
};

export default LeaderBoard;
