import React from 'react';
import { Card, List, Typography, Button } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import MeenGadhhaIcon from "../../../assets/images/MeenGadhhaIcon.svg"

const { Text } = Typography;

const MeenGadhha = () => {
    const { t } = useTranslation();



    return (
        <Card title={t("AboutMeenGadhha")} className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]" styles={{ header: { borderBottom: 'none', paddingBottom: 0 } }}>
            <div>
                <img src={MeenGadhhaIcon} alt="MeenGadhha Icon" className='size-50  w-full ' />
                <Text className='!text-[18px] !font-semibold'> {t("MeenGadhhaInfo")}</Text>
            </div>
            <div className=' flex justify-center my-3'>
                <Button type="primary" onClick={() => window.open("https://techwin.sa")}
                    className="w-48 !h-12 md:w-75 !mt-5 cursor-pointer text-base
                    not-even:!bg-orange-600 hover:!bg-orange-600/10 hover:backdrop-blur-md
                    !shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
                >
                    <Text className='!text-[18px] !font-bold'>{t("discoverTechwin")}</Text>

                </Button>
            </div>
        </Card>
    );
};

export default MeenGadhha;
