# savings-bond-value-file-parser

[![dependencies][deps-image]][deps-url]
[![devDependencies][depsdev-image]][depsdev-url]

> Reads savings bond value file, transforms it, outputs JSON.

## Getting Started

```
$ git clone https://github.com/wyze/savings-bond-value-file-parser.git
$ cd savings-bond-value-file-parser
$ npm install
$ npm start
```

## Usage

- Place all value files (`.asc`) into [src/data](src/data) folder.
- Run `npm start` and view output in `out` directory.

## More Information

- [Download Value Files](https://www.treasurydirect.gov/indiv/tools/tools_savingsbondvalues.htm)
- [File Specification](http://www.treasurydirect.gov/indiv/tools/tools_savingsbondvalues_specifications.htm)

## License

Copyright © 2016 [Neil Kistner](//github.com/wyze)

Released under the MIT license. See [license](license) for details.

[deps-image]: https://img.shields.io/david/wyze/savings-bond-value-file-parser.svg?style=flat-square
[deps-url]: https://david-dm.org/wyze/savings-bond-value-file-parser

[depsdev-image]: https://img.shields.io/david/dev/wyze/savings-bond-value-file-parser.svg?style=flat-square
[depsdev-url]: https://david-dm.org/wyze/savings-bond-value-file-parser#info=devDependencies
