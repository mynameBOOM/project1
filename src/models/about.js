// import { routerRedux } from 'dva/router';

export default {
    namespace: 'about',
    state: {
        comInfo:[
            { label: '地址', value: '珠海市xxx区xxx镇xxx路xxx号' },
            { label: '电话', value: '0756-xxxxxxx' },
            { label: '邮箱', value: 'xxxxxxx@qq.com' },
        ],
        personInfo:[
            { label: '联系人', value: '吴先生' },
            { label: '电话', value: '139xxxxxxxx' },
            { label: '邮箱', value: 'xxxxxxx@qq.com' },
        ]
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    // effects: {
    //     *throwError() {
    //         throw new Error('hi error');
    //     },
    // },
};