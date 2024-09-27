"use client";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Search, UserRoundPlus } from "lucide-react";
import { Suspense, useState } from "react";
import AllContacts from "./all-contacts";
import { usedebounce } from "~/app/hooks/hooks";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/ui/components/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/dialog";
import AddContactForm from "../forms/add-contact-form";

export default function () {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const debounceSearch = usedebounce(search);

  return (
    <div className="relative w-full p-4">
      <div className="flex mb-2">
        <div className="bg-accent rounded-full flex w-[70%]">
          <div className="bg-accent hover:bg-accent-foreground/30 flex items-center rounded-l-full p-2">
            <Search />
          </div>
          <Input
            className="rounded-r-xl outline-none bg-background/60 h-full"
            placeholder="Search Contacts..."
          />
        </div>
        <Dialog>
          <DialogTrigger>
            <div
              onClick={() => setOpenModal(true)}
              className={
                "bg-[#1699ba] mx-7 p-2 hover:bg-[#13D8AA] rounded-xl popBtn"
              }
            >
              <UserRoundPlus />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Contact</DialogTitle>
              <DialogDescription>Save a new contact</DialogDescription>
            </DialogHeader>
            <AddContactForm />
          </DialogContent>
        </Dialog>
      </div>
      <AllContacts searchTerm={debounceSearch} />
    </div>
  );
}
