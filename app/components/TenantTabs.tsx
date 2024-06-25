import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SendbirdChatTabs({setTenant}: {setTenant: Function}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setTenant(newValue)
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="tenant tabs">
          <Tab label="Tenant-A" {...a11yProps(0)} />
          <Tab label="Tenant-B" {...a11yProps(1)} />
          <Tab label="Tenant-C" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}