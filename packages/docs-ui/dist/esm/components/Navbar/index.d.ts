import React from "react";
import { NavbarLinkProps } from "./Link";
import { NavbarLogoProps } from "./Logo";
import { NavbarMobileMenuButtonProps } from "./MobileMenu/Button";
export type NavbarProps = {
    logo: NavbarLogoProps;
    items: NavbarLinkProps[];
    showSearchOpener?: boolean;
    showColorModeToggle?: boolean;
    additionalActionsAfter?: React.ReactNode;
    additionalActionsBefore?: React.ReactNode;
    mobileMenuButton: NavbarMobileMenuButtonProps;
    isLoading?: boolean;
    className?: string;
};
export declare const Navbar: ({ logo, items, showSearchOpener, showColorModeToggle, additionalActionsBefore, additionalActionsAfter, mobileMenuButton, isLoading, className, }: NavbarProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map