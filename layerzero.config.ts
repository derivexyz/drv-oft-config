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

const ARB_DVNs= [
  '0x19670df5e16bea2ba9b9e68b48c054c5baea06b8',
  '0x2f55c492897526677c5b68fb199ea31e2c126416'
]

const BASE_DVNs = [
  '0xa7b5189bca84cd304d8553977c7c614329750d99',
  '0x9e059a54699a285714207b43b055483e78faac25'
]

const ETH_MAINNET_DVNs = [
  '0x380275805876ff19055ea900cdb2b46a94ecf20d',
  '0x589dedbd617e0cbcb916a9223f4d1300c294236b'
]

const OP_DVNs = [
  '0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb',
  '0x6a02d83e8d433304bba74ef1c427913958187142'
]

const DERIVE_DVNs = [
  '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
  '0x9c061c9a4782294eef65ef28cb88233a987f4bdd'
]


export default {
    contracts: [
        {
            contract: arbitrum_mainnetContract,
            config: {
                delegate: '0x2CcF21e5912e9ecCcB0ecdEe9744E5c507cf88AE',
                owner: '0x2CcF21e5912e9ecCcB0ecdEe9744E5c507cf88AE',
            },
        },
        {
            contract: base_mainnetContract,
            config: {
                delegate: '0xbfA8B86391c5eCAd0eBe2B158D9Cd9866DDBAaDa',
                owner: '0xbfA8B86391c5eCAd0eBe2B158D9Cd9866DDBAaDa',
            },
        },
        {
            contract: derive_mainnetContract,
            config: {
                delegate: '0xB176A44D819372A38cee878fB0603AEd4d26C5a5',
                owner: '0xB176A44D819372A38cee878fB0603AEd4d26C5a5',
            },
        },
        {
            contract: ethereum_mainnetContract,
            config: {
                delegate: '0x246d38588b16Dd877c558b245e6D5a711C649fCF',
                owner: '0x246d38588b16Dd877c558b245e6D5a711C649fCF',
            },
        },
        {
            contract: optimism_mainnetContract,
            config: {
                delegate: '0xD4C00FE7657791C2A43025dE483F05E49A5f76A6',
                owner: '0xD4C00FE7657791C2A43025dE483F05E49A5f76A6',
            },
        },
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
                        requiredDVNs: ARB_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ARB_DVNs,
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
                        requiredDVNs: ARB_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ARB_DVNs,
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
                        requiredDVNs: ARB_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: ARB_DVNs,
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
                        requiredDVNs: ARB_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ARB_DVNs,
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
                        requiredDVNs: BASE_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: BASE_DVNs,
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
                        requiredDVNs: BASE_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: BASE_DVNs,
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
                        requiredDVNs: BASE_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: BASE_DVNs,
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
                        requiredDVNs: BASE_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: BASE_DVNs,
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
                        requiredDVNs: DERIVE_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: DERIVE_DVNs,
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
                        requiredDVNs: DERIVE_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: DERIVE_DVNs,
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
                        requiredDVNs: DERIVE_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: DERIVE_DVNs,
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
                        requiredDVNs: DERIVE_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: DERIVE_DVNs,
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
                        requiredDVNs: ETH_MAINNET_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ETH_MAINNET_DVNs,
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
                        requiredDVNs: ETH_MAINNET_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ETH_MAINNET_DVNs,
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
                        requiredDVNs: ETH_MAINNET_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ETH_MAINNET_DVNs,
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
                        requiredDVNs: ETH_MAINNET_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ETH_MAINNET_DVNs,
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
                        requiredDVNs: OP_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: OP_DVNs,
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
                        requiredDVNs: OP_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: OP_DVNs,
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
                        requiredDVNs: OP_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: OP_DVNs,
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
                        requiredDVNs: OP_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: OP_DVNs,
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions,
            },
        },
    ],
}
