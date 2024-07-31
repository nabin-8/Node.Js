import * as fs from "fs/promises"

// Creating Directory

// try {
//     await fs.mkdir('a:\\nodejs\\hello', { recursive: true })
//     console.log("Folder created");
// } catch (error) {
//     console.log(error);
// }



// Read content of that folder
// try {
//     const files = await fs.readdir("c:\\nodejs")
//     for (const file of files) {
//         console.log(file);
//     }
//     // console.log("Folder created");
// } catch (error) {
//     console.log(error);
// }

// Remove a directory
// to delete directory it should empty
// try {
//     await fs.rmdir("c:\\nodejs")
//     console.log("Folder Deleted successfully...");
// } catch (error) {
//     console.log(error);
// }


// Create and write file
// try {
//     await fs.writeFile("README.md", "# Hello Nodejs")
//     console.log("File Created successfully..");
// } catch (error) {
//     console.log(error);
// }


// Reading the file
// try {
//     const data = await fs.readFile('README.md', 'utf-8')
//     console.log(data);
//     // console.log("File Created successfully..");
// } catch (error) {
//     console.log(error);


// Reading the file
// try {
//     await fs.appendFile('README.md', "javascript")
//     console.log("File Append successfully..");
// } catch (error) {
//     console.log(error);
// }

// Coping the file
// try {
//     await fs.copyFile('README.md', "info.txt")
//     console.log("File copy successfully..");
// } catch (error) {
//     console.log(error);


// Coping the file
try {
    const info = await fs.stat("info.txt")
    // console.log(info);
    console.log(info.isDirectory());
    console.log(info.isFile);
} catch (error) {
    console.log(error);
}