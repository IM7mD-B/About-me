import React from 'react';
import { Card, Timeline, Typography, Tag } from 'antd';
import { SolutionOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <Card title={t("Professional Experience")} className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]">
      <Timeline
        className="mt-6 ml-2 rtl:mr-2 rtl:ml-0"
        items={[
          {
            dot: <div className="bg-green-500 text-white p-1.5 rounded-full flex items-center justify-center"><SolutionOutlined /></div>,
            children: (
              <div className="ml-4 rtl:mr-4 rtl:ml-0 pb-6">
                <Title level={5} className="!mb-1 text-gray-800 dark:text-gray-200">{t("React Web Developer")}</Title>
                <Text strong className="text-green-600 dark:text-green-400 block mb-1">TechWin</Text>
                <Tag color="green" className="mb-2 border-none rounded bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400">16/02/2026 – {t("Present")}</Tag>
                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("Developed the web version of the Meen Gaddha project using React.")}
                </p>
              </div>
            ),
          },
          {
            dot: <div className="bg-blue-500 text-white p-1.5 rounded-full flex items-center justify-center"><SolutionOutlined /></div>,
            children: (
              <div className="ml-4 rtl:mr-4 rtl:ml-0 pb-4">
                <Title level={5} className="!mb-1 text-gray-800 dark:text-gray-200">{t("React Native Developer")}</Title>
                <Text strong className="text-blue-600 dark:text-blue-400 block mb-1">TechWin</Text>
                <Tag color="blue" className="mb-2 border-none rounded bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">09/2025 – 01/2026</Tag>
                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("Developed and maintained mobile applications using React Native. Collaborated with cross-functional teams to deliver high-quality software solutions and engaging user interfaces.")}
                </p>
              </div>
            ),
          }
        ]}
      />
    </Card>
  );
};

export default ExperienceSection;
