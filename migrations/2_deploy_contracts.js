// eslint-disable-next-line no-undef
const IntelligentTransportationSystem = artifacts.require('IntelligentTransportationSystem')

module.exports = function (deployer) {
  deployer.deploy(IntelligentTransportationSystem)
}
