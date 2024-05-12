CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(100) COLLATE utf8mb3_persian_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb3_persian_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb3_persian_ci NOT NULL,
  `roleId` int DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `fullName_UNIQUE` (`fullName`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_persian_ci