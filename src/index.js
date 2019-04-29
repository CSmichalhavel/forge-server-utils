const { DesignAutomationURI } = require('./common');
const { AuthenticationClient } = require('./authentication');
const { DataManagementClient } = require('./data-management');
const { ModelDerivativeClient } = require('./model-derivative');
const { BIM360Client } = require('./bim360');
const { DesignAutomationClient } = require('./design-automation');

module.exports = {
    DesignAutomationURI,
    AuthenticationClient,
    DataManagementClient,
    ModelDerivativeClient,
    BIM360Client,
    DesignAutomationClient
};