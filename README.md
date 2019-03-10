# JSON Schema usage and problems

Public forum to collect real world schemas and to discuss JSON Schema specification problems


## Problems

For JSON Schema authors and users, particularly those who are just starting to use JSON Schema, the specification is quite confusing. Validators, while complying with the spec, often produce the results that surprise users - ignored unknown keywords, type is not enforced, properties are optional, etc.

For validator maintainers, the current draft-07 of the JSON Schema specification is already quite difficult to implement ([See test of compliance of JS validators with the specification][1]). The upcoming draft-08 includes additional features that further increase implementation complexity.

For tool maintainers, JSON Schema presents further challenges that have been partially addressed in OpenAPI version of the specification, but having two different versions of JSON Schema also creates additional problems for the users.


## Objective

This repository objective is to have a dialogue about what JSON schemas - schemas for JSON documents - look like in real life and how JSON Schema specification could change to be easier to adopt and use and to become an IETF standard - a requirement for enterprise adoption.

We would like to get input from all JSON Schema users:
- schema users
- schema authors
- tool maintainers (forms, code-generation, etc.)
- validator maintainers
- OpenAPI specification maintainers

We would like to learn:
- what specific schemas you use in real life - the objective is to collect 100+ of real world schemas, both used in other standards, libraries and in real life applications.
- what all JSON Schema users see as the specification problems.
- what solutions could solve these problems.


## We need your help

#### Submit your problems

If you have problems or ideas about using JSON Schema, please submit an issue to this repository explaining both the issue and what you think is the right solution. Ideally, it would be an issue related to the problem of the specification itself, rather than any specific library that implements JSON Schema, but if you are not sure - please submit it anyway.


#### Submit your schemas

We would greatly appreciate if you could submit the schemas that you use in real life (without any confidential information) and, optionally, example(s) that are valid against your schema.


## References

[1]: https://github.com/epoberezkin/test-validators "All JS validators do not comply with the spec"


## License

[MIT](https://github.com/epoberezkin/json-schema-usage-problems/blob/master/LICENSE)
