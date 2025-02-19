console.log('Welcome to Module-2 File')
const studentInfo = () => {
    console.log('Im a student info module')
    return 'hello Hi'
}
var x = 'LaxmiPrasanna'
module.exports = { fun1: studentInfo, x: x }