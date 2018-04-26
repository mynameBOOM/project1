import React from 'react';
import router from 'umi/router';
import {
    Card,
    Icon
    //  Col, Row
} from 'antd';
import styles from './index.less';

const data = [
    {
        type: "LASER CUTTER",
        name: "TRUMPF TRULASER 3030 - 4KW",
        id: "＃503584",
        info: [
            { label: 'Year', value: '2009' },
            { label: 'Working hours machine', value: '21.649 h (05.04.2018)' },
            { label: 'Working hours laser on', value: '21.638 h (05.04.2018)' },
            { label: 'Working hours beam on', value: '4.790 h (05.04.2018)' },
        ],
        url: '../../assets/503584.jpg',
    },
    {
        type: "LASER CUTTER",
        name: "TRUMPF TRULASER 3030 - 4KW",
        id: "＃503584",
        info: [
            { label: 'Year', value: '2009' },
            { label: 'Working hours machine', value: '21.649 h (05.04.2018)' },
            { label: 'Working hours laser on', value: '21.638 h (05.04.2018)' },
            { label: 'Working hours beam on', value: '4.790 h (05.04.2018)' },
        ],
        url: '../../assets/503584.jpg',
    },
    {
        type: "LASER CUTTER",
        name: "TRUMPF TRULASER 3030 - 4KW",
        id: "＃503584",
        info: [
            { label: 'Year', value: '2009' },
            { label: 'Working hours machine', value: '21.649 h (05.04.2018)' },
            { label: 'Working hours laser on', value: '21.638 h (05.04.2018)' },
            { label: 'Working hours beam on', value: '4.790 h (05.04.2018)' },
        ],
        url: '../../assets/503584.jpg',
    },
    {
        type: "LASER CUTTER",
        name: "TRUMPF TRULASER 3030 - 4KW",
        id: "＃503584",
        info: [
            { label: 'Year', value: '2009' },
            { label: 'Working hours machine', value: '21.649 h (05.04.2018)' },
            { label: 'Working hours laser on', value: '21.638 h (05.04.2018)' },
            { label: 'Working hours beam on', value: '4.790 h (05.04.2018)' },
        ],
        url: '../../assets/503584.jpg',
    },

]

export default class Devices extends React.Component {

    renderData = () => {
        const devices = data.map((item, index) => {
            return (
                <div key={`${index}-${item.id}`}>
                    <div className={styles.itemContainer}>
                        <Card
                            hoverable
                            bodyStyle={{ padding: 0 }}
                            style={{ maxWidth: 540 }}
                            cover={<img alt={item.name} src={require('../../assets/503584.jpg')} />}
                            onClick={() => { router.push(`devices/detail/${item.id}`); }}
                        >
                        </Card>
                        <Card
                            title={<div>
                                <div style={{ fontSize: 16, fontWeight: 'bold' }}>{item.type}</div>
                                <div
                                    className={styles.itemTitle}
                                    onClick={() => { router.push(`devices/detail/${item.id}`); }}
                                >{item.name}</div>
                                <div className={styles.itemId}>{`(${item.id})`}</div>
                            </div>}
                            bordered={false}
                            style={{ color: '#001529', fontSize: 16 }}
                        >
                            <table >
                                <tbody>
                                    {item.info.map((infoItem, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{infoItem.label}:</td>
                                                <td style={{ paddingLeft: 10 }}>{infoItem.value}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className={styles.iconContainer}>
                                <a href="mailto:790141078@qq.com" className={styles.itemIcon}>联系我们<Icon type="mail" /></a>
                                <span
                                    className={styles.itemIcon}
                                    onClick={() => { router.push(`devices/detail/${item.id}`); }}
                                >更多<Icon type="profile" /></span>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.itemBorder} />
                </div>
            );
        });
        return devices;
    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.placeContainer}>
                    <div className={styles.placeBG}></div>
                    <div className={styles.placeContentContainer}>
                        <div className={styles.placeTitle}>欢迎</div>
                        <div className={styles.placeInfo}>我们会为您提供各种通快机械</div>
                    </div>
                </div>
                <div className={styles.dataContainer}>
                    {this.renderData()}
                </div>
            </div>
        );
    }
}