import prettier from 'prettier/esm/standalone.mjs'
import tsParser from 'prettier/esm/parser-typescript.mjs'


module.exports = function(text, opt) {
  return prettier.format(text, {
    parser: 'typescript',
    ...opt,
    plugins: [tsParser]
  })
}
