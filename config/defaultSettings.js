const themeColor = {
  '@primary-color': '#1F57A7', // 全局主色
  '@link-color': '#1890ff', // 链接色
  '@success-color': '#52c41a', // 成功色
  '@warning-color': '#faad14', // 警告色
  '@error-color': '#f5222d', // 错误色
  '@font-size-base': '14px', // 主字号
  '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
  '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
  '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
  '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
  '@border-radius-base': '2px', // 组件/浮层圆角
  '@border-color-base': '#DCDFE6', // 边框色
  '@box-shadow-base':
    '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)', // 浮层阴影
};
const Settings = {
  navTheme: 'dark',
  title: 'Ant Design Pro',
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '//at.alicdn.com/t/font_2799059_uqswwnnqwcs.js',
  pwa: false,
  colorWeak: false,
  layout: 'side',
  contentWidth: 'Fluid',
  splitMenus: false,
  fixSiderbar: true,
  fixedHeader: true,
  headerHeight: 104,
  themeColor: themeColor,
};
export default Settings;
