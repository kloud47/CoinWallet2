import { ToastAction } from "@repo/ui/components/toast";
import { toast } from "@repo/ui/hooks/use-toast";
import { div } from "framer-motion/client";
import { Wifi, WifiOff } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

const NetworkStatusNotify = (
  SetConnected: Dispatch<SetStateAction<boolean>>,
  isOnline: boolean,
  message: string
) => {
  if (isOnline) {
    SetConnected(true);
    toast({
      title: "You are online",
      description: message,
      action: (
        <ToastAction altText="Try again">
          <Wifi color="#4ADE80" />
        </ToastAction>
      ),
    });
  } else {
    SetConnected(false);
    toast({
      title: "You are offline",
      description: message,
      action: (
        <ToastAction altText="Try again">
          <WifiOff color="#EF4444" />
        </ToastAction>
      ),
    });
  }
};

export default NetworkStatusNotify;
