import React from 'react';
import { Card, Timeline, Typography, Tag } from 'antd';
import { BookOutlined, TrophyOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const EducationSection = () => {
  const { t } = useTranslation();

  return (
    <Card title={t("Education & Certifications")} className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]">
      <Timeline
        className="mt-6 ml-2 rtl:mr-2 rtl:ml-0"
        items={[
          {
            dot: <div className="bg-green-500 text-white p-1.5 rounded-full flex items-center justify-center"><BookOutlined /></div>,
            children: (
              <div className="ml-4 rtl:mr-4 rtl:ml-0 mb-6">
                <Title level={5} className="!mb-1 text-gray-800 dark:text-gray-200">Bachelor of Computer Science</Title>
                <Text strong className="text-gray-700 dark:text-gray-400 block mb-2">Umm Al-Qura University</Text>
                <Tag color="gold" className="font-medium border-none rounded-md px-2 py-0.5 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500">Second-Class Honors</Tag>
              </div>
            ),
          },
          {
            dot: <div className="bg-purple-500 text-white p-1.5 rounded-full flex items-center justify-center"><TrophyOutlined /></div>,
            children: (
              <div className="ml-4 rtl:mr-4 rtl:ml-0 mb-6">
                <Title level={5} className="!mb-1 text-gray-800 dark:text-gray-200">Software Testing & Automation Bootcamp</Title>
                <Text strong className="text-gray-700 dark:text-gray-400 block mb-2">Tuwaiq Academy</Text>
                <Tag color="purple" className="font-medium border-none rounded-md px-2 py-0.5 bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">Outstanding Trainee of the Week</Tag>
              </div>
            ),
          },
          {
            dot: <div className="bg-gray-400 text-white p-1.5 rounded-full flex items-center justify-center"><PlayCircleOutlined /></div>,
            children: (
              <div className="ml-4 rtl:mr-4 rtl:ml-0">
                <Title level={5} className="!mb-2 text-gray-800 dark:text-gray-200">Courses</Title>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Figma Design — Coursera
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> UX Foundations — Coursera
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> UI Design — Coursera
                  </li>
                </ul>
              </div>
            ),
          }
        ]}
      />
    </Card>
  );
};

export default EducationSection;
