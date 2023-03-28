const CONFIGDEV = {
  SITEDK_DOMAIN_SERVER_HOST: "http://localhost:3000",
  SITEDK_SERVER_HOST: "http://localhost:3000"
}
const CONFIGPRD = {
  SITEDK_DOMAIN_SERVER_HOST: "https://typingmind.aimodel.app",
  SITEDK_SERVER_HOST: "https://typingmind.aimodel.app"
}
const configs = {
  development: CONFIGDEV,
  production: CONFIGPRD,
  test: CONFIGDEV
}


const CONFIG = configs[process.env.NODE_ENV || "production"]

// export default CONFIG
module.exports = CONFIG