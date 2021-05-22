-- MariaDB dump 10.17  Distrib 10.4.6-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: merrixc2_addlead
-- ------------------------------------------------------
-- Server version	10.4.6-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gheir_hozoori`
--

DROP TABLE IF EXISTS `gheir_hozoori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gheir_hozoori` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(200) COLLATE utf8_persian_ci DEFAULT NULL,
  `shop_name` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `landline` varchar(11) COLLATE utf8_persian_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8_persian_ci NOT NULL,
  `province` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `city` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `area` varchar(2) COLLATE utf8_persian_ci NOT NULL,
  `address` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `job` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `instagram` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `telegram` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `whatsapp` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `description` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `website` varchar(500) COLLATE utf8_persian_ci NOT NULL,
  `clue` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `service_type` varchar(50) COLLATE utf8_persian_ci NOT NULL,
  `lat` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `lng` varchar(200) COLLATE utf8_persian_ci NOT NULL,
  `import_crm` int(2) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gheir_hozoori`
--

LOCK TABLES `gheir_hozoori` WRITE;
/*!40000 ALTER TABLE `gheir_hozoori` DISABLE KEYS */;
INSERT INTO `gheir_hozoori` VALUES (51,'ghasemi@merrix.com','مشتری نهایی کیهان','','','خراسان‌شمالی','بجنورد','13','','مشتری نهایی','https://instagram.com/sdsdf','','','','http://www.kjksdf.com','ای نماد','حضوری','36.30395501330451','59.571658372879035',0),(52,'ghasemi@merrix.com','لوازم التحریر زحل','','','اردبیل','بیله‌سوار','2','','لوازم التحریر','https://instagram.com/asd','','','','http://www.merrix','Web','حضوری','35.70414710206052','51.4599609375',0);
/*!40000 ALTER TABLE `gheir_hozoori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(200) NOT NULL,
  `user_password` varchar(200) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (13,'ghasemi@merrix.com','ghasemi@merrix.com'),(15,'yaghooti@merrix.com','yaghooti123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'merrixc2_addlead'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-22 10:32:01
