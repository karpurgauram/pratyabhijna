import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Nagkumarです",
    titleImage: "/static/og-image.png",
    enableSPA: true,
    enablePopovers: true,
    locale: "en-US",
    baseUrl: "karpurgauram.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      defaultMode: 'dark',
      colors: {
        lightMode: {
          light: "#121212ed",
          lightgray: "#5b2041",
          gray: "#cb3087",
          darkgray: "#d4d4d4",
          dark: "#61bdc9",
          secondary: "#bf58b4",
          tertiary: "#d15c95",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(75, 109, 137, 0.15)",
	        buttonlight: "#13000b47",
        },
        darkMode: {
          light: "#121212ed",
          lightgray: "#5b2041",
          gray: "#cb3087",
          darkgray: "#d4d4d4",
          dark: "#61bdc9",
          secondary: "#bf58b4",
          tertiary: "#d15c95",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(75, 109, 137, 0.15)",
	        buttonlight: "#13000b47",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
