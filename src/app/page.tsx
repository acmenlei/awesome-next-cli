"use client";
import Modal from "@/components/Modals";
import NiceModal from "@ebay/nice-modal-react";
import { Button } from "antd";
import { useCallback } from "react";

export default function Home() {
  const test = useCallback(function () {
    NiceModal.show(Modal, { title: "温馨提示", content: "这是一段提示信息" });
  }, []);

  return (
    <NiceModal.Provider>
      <Button onClick={test} type="primary">
        执行
      </Button>
    </NiceModal.Provider>
  );
}
