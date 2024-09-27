import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/sheet";
import { Bell } from "lucide-react";

type Props = {};

const Notification = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Bell className="mr-2 shaking" color="#D19A02" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>All notifications arrive here</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Notification;
