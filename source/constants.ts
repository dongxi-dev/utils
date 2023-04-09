// 正则

// 网络 IPv4 地址
// 网络 IPv6 地址

// 中国内地手机号码

// 中国内地座机号码

// 中国内地邮政编码

// 中国居民身份证号码

// 中国民车牌号

// 中国内地用户主流邮箱地址 qq.com 163.com 126.com 139.com foxmail.com gmail.com outlook.com icloud.com

// 网站地址

// 迅雷链接
// URL 地址正则

// 软件版本号

// 通用邮箱地址

// HTML 注释

// 图片文件格式（后缀）

// 视频文件格式（后缀）

// 音频文件格式（后缀）

// 图片文件名

// 视频文件名

// 音频文件名

/**
 * 文件名
 */

// 文件夹名称

// GUID/UUID

// 简体中文汉字以及标点符号

// 繁体中文汉字以及标点符号正则
export const TRADITIONAL_CHINESE_RULE = /^[\u4e00-\u9fa5，。、；：？！「」『』【】《》（）［］｛｝]+$/;


/**
 * 小数
 * @example 0.1 -0.1 1.0 -1.0 1.23 -1.23
 */
export const DECIMAL_RULE = /^-?\d+(\.\d+)?$/;


/**
 * 整数
 * @example 0 1 2 3 -1 -2 -3
 */
export const INTEGER_RULE = /^-?\d+$/;


/**
 * QQ 号；5 至 11 位数字
 * @example 153583876 305384014
 */
export const QQ_RULE = /^[1-9][0-9]{4,10}$/;

/**
 * 微信号；6 至 20 位；字母、数字、减号、下划线组合；以字母开头
 * @example jiluo-cc
 */
export const WE_CHAT_RULE = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;

/**
 * CSS 颜色值（16 进制）；支持 3 位或 6 位
 * @example #fff #ffffff
 */
export const CSS_COLOR_RULE = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;


/**
 * URL 地址
 */
export const URL_RULE = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;


// 域名（不包含非英文域名）
export const DOMAIN_RULE = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;


/**
 * 空函数
 * @example const onClick = NOOP
 */
export const NOOP = (...params: unknown[]) => {};

/**
 * 空值 undefined
 * @example const data = ref(EMPTY)
 */
export const EMPTY = undefined;
