Feature: Default Aggregate Facets 
Background: 
* url searchserviceURL

@Aggs_noFilter
Scenario: Get Aggregates with no filter
And request read('Default_Aggs.json')
When method post
Then status 200

@Aggs_SingleObjectType
Scenario: Get Aggregates with one single object type filter - criteria
* def defaultReq = read('Default_Aggs.json')
* set defaultReq.criteria.objectTypeId = ["11"]
And request defaultReq
When method post
Then status 200
