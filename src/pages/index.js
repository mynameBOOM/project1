import React from 'react';
// import router from 'umi/router';
import styles from './index.less';
import { Icon } from 'antd';
export default class Main extends React.Component {

    render() {
        return (
            <div className={styles.mainContainer} >
               <div className={styles.placeContainer}>
                    <div className={styles.placeBG}></div>
                    <div className={styles.placeContentContainer}>
                        <div className={styles.placeTitle}>欢迎</div>
                        <div className={styles.placeInfo}>您的通快机械合作伙伴</div>
                    </div>
                </div>
                <div className={styles.contentContainer}>

                    <div className={styles.content} onClick={() => { console.log('test') }}>
                        <div className={styles.contentRow}>我们是通快钣金加工领域的高素质团队，总部位于珠海。</div>
                        <div className={styles.contentRow}>我们在全球范围内购买和销售二手通快钣金加工机器，并提供优质的服务。</div>
                        <div className={styles.contentRow}>我们的使命是为我们的客户提供适合其钣金加工和金属加工领域需求的机床。</div>
                        <div className={styles.contentRow}>我们的机器市场包括使用的通快激光切割机，冲压和组合机，折弯机，折弯机和管激光切割机。</div>
                        <div className={styles.contentRow}>除此之外，我们还为您提供卓越的服务，其中不仅包括安装一流的二手机器。我们也专注于机器搬迁，维护，修理，改造以及培训。</div>
                    </div>
                    <div className={styles.connect}>
                        <div style={{ fontSize: 25 }}>如果你任何疑问</div>
                        <div>请通过电子邮件，电话联系我们。 我们期待着您的联系。</div>
                        <div className={styles.mail}><a href="mailto:790141078@qq.com">790141078@qq.com<Icon type="mail" /></a></div>
                    </div>

                </div>
            </div>
        );
    }
}