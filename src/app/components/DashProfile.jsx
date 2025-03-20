import { UserProfile } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import React from "react";

export default function DashProfile() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center w-full">
      <UserProfile
        appearance={{
          baseTheme: theme === "dark" ? dark : light,
        }}
        routing="hash"
      />
    </div>
  );
}
