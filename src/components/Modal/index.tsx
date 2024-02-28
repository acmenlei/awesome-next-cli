import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
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
      <Modal isOpen={modal.visible} onOpenChange={modal.hide}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem
              aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
              consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
              et. Culpa deserunt nostrud ad veniam.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={modal.hide}>
              Close
            </Button>
            <Button color="primary" onPress={modal.hide}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);
