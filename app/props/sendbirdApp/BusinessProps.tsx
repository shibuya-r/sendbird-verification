import { SendbirdProviderProps } from "@sendbird/uikit-react/SendbirdProvider";

export const BusinessSendbirdAppConfig: SendbirdProviderProps = {
    appId: process.env.NEXT_PUBLIC_APP_ID,
    userId: process.env.NEXT_PUBLIC_BUSINESS_USER_ID,
    showSearchIcon: true,
    /** @see https://github.com/sendbird-graveyard/SendBird-UIKIT-JavaScript/tree/master?tab=readme-ov-file#appendix */
    colorSet: {
        '--sendbird-light-primary-500': '#1B6B50',
        '--sendbird-light-primary-400': '#3A8468',
        '--sendbird-light-primary-300': '#559F81',
        '--sendbird-light-primary-200': '#70BA9A',
        '--sendbird-light-primary-100': '#8BD6B5',
    }
  }