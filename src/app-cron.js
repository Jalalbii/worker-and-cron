//      *    *    *    *    * 
//      ┬    ┬    ┬    ┬    ┬
//      │    │    │    │    │
//      │    │    │    │    └──── Day of the Week (0 - 7) (Sunday = 0 or 7)
//      │    │    │    └───────── Month (1 - 12)
//      │    │    └────────────── Day of the Month (1 - 31)
//      │    └─────────────────── Hour (0 - 23)
//      └──────────────────────── Minute (0 - 59)

const cron = require("node-cron")

cron.schedule('* * * * *', () => {
    console.log('Task running...')
})