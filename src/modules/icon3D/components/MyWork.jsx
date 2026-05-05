import React from 'react';
import { Card, List, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import ReactIcon from "../../../assets/images/react.svg"
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

const MyWork = () => {
    const { t } = useTranslation();



    return (
        <Card title={t("My Role")} className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]" styles={{ header: { borderBottom: 'none', paddingBottom: 0 } }}>

            <img src={ReactIcon} alt="hi" className='size-20'/>
        </Card>
    );
};

export default MyWork;
