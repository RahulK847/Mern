// 'const' variable (cannot be reassigned)
const accountId = 144553 

// 'let' allows reassignment
let accountEmail = "Rahul@google.com"

// 'var' (not recommended due to scope issues)
var accountPassword = "12345"

// Implicit global variable (avoid this practice)
accountCity = "Patna"

// Declared but undefined variable
let accountState;

// ❌ accountId = 2 // Not allowed (const cannot be reassigned)

// Updating values
accountEmail = "JOB@givemejob.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// Logging values
console.log(accountId);

// ❌ Avoid 'var' due to block & functional scope issues

// Display values in table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
