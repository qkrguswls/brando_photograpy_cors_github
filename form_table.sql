-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 23-08-03 15:45
-- 서버 버전: 8.0.33
-- PHP 버전: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `qkrguswls309`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `form_table`
--

CREATE TABLE `form_table` (
  `idx` int NOT NULL COMMENT '자동 증가 인덱스',
  `user_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이름',
  `user_email` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이메일',
  `user_message` text COLLATE utf8mb4_general_ci NOT NULL COMMENT '메시지',
  `user_date` varchar(10) COLLATE utf8mb4_general_ci NOT NULL COMMENT '날짜'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Brando Photograpy Form Mail Table';

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `form_table`
--
ALTER TABLE `form_table`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `form_table`
--
ALTER TABLE `form_table`
  MODIFY `idx` int NOT NULL AUTO_INCREMENT COMMENT '자동 증가 인덱스';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
