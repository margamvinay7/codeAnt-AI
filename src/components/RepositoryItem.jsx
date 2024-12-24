import React from "react";
import { Database, Dot } from "../constants/images";
import { Link } from "react-router";
export const RepositoryItem = React.memo(({ repo, getDays }) => (
  <li className="p-4 border-b border-b-[#D5D7DA] hover:bg-[#D5D7DA]">
    <Link to={repo.html_url || "#"} target="_blank">
      <div className="flex gap-3 items-center mb-2">
        <h2 className="font-semibold text-sm md:text-base">{repo.name}</h2>
        <span className="p-0.5 px-3 text-sm border border-[#B2DDFF] text-[#175CD3] bg-[#eff8ff] rounded-full">
          {repo.visibility}
        </span>
      </div>
      <div className="flex md:justify-between w-full gap-3 md:max-w-[400px]">
        <p className="text-[9px] md:text-base flex items-center gap-1.5 md:gap-3">
          {repo.language || "Unknown"}
          <img src={Dot} alt="Menu Icon" className="cursor-pointer w-2 h-2" />
        </p>
        <p className="text-[9px] md:text-base flex items-center gap-1 md:gap-3">
          <img
            src={Database}
            alt="Menu Icon"
            className="cursor-pointer w-[10px] h-3"
          />
          {repo.size} KB
        </p>
        <p className="text-[10px] md:text-base my-0">
          {typeof repo.updated_at !== "string"
            ? `Updated {getDays(repo.updated_at)} days ago`
            : repo.updated_at}
        </p>
      </div>
    </Link>
  </li>
));
