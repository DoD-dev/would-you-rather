import { getInitialData } from "../ultis/api";
import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));
    dispatch(hideLoading());
  };
}
