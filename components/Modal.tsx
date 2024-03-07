"use client";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "../app/(external)/database/components/SearchBar";

type ModalProps = {
  children: React.ReactNode;
  showModal: true | false;
};

const Modal = ({ children, showModal }: ModalProps) => {
  return (
    <>
      {showModal && (
        <div className="absolute top-10 w-1/2 h-fit-content p-2 shadow-md bg-[#fff] border border-[var(--clr-grey-300)] rounded-md ">
          <div className="flex flex-col gap-2">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
