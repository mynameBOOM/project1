import React from 'react';
// import router from 'umi/router';
import {
    Card,
    Icon,
    Col, Row,
    Collapse
} from 'antd';
import styles from './index.less';
import { connect } from 'dva';
const Panel = Collapse.Panel;

@connect(
    ({ detail }) => (
        { ...detail }
    ),
)
export default class Detail extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className={styles.mainContainer}>
                <Row type="flex" justify="center">
                    <Col xs={22} sm={22} md={20} lg={18} xl={18}>
                        <Card
                            title={<div>
                                <div style={{ fontSize: 18 }}>{data.type}</div>
                                <div className={styles.itemTitle}>{data.name}</div>
                                <div className={styles.itemId}>{`(${data.id})`}</div>
                            </div>}
                            bodyStyle={{ padding: 0 }}
                            // style={{ maxWidth: 540 }}
                            cover={<img alt={'test'} src={require('../../../assets/503584-1.jpg')} />}
                        >
                        </Card>
                    </Col>
                    <Col xs={22} sm={22} md={20} lg={18} xl={18}>
                        <Collapse defaultActiveKey={['1']} >
                            {data.techData.length > 0 && <Panel header={<div className={styles.itemTitle}>TECHNICAL DATA</div>} key="1">
                                <Card
                                    bordered={false}
                                    style={{ color: '#001529', fontSize: 18 }}
                                >
                                    <table >
                                        <tbody>
                                            {data.techData.map((infoItem, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{infoItem.label}:</td>
                                                        <td style={{ paddingLeft: 20 }}>{infoItem.value}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </Card>
                            </Panel>}
                            {data.standConfig.length > 0 && <Panel header={<div className={styles.itemTitle}>STANDARD CONFIGURATION</div>} key="2">
                                {data.standConfig.map((item, i) => {
                                    return (
                                        <Card
                                            key={`SC-${i}`}
                                            title={<div>
                                                <div style={{ fontSize: 18 }}>{item.label}</div>
                                            </div>}
                                            bordered={false}
                                            style={{ color: '#001529', fontSize: 18 }}
                                        >
                                            <table >
                                                <tbody>
                                                    {item.value.map((infoItem, j) => {
                                                        return (
                                                            <tr key={`SC-${i}-${j}`}>
                                                                <td><Icon type="check" style={{ paddingRight: 10 }} />{infoItem}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </Card>
                                    );
                                })}
                            </Panel>}
                            {data.extended.length > 0 && <Panel header={<div className={styles.itemTitle}>EXTENDED MACHINE ACCESSORIES</div>} key="3">
                                {data.extended.map((item, i) => {
                                    return (
                                        <Card
                                            key={`EX-${i}`}
                                            title={<div>
                                                <div style={{ fontSize: 18 }}>{item.label}</div>
                                            </div>}
                                            bordered={false}
                                            style={{ color: '#001529', fontSize: 18 }}
                                        >
                                            <table >
                                                <tbody>
                                                    {item.value.map((infoItem, j) => {
                                                        return (
                                                            <tr key={`EX-${i}-${j}`}>
                                                                <td><Icon type="check" style={{ paddingRight: 10 }} />{infoItem}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </Card>
                                    );
                                })}
                            </Panel>}
                        </Collapse>
                    </Col>
                </Row>
            </div>
        );
    }
}
