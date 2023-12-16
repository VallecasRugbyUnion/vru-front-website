'use client';
import { TabPanel } from '@material-tailwind/react';
import { PropsWithChildren } from 'react';

export interface TabItemProps {
  label: string;
  value: string;
}

export function TabItem({ value, children }: PropsWithChildren<TabItemProps>) {
  return (
    <TabPanel key={value} value={value}>
      {children}
    </TabPanel>
  );
}
