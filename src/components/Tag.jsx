import { useState } from "react";


import Spinner from "./Spinner"
import useGif from "../hooks/useGif";


export default function Tag() {


  
  const[tag,setTag]=useState('');
  const{gif,loader,fetchData}=useGif(tag);

  

  return (
  <div className="bg-green-500 w-1/2  flex flex-col items-center font-bold mt-[45px] gap-y-10 rounded-lg border border-black">
    <h1 className="mt-[45px] gap-y-10  ">
      RANDOM GIF
    </h1>
    {
    loader?(<Spinner/>):(<img src={gif} alt="gif" width={450}></img>)
    }
    <input
    className="w-10/12 bg-white text-lg py-2 rounded-lg text-center"
    onChange={(event)=>setTag(event.target.value)}
    value={tag}>
    </input>
    <button onClick={()=>fetchData(tag)} className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">
      Generate
    </button>
  </div>
    );
}
