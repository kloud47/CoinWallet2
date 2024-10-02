"use client";
import React, { useEffect, useState } from "react";
import NetworkStatusNotify from "./network-status-notify";
import { Signal, Wifi, WifiOff } from "lucide-react";

type Props = {};

const NetworkStatus = (props: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    navigator.onLine
      ? NetworkStatusNotify(setIsConnected, true, "You are online")
      : NetworkStatusNotify(setIsConnected, false, "You are offline");

    window.addEventListener("online", () => {
      NetworkStatusNotify(setIsConnected, true, "You are back online !!");
    });
    window.addEventListener("offline", () => {
      NetworkStatusNotify(setIsConnected, false, "Lost network connection !!");
    });
  });

  return (
    <div>
      {isConnected ? (
        <span className="text-green-400 text-sm font-medium ml-2 flex items-center">
          <Signal />
        </span>
      ) : (
        <span className="text-red-500 text-sm font-medium ml-2 flex items-center">
          <Signal />
        </span>
      )}
    </div>
  );
};

export default NetworkStatus;
