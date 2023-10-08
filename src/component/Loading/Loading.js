import React from 'react';
import Lottie from 'react-lottie';
import * as loadingAnimation from './../../asset/animation/loadingAnimation.json';
const Loading = () => {
  const defaultOptions = {
    // animation lặp lại vô tận
    loop: true,
    // animation tự động chạy
    autoplay: true,
    // animation muốn chạy
    animationData: loadingAnimation,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice',
    // },
  };
  return (
    <div
      className="fixed h-screen top-0 left-0 w-full bg-slate-100 bg-opacity-30"
      style={{ zIndex: '9999' }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
