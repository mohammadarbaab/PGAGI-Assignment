import { AppDispatch } from '../store/store';
import { login, logout } from '../store/slices/authSlice';

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
  // Simulate API call
  setTimeout(() => {
    dispatch(login({ email }));
  }, 1000);
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  dispatch(logout());
};