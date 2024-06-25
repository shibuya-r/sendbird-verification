import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { App as SendbirdApp } from '@sendbird/uikit-react';
import { BusinessSendbirdAppConfig } from '../props/sendbirdApp/BusinessProps';
import { CustomerSendbirdAppConfig } from '../props/sendbirdApp/CustomerProps';
import { CommonProps } from '../props/sendbirdApp/CommonProps';

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

export const SendbirdChatTabs = ({tenant}: {tenant: number}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const businessProps = {
    ...CommonProps,
    ...BusinessSendbirdAppConfig[tenant],
  }

  const customerProps = {
    ...CommonProps,
    ...CustomerSendbirdAppConfig[tenant],
  }

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="BUSINESS" {...a11yProps(0)} />
          <Tab label="CUSTOMER" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box style={{ width:'90vw', height:'75vh' }}>
          {businessProps.appId && (
            <SendbirdApp {...businessProps} />
          )}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box style={{ width:'90vw', height:'75vh' }}>
          {customerProps.appId && (
            <SendbirdApp {...customerProps} />
          )}
        </Box>
      </CustomTabPanel>
    </Box>
  );
}