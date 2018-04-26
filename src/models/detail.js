// import { routerRedux } from 'dva/router';
const defaultData = {
    type: "LASER CUTTER",
    name: "TRUMPF TRULASER 3030 - 4KW",
    id: "＃503584",
    techData: [
        { label: 'Year', value: '2009' },
        { label: 'Working hours machine', value: '21.649 h (05.04.2018)' },
        { label: 'Working hours laser on', value: '21.638 h (05.04.2018)' },
        { label: 'Working hours beam on', value: '4.790 h (05.04.2018)' },
        { label: 'Laser power', value: '4000 Watt' },
        { label: 'Working range', value: '3000 x 1500 x 115 mm' },
        { label: 'Control', value: 'Siemens Sinumerik 840 D' },
        { label: 'Max. mild steel approx.', value: '20 mm' },
        { label: 'Max. stainless steel approx.', value: '15 mm' },
        { label: 'Max. aluminium approx.', value: '8 mm' },
        { label: 'Space requirement approx.', value: '9300 x 4600 x 2000 mm' },
        { label: 'Machine weight approx.', value: '11.500 kg' },
        { label: 'Electrical connected load approx.', value: '88 kVA' },
    ],
    standConfig: [
        {
            label: 'Standard configuration',
            value: [
                'Closed machine frame with integrated laser unit',
                'Automatic pallet changer',
                'Conveyor belt for small parts / slug',
                'Work area lighting',
                'Positioning laser diode',
                'Programmable cutting gas pressure',
                'Spray device',
                'FocusLine',
                'NitroLine',
                'PlasmaLine',
            ]
        },
        {
            label: 'TRUMPF Laser',
            value: [
                'CO2 laser TruFlow 4000',
                'Maintenance-free servo motors',
                'Radio-frequency excitation',
                'Programmable power cycles',
                'Laser power control',
                'Logbook function laser',
                'Cooling unit',
            ]
        },
        {
            label: 'Cutting head',
            value: [
                'Laser cutting head with 3,75", 5" und 7,5-lens',
                'Quickchange device for cutting head',
                'Automatic sheet position sensing system',
                'ControlLine',
            ]
        },
        {
            label: 'Control Unit',
            value: [
                'Control Siemens Sinumerik 840 D',
                'Automatic shut down mechanism',
                'ContourLine',
                'SprintLine',
                'Microweld',
                'Easy handling',
                'Online help',
                'E-shop',
                'Diagnostic function',
                'USB Interface',
                'Technology data'
            ]
        },
        {
            label: 'Safety',
            value: [
                'Light barriers',
                'Multi chamber exhaust system',
                'Compact dust extractor',
                'Beam delivery system',
                'Safety system',
            ]
        },
    ],
    extended: [
        {
            label: 'Advanced machine equipment',
            value: [
                'PierceLine',
            ]
        },
    ]
}

export default {
    namespace: 'detail',
    state: {
        data: defaultData,
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