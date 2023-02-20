import fs from 'fs';
import CFG from './project.cfg.js';
import { findFiles } from '@jam-do/jam-tools/node/index.js';

/**
 * 
 * @param {String} dirPath 
 */
function checkDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, {
      recursive: true,
    });
  }
}

/**
 * 
 * @param {String} path 
 */
function fmtPath(path) {
  if (path && !path.startsWith('.')) {
    path = './' + path;
  }
  return path;
}

/**
 * 
 * @param {String} path 
 * @returns {Promise<String>}
 */
async function impWa(path) {
  let result = null;
  path = fmtPath(path);
  if (path.includes('/index.js')) {
    result = fs.readFileSync(path).toString();
  } else {
    try {
      let str = (await import(path)).default;
      if (str.constructor === Function) {
        str = str();
      }
      result = str;
    } catch (e) {
      console.log('WRONG WA PATH: ' + path);
    }
  }
  return result;
}

/**
 * 
 * @param {String} indexPath 
 */
 async function processIndex(indexPath) {
  let indexSrc = await impWa(indexPath);
  if (!indexSrc) {
    return;
  }
  let outPath = fmtPath(indexPath);
  if (!outPath.includes('index.js')) {
    outPath = outPath.replace('.js', '');
  }
  outPath = outPath.replace(fmtPath(CFG.sourceFolder), fmtPath(CFG.outputFolder));
  checkDir(outPath.split('index.')[0]);
  fs.writeFileSync(outPath, indexSrc);
}

export function build() {
  let indexArr = findFiles(CFG.sourceFolder, ['index.', '.js'], []);
  console.log(indexArr);
  indexArr.forEach((indexPath) => {
    processIndex(indexPath);
  });
}

build();