"use client"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { PropsWithChildren } from "react";

export interface TabItemProps {
  label: string;
  value: string;
}

export function TabItem({
  label,
  value,
  children,
}: PropsWithChildren<TabItemProps>) {
  return (
    <TabPanel key={value} value={value}>
      {children}
    </TabPanel>
  );
}
