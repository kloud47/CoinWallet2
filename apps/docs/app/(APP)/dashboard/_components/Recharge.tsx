import React from "react";
import airtelLogo from "../../../public/Company-logo/airtel.jpg";
import crunchyrollLogo from "../../../public/Company-logo/crunchyroll.png";
import netflixLogo from "../../../public/Company-logo/netflix.jpg";
import spotifyLogo from "../../../public/Company-logo/spotify.png";
import Image from "next/image";

type Props = {};

const Recharge = (props: Props) => {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
        <Image
          src={airtelLogo.src}
          width={50}
          height={50}
          className="h-[50px] w-[50px] rounded-lg object-fit"
          alt="logo"
        />
        <div className="text-sm">Airtel prepaid</div>
      </div>
      <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
        <Image
          src={airtelLogo.src}
          width={50}
          height={50}
          className="h-[50px] w-[50px] rounded-lg object-fit"
          alt="logo"
        />
        <div className="text-sm">Airtel postpaid</div>
      </div>
      <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
        <Image
          src={netflixLogo.src}
          width={100}
          height={100}
          className="h-[50px] w-[50px] rounded-lg object-cover"
          alt="logo"
        />
        <div className="text-sm">Netflix...</div>
      </div>
      <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
        <Image
          src={crunchyrollLogo.src}
          width={50}
          height={50}
          className="h-[50px] w-[50px] rounded-lg object-fit"
          alt="logo"
        />
        <div className="text-sm">Crunchyroll</div>
      </div>
      <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
        <Image
          src={spotifyLogo.src}
          width={50}
          height={50}
          className="h-[50px] w-[50px] rounded-lg object-fit"
          alt="logo"
        />
        <div className="text-sm">Spotify</div>
      </div>
    </div>
  );
};

export default Recharge;
