import React from 'react';
import { Card, List, Typography, Tag } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('Meen Gaddha'),
      description: t('A comprehensive quiz application built with React Native.'),
      tags: ['React Native', 'Mobile App'],
      color: 'purple'
    },
    {
      title: t('Safety Equipment Detection'),
      description: t('An AI-powered computer vision project utilizing YOLOv11 for detecting safety equipment.'),
      tags: ['AI', 'YOLOv11', 'Computer Vision'],
      color: 'cyan'
    },
    {
      title: t('Skydance With Death'),
      description: t('An immersive game developed using the Unity engine.'),
      tags: ['Unity', 'Game Design', 'C#'],
      color: 'orange'
    }
  ];

  return (
    <Card title={t("Featured Projects")} className="shadow-md rounded-2xl border-none dark:bg-[#141414]">
      <List
        grid={{ gutter: 24, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
        dataSource={projects}
        renderItem={item => (
          <List.Item>
            <Card 
              hoverable 
              className="h-full border border-gray-200 dark:border-[#303030] shadow-sm rounded-xl transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500 dark:bg-[#1f1f1f]"
              styles={{ body: { padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-900/30 text-${item.color}-500 dark:text-${item.color}-400`}>
                  <ProjectOutlined className="text-xl" />
                </div>
                <Title level={5} className="!mb-0">{item.title}</Title>
              </div>
              <Text className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{item.description}</Text>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, index) => (
                  <Tag key={index} color={item.color} className="border-none rounded-md px-2 py-0.5 opacity-80 hover:opacity-100">
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ProjectsSection;
