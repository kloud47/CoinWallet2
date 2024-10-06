import React from "react";
import ReactDOM from "react-dom";

type Props = {
  data: { amount: string; bank: string } | undefined;
  Open: boolean;
  close: () => void;
};

const ModalUPIpin = ({ data, Open, close }: Props) => {
  if (!Open) return;
  return ReactDOM.createPortal(
    <div className="z-40 absolute">ModalUPIpin</div>,
    document.querySelector("#portal")!
  );
};

export default ModalUPIpin;
