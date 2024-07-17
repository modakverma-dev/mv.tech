"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthPopup from "../Form/AuthPopup";

const MainLayout = ({ children }) => {
  const showAuthForm = useSelector((state) => state.formSlice.showAuthForm);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (showAuthForm) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "unset";
      }
    }
  }, [showAuthForm]);

  return (
    <div className="w-full oberflow-x-hidden">
      {showAuthForm && <AuthPopup />}
      {children}
    </div>
  );
};

export default MainLayout;
