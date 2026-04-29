import React from 'react';
import { Card, Tag, Typography, Divider } from 'antd';
import { CodeOutlined, TeamOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const SkillsSection = () => {
  const { t } = useTranslation();

  const technicalSkills = [
    'JavaScript', 'React Native', 'React', 'Cypress (E2E, Parallel)', 
    'UI/UX Design', 'Figma', 'HTML', 'CSS', 'Unity', 'Hardware Knowledge'
  ];

  const softSkills = [
    t('Self Learner'), t('Problem Solving'), t('Time Management'), 
    t('Communication'), t('Critical Thinking'), t('Teamwork')
  ];

  const languages = [t('Arabic'), t('English')];

  return (
    <Card title={t("Skills & Expertise")} className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]" styles={{ header: { borderBottom: 'none' } }}>
      <div className="mb-6">
        <Title level={5} className="flex items-center gap-2 !mb-4 text-gray-800 dark:text-gray-200">
          <CodeOutlined className="text-blue-500" /> {t("Technical Skills")}
        </Title>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.map((skill, index) => (
            <Tag key={index} color="blue" className="px-3 py-1 text-sm rounded-full border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
              {skill}
            </Tag>
          ))}
        </div>
      </div>

      <Divider className="my-4" />

      <div className="mb-6">
        <Title level={5} className="flex items-center gap-2 !mb-4 text-gray-800 dark:text-gray-200">
          <TeamOutlined className="text-green-500" /> {t("Soft Skills")}
        </Title>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, index) => (
            <Tag key={index} color="green" className="px-3 py-1 text-sm rounded-full border-green-200 bg-green-50 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300">
              {skill}
            </Tag>
          ))}
        </div>
      </div>

      <Divider className="my-4" />

      <div>
        <Title level={5} className="flex items-center gap-2 !mb-4 text-gray-800 dark:text-gray-200">
            <GlobalOutlined className="text-purple-500" /> {t("Languages")}
        </Title>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang, index) => (
            <Tag key={index} className="px-3 py-1 text-sm rounded-full border-gray-300 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
              {lang}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SkillsSection;
