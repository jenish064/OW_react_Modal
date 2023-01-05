import { Tabs } from 'antd';
import { useState } from 'react';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

const TabsComp = () => {
    const [currTab, setCurrTab] = useState(1)

    const nextTab = (key) => {
        setCurrTab(key);
    }
    return (
        <>
            <Tabs
                activeKey={currTab.toString()}
                items={[
                    {
                        label: `Tab 1`,
                        key: '1',
                        children:
                            <div>
                                <Tab1 fPass={nextTab} />
                            </div>,
                    },
                    {
                        label: `Tab 2`,
                        key: '2',
                        children:
                            <div>
                                <Tab2 fPass={nextTab} />
                            </div>,
                    },
                    {
                        label: `Tab 3`,
                        key: '3',
                        children:
                            <div>
                                <Tab3 fPass={nextTab}/>
                            </div>,
                    },
                ]}
            />
        </>
    )
};

export default TabsComp;