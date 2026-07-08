import React, { useState, lazy, Suspense } from "react";
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
    Spin,
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
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import myPhoto from "../../assets/images/myPhoto.jpg";

// Lazy-load the heavy 3D canvas component
const ThreeDElement = lazy(() => import("../../components/ThreeDElement"));

const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const UILab = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { isDarkMode, toggleTheme, language, toggleLanguage } = useAppStore();
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
    breakpoint="lg"
    collapsedWidth="0"
    // هذا السطر السحري يخبر ريأكت فوراً إذا كانت الشاشة جوال (true) أو كمبيوتر (false)
    onBreakpoint={(broken) => setIsMobile(broken)} 
    trigger={null}
    theme={currentTheme}
    style={{
        borderRight: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0',
        // الآن الشرط يعتمد على حجم الشاشة الفعلي وليس على نص ثابت
        position: isMobile ? 'fixed' : 'sticky', 
        top: 0,
        height: '100vh',
        left: 0,
        zIndex: 1000,
        boxShadow: (isMobile && !collapsed) ? '4px 0 10px rgba(0,0,0,0.1)' : 'none'
    }}
    width={260}
>
                <div style={{
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0',
                    padding: '0 16px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <RocketOutlined style={{ fontSize: 24, color: '#1677ff' }} />
                        {!collapsed && <Title level={4} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>MB-Kitchen</Title>}
                    </div>
                    {isMobile && !collapsed && (
                        <Button
                            type="text"
                            icon={<MenuFoldOutlined />}
                            onClick={() => setCollapsed(true)}
                            style={{ color: isDarkMode ? '#fff' : '#000' }}
                        />
                    )}
                </div>

                <Menu
                    theme={currentTheme}
                    mode="inline"
                    defaultSelectedKeys={['1']}
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
                        // { key: "2", icon: <AppstoreOutlined />, label: t("Components") },
                        // { key: "3", icon: <CodeOutlined />, label: t("Development") },
                        { type: "divider" },
                        // { key: "4", icon: <SettingOutlined />, label: t("Settings") },
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
                    padding: '0 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: isDarkMode ? '1px solid #303030' : '1px solid #f0f0f0',
                    position: 'sticky',
                    top: 0,
                    zIndex: 50,
                }}>
                    <div className="flex items-center gap-2">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{ color: isDarkMode ? '#fff' : '#000', fontSize: 16 }}
                        />
                        <Title level={4}
                            style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}
                            // التعديل هنا: علامة التعجب تأتي بعد النقطتين الخاصة بحجم الشاشة
                            className="!text-sm sm:!text-base md:!text-lg !font-bold"
                        >
                            {t("Ant Design UI Lab 🚀")}
                        </Title>
                    </div>

                    <Flex align="center" gap="small">
                        <Button
                            type="text"
                            icon={<GlobalOutlined style={{ fontSize: 16, color: isDarkMode ? '#fff' : '#000' }} />}
                            onClick={toggleLanguage}
                        >
                            <span style={{ color: isDarkMode ? '#fff' : '#000' }}>{language === 'en' ? 'عربي' : 'EN'}</span>
                        </Button>
                        <Tooltip title={isDarkMode ? t("Switch to Light Mode") : t("Switch to Dark Mode")} className="hidden sm:inline-block">
                            <Switch
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                checkedChildren={<BulbFilled />}
                                unCheckedChildren={<BulbOutlined />}
                            />
                        </Tooltip>
                        {/* Fallback button for dark mode toggle on mobile */}
                        <Divider type="vertical" className="hidden sm:inline-block" />
                        <Space>
                            <Avatar src={myPhoto} icon={<UserOutlined />} className="border border-blue-500" loading="lazy" />
                            <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }} className="hidden md:inline">{t("Admin")}</Text>
                        </Space>
                    </Flex>
                </Header>

                {/* Content */}
                <Content
                    className="p-4 md:p-8 w-full max-w-full relative overflow-x-hidden min-h-[calc(100vh-64px)]"
                    style={{ margin: 0, position: 'relative' }}
                >
                    {/* Background 3D element */}
                    <div className="absolute top-0 right-0 w-full h-[500px] opacity-30 z-0 pointer-events-none overflow-hidden">
                        <Suspense fallback={<div className="w-full h-full min-h-[300px]" />}>
                            <ThreeDElement isDarkMode={isDarkMode} />
                        </Suspense>
                    </div>

                    <motion.div
                        className="relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="flex flex-col gap-6">
                            {/* Dashboard Overview - Coding Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <motion.div variants={itemVariants} className="h-full">
                                    <Card bordered={false} hoverable className={`h-full shadow-sm rounded-2xl transition-all duration-300 hover:shadow-md ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}>
                                        <Statistic title={t("Weekly Commits")} value={34} prefix={<GithubOutlined style={{ color: '#1890ff' }} />} />
                                    </Card>
                                </motion.div>
                                <motion.div variants={itemVariants} className="h-full">
                                    <Card bordered={false} hoverable className={`h-full shadow-sm rounded-2xl transition-all duration-300 hover:shadow-md ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}>
                                        <Statistic title={t("Hours Coded")} value={120} valueStyle={{ color: '#1677ff' }} prefix={<ClockCircleOutlined />} />
                                    </Card>
                                </motion.div>
                                <motion.div variants={itemVariants} className="h-full">
                                    <Card bordered={false} hoverable className={`h-full shadow-sm rounded-2xl transition-all duration-300 hover:shadow-md ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}>
                                        <Statistic title={t("Coffee Cups")} value={56} valueStyle={{ color: '#8c5a3c' }} prefix={<CoffeeOutlined />} />
                                    </Card>
                                </motion.div>
                                <motion.div variants={itemVariants} className="h-full">
                                    <Card bordered={false} hoverable className={`h-full shadow-sm rounded-2xl transition-all duration-300 hover:shadow-md ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}>
                                        <Statistic title={t("Total Components")} value={42} prefix={<AppstoreOutlined style={{ color: '#52c41a' }} />} />
                                    </Card>
                                </motion.div>
                            </div>

                            {/* Bento-style Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Favorite Libraries */}
                                <motion.div variants={itemVariants} className="h-full">
                                    <Card
                                        title={<Title level={5} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>{t("Favorite Libraries")}</Title>}
                                        bordered={false}
                                        className={`shadow-md rounded-2xl h-full transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}
                                    >
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={favoriteLibraries}
                                            renderItem={item => (
                                                <List.Item className="border-b-0 py-3 px-1">
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

                                {/* Learning Path */}
                                <motion.div variants={itemVariants} className="h-full">
                                    <Card
                                        title={<Title level={5} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>{t("Current Learning Path")}</Title>}
                                        bordered={false}
                                        className={`shadow-md rounded-2xl h-full transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}
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
                                            <div>
                                                <Flex justify="space-between" className="mb-2">
                                                    <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("React.js")}</Text>
                                                    <Text type="secondary">99%</Text>
                                                </Flex>
                                                <Progress percent={99} status="success" strokeColor={{ '0%': '#afc8d9ff', '100%': '#0d93f3ff' }} />
                                            </div>
                                        </Flex>
                                    </Card>
                                </motion.div>

                                {/* Quick Actions & Activity Card */}
                                <motion.div variants={itemVariants} className="h-full">
                                    <Card
                                        title={<Title level={5} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>{t("Quick Performance & Activity")}</Title>}
                                        bordered={false}
                                        className={`shadow-md rounded-2xl h-full transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-[#141414] border-none' : 'bg-white'}`}
                                    >
                                        <Flex vertical gap="middle" className="mt-4">
                                            <div className="flex justify-between items-center bg-neutral-50/70 dark:bg-neutral-200/10 p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-300/30 transition-colors hover:border-blue-500/30">
                                                <Space>
                                                    <ThunderboltOutlined style={{ color: '#52c41a', fontSize: 18 }} />
                                                    <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("Lighthouse Score")}</Text>
                                                </Space>
                                                <Tag color="success" className="font-bold border-none px-3 bg-green-500/10 text-green-500">98%</Tag>
                                            </div>
                                            <div className="flex justify-between items-center bg-neutral-50/70 dark:bg-neutral-200/10 p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-300/30 transition-colors hover:border-blue-500/30">
                                                <Space>
                                                    <CodeOutlined style={{ color: '#1677ff', fontSize: 18 }} />
                                                    <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("Build Version")}</Text>
                                                </Space>
                                                <Tag color="processing" className="font-bold border-none px-3 bg-blue-500/10 text-blue-500">v1.2.0-prod</Tag>
                                            </div>
                                            <div className="flex justify-between items-center bg-neutral-50/70 dark:bg-neutral-200/10 p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-300/30 transition-colors hover:border-blue-500/30">
                                                <Space>
                                                    <BulbFilled style={{ color: '#faad14', fontSize: 18 }} />
                                                    <Text strong style={{ color: isDarkMode ? '#fff' : '#000' }}>{t("Task Completion")}</Text>
                                                </Space>
                                                <Tag color="warning" className="font-bold border-none px-3 bg-amber-500/10 text-amber-500">14 / 15</Tag>
                                            </div>
                                        </Flex>
                                    </Card>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default UILab;