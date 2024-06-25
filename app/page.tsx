'use client';

import React, { useState } from 'react';
import TenantTabs from './components/TenantTabs';
import '@sendbird/uikit-react/dist/index.css';
import { SendbirdChatTabs } from './components/SendbirdChatTabs';

export default function Home() {
  const [tenant, setTenant] = useState<number>(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TenantTabs setTenant={setTenant}/>
      <SendbirdChatTabs tenant={tenant} />
    </main>
  );
}
