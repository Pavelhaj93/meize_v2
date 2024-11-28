"use client";

import React, { useEffect } from "react";

const NoScroll = () => {
  useEffect(() => {
    // Remove the `no-scroll` class when navigating away
    document.body.classList.remove("no-scroll");
  }, []);
  return <></>;
};

export default NoScroll;
