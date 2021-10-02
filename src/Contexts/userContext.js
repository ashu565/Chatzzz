import { createContext, useReducer } from 'react';

export const Context = createContext({});

const initialState = {
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const data = { ...action.payload.profile };
      console.log(data);
      const newState = { ...state };
      console.log(newState);
      newState.user = data;
      return newState;
    }
    // case 'LOGOUT': {
    //   const newState = {};
    //   return newState;
    // }
    default: {
      console.log('EEEE');
      return state;
    }
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Login = (profile) => {
    console.log(profile);
    const action = {
      type: 'LOGIN',
      payload: {
        profile,
      },
    };
    console.log('HELLO');
    dispatch(action);
  };
  const Logout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  const value = { state, Login, Logout };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
