// "use client";
// import { Button } from "../components/ui/button";
// // import { useState } from "react";

// export const AppBar = () => {
//   const { data: session, status } = useSession();
//   // const [open, setOpen] = useState(false);
//   const username = session?.user?.name;
//   const router = useRouter();
//   // console.log(session, status)
//   const handleProfile = () => {
//     return router.push("/profile");
//   };

//   return (
//     <>
//       <ul className="flex  justify-between w-screen px-3 h-[70px] fixed z-50">
//         <li className="text-3xl font-bold flex flex-col justify-center text-[#D8B4FE]">
//           <Link href={"/"}>
//             <span className="text-[#d19a02] font-black text-4xl">Co</span>
//             inWallet
//           </Link>
//         </li>
//         <li className="bg-[#b7acbf] h-[70%] duration-700 font-bold text-lg rounded-[90px] flex items-center justify-end m-2 pl-5 shadow-xl">
//           {username && (
//             <div className="hover:scale-110 mr-5">
//               <Bell />
//             </div>
//           )}
//           {username?.split(" ").at(0)}
//           {/* {!username && <RotatingWords />} */}
//           {!username && <div className="italic">Welcome</div>}
//           {username && (
//             <div
//               className="bg-[#000] w-[40px] h-[40px] rounded-full ml-4 hover:cursor-pointer"
//               onClick={handleProfile}
//             >
//               {avatar && username && (
//                 <img
//                   src={String(avatar)}
//                   alt="image"
//                   className="rounded-full border h-full w-full hover:scale-110 duration-200 border-[#000]"
//                 />
//               )}
//               {!avatar && username && (
//                 <div className="bg-[#ec3232] flex items-center justify-center text-lg p-1 h-full w-full border-2 text-[#fff] border-[#fff] rounded-full">
//                   {username?.substring(0, 2)}
//                 </div>
//               )}
//             </div>
//           )}
//           <div className="flex justify-center">
//             {/* {!username && <Button onClick={() => router.push("/signin")}>Login</Button>} */}
//             <Button
//               onClick={user ? onSignin : onSignout}
//               className={"m-2 rounded-[50px] bg-[#655284] boxShadow"}
//             >
//               {user ? "Logout" : "Signup"}
//             </Button>
//           </div>
//         </li>
//       </ul>
//       {/* {open && <ul className="bg-[#000] absolute z-50 h-[20vh] w-[15vw] right-0 mt-10 mr-10 rounded-lg flex flex-col items-center justify-center space-y-2">
//       <li className="text-[#fff]">Options</li>
//       <li className="text-[#fff]">Logout</li>
//     </ul>} */}
//     </>
//   );
// };
