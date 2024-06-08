import { DocsThemeConfig } from "nextra-theme-docs";

import Link from "next/link";

import styles from "./theme.module.css";

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
        <Link className={styles.author_link} href="https://jingxiangmo.com">
          JXM
        </Link>{" "}
        and{" "}
        <Link className={styles.author_link} href="https://beaumccartney.vercel.app">
          Beau
        </Link>
      </span>
    ),
  },
};

export default config;
