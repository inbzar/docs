"use client"

import { SidebarLeft, XMark } from "@medusajs/icons"
import clsx from "clsx"
import React from "react"
import { NavbarIconButton, NavbarIconButtonProps } from "../../IconButton"

export type NavbarMobileMenuButtonProps = {
  buttonProps?: NavbarIconButtonProps
  mobileSidebarOpen: boolean
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
}

export const NavbarMobileMenuButton = ({
  buttonProps,
  mobileSidebarOpen,
  setMobileSidebarOpen,
  isLoading = false,
}: NavbarMobileMenuButtonProps) => {
  return (
    <NavbarIconButton
      {...buttonProps}
      className={clsx("mr-docs_1 lg:!hidden", buttonProps?.className)}
      onClick={() => {
        if (!isLoading) {
          setMobileSidebarOpen((prevValue) => !prevValue)
        }
      }}
    >
      {!mobileSidebarOpen && <SidebarLeft className="text-medusa-fg-muted" />}
      {mobileSidebarOpen && <XMark className="text-medusa-fg-muted" />}
    </NavbarIconButton>
  )
}
