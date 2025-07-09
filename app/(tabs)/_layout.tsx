import { Redirect, Slot } from "expo-router";
import React from "react";

const _Layout = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  // It allows the app to display different screens based on the route / group pages we have created
  return <Slot />;
};

export default _Layout;
