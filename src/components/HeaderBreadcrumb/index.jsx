import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'umi';
import TagView from '@/components/TagView';
import styles from './index.less';

const HeaderBreadcrumb = (props) => {
  const route = props;
  return (
    <Breadcrumb>
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
                    <Link to={item} className={styles.link}>
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

class HeaderCenter extends Component {
  render() {
    return (
      <>
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
