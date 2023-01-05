import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom'

const LayoutBox = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Updated Modal
      </Button>
      <Modal
      width="70%"
      height="50%"
      bodyStyle={{overflowX: "scroll", overflowY: "scroll"}}
      footer={null}
        open={open}
        title="Title"
        onCancel={handleCancel}>
        
        <div>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
        </div>

      </Modal>
    </>
  );
};

export default LayoutBox;