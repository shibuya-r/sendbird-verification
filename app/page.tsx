'use client';

import React, { useEffect, useState } from 'react';
import TenantTabs from './components/TenantTabs';
import '@sendbird/uikit-react/dist/index.css';
import { UserTabs } from './components/UserTabs';
import { CommonProps } from './props/sendbirdApp/CommonProps';
import { BusinessSendbirdAppConfig } from './props/sendbirdApp/BusinessProps';
import { CustomerSendbirdAppConfig } from './props/sendbirdApp/CustomerProps';
import { SendbirdProviderProps } from '@sendbird/uikit-react/SendbirdProvider';

export default function Home() {
  const [tenant, setTenant] = useState<number>(0);
  const [customTypesFilter, setCustomTypesFilter] = useState<string[]>(BusinessSendbirdAppConfig[0].chatListFilter);
  const [selectedChannelUrl, setSelectedChannelUrl] = useState('');
  const [businessProps, setBusinessProps] = useState<SendbirdProviderProps>({
    ...CommonProps,
    ...BusinessSendbirdAppConfig[0].providerProps,
  });
  const [customerProps, setCustomerProps] = useState<SendbirdProviderProps>({
    ...CommonProps,
    ...CustomerSendbirdAppConfig[0],
  });

  useEffect(() => {
    setBusinessProps({
      ...CommonProps,
      ...BusinessSendbirdAppConfig[tenant].providerProps,
    })
    setCustomerProps({
      ...CommonProps,
      ...CustomerSendbirdAppConfig[tenant],
    })
    setCustomTypesFilter(BusinessSendbirdAppConfig[tenant].chatListFilter)
    setSelectedChannelUrl('')
  }, [tenant])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TenantTabs setTenant={setTenant}/>
      <UserTabs
        businessProps={businessProps}
        customerProps={customerProps}
        customTypesFilter={customTypesFilter}
        selectedChannelUrl={selectedChannelUrl}
        setSelectedChannelUrl={setSelectedChannelUrl}
      />
    </main>
  );
}
