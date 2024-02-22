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
      modal.visible && (
        <>
          <div
            onClick={modal.remove}
            className="mask bg-gray-950/50 w-[100vw] top-0 left-0 h-[100vh] fixed"
          ></div>
          <div className="p-5 z-20 bg-light-background fixed min-w-[300px] flex-col gap-3 rounded-lg shadow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className=" font-bold ">{title}</h3>
            <p className=" font-light text-sm my-4">{content}</p>
            <div className="action flex gap-3 justify-end">
              <button className="btn btn-ghost btn-sm" onClick={modal.hide}>
                {cancelText || "取消"}
              </button>
              <button
                className=" btn btn-primary btn-sm"
                onClick={modal.remove}
              >
                {okText || "确认"}
              </button>
            </div>
          </div>
        </>
      )
    );
  }
);
