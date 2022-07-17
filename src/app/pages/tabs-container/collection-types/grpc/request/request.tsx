import { styled } from '@nextui-org/react';
import React from 'react';

import { CodeEditor, Tab, Tabs } from '../../../../../components';
import { CollectionType, Tab as ITab, useTabsStore } from '../../../../../storage';

const StyledContainer = styled('div', {
  display: 'flex',
  flex: 1,

  overflow: 'hidden',

  backgroundColor: '$backgroundContrast',
});

export interface RequestProps {
  tab: ITab<CollectionType>;
}

export const Request: React.FC<RequestProps> = ({ tab }) => {
  const { updateTab } = useTabsStore((store) => store);
  const activeTabId = tab.requestContainer.activeTabId || tab.requestContainer.request.id;

  const handleTabActivate = (key: string) => {
    updateTab({
      ...tab,
      requestContainer: {
        ...tab.requestContainer,
        activeTabId: key,
      },
    });
  };

  const handleRequestChange = (requestValue: string) => {
    updateTab({
      ...tab,
      requestContainer: {
        ...tab.requestContainer,
        request: {
          ...tab.requestContainer.request,
          value: requestValue,
        },
      },
    });
  };

  const handleMetadataChange = (metadataValue: string) => {
    updateTab({
      ...tab,
      requestContainer: {
        ...tab.requestContainer,
        metadata: {
          ...tab.requestContainer.metadata,
          value: metadataValue,
        },
      },
    });
  };

  return (
    <StyledContainer>
      <Tabs
        activeKey={activeTabId}
        activeBar={{ color: 'secondary', position: 'bottom' }}
        onTabActivate={handleTabActivate}
      >
        <Tab
          title="Request"
          id={tab.requestContainer.request.id}
          key={tab.requestContainer.request.id}
        >
          <CodeEditor
            height="100%"
            maxWidth="100%"
            width="100%"
            value={tab.requestContainer.request.value}
            onChange={handleRequestChange}
          />
        </Tab>
        <Tab
          title="Metadata"
          id={tab.requestContainer.metadata.id}
          key={tab.requestContainer.metadata.id}
        >
          <CodeEditor
            height="100%"
            maxWidth="100%"
            width="100%"
            value={tab.requestContainer.metadata.value}
            onChange={handleMetadataChange}
          />
        </Tab>
      </Tabs>
    </StyledContainer>
  );
};