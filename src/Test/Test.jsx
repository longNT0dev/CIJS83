import React, { useMemo, useState } from 'react'
import { Button, ConfigProvider, DatePicker, Menu } from 'antd';

function Test() {

    let data = [{
        labelName: '1',
        key: '1',
        icon: null,
        children: [{
            labelName: '2',
            key: '2',
            icon: null,
            children: [{
                labelName: '3',
                key: '3',
                icon: null,
                children: []
            }]
        },
        {
            labelName: '7',
            key: '7',
            icon: null,
            children: [{
                labelName: '8',
                key: '8',
                icon: null,
                children: []
            }]
        }
        ]
    },
    {
        labelName: '4',
        key: '4',
        icon: null,
        children: [{
            labelName: '5',
            key: '5',
            icon: null,
            children: [{
                labelName: '6',
                key: '6',
                icon: null,
                children: []
            }]
        }]
    },
    ]

    const convertedData = useMemo(() => {
        function convertDataFunc(data) {
            return data.map((item) => ({
                label: item.labelName,
                key: item.key,
                icon: item.icon,
                children: item.children.length > 0 ? convertDataFunc(item.children) : null
            }))
        }


        return convertDataFunc(data)
    }, [data])

    console.log(convertedData)


    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const [openKeys, setOpenKeys] = useState([]);

    const handleMenuSelect = ({ keyPath }) => {
        console.log(keyPath);
        setOpenKeys(keyPath.slice(1));
    };



    return (
        <div style={{ width: '50%' }}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: 'red',
                        // colorTextBase: '',
                        // colorBgTextHover: 'red',
                        // colorText: 'white',
                        // colorBgBase: 'red',
                        // colorText: 'white'
                    },
                }}
            >
                <Menu onClick={onClick} defaultSelectedKeys={openKeys}
                    defaultOpenKeys={openKeys}
                    mode="inline"
                    items={convertedData}

                    onOpenChange={setOpenKeys}
                    onSelect={handleMenuSelect}
                />
            </ConfigProvider>
        </div>

    )
}

export default Test



function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}