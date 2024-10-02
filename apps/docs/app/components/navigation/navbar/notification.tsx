"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/sheet";
import { Bell } from "lucide-react";
import { useSession } from "next-auth/react";
import { getAllNotification } from "~/app/lib/actions/queries";

interface Notification {
  id: string;
  notification: string;
  userID: number;
  createdAt: Date;
  updatedAt: Date;
}

const Notification = () => {
  const session = useSession();
  const [notification, setNotification] = useState<Notification[]>([]);

  useEffect(() => {
    const notify = async () => {
      const notiData = await getAllNotification(session.data?.user.id);
      setNotification(notiData.map((item) => item));
    };
    notify();
    console.log(notification);
  }, []);

  return (
    <Sheet>
      <SheetTrigger>
        <Bell className="mr-2 shaking" color="#D19A02" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>All notifications of your account</SheetDescription>
        </SheetHeader>
        <ul className="mt-4">
          {notification.map((item, i) => (
            <li
              key={i}
              className="bg-muted mb-1 flex items-center justify-between p-1 rounded-xl"
            >
              <div className="bg-muted-foreground flex items-center justify-center text-lg p-1 h-[50px] w-[50px] border-4 text-background font-medium border-muted/70 shadow-md rounded-full">
                {session.data?.user.name?.substring(0, 2)}
              </div>
              <div className="text-xs">{item.notification}</div>
              <div className="text-xs text-muted-foreground">
                {item.createdAt.toDateString()}
              </div>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Notification;
