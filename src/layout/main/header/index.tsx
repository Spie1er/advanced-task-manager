import logo from "../../../assets/logo/tusky-logo.png";

const Header = () => {
  return (
    <header className="bg-[#2A363B] text-white shadow-md">
      {/* Top Header: Logo + Add Button */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Title */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-auto object-contain" // ensures proper vertical alignment
          />
          <h1 className="text-lg font-bold text-[#FECEAB]">Tusky</h1>
        </div>

        {/* Add Task Button */}
        <button className="flex items-center justify-center rounded-lg border border-[#99B898] bg-[#99B898]/20 px-4 py-2 text-lg font-bold text-[#FECEAB] transition hover:bg-[#FF847C] hover:text-white">
          Add Task
        </button>
      </div>

      {/* Second Line: Search, Filter, Sort */}
    </header>
  );
};

export default Header;
