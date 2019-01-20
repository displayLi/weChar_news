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

 Date: 01/20/2019 22:34:23 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `base_url`
-- ----------------------------
DROP TABLE IF EXISTS `base_url`;
CREATE TABLE `base_url` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Records of `base_url`
-- ----------------------------
BEGIN;
INSERT INTO `base_url` VALUES ('80', '', '//192.168.8.134:8080/public/vs_bg.jpg,//192.168.8.134:8080/public/vscode_bg.jpeg', '会飞的煤气罐', '40', 'http://q1.qlogo.cn/g?b=qq&nk=463961434@qq.com&s=100', '2019-01-19 00:06:26'), ('81', '', '//192.168.8.134:8080/public/vs_bg.jpg', '会飞的煤气罐', '40', 'http://q1.qlogo.cn/g?b=qq&nk=463961434@qq.com&s=100', '2019-01-19 00:06:32'), ('82', '', '//192.168.8.134:8080/public/vscode_bg.jpeg', '会飞的煤气罐', '40', 'http://q1.qlogo.cn/g?b=qq&nk=463961434@qq.com&s=100', '2019-01-19 00:06:39'), ('83', 'hello world ', '//192.168.8.134:8080/public/vscode_bg.jpeg', '会飞的煤气罐', '40', 'http://q1.qlogo.cn/g?b=qq&nk=463961434@qq.com&s=100', '2019-01-19 18:30:37'), ('84', 'Goods ', '//192.168.8.134:8080/public/7EC7F236-4964-4E01-A592-3AB9C25F6FB4.jpeg', '会飞的煤气罐', '40', 'http://q1.qlogo.cn/g?b=qq&nk=463961434@qq.com&s=100', '2019-01-20 14:00:37');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
