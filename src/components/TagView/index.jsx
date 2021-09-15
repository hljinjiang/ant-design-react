import React, { Component } from 'react';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './index.less';
import { NavLink, history } from 'umi';

class TagView extends Component {
  state = {
    list: [],
    update: true,
  };

  scrollRef = React.createRef();

  // 控制是否更新
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.update;
  }

  componentDidUpdate() {
    const route = this.props;
    console.log(!this.state.list.includes(route.location.pathname));
    if (!this.state.list.includes(route.location.pathname)) {
      this.setState({
        list: [...this.state.list, route.location.pathname],
      });
    }
  }

  // 删除tag，跳转route
  handleDelete = (event, val) => {
    event.preventDefault();
    const idx = this.state.list.indexOf(val);
    const { list } = this.state;
    const ifEnd = idx === this.state.list.length - 1;
    if (this.state.list.length === 1) {
      return;
    }
    // 当前路由与删除路由相同，并且不是最后一个tag，则往后一位跳转，并处理数据
    if (history.location.pathname === val && !ifEnd) {
      this.setState(
        {
          update: false,
        },
        () => {
          history.push(this.state.list[idx + 1]);
          list.splice(idx, 1);
          this.setState({ list }, () => this.setState({ update: true }));
        },
      );
    } else {
      // 删除其他路由，并且不是最后一个tag，则只处理list，否则往前一位跳转
      if (history.location.pathname === val && ifEnd) {
        history.push(this.state.list[idx - 1]);
      }
      list.splice(idx, 1);
      console.log(list);
      this.setState({ list });
    }
  };

  // 滚动scroll
  handleScroll = (val) => {
    if (val === 1) {
      this.scrollRef.current.scrollLeft = 0;
    } else {
      this.scrollRef.current.scrollLeft =
        this.scrollRef.current.scrollWidth - this.scrollRef.current.offsetWidth;
    }
  };

  render() {
    const route = this.props;
    return (
      <div className={styles.tagView}>
        <div className={`${styles.tagLeft} ${styles.tagIcon}`} onClick={() => this.handleScroll(1)}>
          <LeftOutlined />
        </div>
        <div ref={this.scrollRef} className={styles.tagContent}>
          {this.state.list.map((item) => {
            return (
              <div className={styles.tagContentItem} key={item}>
                {Object.keys(route.breadcrumb).map((bread) => {
                  if (bread === item) {
                    return (
                      <NavLink to={item} key={bread} activeClassName="selected">
                        <span className={`selected_icon ${styles.tagActiveIcon}`} />
                        <div style={{ marginLeft: '12px' }}>
                          {route.breadcrumb[bread].name}
                          <CloseOutlined
                            className="iconDelete"
                            onClick={(event) => this.handleDelete(event, item)}
                          />
                        </div>
                      </NavLink>
                    );
                  }
                  return '';
                })}
              </div>
            );
          })}
        </div>
        <div
          className={`${styles.tagRight} ${styles.tagIcon}`}
          onClick={() => this.handleScroll(2)}
        >
          <RightOutlined />
        </div>
      </div>
    );
  }
}

export default TagView;
