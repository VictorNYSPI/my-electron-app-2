require('dotenv').config()

//import {GITHUB_TOKEN} from '/.env'

//const authToken = require('.env')

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificate: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],

  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'VictorNYSPI',
          name: 'my-electron-app-2'
        },
        //authToken: GITHUB_TOKEN,
        authToken: process.env.GITHUB_TOKEN,
        //draft: process.env.PUBLISHER_GITHUB_DRAFT,
        //prerelease: process.env.PUBLISHER_GITHUB_PRERELEASE,
        // This was the original //prerelease: false,
        draft: true
      }
    }
  ]

};
