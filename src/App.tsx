import React, { useEffect, useState } from "react";
import { APIConfigContext } from "@contexts/APIConfigContext";
import { getApiConfig } from "@services/tmdb";
import { Route, Routes } from "react-router-dom";
import { Discover } from "@pages/Discover.page";
import { Layout } from "@pages/Layout.page";
import { NotFound } from "@pages/NotFound.page";

function App() {
  const [APIConfig, setAPIConfig] = useState({});

  useEffect(() => {
    async function getConfig() {
      const config = await getApiConfig();
      setAPIConfig(config);
    }
    getConfig();
  }, []);

  return (
    <APIConfigContext.Provider value={APIConfig}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Discover />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </APIConfigContext.Provider>
  );
}

export default App;
