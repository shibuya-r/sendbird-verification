import { SendbirdProviderProps } from "@sendbird/uikit-react/SendbirdProvider";

export const BusinessSendbirdAppConfig: { [key: number]: SendbirdProviderProps } = {
    0: {
        appId: process.env.NEXT_PUBLIC_APP_ID,
        userId: process.env.NEXT_PUBLIC_BUSINESS_USER_ID,
        showSearchIcon: true,
    },
    1: {
        appId: "",
        userId: "",
        showSearchIcon: true,
    },
    2: {
        appId: "",
        userId: "",
        showSearchIcon: true,
    },
}