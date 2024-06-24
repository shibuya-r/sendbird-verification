'use client';

import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ width:'100vw', height:'100vh' }}>
        <SendbirdApp
          appId={process.env.NEXT_PUBLIC_APP_ID}
          userId={process.env.NEXT_PUBLIC_USER_ID}
        />
      </div>
    </main>
  );
}
