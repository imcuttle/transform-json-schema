/**
 * @file prettier
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
import prettier from './prettier.bundle'


module.exports = function(text, opt) {
  return prettier.format(text, {
    parser: 'babylon',
    ...opt
  })
}
