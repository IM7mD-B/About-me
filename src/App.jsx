import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme, Spin } from "antd";
import { useTranslation } from "react-i18next";
import { useAppStore } from "./store/appStore";

// Lazy load pages for optimized bundle size and performance
const UILab = lazy(() => import("./modules/Pages/UILab"));
const AboutMePage = lazy(() => import("./modules/aboutMe/pages/AboutMePage"));
const TechWin = lazy(() => import("./modules/icon3D/pages/TechWin"));

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
        <Suspense fallback={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: isDarkMode ? '#000000' : '#f8fafc'
          }}>
            <Spin size="large" />
          </div>
        }>
          <Routes>
            <Route index element={<UILab />} />
            <Route path="/About-MePage" element={<AboutMePage />} />
            <Route path="/TechWin" element={<TechWin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App;
