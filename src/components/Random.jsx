
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";


export default function Random() {

  function clickHandler(){
      fetchData();
  }
  const{gif,loader,fetchData}=useGif('');

  return (
  <div className="bg-green-500 w-1/2  flex flex-col items-center font-bold mt-[45px] gap-y-10 rounded-lg border border-black">
    <h1 className="mt-[45px] gap-y-10  ">
      RANDOM GIF
    </h1>
    {
    loader?(<Spinner/>):(<img src={gif} alt="gif" width={450}></img>)
    }<button onClick={clickHandler} className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">
      Generate
    </button>
  </div>
    );
}
