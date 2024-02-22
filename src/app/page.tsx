"use client";

import Modal from "@/components/Modal";
import NiceModal from "@ebay/nice-modal-react/lib/esm";
import { useCallback } from "react";

export default function Home() {
  const test = useCallback(() => {
    NiceModal.show(Modal, { title: "温馨提示", content: "这是一段提示信息" });
  }, []);

  return (
    <NiceModal.Provider>
      <button onClick={test} className=" btn btn-primary btn-md">
        执行
      </button>
    </NiceModal.Provider>
  );
}
