// // "use client";
// import { useQuery, useIsFetching } from "@tanstack/react-query";
// import { title } from "process";

// interface superHerosType {
//   id:number,
//   title:string,
//   content:string,
// }

// export default function Home() {
//   const isFetching= useIsFetching();
//   const { data:superHeroData, isLoading, isError, isSuccess } = useQuery<superHerosType[{}]>({
//     queryKey: ["superHero"],
//     queryFn: () => {
//       return fetch("https://json-data-server.onrender.com/superheros").then((res) =>
//         res.json()
//       );
//     },
//     select: (heros:superHerosType[{}])=>
//       heros.map((heros:superHerosType)=>(
//         {
//           id:heros.id,
//           title:heros.title,
//           // content:heros.content, // দরকার নাই
//         }
//       ))
//   });

//   const { data:burger,  } = useQuery<superHerosType[{}]>({
//     queryKey: ["burger"],
//     queryFn: () => {
//       return fetch("https://json-data-server.onrender.com/burger").then((res) =>
//         res.json()
//       );
//     },
//     enabled: !!superHeroData,
//   });

//   if (isLoading) {
//     return (
//       <h1 className="mt-4 flex min-h-screen flex-col items-center">
//         Loading....
//       </h1>
//     );
//   }
//   if (isError) {
//     return (
//       <h1 className="mt-4 flex min-h-screen flex-col items-center">
//         Error!
//       </h1>
//     );
//   }
//   // if (isSuccess) {
//   //   return (
//   //     <h1 className="mt-4 flex min-h-screen flex-col items-center">
//   //       Sucess
//   //     </h1>
//   //   );
//   // }
//   console.log(superHeroData);
//   console.log(burger)
//   return (
//     <main>
//       <main className="flex min-h-screen flex-col items-center  p-24">
//         <h1>SuperHero</h1>
//         <br />
//         <div>
//           {superHeroData.map((heros:any)=>(
//             <h1 key={heros.id}>
//               {heros.title}
//             </h1>
//           ))}
//         </div>

//         <h1>BUrger</h1>
//         <br />
//         <div>
//           {burger?.map((burger:any)=>(
//             <h1 key={burger.id}>
//               {burger.desc}
//             </h1>
//           ))}
//         </div>
//       </main>
//     </main>
//   );
// }

import React from 'react'

export function Home() {
  

  return (
    <>
      <h1>dgfdsgdfgdf</h1>
    </>
  )
}

