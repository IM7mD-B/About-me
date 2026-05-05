import React from 'react';
import { Layout, Button, Row, Col, Space } from 'antd';
import { ArrowLeftOutlined, GlobalOutlined, BulbFilled, BulbOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/appStore';
import MeenGadhha from '../components/MeenGadhha';
import MyWork from '../components/MyWork';
import Techwin3D from '../components/Techwin3D';
import AboutTechWin from '../components/AboutTechWin';
import { motion } from 'framer-motion';


const { Header, Content } = Layout;

const TechWin = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { isDarkMode, toggleTheme, language, toggleLanguage } = useAppStore();
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <Layout
            className="min-h-screen transition-colors duration-300"
            style={{ background: isDarkMode ? '#000' : '#f8fafc' }}
        >

            {/* HEADER (نفس AboutMe) */}
            <Header style={{
                background: isDarkMode ? '#141414' : '#fff',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0'
            }}>
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined style={{ color: isDarkMode ? '#fff' : '#000' }} />}
                    onClick={() => navigate('/')}
                >
                    <span style={{ color: isDarkMode ? '#fff' : '#000' }}>
                        {t("Dashboard")}
                    </span>
                </Button>

                <Space>
                    <Button type="text" icon={<GlobalOutlined />} onClick={toggleLanguage}>
                        {language === 'en' ? 'عربي' : 'EN'}
                    </Button>

                    <Button
                        type="text"
                        icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
                        onClick={toggleTheme}
                    />
                </Space>
            </Header>

            {/* CONTENT */}
            <Content className="relative w-full min-h-[calc(100vh-64px)]">

                {/* 3D BACKGROUND */}
                <div className="absolute inset-0 z-0">
                    <Techwin3D isDarkMode={isDarkMode} />
                </div>

                {/* OVERLAY (مهم جدًا عشان الكاردز لاحقًا) */}
                <div className="absolute inset-0 bg-black/30" />

                {/* FUTURE CARDS AREA */}
                <div className="relative z-10 w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12">
                    {/* هنا أنت لاحقًا تحط الكاردز */}
                    <div className="text-white text-lg opacity-90">
                        <AboutTechWin />
                    </div>

                    <Row gutter={[24, 24]} className='my-5 opacity-90'>
                        <Col xs={24} md={8}>
                            <motion.div variants={itemVariants} className="h-full">
                                <MeenGadhha />
                            </motion.div>
                        </Col>
                        <Col xs={24} md={16}>
                            <motion.div variants={itemVariants} className="h-full">
                                <MyWork/>
                            </motion.div>
                        </Col>
                    </Row>

                </div>

            </Content>
        </Layout>
    );
};

export default TechWin;