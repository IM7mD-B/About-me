import React from 'react';
import { Card, List, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

const ContactInfo = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: <MailOutlined className="text-blue-500 text-xl" />,
      title: t('Email'),
      value: <a href="mailto:Mbawdood@outlook.sa" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Mbawdood@outlook.sa</a>,
    },
    {
      icon: <PhoneOutlined className="text-green-500 text-xl" />,
      title: t('Phone'),
      value: '+966543851354',
    },
    {
      icon: <EnvironmentOutlined className="text-red-500 text-xl" />,
      title: t('Location'),
      value: t('Saudi Arabia'),
    },
  ];

  return (
    <Card title={t("Contact Information")} className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]" styles={{ header: { borderBottom: 'none', paddingBottom: 0 } }}>
      <List
        itemLayout="horizontal"
        dataSource={contacts}
        renderItem={item => (
          <List.Item className="border-b-0 px-0">
            <List.Item.Meta
              avatar={<div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">{item.icon}</div>}
              title={<Text type="secondary" className="text-xs uppercase tracking-wider">{item.title}</Text>}
              description={<Text className="text-base font-medium text-gray-800 dark:text-gray-200">{item.value}</Text>}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ContactInfo;
