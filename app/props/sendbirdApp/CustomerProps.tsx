import { SendbirdProviderProps } from "@sendbird/uikit-react/SendbirdProvider";

export const CustomerSendbirdAppConfig: { [key: number]: SendbirdProviderProps } = {
    0: {
        appId: process.env.NEXT_PUBLIC_APP_ID,
        userId: process.env.NEXT_PUBLIC_CUSTOMER_USER_ID,
    },
    1: {
        appId: "",
        userId: "",
    },
    2: {
        appId: "",
        userId: "",
    },
}