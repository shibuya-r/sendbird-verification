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
        /** Channel - Settings */
        'CHANNEL_SETTING__HEADER__TITLE': 'チャンネル情報',
        'CHANNEL_SETTING__PROFILE__EDIT': '編集',
        'CHANNEL_SETTING__MEMBERS__TITLE': 'メンバー',
        'CHANNEL_SETTING__MEMBERS__INVITE_MEMBER': 'メンバーを招待',
        'CHANNEL_SETTING__MEMBERS__OPERATOR': '管理者',
        'CHANNEL_SETTING__OPERATORS__TITLE': '管理者',
        'CHANNEL_SETTING__MUTED_MEMBERS__TITLE': 'ミュートメンバー',
        'CHANNEL_SETTING__NO_UNMUTED': 'ミュートされたメンバーはいません',
        'CHANNEL_SETTING__BANNED_MEMBERS__TITLE': '停止されたメンバー',
        'CHANNEL_SETTING__FREEZE_CHANNEL': 'チャンネルをアーカイブ',
        'CHANNEL_SETTING__MODERATION__EMPTY_BAN': '停止されたメンバーはいません',
        'CHANNEL_SETTING__LEAVE_CHANNEL__TITLE': 'チャンネルから抜ける',
        'CHANNEL_SETTING__OPERATORS__TITLE_ADD': '管理者を追加',
        /** Channel - Modal */
        'MODAL__CHANNEL_INFORMATION__TITLE': 'チャンネル情報編集',
        'MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE': 'チャンネル画像',
        'MODAL__CHANNEL_INFORMATION__UPLOAD': 'アップロード',
        'MODAL__CHANNEL_INFORMATION__CHANNEL_NAME': 'チャンネル名',
        /** Message input */
        'MESSAGE_INPUT__PLACE_HOLDER': 'メッセージを入力',
    },
}