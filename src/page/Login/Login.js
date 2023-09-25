import React from 'react';
import LoginAnimation from '../../component/LoginAnimation/LoginAnimation';
import LoginForm from '../../component/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-screen bg-gray-300">
      {/* animation  */}
      <div className="layout_animation flex justify-center items-center">
        <LoginAnimation />
      </div>
      {/* login form  */}
      <div className="layout_loginForm">
        {/* form đăng nhập  */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
