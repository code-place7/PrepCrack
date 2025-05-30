import React, { ReactNode } from "react";
import { isAuthenticated } from "../api/auth/signin/route";
import { redirect } from "next/navigation";

const Authlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");
  return <div className="auth-layout">{children}</div>;
};

export default Authlayout;
