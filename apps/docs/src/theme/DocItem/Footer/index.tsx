import React from "react"
import Footer from "@theme-original/DocItem/Footer"
import type FooterType from "@theme/DocItem/Footer"
import type { WrapperProps } from "@docusaurus/types"
import { useDoc } from "@docusaurus/theme-common/internal"
import { useThemeConfig } from "@docusaurus/theme-common"
import type { ThemeConfig } from "@medusajs/docs"

type Props = WrapperProps<typeof FooterType>

export default function FooterWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc()
  const { footerFeedback = { event: "" } } = useThemeConfig() as ThemeConfig
  return (
    <>
      {!metadata.frontMatter?.hide_footer && (
        <div className="mt-[42px]">
          <Footer {...props} />
        </div>
      )}
    </>
  )
}
