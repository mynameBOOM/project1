import React from 'react';
// import router from 'umi/router';
import styles from './index.less';
import {
    Card,
    // Icon
    //  Col, Row
} from 'antd';
import { connect } from 'dva';

@connect(
    ({ about }) => (
        { ...about }
    ),
)
export default class About extends React.Component {

    render() {
        const { comInfo, personInfo } = this.props;
        return (
            <div className={styles.mainContainer}>
                <div className={styles.placeContainer}>
                    <div className={styles.placeBG}></div>
                    <div className={styles.placeContentContainer}>
                        <div className={styles.placeTitle}>欢迎</div>
                        <div className={styles.placeInfo}>我们期待您的联系</div>
                    </div>
                </div>
                <div className={styles.carnContainer}>
                    <Card
                        style={{ color: '#001529', fontSize: 16 }}
                    >
                        <table >
                            <tbody>
                                {comInfo.map((infoItem, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{infoItem.label}:</td>
                                            <td style={{ paddingLeft: 10 }}>{infoItem.value}</td>
                                        </tr>
                                    );
                                })}
                                {personInfo.map((infoItem, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{infoItem.label}:</td>
                                            <td style={{ paddingLeft: 10 }}>{infoItem.value}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        );
    }
}