/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost
 Source Database       : wechar_news

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : utf-8

 Date: 01/20/2019 22:34:37 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('40', '会飞的煤气罐', '463961434@qq.com', '$2b$10$nHvdJmyhnMOOAxtnfngUFuFpcMDLul2LRAA6VmU43LS5DpRzxvh4K', 'http://q1.qlogo.cn/g?b=qq&nk=463961434@qq.com&s=100', '2019-01-16 16:36:32'), ('41', '王富贵', '1792600017@qq.com', '$2b$10$rdqipM1/Eu./5tVbz2cVKOf5XKmmwNctHoD9DB5srFOa62pDWfSIK', 'http://q1.qlogo.cn/g?b=qq&nk=1792600017@qq.com&s=100', '2019-01-17 21:57:18'), ('42', '傻逼弟弟', '1270587121@qq.com', '$2b$10$WZQzeua87piCy5oB0IDuOuM53VnfwHeUcQCzuaJo/2GJiTiL35nQS', 'http://q1.qlogo.cn/g?b=qq&nk=1270587121@qq.com&s=100', '2019-01-17 22:04:47'), ('43', '傻逼玩意', '806579513@qq.com', '$2b$10$OxFrvPjFNJV5cOrdgyjT5u4kHdnVmMXP7qmYxbp0vZycxUTYZ.Exe', 'http://q1.qlogo.cn/g?b=qq&nk=806579513@qq.com&s=100', '2019-01-17 22:05:11'), ('44', '高育良', '33433754@qq.com', '$2b$10$FxOtRzTrsZM94HFBJNVsfuS6UxDznz6E8t6Huqb7FR.R4qLlLlKB6', 'http://q1.qlogo.cn/g?b=qq&nk=33433754@qq.com&s=100', '2019-01-17 22:05:54'), ('45', '米斯特龙', '825156638@qq.com', '$2b$10$0ZbugiJoOyf0b.gSWAElcu7WVSau.SWxJCTUI2JeCSZ.p5kQlKrhW', 'http://q1.qlogo.cn/g?b=qq&nk=825156638@qq.com&s=100', '2019-01-17 22:07:32');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
