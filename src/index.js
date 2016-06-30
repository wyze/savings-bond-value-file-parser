import { readFile, readdir } from 'fs'
import mappings from './mappings'
import pify from 'pify'
import writeJsonFile from 'write-json-file'

const path = './src/data'

pify(readdir)(path)
  .then(files =>
    files.forEach(file =>
      pify(readFile)(`${path}/${file}`)
        .then(contents =>
          writeJsonFile(
            `./out/${file.split('.').shift()}.json`,
            contents
              // Converts Buffer to String
              .toString()
              // Converts the String to Array of Strings
              .split('\r\n')
              // Removes the last, empty, item of the array
              .slice(0, -1)
              // Converts the lines into JSON object
              .map(line =>
                mappings.reduce(
                  ( acc, { key, position: { end, start }, transform } ) => {
                    const part = line.slice(start, end)

                    return {
                      ...acc,
                      // Conditionally call transform function from the mapping
                      [key]: transform ? transform(part) : part,
                    }
                  },
                  {}
                )
            ),
            { indent: 2 }
          )
        )
    )
  )
