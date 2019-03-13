# JSON Schema usage and problems

[![Build Status](https://travis-ci.org/epoberezkin/json-schema-usage-problems.svg?branch=master)](https://travis-ci.org/epoberezkin/json-schema-usage-problems)

A public forum for collecting real-world schemas and discussing problems with the JSON Schema specification.


## Objective

The objective of this repo is to have a dialogue about what JSON Schemas -- schemas for JSON documents -- look like in real life, and how the JSON Schema spec could improve.

We would like to get input from the entire JSON Schema community:

- Schema users
- Schema authors
- Tool maintainers (forms, code-generation, etc.)
- Validator maintainers
- OpenAPI specification maintainers

We would like to learn:

- What specific schemas you use in real life -- the objective is to collect 100+ real-world schemas used in libraries, applications, or other standards.
- What JSON Schema users see as problems with the current specification.
- What changes to JSON Schema could resolve these problems.

## We need your help

### Submit your problems

If you have problems or ideas about using JSON Schema, please submit an issue to this repository explaining both the issue and what you think is the right solution.

### Submit your schemas

We would greatly appreciate if you could submit the schemas that you use in real life (without any confidential information) and, optionally, an example that is valid against your schema.

Please submit a PR with the schema (and a valid example, if you have it) by creating a new folder in inside the [`real-schemas`][1] directory of this repo. You can use JSON, YAML, or JavaScript.

[1]: https://github.com/epoberezkin/json-schema-usage-problems/tree/master/real-schemas


## License

[MIT](https://github.com/epoberezkin/json-schema-usage-problems/blob/master/LICENSE)
