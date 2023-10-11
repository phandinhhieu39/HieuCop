-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 11, 2023 at 12:54 PM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phandinhhieu`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

DROP TABLE IF EXISTS `db_brand`;
CREATE TABLE IF NOT EXISTS `db_brand` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) DEFAULT NULL,
  `metakey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `sort_order`, `description`, `metakey`, `metadesc`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(6, 'ROLS-ROYCE', 'ROLS-ROYCE', '', 0, NULL, 'sad', 'sad', '2023-06-14 06:37:52', 1, '2023-06-14 06:37:52', NULL, 1),
(5, 'LAMBORGHINI', 'LAMBORGHINI', '', 0, NULL, 'sad', 'sad', '2023-06-14 06:37:52', 1, '2023-06-14 06:37:52', NULL, 1),
(1, 'FERRARI', 'FERRARI', '', 0, NULL, 'sad', 'sad', '2023-06-14 06:37:52', 1, '2023-06-14 06:37:52', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

DROP TABLE IF EXISTS `db_category`;
CREATE TABLE IF NOT EXISTS `db_category` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int UNSIGNED DEFAULT '0',
  `sort_order` int UNSIGNED DEFAULT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `metakey` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metadesc` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `description`, `metakey`, `metadesc`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(23, 'Ferrari', 'ferrari', 'sadfg.jpg', 0, 0, NULL, 'Ferrari', 'Ferrari', '2023-06-14 06:37:23', 1, '2023-06-15 23:10:54', 1, 1),
(25, 'Rolls-Royce', 'rolls-royce', 'sadfg.jpg', 0, 0, NULL, 'Rolls-Royce', 'Rolls-Royce', '2023-06-16 04:54:17', 1, '2023-06-28 03:44:06', 1, 1),
(26, 'Lamborghini', 'lamborghini', 'sadfg.jpg', 0, 0, NULL, 'Lamborghini', 'Lamborghini', '2023-06-16 05:09:16', 1, '2023-06-28 03:42:57', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_config`
--

DROP TABLE IF EXISTS `db_config`;
CREATE TABLE IF NOT EXISTS `db_config` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  `created_by` int NOT NULL,
  `updated_by` int NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

DROP TABLE IF EXISTS `db_contact`;
CREATE TABLE IF NOT EXISTS `db_contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user id` int UNSIGNED DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `replay_id` int UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `user id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, NULL, 'ádsadf', 'sdafsaf', 'àdsafasf', NULL, NULL, NULL, '2023-06-08 23:23:24', '2023-06-09 00:12:52', 0, 1, 1),
(2, NULL, 'd', 'd', '1', '1', '1', NULL, '2023-06-14 06:27:14', '2023-06-14 06:27:14', 0, NULL, 1),
(3, NULL, 'd', 'd', '1', '1', '1', NULL, '2023-06-14 06:27:14', '2023-06-14 06:27:14', 0, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

DROP TABLE IF EXISTS `db_menu`;
CREATE TABLE IF NOT EXISTS `db_menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int DEFAULT NULL,
  `table_id` int UNSIGNED DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `sort_order`, `table_id`, `type`, `position`, `parent_id`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Trang chủ', '/', NULL, NULL, 'dsf', 'mainmenu', 0, '2023-06-09 00:23:20', 1, '2023-06-28 03:45:42', 1, 1),
(2, 'Sản phẩm', '/san-pham', NULL, NULL, 'sà', 'mainmenu', 0, '2023-06-09 00:24:27', 1, '2023-06-09 00:24:27', 1, 1),
(5, 'Liên hệ', '/lien-he', NULL, NULL, 'sà', 'mainmenu', 0, '2023-06-17 01:21:46', 1, '2023-06-09 00:24:27', 1, 1),
(6, 'Danh Mục Theo Loại', '/danh-muc-san-pham', NULL, NULL, 'sà', 'mainmenu', 0, '2023-06-17 03:35:28', 1, '2023-06-09 00:24:27', 1, 1),
(7, 'Ferrari', '/danh-muc-san-pham/ferrari', NULL, NULL, 'sà', 'mainmenu', 6, '2023-06-17 03:36:47', 1, '2023-06-09 00:24:27', 1, 1),
(8, 'Rolls-Royce', '/danh-muc-san-pham/rolls-royce', NULL, NULL, 'sà', 'mainmenu', 6, '2023-06-17 03:53:06', 1, '2023-06-09 00:24:27', 1, 1),
(9, 'Lamborghini', '/danh-muc-san-pham/lamborghini', NULL, NULL, 'sà', 'mainmenu', 6, '2023-06-17 04:00:56', 1, '2023-06-09 00:24:27', 1, 1),
(3, 'Giới thiệu', '/gioi-thieu', NULL, NULL, 'Giới thiệu', 'mainmenu', 0, '2023-09-28 03:26:15', 1, '2023-09-28 03:26:15', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

DROP TABLE IF EXISTS `db_order`;
CREATE TABLE IF NOT EXISTS `db_order` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `user id` int DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user id`, `name`, `phone`, `email`, `address`, `gender`, `note`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(6, NULL, 'sfsfsa', NULL, NULL, NULL, NULL, '23', '2023-06-14 07:27:56', '2023-06-14 07:28:18', NULL, 1, 1),
(7, NULL, 'fsadf', '1234', 'hiêu', 'sàgdfgh', NULL, '3243', '2023-06-14 07:28:39', '2023-06-14 07:28:39', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

DROP TABLE IF EXISTS `db_orderdetail`;
CREATE TABLE IF NOT EXISTS `db_orderdetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `price` float NOT NULL,
  `qty` int UNSIGNED NOT NULL,
  `amount` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

DROP TABLE IF EXISTS `db_post`;
CREATE TABLE IF NOT EXISTS `db_post` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `topic_id` int UNSIGNED DEFAULT NULL,
  `title` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `detail` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metakey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metadesc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_post`
--

INSERT INTO `db_post` (`id`, `topic_id`, `title`, `detail`, `image`, `type`, `metakey`, `metadesc`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(8, 13, 'Những thiết kế thân xe, khung gầm và các thành phần của chiếc siêu xesiêu xe này là kết quả của hệ thống sản xuất thích ứng phân kỳ độc quyền. Hệ thống có khả năng sử dụng các vật liệu kim loại hoặc hợp kim khác nhau để tạo ra một thành phần có thể in 3D , được thiết kế độc quyền bởi trí tuệ nhân tạo.  Siêu xe sử dụng động cơ hybrid có công suất 1.233 mã lực, tăng tốc từ 0 - 100 km/h trong 1,9 giây. Trên thế giới, rất ít xe có khả năng tăng tốc chỉ trong thời gian ngắn như vậy. Tốc độ tối đa của chiếc siêu xe này lên tới trên 400 km/giờ.', 'd', 'dsa.jpg', 'post', 't', 'd', '2023-06-29 23:55:43', 1, '2023-06-29 23:55:43', NULL, 1),
(10, 13, 'Siêu xe khác biệt với xe thông dụng hay các xe thể thao thường ở các điểm sau:  Xe gia tăng tốc độ rất nhanh. Có tốc độ tối đa rất cao. Sử dụng các công nghệ hiện đại. Rất đắt tiền. Tiền tu bổ cũng rất cao. Chỉ sản xuất một số nhỏ.Hệ thống có khả năng sử dụng các vật liệu kim loại hoặc hợp kim khác nhau để tạo ra một thành phần có thể in 3D, được thiết kế độc quyền bởi trí tuệ nhân tạo.Xe gia tăng tốc độ rất nhanh.Chỉ sản xuất một số nhỏ.Trên thế giới, rất ít xe có khả năng tăng tốc chỉ trong thời gian ngắn như vậy.', 'ád', 'ádad.jpeg', 'ádasd', '1', '2', '2023-06-30 00:35:56', 1, '2023-06-30 00:35:56', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

DROP TABLE IF EXISTS `db_product`;
CREATE TABLE IF NOT EXISTS `db_product` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` int UNSIGNED NOT NULL,
  `brand_id` int UNSIGNED NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float DEFAULT NULL,
  `pricesale` float DEFAULT NULL,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qty` int UNSIGNED NOT NULL,
  `detail` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metakey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `pricesale`, `image`, `qty`, `detail`, `metakey`, `metadesc`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(17, 26, 5, 'Lamborghini Huracan LP610-4', 'lamborghini-huracan-lp610-4', 0, 5000000, 'lamborghini-huracan-lp610-4.jpg', 5, 'Siêu xe thể thao Lamborghini Huracan STO (viết tắt của Super Trofeo Omologata) là phiên bản hợp pháp chạy trên phố của dòng xe Lamborghini Huracan, Italia.', 'Huracan', 'Siêu xe thể thao Lamborghini Huracan STO (viết tắt của Super Trofeo Omologata) là phiên bản hợp pháp chạy trên phố của dòng xe Lamborghini Huracan, Italia.', '2023-06-28 03:50:02', 1, '2023-06-28 03:50:02', NULL, 1),
(15, 26, 1, 'Lamborghini Aventador SVJ', 'lamborghini-aventador-svj', 12, 100000, 'lamborghini-aventador-svj.jpg', 3, 'Lamborghini', 'Lamborghini', 'Lamborghini  SVJ', '2023-06-15 22:32:58', 1, '2023-06-15 22:32:58', NULL, 1),
(18, 26, 1, 'Lamborghini Urus', 'lamborghini-urus', 0, 6000000, 'lamborghini-urus.jpg', 5, 'Lamborghini Urus is the first Super Sport Utility Vehicle in the world, merging the soul of a super sports car with the practical functionality of an SUV. Powered by Lamborghini’s 4.0-liter twin-turbo V8 engine, the Urus is all about a performance mindset that brings together fun-to-drive and astounding vehicle capabilities. The design, performance, driving dynamics and unbridled emotion flow effortlessly into this visionary realization of authentic Lamborghini DNA.', 'Lamborghini Urus', NULL, '2023-06-15 22:46:53', 1, '2023-06-15 22:46:53', NULL, 1),
(19, 26, 1, 'McLaren 570S', 'mclaren-570s', 0, 7000000, 'mclaren-570s.jpg', 4, 'It’s the ultimate sports car experience. Completely driver-centric and performance oriented, the McLaren 570S Coupé is equally at home on the track as it is on the open road. The McLaren 570S is the lightest sportscar in its class and has the highest power to weight ratio, it delivers super car punch and thrills that would shame many more expensive rivals.', 'McLaren 570S', 'null', '2023-06-15 22:50:16', 1, '2023-06-15 22:50:16', NULL, 1),
(20, 26, 1, 'McLaren 720S', 'mclaren-720s', 0, 8000000, 'mclaren-720s.jpg', 5, 'The McLaren 720S coupe is purposeful and radical. With apex predator responses. This light and strong supercar accelerates from 0-60mph in an incredible 2.8 seconds when provoked. And can cover a quarter of a mile in 10.4 seconds. From a standing start.', 'McLaren 720S', NULL, '2023-06-15 22:51:33', 1, '2023-06-15 22:51:33', NULL, 1),
(21, 26, 1, 'McLaren 765LT', 'mclaren-765lt', 0, 5000000, 'mclaren-765lt.jpg', 5, 'At McLaren, we do not fear the unknown. We do not fear the challenge. The new McLaren 765LT has a legend to live up to: Longtail. Every car that’s carried this name has been unique. Extreme and utterly focused around the driver. All about maximum engagement. Searing performance. Sensational handling.', 'McLaren 765LT', NULL, '2023-06-15 22:52:53', 1, '2023-06-15 22:52:53', NULL, 1),
(22, 26, 1, 'McLaren 720S Spider', 'mclaren-720s-spider', 0, 6000000, 'mclaren-720s-spider.jpg', 4, 'Phiên bản mui trần McLaren 720s Spider ra mắt tại sự kiện McLaren Winter Ball tháng 12 năm 2018, tức là hơn 1 năm sau màn ra mắt của 720s Coupe. Thiên về thời trang hơn là hiệu năng thể thao, chiếc 720s Spider nặng hơn bản Coupe bởi cấu trúc mui phức tạp cùng nhiều tiện nghi hơn. Đối thủ trên thị trường của McLaren 720s Spider là Ferrari 488 Spider.', 'McLaren 720S Spider', NULL, '2023-06-15 22:56:31', 1, '2023-06-15 22:56:31', NULL, 1),
(23, 26, 1, 'McLaren Senna', 'mclaren-senna', 0, 9000000, 'mclaren-senna.jpg', 3, 'McLaren Senna là dòng siêu xe thể thao (super Sports car) của thương hiệu xe hơi McLaren, Anh Quốc. Ra mắt chính thức tại 2018 Geneva Motor Show, Senna là sự bổ xung cho dòng Ultimate Series và có số lượng sản xuất hạn chế chỉ 500 chiếc.', 'McLaren Senna', NULL, '2023-06-15 22:57:58', 1, '2023-06-15 22:57:58', NULL, 1),
(25, 23, 2, 'Ferrari Portofino M', 'ferrari-portofino-m', 0, 4000000, 'ferrari-portofino-m.jpg', 3, 'Về kiểu dáng tổng thể, Portofino M vẫn giữ những đường nét đặc trưng của dòng xe grand tourer (GT) mui trần của Ferrari, vốn đã xuất hiện trên mẫu California ra mắt từ năm 2008. Mui xe có thể đóng/mở bằng một nút bấm với thời gian 14 giây', 'Ferrari Portofino M', NULL, '2023-06-15 23:13:50', 1, '2023-06-15 23:13:50', NULL, 1),
(26, 23, 2, 'Ferrari 488 GTB', 'ferrari-488-gtb', 0, 5000000, 'ferrari-488-gtb.jpeg', 3, 'Có thể nói Ferrari 488 GTB là siêu xe có số lượng nhiều nhất tại thị trường Việt Nam, thế nên chủ sở hữu đã nâng cấp với bản độ SVR tạo sự khác biệt.', 'Ferrari 488 GTB', 'null', '2023-06-15 23:15:53', 1, '2023-06-15 23:15:53', NULL, 1),
(27, 23, 2, 'Ferrari Portofino M', 'ferrari-portofino-m', 0, 6000000, 'ferrari-portofino-m.jpg', 2, 'Đây là chiếc Ferrari Portofino M đầu tiên được đưa về Việt Nam, xe thuộc đời xe 2022 mới nhất.', 'Ferrari Portofino M', 'null', '2023-06-15 23:17:41', 1, '2023-06-15 23:17:41', NULL, 1),
(28, 23, 2, 'Porsche 911 Targa 4', 'porsche-911-targa-4', 0, 7000000, 'porsche-911-targa-4.jpg', 2, 'Tiếp nối các phiên bản Coupe và Cabriolet, Porsche 911 Targa (992) đã được ra mắt từ tháng 08/2020. Hiện Porsche Việt Nam phân phối với 03 phiên bản: Porsche 911 Targa 4, Porsche 911 Targa 4S và Porsche Targa 4 GTS', 'Porsche 911 Targa 4', NULL, '2023-06-15 23:18:52', 1, '2023-06-15 23:18:52', NULL, 1),
(29, 23, 2, 'Aston Martin DB11', 'aston-martin-db11', 0, 6000000, 'aston-martin-db11.jpeg', 1, 'Aston Martin DB11 là dòng siêu xe thể thao GT hạng sang (Grand Tourer) của hãng xe sang Aston Martin, Anh Quốc. Ra mắt từ tháng 3/2016 tại triển lãm Geneva Motor Show 2016, DB11 thay thế cho DB9 trước đó. Nó cũng là sản phẩm đầu tay của sự hợp tác với tập đoàn Daimler AG.', 'Aston Martin DB11', NULL, '2023-06-15 23:20:26', 1, '2023-06-15 23:20:26', NULL, 1),
(30, 23, 2, 'Porsche 911 Carrera 4', 'porsche-911-carrera-4', 0, 9000000, 'porsche-911-carrera-4.jpg', 1, 'Porsche 911 Carrera 4', 'Porsche 911 Carrera 4', 'null', '2023-06-15 23:22:18', 1, '2023-06-15 23:22:18', NULL, 1),
(31, 23, 2, 'Ferrari 488 GTB', 'ferrari-488-gtb', 0, 9000000, 'ferrari-488-gtb.jpg', 1, 'Ferrari 488 có số lượng nhiều nhất với khoảng 20 chiếc đang lăn bánh với đầy đủ các biến thể gồm mui trần, Pista và coupe GTB chiếm đa số. Với sở thích cá nhân vẫn ưa kiểu dáng của Lamborghini hơn bởi dù sao nó mang hơi thở đường phố hơn là đậm chất đường đua của Ferrari.', 'Ferrari 488 GTB', NULL, '2023-06-15 23:24:45', 1, '2023-06-15 23:24:45', NULL, 1),
(32, 23, 2, 'Ferrari SF90 Stradale', 'ferrari-sf90-stradale', 0, 6000000, 'ferrari-sf90-stradale.jpeg', 2, 'Siêu xe SF90 Stradale đã công bố giá bán chính thức. Theo đó mức giá rẻ không ngờ đã làm bất ngờ cho tất cả mọi người. Tại Châu Âu, nó có mức giá khoảng 500 ngàn bảng. Tại Mỹ, SF90 Stradale niêm yết ở mức từ 625 ngàn USD.', 'Ferrari SF90 Stradale', NULL, '2023-06-15 23:27:15', 1, '2023-06-15 23:27:15', NULL, 1),
(33, 25, 3, 'Rolls-Royce Cullinan Black Badge', 'rolls-royce-cullinan-black-badge', 0, 985000, 'rolls-royce-cullinan-black-badge.jpeg', 2, 'Rolls-Royce Cullinan Black Badge 2022 thuộc thương hiệu Rolls-Royce (Anh). Đây là một dòng xe hơi hạng sang với thiết kế sang trọng, thu hút mọi ánh nhìn. Ngoài ra với nội thất khang trang, dòng xe này có thể mang đến cảm giác dễ chịu và đáp ứng nhu cầu cần thiết cho người dùng. Cùng Thế Giới Rolls-Royce khám phá mẫu xe sang trọng này.', 'Rolls-Royce Cullinan Black Badge', NULL, '2023-06-15 23:29:45', 1, '2023-06-15 23:29:45', NULL, 1),
(34, 25, 3, 'Brabus 800 WideStar', 'brabus-800-widestar', 0, 2000000, 'brabus-800-widestar.jpg', 1, 'Phần đầu xe tạo điểm nhấn với hốc gió trước tinh chỉnh, gồm các khe gió mở rộng. Cụm đèn trước/ sau dạng LED, đèn xy nhan trước được bố trí nhô hẳn trên nắp ca-pô tương tự như G63 4Matic. Ngoài ra, Brabus 800 được lắp thêm dải đèn LED trợ sáng trên nóc xe, công suất lớn.', 'Brabus 800 WideStar', NULL, '2023-06-15 23:31:11', 1, '2023-06-15 23:31:11', NULL, 1),
(35, 25, 3, 'Mercedes-AMG G 63', 'mercedes-amg-g-63', 0, 1230000, 'mercedes-amg-g-63.jpg', 1, 'Mercedes-AMG G 63 Edition 55 là phiên bản đặc biệt mới nhất của G 63 được đưa về Việt Nam. So với phiên bản tiêu chuẩn, G 63 Edition 55 đắt hơn 1 tỷ đồng.', 'Mercedes-AMG G 63', NULL, '2023-06-15 23:33:03', 1, '2023-06-15 23:33:03', NULL, 1),
(36, 25, 3, 'Rolls-Royce Ghost 2022', 'rolls-royce-ghost-2022', 0, 600000, 'rolls-royce-ghost-2022.jpeg', 1, 'Rolls-Royce Ghost 2022 là mẫu xe với thiết kế sang trọng, cửa vận hành bằng điện, nội thất rộng rãi, tạo sự thoái mái cho hành khách cả ở trước và sau. Dưới mui xe dài của chiếc sedan này là động cơ V-12 6,7 lít 563 mã lực, hộp số tự động tám cấp, hệ dẫn động bốn bánh. Rolls-Royce Ghost 2022 có khả năng đạt vận tốc 100km/giờ chỉ trong 4,6 giây.', 'Rolls-Royce Ghost 2022', NULL, '2023-06-15 23:34:32', 1, '2023-06-15 23:34:32', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_slider`
--

DROP TABLE IF EXISTS `db_slider`;
CREATE TABLE IF NOT EXISTS `db_slider` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created_at` timestamp NOT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_slider`
--

INSERT INTO `db_slider` (`id`, `name`, `link`, `image`, `position`, `sort_order`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(7, 'Slider 2', 'Slider 2', 'Slider 2.jpg', 'slidershow', 0, '', '2023-06-19 06:08:43', 1, '2023-06-19 06:08:43', NULL, 1),
(11, 'Slider 1', 'Slider 1', 'Slider 1.webp', 'slidershow', 0, '', '2023-06-19 06:10:10', 1, '2023-06-19 06:10:10', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

DROP TABLE IF EXISTS `db_topic`;
CREATE TABLE IF NOT EXISTS `db_topic` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int NOT NULL,
  `metakey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metadesc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `parent_id`, `metakey`, `metadesc`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(13, 'Tìm Hiểu Về Công Nghệ', 0, 'ss hieu', 'sss', '2023-06-14 07:27:05', 1, '2023-06-14 07:27:30', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

DROP TABLE IF EXISTS `db_user`;
CREATE TABLE IF NOT EXISTS `db_user` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `email`, `phone`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(4, 'phanhieu', 'Hieuecquot39@gmail.com', '0349544297', 'phan đình hiếu', '123456', 'thủ đức', '.jpg', 'người dùng', '2023-09-28 05:46:29', 1, '2023-09-28 05:46:29', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderdefail`
--

DROP TABLE IF EXISTS `orderdefail`;
CREATE TABLE IF NOT EXISTS `orderdefail` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `discount` double DEFAULT NULL,
  `amount` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
