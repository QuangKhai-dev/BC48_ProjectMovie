import React from 'react';
import Lottie from 'react-lottie';
// import animation vào component
import * as loginAnimation from './../../assest/animation/loginAnimation.json';
const LoginAnimation = () => {
  const defaultOptions = {
    // animation lặp lại vô tận
    loop: true,
    // animation tự động chạy
    autoplay: true,
    // animation muốn chạy
    animationData: loginAnimation,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice',
    // },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LoginAnimation;
