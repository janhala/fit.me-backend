# Database schema

```SQL
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

--
-- Struktura tabulky `accepted_payment`
--

CREATE TABLE `accepted_payment` (
                                  `id` int(11) NOT NULL,
                                  `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                                  `description` text COLLATE utf8_czech_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `accepted_payment_sports_ground`
--

CREATE TABLE `accepted_payment_sports_ground` (
                                                `id` int(11) NOT NULL,
                                                `accepted_payment_id` int(11) NOT NULL,
                                                `sports_ground_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabulky `address`
--

CREATE TABLE `address` (
                         `id` int(11) NOT NULL,
                         `street` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `no` int(11) NOT NULL,
                         `city` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `zip_code` int(11) NOT NULL,
                         `region` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `state` varchar(255) COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `coach`
--

CREATE TABLE `coach` (
                       `id` int(11) NOT NULL,
                       `username` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                       `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                       `surname` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                       `published` tinyint(1) DEFAULT 0,
                       `phone` varchar(15) COLLATE utf8_czech_ci DEFAULT NULL,
                       `vat_number` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
                       `intro_text` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                       `specialization` text COLLATE utf8_czech_ci DEFAULT NULL,
                       `requirements` text COLLATE utf8_czech_ci DEFAULT NULL,
                       `description` text COLLATE utf8_czech_ci DEFAULT NULL,
                       `profile_photo_id` int(11) DEFAULT NULL,
                       `cover_photo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `difficulty`
--

CREATE TABLE `difficulty` (
                            `id` int(11) NOT NULL,
                            `name` varchar(255) COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `event`
--

CREATE TABLE `event` (
                       `id` int(11) NOT NULL,
                       `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                       `datetime_from` datetime NOT NULL,
                       `datetime_to` datetime NOT NULL,
                       `datetime_created` datetime NOT NULL,
                       `description` text COLLATE utf8_czech_ci NOT NULL,
                       `difficulty_id` int(11) NOT NULL DEFAULT 1,
                       `cover_photo_id` int(11) DEFAULT NULL,
                       `sports_ground_id` int(11) DEFAULT NULL,
                       `coach_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `event_exercise`
--

CREATE TABLE `event_exercise` (
                                `id` int(11) NOT NULL,
                                `event_id` int(11) NOT NULL,
                                `exercise_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `event_sport`
--

CREATE TABLE `event_sport` (
                             `id` int(11) NOT NULL,
                             `event_id` int(11) NOT NULL,
                             `sport_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `event_sportsman`
--

CREATE TABLE `event_sportsman` (
                                 `id` int(11) NOT NULL,
                                 `event_id` int(11) NOT NULL,
                                 `sportsman_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `exercise`
--

CREATE TABLE `exercise` (
                          `id` int(11) NOT NULL,
                          `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                          `icon` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `favorite`
--

CREATE TABLE `favorite` (
                          `id` int(11) NOT NULL,
                          `sportsman_id` int(11) NOT NULL,
                          `coach_id` int(11) DEFAULT NULL,
                          `sports_ground_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `message`
--

CREATE TABLE `message` (
                         `id` int(11) NOT NULL,
                         `subject` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `text` text COLLATE utf8_czech_ci NOT NULL,
                         `sportsman_id` int(11) NOT NULL,
                         `sports_ground_id` int(11) DEFAULT NULL,
                         `coach_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `photo`
--

CREATE TABLE `photo` (
                       `id` int(11) NOT NULL,
                       `name` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
                       `location` text COLLATE utf8_czech_ci NOT NULL,
                       `coach_id` int(11) DEFAULT NULL,
                       `sports_ground_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `review`
--

CREATE TABLE `review` (
                        `id` int(11) NOT NULL,
                        `stars` int(11) NOT NULL,
                        `comment` text COLLATE utf8_czech_ci DEFAULT NULL,
                        `datetime` datetime DEFAULT current_timestamp(),
                        `sportsman_id` int(11) NOT NULL,
                        `sports_ground_id` int(11) DEFAULT NULL,
                        `coach_id` int(11) DEFAULT NULL,
                        `event_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `service`
--

CREATE TABLE `service` (
                         `id` int(11) NOT NULL,
                         `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `description` text COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `service_sports_ground`
--

CREATE TABLE `service_sports_ground` (
                                       `id` int(11) NOT NULL,
                                       `service_id` int(11) NOT NULL,
                                       `sports_ground_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabulky `sport`
--

CREATE TABLE `sport` (
                       `id` int(11) NOT NULL,
                       `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                       `color` varchar(100) COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `sportsman`
--

CREATE TABLE `sportsman` (
                           `id` int(11) NOT NULL,
                           `username` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                           `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                           `surname` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                           `phone` varchar(15) COLLATE utf8_czech_ci DEFAULT NULL,
                           `profile_photo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `sports_ground`
--

CREATE TABLE `sports_ground` (
                               `id` int(11) NOT NULL,
                               `username` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                               `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                               `published` tinyint(1) DEFAULT 0,
                               `opening_hours_from` time DEFAULT NULL,
                               `opening_hours_to` time DEFAULT NULL,
                               `web` text COLLATE utf8_czech_ci DEFAULT NULL,
                               `phone` varchar(15) COLLATE utf8_czech_ci DEFAULT NULL,
                               `vat_number` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
                               `intro_text` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                               `description` text COLLATE utf8_czech_ci DEFAULT NULL,
                               `address_id` int(11) DEFAULT NULL,
                               `cover_photo_id` int(11) DEFAULT NULL,
                               `profile_photo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `sport_sports_ground`
--

CREATE TABLE `sport_sports_ground` (
                                     `id` int(11) NOT NULL,
                                     `sport_id` int(11) NOT NULL,
                                     `sports_ground_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `user`
--

CREATE TABLE `user` (
                      `id` int(11) NOT NULL,
                      `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
                      `password` text CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
                      `verified` tinyint(1) DEFAULT 0,
                      `password_reset_hash` text DEFAULT NULL,
                      `coach_id` int(11) DEFAULT NULL,
                      `sportsman_id` int(11) DEFAULT NULL,
                      `sports_ground_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `accepted_payment`
--
ALTER TABLE `accepted_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `accepted_payment_sports_ground`
--
ALTER TABLE `accepted_payment_sports_ground`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `coach`
--
ALTER TABLE `coach`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_282` (`cover_photo_id`);

--
-- Indexy pro tabulku `difficulty`
--
ALTER TABLE `difficulty`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_126` (`sports_ground_id`),
  ADD KEY `fkIdx_167` (`coach_id`),
  ADD KEY `difficulty_id` (`difficulty_id`);

--
-- Indexy pro tabulku `event_exercise`
--
ALTER TABLE `event_exercise`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `exercise_id` (`exercise_id`);

--
-- Indexy pro tabulku `event_sport`
--
ALTER TABLE `event_sport`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `sport_id` (`sport_id`);

--
-- Indexy pro tabulku `event_sportsman`
--
ALTER TABLE `event_sportsman`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `sportsman_id` (`sportsman_id`);

--
-- Indexy pro tabulku `exercise`
--
ALTER TABLE `exercise`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_137` (`sportsman_id`),
  ADD KEY `fkIdx_140` (`sports_ground_id`),
  ADD KEY `fkIdx_248` (`coach_id`);

--
-- Indexy pro tabulku `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_219` (`sportsman_id`),
  ADD KEY `fkIdx_222` (`sports_ground_id`),
  ADD KEY `fkIdx_225` (`coach_id`);

--
-- Indexy pro tabulku `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_264` (`coach_id`),
  ADD KEY `fkIdx_310` (`sports_ground_id`);

--
-- Indexy pro tabulku `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_102` (`sports_ground_id`),
  ADD KEY `fkIdx_111` (`coach_id`),
  ADD KEY `fkIdx_241` (`sportsman_id`),
  ADD KEY `event_id` (`event_id`);

--
-- Indexy pro tabulku `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `service_sports_ground`
--
ALTER TABLE `service_sports_ground`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `sport`
--
ALTER TABLE `sport`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `sportsman`
--
ALTER TABLE `sportsman`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `sports_ground`
--
ALTER TABLE `sports_ground`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_173` (`address_id`),
  ADD KEY `fkIdx_295` (`cover_photo_id`),
  ADD KEY `fkIdx_318` (`profile_photo_id`);

--
-- Indexy pro tabulku `sport_sports_ground`
--
ALTER TABLE `sport_sports_ground`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `accepted_payment`
--
ALTER TABLE `accepted_payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `accepted_payment_sports_ground`
--
ALTER TABLE `accepted_payment_sports_ground`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `coach`
--
ALTER TABLE `coach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `difficulty`
--
ALTER TABLE `difficulty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `event_exercise`
--
ALTER TABLE `event_exercise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `event_sport`
--
ALTER TABLE `event_sport`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `event_sportsman`
--
ALTER TABLE `event_sportsman`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `exercise`
--
ALTER TABLE `exercise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `favorite`
--
ALTER TABLE `favorite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `service_sports_ground`
--
ALTER TABLE `service_sports_ground`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `sport`
--
ALTER TABLE `sport`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `sportsman`
--
ALTER TABLE `sportsman`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `sports_ground`
--
ALTER TABLE `sports_ground`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `sport_sports_ground`
--
ALTER TABLE `sport_sports_ground`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `coach`
--
ALTER TABLE `coach`
  ADD CONSTRAINT `FK_280` FOREIGN KEY (`cover_photo_id`) REFERENCES `photo` (`id`);

--
-- Omezení pro tabulku `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `FK_124` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  ADD CONSTRAINT `FK_165` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`),
  ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`difficulty_id`) REFERENCES `difficulty` (`id`);

--
-- Omezení pro tabulku `event_exercise`
--
ALTER TABLE `event_exercise`
  ADD CONSTRAINT `event_exercise_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `event_exercise_ibfk_2` FOREIGN KEY (`exercise_id`) REFERENCES `exercise` (`id`);

--
-- Omezení pro tabulku `event_sport`
--
ALTER TABLE `event_sport`
  ADD CONSTRAINT `event_sport_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `event_sport_ibfk_2` FOREIGN KEY (`sport_id`) REFERENCES `sport` (`id`);

--
-- Omezení pro tabulku `event_sportsman`
--
ALTER TABLE `event_sportsman`
  ADD CONSTRAINT `event_sportsman_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `event_sportsman_ibfk_2` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`);

--
-- Omezení pro tabulku `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `FK_135` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`),
  ADD CONSTRAINT `FK_138` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  ADD CONSTRAINT `FK_246` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`);

--
-- Omezení pro tabulku `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `FK_217` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`),
  ADD CONSTRAINT `FK_220` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  ADD CONSTRAINT `FK_223` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`);

--
-- Omezení pro tabulku `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `FK_262` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`),
  ADD CONSTRAINT `FK_308` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`);

--
-- Omezení pro tabulku `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `FK_100` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  ADD CONSTRAINT `FK_109` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`),
  ADD CONSTRAINT `FK_239` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`),
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);

--
-- Omezení pro tabulku `sports_ground`
--
ALTER TABLE `sports_ground`
  ADD CONSTRAINT `FK_171` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  ADD CONSTRAINT `FK_293` FOREIGN KEY (`cover_photo_id`) REFERENCES `photo` (`id`),
  ADD CONSTRAINT `FK_316` FOREIGN KEY (`profile_photo_id`) REFERENCES `photo` (`id`);
COMMIT;

```
