import React from "react";
import { SidebarProps } from "../components";
export type RootLayoutProps = {
    children: React.ReactNode;
    ProvidersComponent: React.FC<{
        children: React.ReactNode;
    }>;
    NavbarComponent: React.FC;
    sidebarProps?: SidebarProps;
    htmlClassName?: string;
    bodyClassName?: string;
    mainWrapperClasses?: string;
    showPagination?: boolean;
};
export declare const RootLayout: ({ ProvidersComponent, NavbarComponent, children, sidebarProps, htmlClassName, bodyClassName, mainWrapperClasses, }: RootLayoutProps) => React.JSX.Element;
//# sourceMappingURL=root.d.ts.map