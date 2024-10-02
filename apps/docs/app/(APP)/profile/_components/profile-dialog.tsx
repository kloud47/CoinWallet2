"use client";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/components/button";
import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

type Props = {
  user: string | null | undefined;
  imageUrl: string | null | undefined;
};

const ProfileDialog = ({ user, imageUrl }: Props) => {
  const imageRef = useRef(null);
  const [image, setImage] = useState(undefined as File | undefined); // type casting
  const [preview, setPreview] = useState<string | undefined | null>(imageUrl);

  const ChooseFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const submitImage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) {
        return;
      }
      const formData = new FormData();
      // console.log(formData);
      formData.append("image", image);
      formData.append("user", String(user));

      const response = await axios.post(`/api/upload-image`, formData);
    } catch (err: any) {
      console.log("Error", err.message);
    }
  };

  return (
    <Card classname="!border-none">
      <form
        onSubmit={submitImage}
        className="flex flex-col items-center w-full"
      >
        <div>
          {!preview ? (
            <div className="flex items-center justify-center text-[100px] p-1 h-[200px] w-[200px] border-4 border-dashed text-foreground font-thin border-accent hover:bg-card cursor-pointer shadow-md rounded-2xl">
              +
            </div>
          ) : (
            <Image
              ref={imageRef}
              src={preview}
              alt="profile image"
              className="overflow-hidden object-contain w-auto h-auto"
              // onLoad={onImageLoad}
              width={300}
              height={300}
            />
          )}
        </div>
        <div className="flex my-4 w-full justify-between px-10">
          {" "}
          <label
            htmlFor="profilePic"
            className="flex justify-center items-center border border-[#35aab9]  hover:cursor-pointer rounded-full h-[40px] w-[80px] bg-background hover:bg-accent text-[#fff]"
          >
            Gallery
          </label>
          <input
            type="file"
            className="hidden"
            name="profilePic"
            id="profilePic"
            onChange={ChooseFile}
          />
          <Button
            variant={"outline"}
            className={"border border-[#35aab9] button rounded-full"}
            // onClick={() =>
            //     CropProfileImage(
            //         imageRef.current,
            //         convertToPixelCrop(
            //             crop,
            //             imageRef.current.width,
            //             imageRef.current.height
            //         )
            //     )
            // }
          >
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ProfileDialog;
