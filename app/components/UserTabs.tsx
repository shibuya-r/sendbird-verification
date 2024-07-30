import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SendbirdProviderProps } from '@sendbird/uikit-react/SendbirdProvider';
import { useState } from 'react';
import { BusinessChatArea } from './chat/BusinessChatArea';
import { CustomerChatArea } from './chat/CustomerChatArea';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const UserTabs = ({businessProps, customerProps, selectedChannelUrl, setSelectedChannelUrl}: {
  businessProps: SendbirdProviderProps,
  customerProps:SendbirdProviderProps,
  selectedChannelUrl: string,
  setSelectedChannelUrl: Function}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="BUSINESS" {...a11yProps(0)} />
          <Tab label="CUSTOMER" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BusinessChatArea props={businessProps}
        selectedChannelUrl={selectedChannelUrl} setSelectedChannelUrl={setSelectedChannelUrl}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CustomerChatArea props={customerProps}
        selectedChannelUrl={selectedChannelUrl} setSelectedChannelUrl={setSelectedChannelUrl}/>
      </CustomTabPanel>
    </Box>
  );
}