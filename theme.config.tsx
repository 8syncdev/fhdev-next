import { Metadata } from "next";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { seologoImg } from "@/constants";
import Image from "next/image";
import { logoFhdev } from "./constants/image";

export default {
  logo: <span>Fullhouse Dev</span>,
  sidebar: {
    toggleButton: true,
  },
  project: {
    link: "#",
    icon: (
      <Image
        src={logoFhdev}
        alt="Fullhouse Dev"
        // width={50}
        height={40}
      />
    ),
  },
  head: () => {
    const { asPath, defaultLocale, locale, domainLocales } = useRouter();
    const { frontMatter } = useConfig();

    const url =
      domainLocales +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link rel="icon" href={seologoImg.src} />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "Fullhouse Dev"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "Lập trình viên Fullstack"}
        />
      </>
    );
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "light",
  },
  useNextSeoProps: () => {
    const { asPath, back } = useRouter();
    // if (asPath.includes('/docs/')) {
    //     back()
    // }
    if (asPath !== "/") {
      return {
        titleTemplate: "%s",
      };
    }
  },
  // sidebar config in _meta.json
  banner: {
    key: "2.0-release",
    text: (
      <a href="#" target="_blank">
        🎉 Tài liệu và mã dự án được cập nhật và thông báo liên tục tại website
        này.→
      </a>
    ),
  },
  footer: {
    text: <span>Fullhouse Dev. Design by Alex Nguyễn</span>,
  },
  /**
     * editLink.text	React.ReactNode | React.FC	Content of the default edit link.
        editLink.component	React.FC<{
        children: React.ReactNode
        className?: string
        filePath?: string
        }> | null
     */
  editLink: {
    component: null,
  },
  /**
     * feedback.content	React.ReactNode | React.FC	Content of the feedback button.
    feedback.labels	string	Labels that can be added to the new created GitHub issue.
    feedback.useLink	() => string	Custom link, by default, will open an issue in the repository set in `docsRepositoryBase`.
     */
  feedback: {
    content: null,
  },
  toc: {
    title: "Nội dung theo dõi",
  },
};
