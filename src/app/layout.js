import './styles/globals.css'; // 导入全局样式
import Header from './components/Header'; // 导入头部组件
import Footer from './components/Footer'; // 导入底部组件

export const metadata = {
  title: 'Free AI Tools',
  description: '一个免费的AI工具平台，基于Cloudflare的AI能力。',
};

const Layout = ({ children }) => {
  return (
    <html lang="zh">
      <body>
        <Header />
        <main>{children}</main> {/* 渲染子页面内容 */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
