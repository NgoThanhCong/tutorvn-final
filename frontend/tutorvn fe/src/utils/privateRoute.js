import LoginPages from "../../src/pages/Login";
import { isLogin } from "./authHelper";
import React from 'react';
export const privateUserRoute = (Component) => {
  
  const Auth = (props) => {
    if (!isLogin()) {
      return <LoginPages  />;
    } else
      return <Component {...props} />;
  };

  // if (Component.getInitialProps) {
  //   Auth.getInitialProps = Component.getInitialProps;
  // }

  return Auth;
};
