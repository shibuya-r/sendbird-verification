import { SendbirdProviderProps } from "@sendbird/uikit-react/SendbirdProvider";

export const BusinessSendbirdAppConfig: { [key: number]: { 
    providerProps: SendbirdProviderProps,
    chatListFilter: string[]
    }} = {
    0: {
        providerProps: {
            appId: process.env.NEXT_PUBLIC_APP_ID,
            userId: process.env.NEXT_PUBLIC_BUSINESS_USER_ID,
            showSearchIcon: true,
        },
        chatListFilter: ['A']
    },
    1: {
        providerProps: {
            appId: process.env.NEXT_PUBLIC_APP_ID,
            userId: process.env.NEXT_PUBLIC_SUB_BUSINESS_USER_ID_1,
            showSearchIcon: true,
        },
        chatListFilter: ['B']
    },
    2: {
        providerProps: {
            appId: process.env.NEXT_PUBLIC_APP_ID,
            userId: process.env.NEXT_PUBLIC_SUB_BUSINESS_USER_ID_2,
            showSearchIcon: true,
        },
        chatListFilter: ['C']
    },
}