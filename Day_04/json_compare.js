/*##################################################
Here Using lodash Library and Installed by npm
####################################################
*/

var  _ = require('lodash');
var obj1 = {name:"Person 1",age:5}
var obj2 = {age:5, name:"Person 1"}

console.log(_.isEqual(obj1,obj2));

/* ############# OUTPUT ##############
    true
 */
