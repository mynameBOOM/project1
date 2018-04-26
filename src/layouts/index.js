import React from 'react';
import router from 'umi/router';
import { Menu, Icon } from 'antd';
import styles from './index.less';
// import { connect } from 'dva';


export default class Layout extends React.Component {

    handleClick = (e) => {
        switch (e.key) {
            case 'home':
                router.push('/');
                break;
            case 'devices':
                router.push('/devices');
                break;
            case 'about':
                router.push('/about');
                break;
            default:
                router.push('/');
        }
    }

    render() {
        const { location } = this.props;
        let key = 'home';
        if (location.pathname === '/about') {
            key = 'about'
        }
        if (location.pathname.indexOf('/devices') > -1) {
            key = 'devices'
        }
        return (
            <div>
                <header className={styles.headZContainer}>
                    <div className={styles.headContainer}>
                        <div className={styles.header}>xxx公司</div>
                        <Menu
                            onClick={this.handleClick}
                            defaultSelectedKeys={["main"]}
                            selectedKeys={[key]}
                            mode="horizontal"
                            theme="dark"
                        >
                            <Menu.Item key="home">
                                <Icon type="home" />主页
                        </Menu.Item>
                            <Menu.Item key="devices" >
                                <Icon type="shopping-cart" />设备
                        </Menu.Item>
                            <Menu.Item key="about" >
                                <Icon type="team" />关于我们
                        </Menu.Item>
                        </Menu>
                    </div>
                </header>
                {this.props.children}
                <footer >
                    <div className={styles.footContainer}>
                        <div>
                            <div className={styles.footRow}>地址：珠海市xxx区xxx镇xxx号</div>
                            <div className={styles.footRow}>电话：0756-1234567</div>
                            <div className={styles.footRow}>邮箱：790141078@qq.com</div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}