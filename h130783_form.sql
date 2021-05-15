-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 12, 2021 at 05:27 AM
-- Server version: 5.7.32-cll-lve
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h130783_form`
--

-- --------------------------------------------------------

--
-- Table structure for table `gheir_hozoori`
--

CREATE TABLE `gheir_hozoori` (
  `id` int(11) NOT NULL,
  `user_email` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `shop_name` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `landline` varchar(11) COLLATE utf8_persian_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8_persian_ci NOT NULL,
  `province` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `city` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `address` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `job` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `instagram` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `telegram` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `whatsapp` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `website` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `clue` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `service_type` varchar(50) COLLATE utf8_persian_ci NOT NULL,
  `lat` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `lng` varchar(200) COLLATE utf8_persian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `user_email` varchar(200) NOT NULL,
  `user_password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_password`) VALUES
(13, 'ghasemi@merrix.com', 'ghasemi@merrix.com'),
(15, 'yaghooti@merrix.com', 'yaghooti123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gheir_hozoori`
--
ALTER TABLE `gheir_hozoori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gheir_hozoori`
--
ALTER TABLE `gheir_hozoori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
