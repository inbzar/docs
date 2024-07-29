import React from "react";
import { Tabs as UiTabs } from "@medusajs/ui";
import { ComponentProps } from "react";
import { Key } from "types";
export declare const Tabs: (props: ComponentProps<typeof UiTabs> & Key) => React.JSX.Element;
export declare const TabsList: ({ className, ...props }: ComponentProps<typeof UiTabs.List> & Key) => React.JSX.Element;
export declare const TabsTrigger: ({ className, ...props }: ComponentProps<typeof UiTabs.Trigger> & Key) => React.JSX.Element;
type TabsContentWrapperProps = {
    className?: string;
    children: React.ReactNode;
};
export declare const TabsContentWrapper: ({ className, ...props }: TabsContentWrapperProps) => React.JSX.Element;
export declare const TabsContent: (props: ComponentProps<typeof UiTabs.Content> & Key) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map