const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-451795.okta.com',
  token: '00llm8coNAm4RATiFc--r-LH0OaHuKJc2q1cIK3FQD'
});

module.exports = client;