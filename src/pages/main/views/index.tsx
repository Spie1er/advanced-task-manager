import { Button } from "@/components/common/button";
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
            className="focus:border-tusky-coral focus:ring-tusky-coral bg-tusky-teal w-full rounded-lg border border-[#99B898] py-2 pr-3 pl-9 text-sm text-white placeholder-gray-400 focus:ring-2"
          />
          <Search className="absolute top-2.5 left-2 h-4 w-4 text-gray-400" />
        </div>

        <Button
          text="Filter"
          type="secondary"
          iconEnd={<Filter className="h-4 w-4" />}
        />
      </div>
    </div>
  );
};
export default HomePage;
