import React from "react";
import { Card, Typography } from "antd";
import ReactIcon from "../../../assets/images/react.svg";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

const MyWork = () => {
  const { t } = useTranslation();

  return (
    <Card
      title={<span className="text-2xl font-bold">{t("My Role")}</span>}
      className="shadow-md rounded-2xl border-none h-full dark:bg-[#141414]"
      styles={{ header: { borderBottom: "none", paddingBottom: 0 } }}
    >
      {/* Icon */}
      <div className=" mb-6">
        <img src={ReactIcon} alt="React" className="size-24 opacity-90" />
      </div>

      {/* Split Container */}
      <div className="md:flex gap-6">
        
        {/* Left - Web */}
        <div className="w-1/2">
          <Title level={3}>{t("ReactJs")}</Title>
          <ul className="text-xl text-gray-500 space-y-1">
            <li>{t("WebUI")}</li>
            <li>{t("WebAPI")}</li>
            <li>{t("WebResponsive")}</li>
          </ul>
        </div>

        {/* Right - Mobile */}
        <div className=" md:border-l md:pl-4">
          <Title level={3}>{t("ReactN")}</Title>
          <ul className="text-xl text-gray-500 space-y-1">
            <li>{t("MobileScreens")}</li>
            <li>{t("MobileAPI")}</li>
            <li>{t("MobilePerformance")}</li>
          </ul>
        </div>

      </div>
    </Card>
  );
};

export default MyWork;