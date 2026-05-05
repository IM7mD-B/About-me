import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { useTranslation } from "react-i18next";
import { useAppStore } from "./store/appStore";
import UILab from "./modules/Pages/UILab";
import AboutMePage from "./modules/aboutMe/pages/AboutMePage";
import TechWin from "./modules/icon3D/pages/TechWin";
function App() {
  const { isDarkMode, language } = useAppStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add dark mode class to html element for Tailwind
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [language, isDarkMode, i18n]);

  return (
    <ConfigProvider
      direction={language === 'ar' ? 'rtl' : 'ltr'}
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#3b82f6',
          borderRadius: 12,
          fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<UILab />} />
          <Route path="/About-MePage" element={<AboutMePage />} />
          <Route path="/TechWin" element={<TechWin />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App;
