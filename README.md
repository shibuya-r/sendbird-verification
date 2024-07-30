## Getting Started

```bash
$ cp sendbird-verification/.env.local.sqmple sendbird-verification/.env.local
```
※ Change environment variables to arbitrary values.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

マルチテナントアプリケーションにおけるチャットプラットフォーム構築の検証用

この用途の場合、sendbirdではテナントごとにアプリケーションを作成することがベストプラクティスとなる
