const accountId = 14433  // no longer be changed
let accountEmail = "ammu@gmail.com"
var accountPassword = "12345"   // var and let both can be changed. B
accountCity = "Hyderabad"
let accountState;


// accountId = 2     not Allowed
 


accountEmail = "am@am.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and function scope


var can be redeclared but let cannot redeclare means 
two times declaring not two times assigning the value
*/

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])


