'use client';
import { Tabs, TabsHeader, TabsBody, Tab } from '@material-tailwind/react';
import { PropsWithChildren } from 'react';
import React from 'react';
import { TabItem, TabItemProps } from './TabItem';

interface tabProps {
  id: string;
  value: string;
}

export function TabsGrid({ id, value, children }: PropsWithChildren<tabProps>) {
  return (
    <section className="container mx-auto px-8 py-20 text-center">
      <Tabs id={id} value={value}>
        <TabsHeader className="flex-col md:flex-row">
          {React.Children.map(children, child => {
            if (React.isValidElement<TabItemProps>(child)) {
              return (
                <Tab key={child.props.value} value={child.props.value}>
                  {child.props.label}
                </Tab>
              );
            }
            return null;
          })}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {children}
        </TabsBody>
      </Tabs>
    </section>
  );
}
