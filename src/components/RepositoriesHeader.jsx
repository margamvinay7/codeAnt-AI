import React from "react";
import { Refresh, Plus } from "../constants/images";

export const Header = React.memo(({ totalCount, handleRefresh }) => (
  <div className="md:flex items-center justify-between gap-2">
    <div>
      <h1 className="text-2xl font-semibold">Repositories</h1>
      <p className="mt-2">{totalCount} Total Repositories</p>
    </div>
    <div className="space-x-4 flex items mt-2 md:mt-0">
      <button
        className="text-[11px] md:text-[12px] lg:text-base btn flex gap-3 items-center"
        onClick={handleRefresh}
      >
        <img src={Refresh} alt="Menu Icon" className="cursor-pointer w-4 h-4" />
        Refresh All
      </button>
      <button className="text-[11px] md:text-[12px] lg:text-base btn flex gap-2 items-center bg-[#1570EF] text-white">
        <img
          src={Plus}
          alt="Menu Icon"
          className="cursor-pointer w-[15px] h-[15px]"
        />
        Add Repository
      </button>
    </div>
  </div>
));
