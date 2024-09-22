"use client";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { UserRoundPlus } from "lucide-react";
import { Suspense, useState } from "react";
// import AddContactModal from "./AddContactModal";
// import AllContact from "./AllContact";
// import { usedebounce } from "../../app/hooks/hooks";

export default function () {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  // const debounceSearch = usedebounce(search);

  return (
    <div className="w-full p-4">
      {/* {openModal && (
        <AddContactModal open={openModal} close={() => setOpenModal(false)} />
      )} */}
      <div className="flex mb-2">
        <Button
          onClick={() => setOpenModal(true)}
          className={
            "bg-accent-foreground mx-7 hover:bg-[#13D8AA] rounded-xl popBtn"
          }
        >
          <UserRoundPlus />
        </Button>
        <div className="bg-[#000] text-[70%] popup flex justify-center rounded-md border h-[30px] items-center w-[100px]">
          Add new Contact
        </div>
      </div>
      {/* <AllContact searchTerm={debounceSearch} /> */}
    </div>
  );
}
