import React, { useEffect, useState } from "react"
import {
  AiAssistantCommandIcon,
  AiAssistantProvider,
  SearchProvider as UiSearchProvider,
  checkArraySameElms,
} from "docs-ui"
import { ThemeConfig } from "@medusajs/docs"
import { useThemeConfig } from "@docusaurus/theme-common"
import { useLocalPathname } from "@docusaurus/theme-common/internal"

type SearchProviderProps = {
  children: React.ReactNode
}

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [defaultFilters, setDefaultFilters] = useState<string[]>([])
  const { algoliaConfig: algolia, aiAssistant } =
    useThemeConfig() as ThemeConfig
  const currentPath = useLocalPathname()

  useEffect(() => {
    let resultFilters = []
    algolia.defaultFiltersByPath.some((filtersByPath) => {
      if (currentPath.startsWith(filtersByPath.path)) {
        resultFilters = filtersByPath.filters
      }
    })
    if (!resultFilters.length && algolia.defaultFilters) {
      resultFilters = algolia.defaultFilters
    }
    if (!checkArraySameElms(defaultFilters, resultFilters)) {
      setDefaultFilters(resultFilters)
    }
  }, [currentPath])

  return (
    <UiSearchProvider
      algolia={{
        appId: algolia.appId,
        apiKey: algolia.apiKey,
        mainIndexName: algolia.indexNames.docs,
        indices: Object.values(algolia.indexNames),
      }}
      searchProps={{
        filterOptions: algolia.filters,
        suggestions: [
          {
            title: "Getting started? Try one of the following terms.",
            items: [
              "Setup personal payment systems",
              "Standard theme showcase",
              "Marketing and Notifications",
              "InBzar Features",
              "Third party live chat",
            ],
          },
          {
            title: "Developing with InBzar",
            items: [
              "Recipes",
              "Create subscription box",
              "Sell digital products, such as e-book",
              "Simple Product without variant selection",
            ],
          },
        ],
      }}
      // commands={[
      //   aiAssistant && {
      //     name: "ai-assistant",
      //     icon: <AiAssistantCommandIcon />,
      //     component: (
      //       <AiAssistantProvider
      //         apiUrl={aiAssistant.apiUrl}
      //         websiteId={aiAssistant.websiteId}
      //         recaptchaSiteKey={aiAssistant.recaptchaSiteKey}
      //       />
      //     ),
      //     title: "AI Assistant",
      //     badge: {
      //       variant: "purple",
      //       children: "Beta",
      //     },
      //   },
      // ]}
      initialDefaultFilters={defaultFilters}
      modalClassName="z-[500]"
    >
      {children}
    </UiSearchProvider>
  )
}

export default SearchProvider
