"use client";
import * as React from "react";

export const GreetingsCard = ({ fullName }) => (
  <div className="bg-red-400 p-5">
    <h1>Welcome, {fullName}!</h1>
  </div>
);

export default GreetingsCard;
