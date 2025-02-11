import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import * as ExtraComponent from "./quartz/extra"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "YouTube": "https://www.youtube.com/@karpurgauram",
      "Telegram": "https://telegram.me/nagkumar",
      "Discord":"https://discord.gg/w7kphtmXhZ",
      "Github": "https://github.com/karpurgauram",
      "RSS": "https://karpurgauram.xyz/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(ExtraComponent.OverlayExplorer(
      {filterFn: (node) => (node.name !== "tags" && node.name !== "License")},
    )),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.RecentNotes({
	    title: "Recent Articles",
	    showTags: false,
	    limit: 5,
    }),
//    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(ExtraComponent.OverlayExplorer(
      {filterFn: (node) => (node.name !== "tags" && node.name !== "License")},
    )),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
