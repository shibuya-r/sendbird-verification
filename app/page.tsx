'use client';

import React from 'react';
import TenantTabs from './components/TenantTabs';
import SendbirdChatTabs from './components/SendbirdChatTabs';
import '@sendbird/uikit-react/dist/index.css';

interface ChatProps {
  appId: string;
  crmUserId: string;
  cmsUserId: string;
}

const defChatProps: ChatProps = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  crmUserId: process.env.NEXT_PUBLIC_CRM_USER_ID,
  cmsUserId: process.env.NEXT_PUBLIC_CMS_USER_ID,
}

export default function Home() {
  const [chatProps, setChatProps] = React.useState(defChatProps);
  const [tenant, setTenant] = React.useState(defChatProps);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TenantTabs />
      <SendbirdChatTabs />
    </main>
  );
}
