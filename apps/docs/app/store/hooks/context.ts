"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileAtom } from "../atoms/states";

export const getProfile = () => {
  const value = useRecoilValue(profileAtom);
  return value;
};

export const profileState = (ImageUrl: string | null | undefined): void => {
  const [imageUrl, setImageUrl] = useRecoilState(profileAtom);
  setImageUrl(ImageUrl);
};

// export const getConnection = () => {
//   const value = useRecoilValue(Connection);
//   return value;
// };

// export const ConnectionState = (isOnline: boolean): void => {
//   const [connect, setConnect] = useRecoilState(Connection);
//   setConnect(isOnline);
// };
