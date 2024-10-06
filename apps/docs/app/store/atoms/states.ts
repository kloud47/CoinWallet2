"use client";
import { atom } from "recoil";

export const profileAtom = atom<string | null | undefined>({
  key: "profile",
  default: undefined,
});

// export const Connection = atom<boolean>({
//   key: "Network",
//   default: false,
// });
