// @ts-check

const config = {
    endpoint: "https://amcosmosdemo-0.documents.azure.com:443/",
    key: "HpwFYwpD0quEu9JK2eI8ATlTQtKeu1sUpLNYp1l6Mu3XCF5FwesHyVVl1MIfXRKCnT0e6ftmqbvWv1Hrwsyxiw==",
    databaseId: "Tasks",
    containerId: "Items",
    partitionKey: { kind: "Hash", paths: ["/category"] }
  };
  
  module.exports = config;
  