import { SendbirdProviderProps } from "@sendbird/uikit-react/SendbirdProvider";

export const BusinessSendbirdAppConfig: { [key: number]: { 
    providerProps: SendbirdProviderProps,
    chatListFilter: string[]
    }} = {
    0: {
        providerProps: {
            appId: process.env.NEXT_PUBLIC_A_APP_ID,
            userId: process.env.NEXT_PUBLIC_A_BUSINESS_USER_ID,
            showSearchIcon: true,
        },
        chatListFilter: ['A']
    },
    1: {
        providerProps: {
            appId: process.env.NEXT_PUBLIC_B_APP_ID,
            userId: process.env.NEXT_PUBLIC_B_BUSINESS_USER_ID,
            showSearchIcon: true,
        },
        chatListFilter: ['B']
    },
    2: {
        providerProps: {
            appId: process.env.NEXT_PUBLIC_C_APP_ID,
            userId: process.env.NEXT_PUBLIC_C_BUSINESS_USER_ID,
            showSearchIcon: true,
        },
        chatListFilter: ['C']
    },
}