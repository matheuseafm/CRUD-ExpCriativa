-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: book_management
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publish_year` year NOT NULL,
  `isbn` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn` (`isbn`),
  KEY `idx_author` (`author`),
  KEY `idx_genre` (`genre`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'The Great Gatsby','F. Scott Fitzgerald',1925,'978-0743273565','Fiction','2025-04-24 12:08:13','2025-04-24 12:08:13'),(2,'To Kill a Mockingbird','Harper Lee',1960,'978-0446310789','Fiction','2025-04-24 12:08:13','2025-04-24 12:08:13'),(3,'1984','George Orwell',1949,'978-0451524935','Science Fiction','2025-04-24 12:08:13','2025-04-24 12:08:13'),(32,'Brave New World','Aldous Huxley',1932,'978-0060850524','Science Fiction','2025-04-24 13:37:31','2025-04-24 13:37:31'),(33,'The Midnight Library','Matt Haig',2020,'978-0525559474','Fantasy','2025-04-24 13:40:42','2025-04-24 13:40:42'),(34,'Where the Crawdads Sing','Delia Owens',2018,'978-0735219106','Mystery','2025-04-24 13:40:42','2025-04-24 13:40:42'),(35,'The Silent Patient','Alex Michaelides',2019,'978-1250301697','Psychological Thriller','2025-04-24 13:40:42','2025-04-24 13:40:42'),(36,'It Ends With Us','Colleen Hoover',2016,'978-1501110368','Romance','2025-04-24 13:40:42','2025-04-24 13:40:42'),(37,'Verity','Colleen Hoover',2018,'978-1791392796','Thriller','2025-04-24 13:40:42','2025-04-24 13:40:42'),(38,'The Seven Husbands of Evelyn Hugo','Taylor Jenkins Reid',2017,'978-1501139239','Historical Fiction','2025-04-24 13:40:42','2025-04-24 13:40:42'),(39,'Daisy Jones & The Six','Taylor Jenkins Reid',2019,'978-1524798628','Contemporary Fiction','2025-04-24 13:40:42','2025-04-24 13:40:42'),(40,'The House in the Cerulean Sea','TJ Klune',2020,'978-1250217318','Fantasy','2025-04-24 13:40:42','2025-04-24 13:40:42'),(41,'A Court of Thorns and Roses','Sarah J. Maas',2015,'978-1619634442','Fantasy','2025-04-24 13:40:42','2025-04-24 13:40:42'),(42,'The Song of Achilles','Madeline Miller',2011,'978-0062060624','Historical Fiction','2025-04-24 13:40:42','2025-04-24 13:40:42'),(43,'Circe','Madeline Miller',2018,'978-0316556347','Fantasy','2025-04-24 13:40:42','2025-04-24 13:40:42'),(44,'The Night Circus','Erin Morgenstern',2011,'978-0307744432','Fantasy','2025-04-24 13:41:59','2025-04-24 13:41:59'),(45,'Before We Were Strangers','Renée Carlino',2015,'978-1501105777','Romance','2025-04-24 13:41:59','2025-04-24 13:41:59'),(46,'Anxious People','Fredrik Backman',2019,'978-1501160837','Fiction','2025-04-24 13:41:59','2025-04-24 13:41:59'),(47,'Malibu Rising','Taylor Jenkins Reid',2021,'978-1524798659','Contemporary Fiction','2025-04-24 13:41:59','2025-04-24 13:41:59'),(48,'The Paris Library','Janet Skeslien Charles',2021,'978-1982134198','Historical Fiction','2025-04-24 13:41:59','2025-04-24 13:41:59'),(49,'Shatter Me','Tahereh Mafi',2011,'978-0062085481','Dystopian','2025-04-24 13:41:59','2025-04-24 13:41:59'),(50,'Mexican Gothic','Silvia Moreno-Garcia',2020,'978-0525620785','Horror','2025-04-24 13:41:59','2025-04-24 13:41:59'),(51,'The Last Thing He Told Me','Laura Dave',2021,'978-1501171345','Mystery','2025-04-24 13:41:59','2025-04-24 13:41:59'),(52,'The Paper Palace','Miranda Cowley Heller',2021,'978-0593329825','Literary Fiction','2025-04-24 13:41:59','2025-04-24 13:41:59'),(53,'Reminders of Him','Colleen Hoover',2022,'978-1542025607','Romance','2025-04-24 13:41:59','2025-04-24 13:41:59'),(54,'Lessons in Chemistry','Bonnie Garmus',2022,'978-0385547345','Historical Fiction','2025-04-24 13:41:59','2025-04-24 13:41:59'),(55,'Fourth Wing','Rebecca Yarros',2023,'978-1649374042','Fantasy','2025-04-24 13:41:59','2025-04-24 13:41:59'),(68,'Harry Potter e as Relíquias da Morte','JK Rowling',2017,'1934-19485','Ficção','2025-04-24 16:04:16','2025-04-24 16:04:16');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-25 11:25:01
