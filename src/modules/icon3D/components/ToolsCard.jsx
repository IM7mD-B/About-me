import React from "react";
import { Card, Typography } from "antd";
import { GithubOutlined } from '@ant-design/icons';
import ReactIcon from "../../../assets/images/react.svg";
import FigmaLogo from "../../../assets/images/Figma-Logo.svg";
import ClickupLogo from "../../../assets/images/Clickup-logo.svg";
import PMLogo from "../../../assets/images/pm-logo.svg";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

const ToolsCard = () => {
  const { t } = useTranslation();

  const toolsList = [
    { name: "React", icon: ReactIcon, isImg: true },
    { name: "Figma", icon: FigmaLogo, isImg: true },
    { name: "ClickUp", icon: ClickupLogo, isImg: true },
    { name: "Postman", icon: PMLogo, isImg: true },
    { name: "GitHub", icon: <GithubOutlined className="text-3xl sm:text-4xl text-neutral-800 dark:text-neutral-200" />, isImg: false },
    { name: "React Native", icon: ReactIcon, isImg: true }
  ];

  return (
    <Card
      title={<span className="text-2xl font-bold">{t("TechStack")}</span>}
      className="shadow-md rounded-2xl border-none h-full bg-white dark:bg-[#141414]"
      styles={{ header: { borderBottom: "none", paddingBottom: 0 } }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full">
        {toolsList.map((tool, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/80 hover:-translate-y-1 hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
          >
            {/* Standardized uniform icon container */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center bg-neutral-100/30 dark:bg-neutral-800/20 mb-3 transition-colors duration-300 group-hover:bg-blue-500/10">
              {tool.isImg ? (
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                  {tool.icon}
                </div>
              )}
            </div>
            <span className="text-sm sm:text-base font-bold text-neutral-700 dark:text-neutral-200 transition-colors duration-300 group-hover:text-blue-500">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ToolsCard;