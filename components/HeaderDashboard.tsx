"use client";
import StatsCards from "./StatsCards";
import { mockUsers } from "@/lib/mock/users";

export default function HeaderDashboard() {
  const user = mockUsers[0];
  return (
    <header className="space-y-4">
      <h1 className="text-2xl font-bold">Hello, {user.name}</h1>
      <StatsCards />
    </header>
  );
}
