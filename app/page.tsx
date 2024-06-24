'use client';

import React from 'react';
import TenantTabs from './components/TenantTabs';
import SendbirdChatTabs from './components/SendbirdChatTabs';
import '@sendbird/uikit-react/dist/index.css';

interface ChatProps {
  appId: string;
  businessUserId: string;
  customerUserId: string;
}

const defChatProps: ChatProps = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  businessUserId: process.env.NEXT_PUBLIC_BUSINESS_USER_ID,
  customerUserId: process.env.NEXT_PUBLIC_CUSTOMER_USER_ID,
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
