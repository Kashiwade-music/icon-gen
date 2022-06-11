const icongen = require("icon-gen")
const fs = require("fs")
const path = require("path")

const genIco = (configPath) => {
    const CONFIG = require(configPath)
    let svgPathList = []
    fs.readdir(CONFIG.inputDirPath, { withFileTypes: true }, (err, dirents) => {
        if (err) throw err;
        for (const dirent of dirents) {
            const fp = path.join(CONFIG.inputDirPath, dirent.name);
            if (!dirent.isDirectory() && /.*\.svg$/.test(fp)) {
                svgPathList.push(fp)
            }
        }
        svgPathList.forEach((pt) => {
            const options = { report: true, ico: { name: path.basename(pt, ".svg") } }
            icongen(pt, CONFIG.outputDirPath, options)

        })
    });

}

genIco(process.argv[2])