import { Tabs } from 'antd';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

const TabsComp = () => (
    <Tabs
        items={[
            {
                label: `Tab 1`,
                key: '1',
                children:
                    <div>
                        <Tab1 />
                    </div>,
            },
            {
                label: `Tab 2`,
                key: '2',
                children:
                <div>
                    <Tab2 />
                </div>,
            },
            {
                label: `Tab 3`,
                key: '3',
                children:
                <div>
                    <Tab3 />
                </div>,
            },
        ]}
    />
);

export default TabsComp;