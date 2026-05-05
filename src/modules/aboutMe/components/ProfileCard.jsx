import React from 'react';
import { Card, Typography, Avatar, Space, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import myPhoto from '../../../assets/images/myPhoto.jpg';

const { Title, Text, Paragraph } = Typography;

const ProfileCard = () => {
  const { t } = useTranslation();

  return (
    <Card className="text-center shadow-lg rounded-2xl overflow-hidden border-none dark:bg-[#141414]" styles={{ body: { padding: '2rem' } }}>
      <Space direction="vertical" size="large" className="w-full">
        <Avatar 
          size={160} 
          src={myPhoto} 
          icon={<UserOutlined />} 
          className="border-4 border-blue-500 shadow-md object-cover"
        />
        <div>
          <Title level={2} className="!mb-1">Mohammed Bawdood</Title>
          <Text type="secondary" className="text-lg font-medium">{t("Front-End Developer")}</Text>
        </div>
        
        <Paragraph className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
          {t("Profile Description")}
        </Paragraph>

        <Space wrap className="justify-center mt-2">
          <Tag color="blue" className="text-sm px-3 py-1 rounded-full">React</Tag>
          <Tag color="cyan" className="text-sm px-3 py-1 rounded-full">React Native</Tag>
          <Tag color="purple" className="text-sm px-3 py-1 rounded-full">UI/UX</Tag>
          <Tag color="green" className="text-sm px-3 py-1 rounded-full">Computer Vision</Tag>
        </Space>
      </Space>
    </Card>
  );
};

export default ProfileCard;
