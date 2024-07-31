import { error } from "console"
import * as fs from "fs"

// fs.mkdir("c:\\nodejs", (error) => {
//     if (error) throw error
//     console.log("Directory Created..");
// })

fs.mkdir("c:\\nodejs", function namw(error) {
    if (error) throw error
    console.log("Directory Created..");
})

