import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

import Link from "next/link";

const config: DocsThemeConfig = {
  logo: <span>Create ROS Project</span>,
  project: {
    link: "https://github.com/jingxiangmo/create-ros-project",
  },
  chat: {
    link: "https://discord.gg/bu6yn3ncB7",
  },
  docsRepositoryBase: "https://github.com/jingxiangmo/create-ros-project",
  footer: {
    text: (
      <span>
        Made with ❤️ by{" "}
        <Link className="author-link" href="https://jingxiangmo.com">
          JXM
        </Link>{" "}
        and{" "}
        <Link className="author-link" href="https://beaumccartney.vercel.app">
          Beau
        </Link>
      </span>
    ),
  },
};

export default config;
