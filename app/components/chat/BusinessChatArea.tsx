import { useState } from "react";
import { Box } from "@mui/material";
import { ChannelSettings } from "@sendbird/uikit-react";
import GroupChannel from "@sendbird/uikit-react/GroupChannel";
import GroupChannelList from "@sendbird/uikit-react/GroupChannelList";
import SendbirdProvider, { SendbirdProviderProps } from "@sendbird/uikit-react/SendbirdProvider";

export const BusinessChatArea = ({props, customTypesFilter, selectedChannelUrl, setSelectedChannelUrl}: {
  props: SendbirdProviderProps,
  customTypesFilter: string[],
  selectedChannelUrl: string,
  setSelectedChannelUrl: Function}) => {
    const [showSettings, setShowSettings] = useState(false)
    return (
        <Box style={{ display: 'flex', justifyContent: 'start', width:'90vw', height:'75vh' }}>
          {props.appId && (
            <SendbirdProvider {...props} >
              <GroupChannelList
                selectedChannelUrl={selectedChannelUrl}
                onChannelCreated={(channel) => {
                  setSelectedChannelUrl(channel.url)
                }}
                onChannelSelect={(channel) => {
                  setSelectedChannelUrl(channel?.url ? channel?.url : '')
                }}
                channelListQueryParams={{customTypesFilter: customTypesFilter}}
              />
              <GroupChannel
                channelUrl={selectedChannelUrl}
                onChatHeaderActionClick={() => {
                  setShowSettings(true)
                }}
                // disableMarkAsRead={true}
              />
              {showSettings && (
                <ChannelSettings
                  channelUrl={selectedChannelUrl}
                  onCloseClick={() => {
                    setShowSettings(false)
                  }}
                />
              )}
            </SendbirdProvider>
          )}
        </Box>
    );
}