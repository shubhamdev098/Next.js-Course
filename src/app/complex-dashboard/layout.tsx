"use client";   
import React, { useState } from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      <div style={{ display: "flex"}}>
        <div style={{ display: "flex", flexDirection: "column"}}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1}}>{notifications}</div>
      </div>
    </div>
  ): (
    login
  );
}
