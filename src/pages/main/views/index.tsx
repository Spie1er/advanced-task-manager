import { Filter, Search } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <div className="mx-auto mt-5 flex max-w-6xl items-center gap-4 px-4 pb-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full rounded-lg border border-[#99B898] bg-[#2A363B] py-2 pr-3 pl-9 text-sm text-white placeholder-gray-400 focus:border-[#FF847C] focus:ring-2 focus:ring-[#FF847C]"
          />
          <Search className="absolute top-2.5 left-2 h-4 w-4 text-gray-400" />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-1 rounded-lg border border-[#99B898] bg-[#99B898]/20 px-3 py-2 text-[#FECEAB] transition hover:bg-[#FF847C] hover:text-white">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>
    </div>
  );
};
export default HomePage;
