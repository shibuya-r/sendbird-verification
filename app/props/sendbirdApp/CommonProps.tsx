import { SendbirdProviderProps } from "@sendbird/uikit-react/SendbirdProvider";

export const CommonProps: SendbirdProviderProps = {
    appId: "",
    userId: "",
    /** @see https://github.com/sendbird-graveyard/SendBird-UIKIT-JavaScript/tree/master?tab=readme-ov-file#appendix */
    colorSet: {
        '--sendbird-light-primary-500': '#1B6B50',
        '--sendbird-light-primary-400': '#3A8468',
        '--sendbird-light-primary-300': '#559F81',
        '--sendbird-light-primary-200': '#70BA9A',
        '--sendbird-light-primary-100': '#8BD6B5',
    },
    /** @see https://sendbird.com/docs/chat/uikit/v3/react/theme-and-style-resources/localization-resources/text */
    stringSet: {
        'MESSAGE_INPUT__PLACE_HOLDER': 'メッセージを入力',
    },
}