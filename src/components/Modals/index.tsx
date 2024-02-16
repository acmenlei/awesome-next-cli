import { Modal } from "antd";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

type Props = {
  content?: string;
  title?: string;
  okText?: string;
  cancelText?: string;
};

export default NiceModal.create(
  ({ title, content, okText, cancelText }: Props) => {
    const modal = useModal();
    return (
      <Modal
        title={title}
        onOk={() => modal.hide()}
        open={modal.visible}
        onCancel={() => modal.hide()}
        afterClose={() => modal.remove()}
        okText={okText || "确认"}
        cancelText={cancelText || "取消"}
      >
        {content || "您确认执行此操作吗？"}
      </Modal>
    );
  }
);
