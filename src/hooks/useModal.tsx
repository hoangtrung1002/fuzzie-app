import { ModalContext } from "@/providers/modal-provider";
import { useContext } from "react";

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("useModal must be used within modal provider");

  return context;
};

export default useModal;
