import React from 'react'
import { Card, List, Typography, Avatar, Tag } from 'antd';
import { StarFilled, HeartFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";


import { useAppStore } from '../../../store/appStore';


const { Text, Title } = Typography;

const TechStackCard = () => {
  const { t } = useTranslation();
  const itemVariants = {};
  const { isDarkMode } = useAppStore();

  const favoriteLibraries = [
    { name: t("React"), desc: t("Core Framework"), color: "blue" },
    { name: t("Framer Motion"), desc: t("Animations"), color: "purple" },
    { name: t("tailwindcss"), desc: t("CSS Style"), color: "cyan" },
    { name: t("Ant Design"), desc: t("UI/UX Components"), color: "orange" },
    { name: t("Three.js"), desc: t("3D Graphics"), color: "green" },
    { name: t("Axios"), desc: t("APIs"), color: "red" },
    { name: t("I18n"), desc: t("Translate"), color: "yellow" },
  ];



  return (

    <motion.div variants={itemVariants} className="h-full">
      <Card title={<span className="text-2xl font-bold">{t("Favorite Libraries")}</span>} className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]" styles={{ header: { borderBottom: 'none', paddingBottom: 0 } }}>

        <List
          itemLayout="horizontal"
          dataSource={favoriteLibraries}
          renderItem={item => (
            <List.Item className="border-b-0 py-3">
              <List.Item.Meta
                avatar={<Avatar style={{color: '#C32729' }} icon={<HeartFilled />} />}
                title={<Text>{item.name}</Text>}
                description={<Text type="secondary">{item.desc}</Text>}
              />
              <Tag color={item.color} className="rounded-full px-3">{item.name}</Tag>
            </List.Item>
          )}
        />
      </Card>
    </motion.div>
  )
}

export default TechStackCard