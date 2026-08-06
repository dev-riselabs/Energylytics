import { IoSearch } from "react-icons/io5";

function Search() {
  return <div className="flex flex-col gap-4.5 p-5 lg:p-7.5 bg-white rounded-xl">
    <h3 className="text-lg sm:text-xl font-inria font-bold text-slate">Search Insights</h3>
    <div className="border border-zinc p-3 sm:p-4.5 flex items-center gap-3 rounded-full">
        <IoSearch className="w-4 h-4 text-green25 shrink-0" />
        <input type="search" name="" id="" placeholder="Search article....."  className="flex-1 text-xs font-sora text-green40 outline-none"/>
    </div>
  </div>;
}

export default Search;
