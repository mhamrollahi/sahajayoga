CREATE TABLE `settings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `setting_name` varchar(100) COLLATE utf8mb3_persian_ci NOT NULL,
  `setting_value` varchar(100) COLLATE utf8mb3_persian_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `setting_name_UNIQUE` (`setting_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_persian_ci COMMENT='settings for all website	'