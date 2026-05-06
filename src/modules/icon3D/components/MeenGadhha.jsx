import React from 'react';
import { Card, List, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import MeenGadhhaIcon from "../../../assets/images/MeenGadhhaIcon.svg"

const { Text } = Typography;

const MeenGadhha = () => {
    const { t } = useTranslation();



    return (
        <Card title={<span className="text-2xl font-bold"> {t("AboutMeenGadhha")}</span>} className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]" styles={{ header: { borderBottom: 'none', paddingBottom: 0 } }}>
            <img src={MeenGadhhaIcon} alt="MeenGadhha Icon" className='size-50  w-full '/>
            <Text className="!text-xl"> {t("MeenGadhhaInfo")}</Text>

        </Card>
    );
};

export default MeenGadhha;
