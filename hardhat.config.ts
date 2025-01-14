// Get the environment configuration from .env file
//
// To make use of automatic environment setup:
// - Duplicate .env.example file and name it .env
// - Fill in the environment variables
import 'dotenv/config'

import '@openzeppelin/hardhat-upgrades'
import 'hardhat-deploy'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy-ethers'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'

import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from 'hardhat/types'

import { EndpointId } from '@layerzerolabs/lz-definitions'

// Set your preferred authentication method
//
// If you prefer using a mnemonic, set a MNEMONIC environment variable
// to a valid mnemonic
const MNEMONIC = process.env.MNEMONIC

// If you prefer to be authenticated using a private key, set a PRIVATE_KEY environment variable
const PRIVATE_KEY = process.env.PRIVATE_KEY

const accounts: HttpNetworkAccountsUserConfig | undefined = MNEMONIC
    ? { mnemonic: MNEMONIC }
    : PRIVATE_KEY
      ? [PRIVATE_KEY]
      : undefined

if (accounts == null) {
    console.warn(
        'Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.'
    )
}

const config: HardhatUserConfig = {
    paths: {
        cache: 'cache/hardhat',
    },
    solidity: {
        compilers: [
            {
                version: '0.8.22',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        'ethereum-mainnet': {
            eid: EndpointId.ETHEREUM_V2_MAINNET,
            url: process.env.RPC_URL_MAINNET,
            accounts,
            safeConfig: {
                safeUrl: 'https://app.safe.global/home?safe=eth:0x246d38588b16Dd877c558b245e6D5a711C649fCF',
                safeAddress: '0x246d38588b16Dd877c558b245e6D5a711C649fCF',
            },
        },
        'optimism-mainnet': {
            eid: EndpointId.OPTIMISM_V2_MAINNET,
            url: process.env.RPC_URL_OPTIMISM,
            accounts,
            safeConfig: {
                safeUrl: 'https://app.safe.global/home?safe=oeth:0xD4C00FE7657791C2A43025dE483F05E49A5f76A6',
                safeAddress: '0xD4C00FE7657791C2A43025dE483F05E49A5f76A6',
            },
        },
        'derive-mainnet': {
            eid: EndpointId.LYRA_V2_MAINNET,
            url: process.env.RPC_URL_DERIVE,
            accounts,
            safeConfig: {
                safeUrl: 'https://lyra-safe.altlayer.io/home?safe=lyra:0xB176A44D819372A38cee878fB0603AEd4d26C5a5',
                safeAddress: '0xB176A44D819372A38cee878fB0603AEd4d26C5a5',
            },
        },
        'arbitrum-mainnet': {
            eid: EndpointId.ARBITRUM_V2_MAINNET,
            url: process.env.RPC_URL_ARBITRUM,
            accounts,
            safeConfig: {
                safeUrl: 'https://app.safe.global/home?safe=arb1:0x2CcF21e5912e9ecCcB0ecdEe9744E5c507cf88AE',
                safeAddress: '0x2CcF21e5912e9ecCcB0ecdEe9744E5c507cf88AE',
            },
        },
        'base-mainnet': {
            eid: EndpointId.BASE_V2_MAINNET,
            url: process.env.RPC_URL_BASE,
            accounts,
            safeConfig: {
                safeUrl: 'https://app.safe.global/home?safe=base:0xbfA8B86391c5eCAd0eBe2B158D9Cd9866DDBAaDa',
                safeAddress: '0xbfA8B86391c5eCAd0eBe2B158D9Cd9866DDBAaDa',
            },
        },
        hardhat: {
            // Need this for testing because TestHelperOz5.sol is exceeding the compiled contract size limit
            allowUnlimitedContractSize: true,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // wallet address of index[0], of the mnemonic in .env
        },
    },
    layerZero: {
        // You can tell hardhat toolbox not to include any deployments (hover over the property name to see full docs)
        deploymentSourcePackages: [],
        // You can tell hardhat not to include any artifacts either
        // artifactSourcePackages: [],
    },
}

export default config
