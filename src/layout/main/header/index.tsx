import { Button } from "@/components/common/button";
import logo from "../../../assets/logo/tusky-logo.png";
import { useState } from "react";
import { Modal } from "@/components/common/modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header className="bg-[#2A363B] text-white shadow-md">
        {/* Top Header: Logo + Add Button */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo / Title */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
            <h1 className="text-lg font-bold text-[#FECEAB]">Tusky</h1>
          </div>

          {/* Add Task Button */}
          <Button
            text="Add Task"
            size="sm"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </header>
      {openModal && (
        <Modal
          size="large"
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Add new task..."
          body={
            <>
              <div>THIS IS SOME CONTENT</div>
            </>
          }
        />
      )}
    </>
  );
};

export default Header;
