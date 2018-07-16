#!/usr/bin/env node


/**
 *****************************************
 * Created by lifx
 * Created on 2018-07-13 10:09:02
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
const
    yargs = require('yargs'),
    { zip, unzip } = require('@arted/utils/zip'),
    { error } = require('@arted/utils/stdout');


/**
 *****************************************
 * 定义任务
 *****************************************
 */
async function run() {
    let argv = yargs.boolean('x').argv;

    // 判断操作类型
    if (argv.x) {
        let src = argv.src || argv._[0] || 'src.zip',
            dist = argv.dist || argv._[1] || src.replace(/\.zip$/, '');


        // 执行解缩
        await unzip(src, dist);
    } else {
        let src = argv.src || argv._[0] || 'src',
            dist = argv.dist || argv._[1] || src + '.zip';

        // 执行压缩
        await zip(src, dist);
    }
}


/**
 *****************************************
 * 启动任务
 *****************************************
 */
module.exports = run().catch(error);
