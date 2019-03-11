# JSON Schema usage and problems

[![Build Status](https://travis-ci.org/epoberezkin/json-schema-usage-problems.svg?branch=master)](https://travis-ci.org/epoberezkin/json-schema-usage-problems)

This repo is a public forum for collecting real-world schemas and discussing
problems with the JSON Schema specification.

## Problems

At a high level, JSON Schema has three big problems:

* **Bad default behavior.** For JSON Schema authors and users, particularly
  those new to JSON Schema, the spec is very confusing and surprising. Some
  particularly bad defaults are:

  1. Keywords that are specific to particular data types, like `items` or
    `properties`, are *ignored* if the inputted data isn't of the relevant data
    type.
  2. The `properties` keyword is actually about optional properties. To make a
     property be required, you have to use the `required` keyword in combination
     with `properties`. This also means you must give the name of the property
     twice, and forgetting or mistyping a property name at either location will
     lead to surprising results.
  3. If you're using a JSON object as a dictionary (e.g. where the keys are IDs,
    and the values are user objects), you can only validate that using
    `additionalProperties`, and you must be careful to not use `properties` or
    `patternProperties`, otherwise `additionalProperties` will sometimes be
    ignored.
  4. And much more.

* **Difficulty of implementation.** The current draft of JSON Schema, known as
  draft-07, is very difficult to implement. Through testing, we have determined
  that [no two implementations of JSON Schema seem to resolve `$ref` in the same
  way][1]. In draft-07, there are *34* keywords to support, and draft-08 will
  add even more.

* **Differing specs.** Because JSON Schema is complex while also failing to
  address real-world needs, the OpenAPI project uses their own flavor of JSON
  Schema. Usually, this means that users can't re-use their OpenAPI schemas with
  libraries supporting "vanilla" JSON Schema.

## Objective

The goal of this repo is to have a dialogue about what JSON Schemas -- schemas
for JSON documents -- look like in real life, and how the JSON Schema spec could
better serve those real-world needs. Part of this dicussion is around how the
spec could become ready for IETF standardization, because this is a requirement
for enterprise adoption.

We would like to get input from the entire JSON Schema community:

- Schema users
- Schema authors
- Tool maintainers (forms, code-generation, etc.)
- Validator maintainers
- OpenAPI specification maintainers

We would like to learn:

- What specific schemas you use in real life -- the objective is to collect 100+
  real-world schemas used in libraries, applications, or other standards.
- What JSON Schema users see as problems with the current specification.
- What solutions could resolve these problems.

## We need your help

### Submit your problems

If you have problems or ideas about using JSON Schema, please submit an issue to
this repository explaining both the issue and what you think is the right
solution.

### Submit your schemas

We would greatly appreciate if you could submit the schemas that you use in real
life (without any confidential information) and, optionally, example(s) that are
valid against your schema.

Please submit a PR with the schema (and a valid example, if you have it) by
creating a new folder in inside the [`real-schemas`][2] directory of this repo.
You can use JSON, YAML, or JavaScript.

[2]: https://github.com/epoberezkin/json-schema-usage-problems/tree/master/real-schemas

## References

[Test of compliance of JS validators with the specification][1]

[1]: https://github.com/epoberezkin/test-validators "All JS validators do not comply with the spec"


## License

[MIT](https://github.com/epoberezkin/json-schema-usage-problems/blob/master/LICENSE)
