"use client";

import Modal from "@/components/Modal";
import NiceModal from "@ebay/nice-modal-react";
import { Button } from "@nextui-org/react";

export default function Flow() {
  function handle() {
    NiceModal.show(Modal);
  }
  // 数据由父组件传递
  return (
    <NiceModal.Provider>
      <Button color="primary" onPress={handle}>
        启动
      </Button>
    </NiceModal.Provider>
  );
}
