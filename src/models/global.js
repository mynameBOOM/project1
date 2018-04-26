// import { routerRedux } from 'dva/router';

export default {
    namespace: 'global',
    state: {
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