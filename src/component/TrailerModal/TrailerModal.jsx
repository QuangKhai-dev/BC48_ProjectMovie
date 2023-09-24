import React, { useEffect } from 'react';
import { Modal } from 'antd';
const TrailerModal = ({ isModalOpen, onCancel, contentModal }) => {
  console.log(contentModal);

  return (
    <Modal
      title="Trailer"
      open={isModalOpen}
      onCancel={onCancel}
      footer={null}
      width={1000}
      afterClose={() => {
        let listIframe = document.querySelectorAll('iframe');
        // sử dụng vòng lặp vì có thể gặp trường hợp xảy ra đó là layout lúc này có nhiều hơn 2 thẻ iframe
        for (let item in listIframe) {
          let src = item.src;
          if (src) {
            item.src = src;
          }
        }
      }}
    >
      {contentModal}
    </Modal>
  );
};

export default TrailerModal;
