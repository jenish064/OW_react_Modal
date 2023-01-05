import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import VldtForm from "./VldtForm"

const ModalBox = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [okFlag, setOkFlag] = useState(false)

  const showModal = () => {
    setOpen(true);
  };

  const fetchFromChild = (FFChild) => {
    FFChild()
  }

  const handleOk = (e) => {
    e.preventDefault()
    setOkFlag(!okFlag)
    fetchFromChild()
    setLoading(false);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open form
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>
        ]}
      >
        <VldtForm okFlag={okFlag}/>
      </Modal>
    </>
  );
};

export default ModalBox;