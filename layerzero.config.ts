import { EndpointId } from '@layerzerolabs/lz-definitions'
import { ExecutorOptionType } from '@layerzerolabs/lz-v2-utilities'

const arbitrum_mainnetContract = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'MyOFTUpgradeable',
}
const base_mainnetContract = {
    eid: EndpointId.BASE_V2_MAINNET,
    contractName: 'MyOFTUpgradeable',
}
const derive_mainnetContract = {
    eid: EndpointId.LYRA_V2_MAINNET,
    contractName: 'MyOFTUpgradeable',
}
const ethereum_mainnetContract = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'MyOFTUpgradeable',
}
const optimism_mainnetContract = {
    eid: EndpointId.OPTIMISM_V2_MAINNET,
    contractName: 'MyOFTUpgradeable',
}
const enforcedOptions = [
    {
        msgType: 1, // depending on OAppOptionType3
        optionType: ExecutorOptionType.LZ_RECEIVE,
        gas: 80000, // gas limit in wei for EndpointV2.lzReceive
        value: 0, // msg.value in wei for EndpointV2.lzReceive
    },
]

export default {
    contracts: [
        { contract: arbitrum_mainnetContract },
        { contract: base_mainnetContract },
        { contract: derive_mainnetContract },
        { contract: ethereum_mainnetContract },
        { contract: optimism_mainnetContract },
    ],
    connections: [
        {
            from: arbitrum_mainnetContract,
            to: base_mainnetContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: arbitrum_mainnetContract,
            to: derive_mainnetContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0x758C419533ad64Ce9D3413BC8d3A97B026098EC1'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0x758C419533ad64Ce9D3413BC8d3A97B026098EC1'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: arbitrum_mainnetContract,
            to: ethereum_mainnetContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: arbitrum_mainnetContract,
            to: optimism_mainnetContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: base_mainnetContract,
            to: arbitrum_mainnetContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: base_mainnetContract,
            to: derive_mainnetContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['0x6498b0632f3834D7647367334838111c8C889703'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0x6498b0632f3834D7647367334838111c8C889703'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: base_mainnetContract,
            to: ethereum_mainnetContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: base_mainnetContract,
            to: optimism_mainnetContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: derive_mainnetContract,
            to: arbitrum_mainnetContract,
            config: {
                sendLibrary: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043',
                receiveLibraryConfig: { receiveLibrary: '0x2367325334447C5E1E0f1b3a6fB947b262F58312', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x4208D6E27538189bB48E603D6123A94b8Abe0A0b' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: derive_mainnetContract,
            to: base_mainnetContract,
            config: {
                sendLibrary: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043',
                receiveLibraryConfig: { receiveLibrary: '0x2367325334447C5E1E0f1b3a6fB947b262F58312', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x4208D6E27538189bB48E603D6123A94b8Abe0A0b' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: derive_mainnetContract,
            to: ethereum_mainnetContract,
            config: {
                sendLibrary: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043',
                receiveLibraryConfig: { receiveLibrary: '0x2367325334447C5E1E0f1b3a6fB947b262F58312', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x4208D6E27538189bB48E603D6123A94b8Abe0A0b' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: derive_mainnetContract,
            to: optimism_mainnetContract,
            config: {
                sendLibrary: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043',
                receiveLibraryConfig: { receiveLibrary: '0x2367325334447C5E1E0f1b3a6fB947b262F58312', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x4208D6E27538189bB48E603D6123A94b8Abe0A0b' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xce8358bc28dd8296Ce8cAF1CD2b44787abd65887'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: ethereum_mainnetContract,
            to: arbitrum_mainnetContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: ethereum_mainnetContract,
            to: base_mainnetContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: ethereum_mainnetContract,
            to: derive_mainnetContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: ['0x747C741496a507E4B404b50463e691A8d692f6Ac'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0x747C741496a507E4B404b50463e691A8d692f6Ac'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: ethereum_mainnetContract,
            to: optimism_mainnetContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: optimism_mainnetContract,
            to: arbitrum_mainnetContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6A02D83e8d433304bba74EF1c427913958187142',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6A02D83e8d433304bba74EF1c427913958187142',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: optimism_mainnetContract,
            to: base_mainnetContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6A02D83e8d433304bba74EF1c427913958187142',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x6A02D83e8d433304bba74EF1c427913958187142',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: optimism_mainnetContract,
            to: derive_mainnetContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xEbc3065003e67CaaC747836dA272d9E5271A37e1'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xEbc3065003e67CaaC747836dA272d9E5271A37e1'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
        {
            from: optimism_mainnetContract,
            to: ethereum_mainnetContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6A02D83e8d433304bba74EF1c427913958187142',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x6A02D83e8d433304bba74EF1c427913958187142',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
    ],
}
