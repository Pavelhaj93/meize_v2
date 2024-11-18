"use client";

import React, { useEffect } from "react";

const NoScroll = () => {
  useEffect(() => {
    // Add the `no-scroll` class to the <html> element
    document.documentElement.classList.add("no-scroll");

    return () => {
      // Remove the `no-scroll` class when navigating away
      document.documentElement.classList.remove("no-scroll");
    };
  }, []);
  return <></>;
};

export default NoScroll;
