import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_REACT_QUERY_RETRY_NUMBER: process.env.NEXT_PUBLIC_REACT_QUERY_RETRY_NUMBER,
    NEXT_PUBLIC_REACT_QUERY_GC_TIME: process.env.NEXT_PUBLIC_REACT_QUERY_GC_TIME,
    NEXT_PUBLIC_REACT_QUERY_STALE_TIME: process.env.NEXT_PUBLIC_REACT_QUERY_STALE_TIME,
    NEXT_PUBLIC_REACT_QUERY_NETWORK_MODE: process.env.NEXT_PUBLIC_REACT_QUERY_NETWORK_MODE,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default nextConfig;
