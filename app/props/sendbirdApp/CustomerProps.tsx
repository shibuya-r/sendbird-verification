import { SendbirdProviderProps } from "@sendbird/uikit-react/SendbirdProvider";

export const CustomerSendbirdAppConfig: { [key: number]: SendbirdProviderProps } = {
    0: {
        appId: process.env.NEXT_PUBLIC_A_APP_ID,
        userId: process.env.NEXT_PUBLIC_A_CUSTOMER_USER_ID,
    },
    1: {
        appId: process.env.NEXT_PUBLIC_B_APP_ID,
        userId: process.env.NEXT_PUBLIC_B_CUSTOMER_USER_ID,
    },
    2: {
        appId: process.env.NEXT_PUBLIC_C_APP_ID,
        userId: process.env.NEXT_PUBLIC_C_CUSTOMER_USER_ID,
    },
}