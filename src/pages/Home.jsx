import React, { useState, useCallback } from "react";
import { Route, Routes } from "react-router";
import SidebarLayout from "../components/Sidebar";

import NotFound from "./NotFound";
import Repositories from "../components/Repositories";

function Home() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = useCallback((newUsername) => {
    setUsername(newUsername);
  }, []);

  return (
    <SidebarLayout username={username} onUsernameChange={handleUsernameChange}>
      <Routes>
        <Route path="/" element={<Repositories username={username} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SidebarLayout>
  );
}

export default React.memo(Home);
