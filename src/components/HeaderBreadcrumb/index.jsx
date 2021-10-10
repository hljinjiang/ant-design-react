import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'umi';
import TagView from '@/components/TagView';
import styles from './index.less';

const HeaderBreadcrumb = (props) => {
  const route = props;

  // 向头部添加dashboard
  const handleAddDashBroad = () => {
    if (!route.matchMenuKeys.includes('/dashboard')) {
      return (
        <Breadcrumb.Item key="/dashboard">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#${route.breadcrumb['/dashboard'].icon}`} />
          </svg>
          <Link to={'/dashboard'} className={styles.link}>
            {route.breadcrumb['/dashboard'].name}
          </Link>
        </Breadcrumb.Item>
      );
    }
    return undefined;
  };

  return (
    <Breadcrumb>
      {handleAddDashBroad()}
      {route.matchMenuKeys.map((item) => {
        return (
          <Breadcrumb.Item key={item}>
            {Object.keys(route.breadcrumb).map((bread) => {
              if (bread === item) {
                return (
                  <React.Fragment key={bread}>
                    {/* <svg className="icon" aria-hidden="true">
                      <use xlinkHref={`#${route.breadcrumb[bread].icon}`} />
                    </svg> */}
                    <Link to={route.matchMenuKeys.slice(-1)[0]} className={styles.link}>
                      {route.breadcrumb[bread].name}
                    </Link>
                  </React.Fragment>
                );
              }
              return '';
            })}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

// 自定义导航条
class HeaderCenter extends Component {
  render() {
    return (
      <>
        {/* header左侧面包屑，右侧头像，下侧路由导航栏 */}
        <div className={styles.header}>
          <HeaderBreadcrumb {...this.props} />
          {this.props.right}
        </div>
        <TagView {...this.props} />
      </>
    );
  }
}

export default HeaderCenter;
