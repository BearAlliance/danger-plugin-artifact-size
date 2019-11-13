# danger-plugin-artifact-size

[![Build Status](https://travis-ci.org/bearalliance/danger-plugin-artifact-size.svg?branch=master)](https://travis-ci.org/bearalliance/danger-plugin-artifact-size)
[![npm version](https://badge.fury.io/js/danger-plugin-artifact-size.svg)](https://badge.fury.io/js/danger-plugin-artifact-size)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Generates a markdown table summary of the size of your build artifacts

## Usage

Install:

```sh
npm install --save-dev danger-plugin-artifact-size
```

At a glance:

```js
// dangerfile.js
import artifactSize from 'danger-plugin-artifact-size'

artifactSize();
```

This plugin:
- Generates a markdown table of 

## Changelog

See the GitHub [release history](https://github.com/bearalliance/danger-plugin-artifact-size/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
