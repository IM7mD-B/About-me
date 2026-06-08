import React, { lazy, Suspense } from 'react';
import { Layout, Row, Col, FloatButton, Button, Space } from 'antd';
import { ArrowUpOutlined, ArrowLeftOutlined, GlobalOutlined, BulbFilled, BulbOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../../../store/appStore';
import ProfileCard from '../components/ProfileCard';
import ContactInfo from '../components/ContactInfo';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';

// Lazy load the 3D element to optimize bundle size and page loading speed
const ThreeDElement = lazy(() => import('../../../components/ThreeDElement'));

const { Content, Header } = Layout;

const AboutMePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme, language, toggleLanguage } = useAppStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <Layout className={`min-h-screen ${isDarkMode ? 'bg-[#000000]' : 'bg-slate-50'} selection:bg-blue-200 transition-colors duration-300`}>
      <Header style={{ 
          background: isDarkMode ? '#141414' : '#ffffff', 
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0',
          position: 'sticky',
          top: 0,
          zIndex: 50,
      }}>
        <Button 
          type="text" 
          icon={<ArrowLeftOutlined style={{ color: isDarkMode ? '#fff' : '#000' }} />} 
          onClick={() => navigate('/')}
        >
          <span style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("Dashboard")}</span>
        </Button>
        <Space size="large">
          <Button 
              type="text" 
              icon={<GlobalOutlined style={{ fontSize: 16, color: isDarkMode ? '#fff' : '#000' }} />} 
              onClick={toggleLanguage}
          >
              <span style={{ color: isDarkMode ? '#fff' : '#000' }}>{language === 'en' ? 'عربي' : 'EN'}</span>
          </Button>
          <Button 
              type="text" 
              icon={isDarkMode ? <BulbFilled style={{ color: '#fff' }} /> : <BulbOutlined style={{ color: '#000' }} />} 
              onClick={toggleTheme}
          />
        </Space>
      </Header>

      <Content className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="absolute top-0 right-0 w-full h-[400px] opacity-50 z-0 pointer-events-none">
          <Suspense fallback={<div className="w-full h-full min-h-[300px]" />}>
            <ThreeDElement isDarkMode={isDarkMode} />
          </Suspense>
        </div>

        <motion.div 
          className="space-y-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Section: Profile */}
          <motion.div variants={itemVariants}>
            <Row>
              <Col span={24}>
                <ProfileCard />
              </Col>
            </Row>
          </motion.div>

          {/* Middle Section: Contact & Skills */}
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <motion.div variants={itemVariants} className="h-full">
                <ContactInfo />
              </motion.div>
            </Col>
            <Col xs={24} md={16}>
              <motion.div variants={itemVariants} className="h-full">
                <SkillsSection />
              </motion.div>
            </Col>
          </Row>

          {/* Bottom Section: Experience & Education */}
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <motion.div variants={itemVariants} className="h-full">
                <ExperienceSection />
              </motion.div>
            </Col>
            <Col xs={24} lg={12}>
              <motion.div variants={itemVariants} className="h-full">
                <EducationSection />
              </motion.div>
            </Col>
          </Row>

          {/* Projects Section */}
          <motion.div variants={itemVariants}>
            <Row>
              <Col span={24}>
                <ProjectsSection />
              </Col>
            </Row>
          </motion.div>
        </motion.div>

        <FloatButton.BackTop 
          icon={<ArrowUpOutlined />} 
          type="primary" 
          style={{ right: 24, bottom: 24 }}
        />
      </Content>
    </Layout>
  );
};

export default AboutMePage;
