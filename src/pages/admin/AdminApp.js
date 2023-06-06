import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

export default function AdminApp() {

  return (
    <>
      <div>
        hi admin~
      </div>
    </>
  );
}
