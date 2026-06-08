import React from 'react';
import { Card, Typography, Row, Col, Button } from 'antd';
import { useTranslation } from "react-i18next";
import { useAppStore } from '../../../store/appStore';

import TechWinBIcon from "../../../assets/images/TechWin-Bicon.png";
import TechWinWIcon from "../../../assets/images/TechWin-Wicon.png";

const AboutTechWin = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useAppStore();

    const { Text, Title, Paragraph } = Typography;

    return (
        <Card
            className="shadow-lg rounded-2xl border-none"
            styles={{ body: { padding: '2rem' } }}
        >

            <Row gutter={[32, 32]} align="middle">

                {/* Image */}
                <Col xs={24} md={10}>
                    <div className="flex  justify-center  ">
                        <img
                            src={isDarkMode ? TechWinBIcon : TechWinWIcon}
                            alt="Techwin Logo"
                            className=" object-contain"
                            loading="lazy"
                        />
                    </div>
                </Col>

                {/* Content */}
                <Col xs={24} md={14}>
                    <div>

                        <Title level={2}>
                            {t("QTechWin")}
                        </Title>

                        <Paragraph className="text-base leading-relaxed !text-[18px] !font-semibold !my-5 ">
                            {t("TechWinInfo")}
                        </Paragraph>

                        <Button type="primary" onClick={() => window.open("https://techwin.sa")}
                            className="w-48 !h-12 md:w-75 !mt-5 cursor-pointer text-base
                                not-even:!bg-orange-600 hover:!bg-orange-600/10 hover:backdrop-blur-md
                                !shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
                        >
                            <Text className='!text-[16px] !font-bold' >{t("discoverTechwin")}</Text>

                        </Button>

                    </div>
                </Col>

            </Row>

        </Card>
    );
};

export default AboutTechWin;