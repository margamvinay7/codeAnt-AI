import React, { useEffect, useState, useMemo, useCallback } from "react";

import { Search } from "../constants/images";

import { Header } from "./RepositoriesHeader";
import { RepositoryItem } from "./RepositoryItem";
import { repos as repoData } from "../constants/data";

export default function Repositories({ username }) {
  const [repos, setRepos] = useState(repoData);
  const [filter, setFilter] = useState(repoData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRepositories = useCallback(async (username) => {
    if (username !== "") {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
        setFilter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const handleSearch = useCallback(
    (e) => {
      const searchTerm = e.target.value.toLowerCase();
      setFilter(
        repos.filter((repo) => repo.name.toLowerCase().includes(searchTerm))
      );
    },
    [repos]
  );

  const handleRefresh = useCallback(() => {
    fetchRepositories(username);
  }, [fetchRepositories, username]);

  const getDays = useCallback((date) => {
    const newDate = new Date(date);
    const currentDate = new Date();
    return Math.floor((currentDate - newDate) / (1000 * 60 * 60 * 24));
  }, []);

  useEffect(() => {
    fetchRepositories(username);
  }, [username, fetchRepositories]);

  const renderRepoList = useMemo(() => {
    if (loading) {
      return <p>Loading repositories...</p>;
    }
    if (error) {
      return <p className="text-red-500">Error: {error}</p>;
    }
    if (!filter || filter.length === 0) {
      return <p>No repositories found.</p>;
    }
    return filter.map((repo) => (
      <RepositoryItem key={repo.id} repo={repo} getDays={getDays} />
    ));
  }, [loading, error, filter, getDays]);

  return (
    <div className=" rounded-xl md:border border-[#E9EAEB]">
      <div className="p-4 border-b border-b-[#E9EAEB]">
        <Header
          totalCount={filter ? filter.length : 0}
          handleRefresh={handleRefresh}
        />
        <div className="max-w-[366px] border border-[#E9EAEB] rounded-md mt-4 flex items-center px-2">
          <img
            src={Search}
            alt="Menu Icon"
            className="cursor-pointer w-[18px] h-[18px]"
          />
          <input
            type="search"
            className="w-full h-full p-2 outline-none"
            placeholder="Search Repositories"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div>
        <ul className="min-h-[calc(100vh-12rem)]">{renderRepoList}</ul>
      </div>
    </div>
  );
}
