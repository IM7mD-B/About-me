import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store/appStore";
import {
    Layout,
    Menu,
    Button,
    Flex,
    Tooltip,
    Typography,
    Card,
    Switch,
    Avatar,
    Divider,
    Space,
    Statistic,
    Row,
    Col,
    Progress,
    Badge,
    List,
    Tag,
} from "antd";
import {
    HomeOutlined,
    AppstoreOutlined,
    SettingOutlined,
    BulbOutlined,
    BulbFilled,
    UserOutlined,
    BellOutlined,
    DashboardOutlined,
    RocketOutlined,
    CodeOutlined,
    ThunderboltOutlined,
    GlobalOutlined,
    GithubOutlined,
    CoffeeOutlined,
    ClockCircleOutlined,
    StarFilled,
    FireOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import myPhoto from "../../assets/images/myPhoto.jpg";
import ThreeDElement from "../../components/ThreeDElement";

const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const UILab = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { isDarkMode, toggleTheme, language, toggleLanguage } = useAppStore();
    const [collapsed, setCollapsed] = useState(false);

    const currentTheme = isDarkMode ? "dark" : "light";
    const headerBg = isDarkMode ? "#141414" : "#ffffff";
    const siderBg = isDarkMode ? "#1f1f1f" : "#ffffff";
    const layoutBg = isDarkMode ? "#000000" : "#f5f5f5";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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

    const favoriteLibraries = [
        { name: t("React"), desc: t("Core Framework"), color: "blue" },
        { name: t("Framer Motion"), desc: t("Animations"), color: "purple" },
        { name: t("Zustand"), desc: t("Global State"), color: "orange" },
        { name: t("Ant Design"), desc: t("UI/UX Components"), color: "cyan" },
        { name: t("Three.js"), desc: t("3D Graphics"), color: "green" },
    ];

    return (
        <Layout style={{ minHeight: "100vh", background: layoutBg, transition: 'background 0.3s' }}>
            {/* Sidebar */}
            <Sider 
                collapsible 
                collapsed={collapsed} 
                onCollapse={(value) => setCollapsed(value)}
                theme={currentTheme}
                style={{ borderRight: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0' }}
                width={260}
            >
                <div style={{ 
                    height: 64, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderBottom: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0',
                    gap: 12
                }}>
                    <RocketOutlined style={{ fontSize: 24, color: '#1677ff' }} />
                    {!collapsed && <Title level={4} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>MB-Kitchen</Title>}
                </div>

                <Menu
                    theme={currentTheme}
                    mode="inline"
                    defaultSelectedKeys={['3']}
                    style={{ borderRight: 0, marginTop: 16 }}
                    onClick={(e) => {
                        if (e.key === "5") {
                            navigate("/About-MePage");
                        }
                        if (e.key === "6") {
                            navigate("/TechWin");
                        }
                    }}
                    items={[
                        { key: "1", icon: <DashboardOutlined />, label: t("Dashboard") },
                        { key: "2", icon: <AppstoreOutlined />, label: t("Components") },
                        { key: "3", icon: <CodeOutlined />, label: t("Development") },
                        { type: "divider" },
                        { key: "4", icon: <SettingOutlined />, label: t("Settings") },
                        { key: "5", icon: <UserOutlined />, label: t("About Me") },
                        { type: "divider" },
                        { key: "6", icon: <FireOutlined />, label: t("TechWin") },
                    ]}
                />
            </Sider>

            {/* Main Layout */}
            <Layout style={{ background: 'transparent' }}>
                {/* Header */}
                <Header style={{ 
                    background: headerBg, 
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                }}>
                    <Title level={4} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>{t("Ant Design UI Lab 🚀")}</Title>
                    
                    <Flex align="center" gap="middle">
                        <Button 
                            type="text" 
                            icon={<GlobalOutlined style={{ fontSize: 16, color: isDarkMode ? '#fff' : '#000' }} />} 
                            onClick={toggleLanguage}
                        >
                            <span style={{ color: isDarkMode ? '#fff' : '#000' }}>{language === 'en' ? 'عربي' : 'EN'}</span>
                        </Button>
                        <Tooltip title={isDarkMode ? t("Switch to Light Mode") : t("Switch to Dark Mode")}>
                            <Switch
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                checkedChildren={<BulbFilled />}
                                unCheckedChildren={<BulbOutlined />}
                            />
                        </Tooltip>
                        <Badge count={5} size="small">
                            <Button type="text" shape="circle" icon={<BellOutlined style={{ fontSize: 16, color: isDarkMode ? '#fff' : '#000' }} />} />
                        </Badge>
                        <Divider type="vertical" />
                        <Space>
                            <Avatar src={myPhoto} icon={<UserOutlined />} className="border border-blue-500" />
                            <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("Admin")}</Text>
                        </Space>
                    </Flex>
                </Header>

                {/* Content */}
                <Content style={{ padding: "24px", margin: 0, overflow: 'initial', position: 'relative' }}>
                    {/* Background 3D element */}
                    <div className="absolute top-0 right-0 w-full h-[500px] opacity-30 z-0 pointer-events-none overflow-hidden">
                        <ThreeDElement isDarkMode={isDarkMode} />
                    </div>

                    <motion.div 
                        className="relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Flex vertical gap="large">
                            {/* Dashboard Overview - Coding Stats */}
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={12} lg={6}>
                                    <motion.div variants={itemVariants} className="h-full">
                                        <Card bordered={false} hoverable className={`h-full shadow-sm ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}>
                                            <Statistic title={t("Weekly Commits")} value={34} prefix={<GithubOutlined />} />
                                        </Card>
                                    </motion.div>
                                </Col>
                                <Col xs={24} sm={12} lg={6}>
                                    <motion.div variants={itemVariants} className="h-full">
                                        <Card bordered={false} hoverable className={`h-full shadow-sm ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}>
                                            <Statistic title={t("Hours Coded")} value={120} valueStyle={{ color: '#1677ff' }} prefix={<ClockCircleOutlined />} />
                                        </Card>
                                    </motion.div>
                                </Col>
                                <Col xs={24} sm={12} lg={6}>
                                    <motion.div variants={itemVariants} className="h-full">
                                        <Card bordered={false} hoverable className={`h-full shadow-sm ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}>
                                            <Statistic title={t("Coffee Cups")} value={56} valueStyle={{ color: '#8c5a3c' }} prefix={<CoffeeOutlined />} />
                                        </Card>
                                    </motion.div>
                                </Col>
                                <Col xs={24} sm={12} lg={6}>
                                    <motion.div variants={itemVariants} className="h-full">
                                        <Card bordered={false} hoverable className={`h-full shadow-sm ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}>
                                            <Statistic title={t("Total Components")} value={42} prefix={<AppstoreOutlined />} />
                                        </Card>
                                    </motion.div>
                                </Col>
                            </Row>

                            <Row gutter={[16, 16]}>
                                {/* Favorite Libraries */}
                                <Col xs={24} lg={12}>
                                    <motion.div variants={itemVariants} className="h-full">
                                        <Card 
                                            title={<Title level={5} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>{t("Favorite Libraries")}</Title>} 
                                            bordered={false}
                                            className={`shadow-md rounded-2xl h-full ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}
                                        >
                                            <List
                                                itemLayout="horizontal"
                                                dataSource={favoriteLibraries}
                                                renderItem={item => (
                                                    <List.Item className="border-b-0 py-3">
                                                        <List.Item.Meta
                                                            avatar={<Avatar style={{ backgroundColor: isDarkMode ? '#303030' : '#f0f0f0', color: '#faad14' }} icon={<StarFilled />} />}
                                                            title={<Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{item.name}</Text>}
                                                            description={<Text type="secondary" style={{ color: isDarkMode ? '#aaa' : undefined }}>{item.desc}</Text>}
                                                        />
                                                        <Tag color={item.color} className="rounded-full px-3">{item.name}</Tag>
                                                    </List.Item>
                                                )}
                                            />
                                        </Card>
                                    </motion.div>
                                </Col>

                                {/* Learning Path */}
                                <Col xs={24} lg={12}>
                                    <motion.div variants={itemVariants} className="h-full">
                                        <Card 
                                            title={<Title level={5} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>{t("Current Learning Path")}</Title>} 
                                            bordered={false}
                                            className={`shadow-md rounded-2xl h-full ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}
                                        >
                                            <Flex vertical gap="large" className="mt-4">
                                                <div>
                                                    <Flex justify="space-between" className="mb-2">
                                                        <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("Next.js & SSR")}</Text>
                                                        <Text type="secondary">40%</Text>
                                                    </Flex>
                                                    <Progress percent={40} status="active" strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
                                                </div>
                                                
                                                <div>
                                                    <Flex justify="space-between" className="mb-2">
                                                        <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("Advanced Animation")}</Text>
                                                        <Text type="secondary">65%</Text>
                                                    </Flex>
                                                    <Progress percent={65} status="active" strokeColor={{ '0%': '#722ed1', '100%': '#eb2f96' }} />
                                                </div>

                                                <div>
                                                    <Flex justify="space-between" className="mb-2">
                                                        <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("State Management")}</Text>
                                                        <Text type="secondary">90%</Text>
                                                    </Flex>
                                                    <Progress percent={90} status="success" strokeColor="#52c41a" />
                                                </div>

                                                <div>
                                                    <Flex justify="space-between" className="mb-2">
                                                        <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("React Native")}</Text>
                                                        <Text type="secondary">95%</Text>
                                                    </Flex>
                                                    <Progress percent={95} status="success" strokeColor="#1677ff" />
                                                </div>
                                            </Flex>
                                        </Card>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Flex>
                    </motion.div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default UILab;