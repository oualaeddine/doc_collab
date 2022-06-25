-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 12 avr. 2022 à 15:55
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.4.2-dev

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `commercial`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Libelle` text NOT NULL,
  `Code` varchar(255) NOT NULL,
  `Prix_HT` double(8,2) DEFAULT NULL,
  `Tva` double(8,2) DEFAULT NULL,
  `Prix_TTC` double(8,2) DEFAULT NULL,
  `Type_ventes_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `articles_code_unique` (`Code`),
  KEY `articles_type_ventes_id_foreign` (`Type_ventes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `Libelle`, `Code`, `Prix_HT`, `Tva`, `Prix_TTC`, `Type_ventes_id`) VALUES
(1, 'Cahier d’entreprise en 4 pages couleur (180 l x 270 h) mm sur l’annuaire imprimé', 'PS_P0004', NULL, NULL, NULL, 1),
(2, '4 Banners (Bandeau) couleur (180 l x 36 h) mm sur CD-Rom, site web, et application mobile)', 'PS_B0003', NULL, NULL, NULL, 1),
(3, 'Web présence en mode Booster (Logo couleur, link, géolocalisation, pages web, et banners, …)', 'PS_W001', NULL, NULL, NULL, 1),
(4, 'Optimisation sur Mobile application (logo couleur, link, géolocalisation, visuels, …)', 'PS_O001', NULL, NULL, NULL, 1),
(5, 'Forfait de Base (Fiche de renseignements détaillée de l’entreprise sur annuaire, CD-Rom, site web, et application mobile)', 'PS_F0001', NULL, NULL, NULL, 1),
(6, 'Kit Complet ( Annuaire imprimé & CD-Rom )', 'PS_K0001', NULL, NULL, NULL, 1),
(7, 'Double page couleur (180 l x 270 h) mm sur l’annuaire imprimé', 'PS_P0002', NULL, NULL, NULL, 1),
(8, '2 Banners (Bandeau) couleur (180 l x 36 h) mm sur CD-Rom, site web, et application mobile)', 'PS_B0002', NULL, NULL, NULL, 1),
(9, 'Page Couleur (180 l x 270 h) mm sur l’annuaire imprimé', 'PS_P0001', NULL, NULL, NULL, 1),
(10, 'Banner (Bandeau) couleur (180 l x 36 h) mm sur CD-Rom, site web, et application mobile)', 'PS_B0001', NULL, NULL, NULL, 1),
(11, '1/2 Page couleur (180 l x 130 h) mm sur l’annuaire imprimé', 'PS_P0003', NULL, NULL, NULL, 1),
(12, 'POP UP UNE Portail www.pages jaunes-dz.com ', 'PP_P0019', NULL, NULL, NULL, 2),
(13, 'Bannière Une Portail www.pagesjaunes-dz.com ', 'PP_B0020', NULL, NULL, NULL, 2),
(14, 'Page  (180 l x 270 h) mm sur l’annuaire imprimé', 'PS_P0001\r\n', NULL, NULL, NULL, 2),
(15, 'Banner (Bandeau)  (180 l x 36 h) mm sur CD-Rom, site web, et application mobile)', 'PS_B0001\r\n\r\n\r\n\r\n', NULL, NULL, NULL, 2),
(16, 'Web présence en mode Booster (Logo , link, géolocalisation, pages web, et banners, …)\r\n', 'PS_W001\r\n', NULL, NULL, NULL, 2),
(17, 'Page écran (180 l x 150 h) mm sur CD-Rom ;\r\n', 'PE_0002\r\n', NULL, NULL, NULL, 2),
(18, 'Optimisation sur Mobile application (logo , link, géolocalisation, visuels, …)\r\n', 'PS_O001\r\n', NULL, NULL, NULL, 2),
(19, 'Forfait de Base (Fiche de renseignements détaillée de l’entreprise sur annuaire, CD-Rom, site web, et application mobile)\r\n', 'PS_F0001\r\n', NULL, NULL, NULL, 2),
(20, 'Kit Complet ( Annuaire imprimé & CD-Rom )', 'PS_K0001\r\n', NULL, NULL, NULL, 2),
(21, 'Banner (Bandeau)  (180 l x 36 h) mm sur CD-Rom, site web, et application mobile)\r\n', 'PS_B0001\r\n', NULL, NULL, NULL, 2),
(22, 'Accès Annuel à la Base de Données commerciales et professionnelles pertinente via plate forme de recherche multicritères par Nom d\'entreprise, Nom du dirigeant, Produit, Activité, Localité, Marque, N° Téléphone, effectifs....... - Pages Jaunes Algérie - Annuaire Economiques des Entreprises Algériennes - multi-utilisateurs - 5000 téléchargements (Excell, csv, pdf)', 'EP_0001\r\n', 83000.00, 15770.00, 98770.00, 3),
(29, 'Accès Annuel à la Base de Données commerciales et professionnelles pertinente via plate forme de recherche multicritères par Nom d\'entreprise, Nom du dirigeant, Produit, Activité, Localité, Marque, N° Téléphone, effectifs....... - Pages Jaunes Algérie - Annuaire Economiques des Entreprises Algériennes - multi-utilisateurs - 5000 téléchargements (Excell, csv, pdf)\r\n', 'SR_EP001\r\n', NULL, NULL, NULL, 2),
(33, 'Conception : Design graphique, Rédaction et Routage (envoi) de vos e-mailings                                  Rapports de campagne et statistiques Pour 2000 adresses e-mail Pro', 'EM_0001', 26000.00, 4940.00, 30940.00, 4),
(34, 'Conception : Design graphique, Rédaction et Routage (envoi) de vos e-mailings                                  Rapports de campagne et statistiques Pour 5000 adresses e-mail Pro', 'EM_0002', 50000.00, 9500.00, 59500.00, 4),
(35, 'Conception : Design graphique, Rédaction et Routage (envoi) de vos e-mailings                               Rapports de campagne et statistiques Pour 10000 adresses e-mail Pro', 'EM_0003', 80000.00, 15200.00, 95200.00, 4),
(36, 'Conception : Design graphique, Rédaction et Routage (envoi) de vos e-mailings                               Rapports de campagne et statistiques Pour 20000 adresses e-mail Pro', 'EM_0004', 120000.00, 22800.00, 142800.00, 4),
(37, 'Conception (Design graphique, Rédaction et Routage (envoi) de vos e-mailings                                Rapports de campagne et statistiques Pour 50000 adresses e-mail Pro', 'EM_0005', 150000.00, 28500.00, 178500.00, 4),
(38, 'Page Vitrine dédiée sur le Portail www.pagesjaunes-dz.com et l\'Application Mobile Pages Jaunes DZ Mise en avant sur la page d\'accueil et les moteurs de recherche :                                                          Bannière(s) publicitaires(s) - Cordonnées détaillés - Description de l\'entreprise - Activités - Produits/Services - Catalogue/Fiche(s) Technique - Marque(s) - Galerie vidéo(s) -/Photo(s) - Géolocalisation - Lien vers Site Web et réseaux sociaux ', 'DB_0001', 83500.00, 15865.00, 99365.00, 5);

-- --------------------------------------------------------

--
-- Structure de la table `packs`
--

DROP TABLE IF EXISTS `packs`;
CREATE TABLE IF NOT EXISTS `packs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Libelle` varchar(255) NOT NULL,
  `Type_ventes_id` bigint(20) UNSIGNED NOT NULL,
  `Prix_HT` double(8,2) NOT NULL,
  `Tva` double(8,2) NOT NULL,
  `Prix_TTC` double(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pack_type_ventes_id_foreign` (`Type_ventes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `packs`
--

INSERT INTO `packs` (`id`, `Libelle`, `Type_ventes_id`, `Prix_HT`, `Tva`, `Prix_TTC`) VALUES
(1, 'Premium', 1, 415000.00, 78850.00, 493850.00),
(2, 'Business', 1, 297500.00, 56525.00, 354025.00),
(3, 'Standard', 1, 184500.00, 35055.00, 219555.00),
(4, 'Présence', 1, 144500.00, 144500.00, 289000.00),
(5, 'Campagne mailing pour 2000 adresses ', 4, 26000.00, 4940.00, 30940.00),
(6, 'Campagne mailing pour 5000 adresses ', 4, 50000.00, 9500.00, 59500.00),
(7, 'Campagne mailing pour 10000 adresses ', 4, 80000.00, 15200.00, 95200.00),
(8, 'Campagne mailing pour 20000 adresses ', 4, 120000.00, 22800.00, 142800.00),
(9, 'Campagne mailing pour 50000 adresses ', 4, 150000.00, 28500.00, 178500.00),
(10, 'Logo  sur le dos (tranche) l’annuaire imprimé ', 2, 587000.00, 111530.00, 698530.00),
(11, 'Cahier d’entreprise en 4 pages sur index (180 l x 270 h) mm sur l’annuaire imprimé ', 2, 448500.00, 85215.00, 533715.00),
(12, 'Mode d’emplois des pages jaunes (par raison sociale ou par produits/services sur l’annuaire imprimé ', 2, 349500.00, 66405.00, 415905.00),
(13, 'Séparateur d\'Index rubriques personnalisé ', 2, 386000.00, 73340.00, 459340.00),
(14, '1ère Page  (180 l x 270 h) mm du 1er cahier sur l’annuaire imprimé ', 2, 245000.00, 46550.00, 291550.00),
(15, '2ème Page  (180 l x 270 h) mm du 1er Cahier sur l’annuaire ', 2, 235000.00, 44650.00, 279650.00),
(16, '1er Page  (180 l x 270 h) mm du dernier cahier sur l’annuaire imprimé ', 2, 240000.00, 45600.00, 285600.00),
(17, '2ème Page  (180 l x 270 h) mm du dernier cahier sur l’annuaire imprimé ', 2, 230000.00, 43700.00, 273700.00),
(18, '3ème Page  (180 l x 270 h) mm du dernier cahier sur l’annuaire ', 2, 220000.00, 41800.00, 261800.00),
(19, '1ière de Couverture (180 l x 150 h) mm  de l’annuaire imprimé', 2, 497500.00, 94525.00, 592025.00),
(20, '2ième de Couverture (180 l x 270 h) mm  de l’annuaire imprimé', 2, 398000.00, 75620.00, 473620.00),
(21, '3ième de Couverture (180 l x 270 h) mm  de l’annuaire imprimé', 2, 361000.00, 68590.00, 429590.00),
(22, '4ième de Couverture (180 l x 270 h) mm  de l’annuaire imprimé', 2, 445000.00, 84550.00, 529550.00),
(23, 'Logo  sur le dos (tranche) de l’annuaire imprimé\r\n', 2, 438000.00, 83220.00, 521220.00),
(24, 'Marque Pages (Signet) (100 l x 200 h) mm  Recto/verso sur l’annuaire imprimé  \r\n', 2, 459000.00, 87210.00, 546210.00),
(25, 'Pochette (jacket)  (120 l x 120 h) CD-Rom personnalisée\r\n', 2, 571000.00, 108490.00, 679490.00),
(26, 'Dépliant  (140 l x 210 h) personnalisé \r\n', 2, 546000.00, 103740.00, 649740.00);

-- --------------------------------------------------------

--
-- Structure de la table `pack_articles`
--

DROP TABLE IF EXISTS `pack_articles`;
CREATE TABLE IF NOT EXISTS `pack_articles` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Pack_id` bigint(20) UNSIGNED NOT NULL,
  `Articles_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pack_articles_pack_id_foreign` (`Pack_id`),
  KEY `pack_articles_articles_id_foreign` (`Articles_id`)
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pack_articles`
--

INSERT INTO `pack_articles` (`id`, `Pack_id`, `Articles_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 2, 7),
(8, 2, 8),
(9, 2, 3),
(10, 2, 4),
(11, 2, 5),
(12, 2, 6),
(13, 3, 9),
(14, 3, 13),
(15, 3, 3),
(16, 3, 4),
(17, 3, 5),
(18, 3, 6),
(19, 4, 11),
(20, 4, 10),
(21, 4, 3),
(22, 4, 4),
(23, 4, 5),
(24, 4, 6),
(25, 5, 33),
(26, 6, 34),
(27, 7, 35),
(28, 8, 36),
(29, 9, 37),
(30, 23, 29),
(31, 23, 14),
(32, 23, 15),
(33, 23, 16),
(34, 23, 17),
(35, 23, 18),
(36, 23, 19),
(37, 23, 20),
(38, 11, 29),
(39, 11, 14),
(40, 11, 15),
(41, 11, 16),
(42, 11, 17),
(43, 11, 18),
(44, 11, 19),
(45, 11, 20),
(46, 12, 29),
(47, 12, 14),
(48, 12, 15),
(49, 12, 16),
(50, 12, 17),
(51, 12, 18),
(52, 12, 19),
(53, 12, 20),
(54, 13, 29),
(55, 13, 14),
(56, 13, 15),
(57, 13, 16),
(58, 13, 17),
(59, 13, 18),
(60, 13, 19),
(61, 13, 20),
(62, 14, 29),
(63, 14, 14),
(64, 14, 15),
(65, 14, 16),
(66, 14, 17),
(67, 14, 18),
(68, 14, 19),
(69, 14, 20),
(70, 15, 29),
(71, 15, 14),
(72, 15, 15),
(73, 15, 16),
(74, 15, 17),
(75, 15, 18),
(76, 15, 19),
(77, 15, 20),
(78, 16, 29),
(79, 16, 14),
(80, 16, 15),
(81, 16, 16),
(82, 16, 17),
(83, 16, 18),
(84, 16, 19),
(85, 16, 20),
(86, 17, 29),
(87, 17, 14),
(88, 17, 15),
(89, 17, 16),
(90, 17, 17),
(91, 17, 18),
(92, 17, 19),
(93, 17, 20),
(94, 18, 29),
(95, 18, 14),
(96, 18, 15),
(97, 18, 16),
(98, 18, 17),
(99, 18, 18),
(100, 18, 19),
(101, 18, 20),
(102, 19, 29),
(103, 19, 14),
(104, 19, 15),
(105, 19, 16),
(106, 19, 17),
(107, 19, 18),
(108, 19, 19),
(109, 19, 20),
(110, 20, 29),
(111, 20, 14),
(112, 20, 15),
(113, 20, 16),
(114, 20, 17),
(115, 20, 18),
(116, 20, 19),
(117, 20, 20),
(118, 21, 29),
(119, 21, 14),
(120, 21, 15),
(121, 21, 16),
(122, 21, 17),
(123, 21, 18),
(124, 21, 19),
(125, 21, 20),
(126, 22, 29),
(127, 22, 14),
(128, 22, 15),
(129, 22, 16),
(130, 22, 17),
(131, 22, 18),
(132, 22, 19),
(133, 22, 20),
(134, 23, 29),
(135, 23, 14),
(136, 23, 15),
(137, 23, 16),
(138, 23, 17),
(139, 23, 18),
(140, 23, 19),
(141, 23, 20),
(142, 24, 29),
(143, 24, 14),
(144, 24, 15),
(145, 24, 16),
(146, 24, 17),
(147, 24, 18),
(148, 24, 19),
(149, 24, 20),
(150, 25, 29),
(151, 25, 14),
(152, 25, 15),
(153, 25, 16),
(154, 25, 17),
(155, 25, 18),
(156, 25, 19),
(157, 25, 20),
(158, 26, 29),
(159, 26, 14),
(160, 26, 15),
(161, 26, 16),
(162, 26, 17),
(163, 26, 18),
(164, 26, 19),
(165, 26, 20);

-- --------------------------------------------------------

--
-- Structure de la table `type_ventes`
--

DROP TABLE IF EXISTS `type_ventes`;
CREATE TABLE IF NOT EXISTS `type_ventes` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Libelle` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `type_ventes`
--

INSERT INTO `type_ventes` (`id`, `Libelle`) VALUES
(1, 'ESPACES PUBLICITAIRES STANDARDS '),
(2, 'ESPACES PUBLICITAIRES PRIVILIGIES '),
(3, 'SOLUTION DE RECHERCHE \"EASYPROSPECT\" '),
(4, 'EMAIL MARKETING'),
(5, 'DIGITAL BOOST '),
(6, 'FORMATION '),
(7, 'ACCOMPAGNEMENT ET ASSISTANCE');

-- --------------------------------------------------------

--
-- Structure de la table `ventes`
--

DROP TABLE IF EXISTS `ventes`;
CREATE TABLE IF NOT EXISTS `ventes` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Company_id` int(11) DEFAULT NULL,
  `OI` varchar(6) DEFAULT NULL,
  `Num_Proforma` varchar(20) NOT NULL,
  `Num_Facture` varchar(20) DEFAULT NULL,
  `Contact` varchar(255) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Tel` varchar(255) DEFAULT NULL,
  `Fax` varchar(255) DEFAULT NULL,
  `Num_de_Contrat` varchar(255) DEFAULT NULL,
  `BDC_Num` varchar(255) DEFAULT NULL,
  `Fonction_Contact` varchar(255) DEFAULT NULL,
  `Commercial` varchar(255) NOT NULL,
  `Etat_vente` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ventes`
--

INSERT INTO `ventes` (`id`, `Company_id`, `OI`, `Num_Proforma`, `Num_Facture`, `Contact`, `Date`, `Tel`, `Fax`, `Num_de_Contrat`, `BDC_Num`, `Fonction_Contact`, `Commercial`, `Etat_vente`) VALUES
(32, 259767, NULL, '0001/2022', '0001/2022', NULL, '2022-04-03', NULL, NULL, NULL, NULL, NULL, '28', 1),
(33, 259767, NULL, '0002/2022', '0002/2022', NULL, '2022-04-09', NULL, NULL, NULL, NULL, NULL, '28', 1),
(34, 251702, NULL, '0003/2022', NULL, NULL, '2022-04-09', NULL, NULL, NULL, NULL, NULL, '28', 2),
(35, 271680, NULL, '0004/2022', '0004/2022', NULL, '2022-04-09', NULL, NULL, NULL, NULL, NULL, '28', 1),
(64, 259767, NULL, '0005/2022', NULL, NULL, '2022-04-12', NULL, NULL, NULL, NULL, NULL, '28', 1),
(65, 271680, NULL, '0006/2022', '0006/2022', NULL, '2022-04-12', NULL, NULL, NULL, NULL, NULL, '28', 1),
(66, 271680, NULL, '0007/2022', NULL, NULL, '2022-04-12', NULL, NULL, NULL, NULL, NULL, '28', 1);

-- --------------------------------------------------------

--
-- Structure de la table `ventes_details`
--

DROP TABLE IF EXISTS `ventes_details`;
CREATE TABLE IF NOT EXISTS `ventes_details` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Prix_HT` double(8,2) NOT NULL,
  `Qte` int(11) NOT NULL,
  `TVA` double NOT NULL,
  `Remise` double(8,2) NOT NULL DEFAULT 0.00,
  `Prix_TTC` double(8,2) NOT NULL,
  `Ventes_id` bigint(20) UNSIGNED NOT NULL,
  `Pack_id` bigint(20) UNSIGNED DEFAULT NULL,
  `Articles_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type_vente_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ventes_details_ventes_id_foreign` (`Ventes_id`),
  KEY `ventes_details_pack_id_foreign` (`Pack_id`),
  KEY `ventes_details_articles_id_foreign` (`Articles_id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ventes_details`
--

INSERT INTO `ventes_details` (`id`, `Prix_HT`, `Qte`, `TVA`, `Remise`, `Prix_TTC`, `Ventes_id`, `Pack_id`, `Articles_id`, `type_vente_id`) VALUES
(28, 83000.00, 1, 15770, 200.00, 83000.00, 32, NULL, 22, 3),
(29, 26000.00, 1, 4940, 2.00, 26000.00, 32, 5, NULL, 4),
(30, 83000.00, 1, 15770, 0.00, 83000.00, 33, NULL, 22, 3),
(31, 415000.00, 1, 78850, 0.00, 415000.00, 33, 1, NULL, 1),
(32, 415000.00, 1, 78850, 0.00, 415000.00, 34, 2, NULL, 1),
(33, 83000.00, 1, 15770, 0.00, 83000.00, 34, NULL, 22, 3),
(34, 230000.00, 1, 43700, 0.00, 230000.00, 35, 17, NULL, 2),
(60, 415000.00, 1, 78850, 0.00, 415000.00, 65, 1, NULL, 1),
(61, 83000.00, 1, 15770, 0.00, 83000.00, 65, NULL, 22, 3),
(62, 415000.00, 1, 78850, 0.00, 415000.00, 66, 1, NULL, 1),
(63, 83000.00, 1, 15770, 0.00, 83000.00, 66, NULL, 22, 3),
(64, 80000.00, 1, 15200, 0.00, 80000.00, 66, 7, NULL, 4);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_type_ventes_id_foreign` FOREIGN KEY (`Type_ventes_id`) REFERENCES `type_ventes` (`id`);

--
-- Contraintes pour la table `packs`
--
ALTER TABLE `packs`
  ADD CONSTRAINT `pack_type_ventes_id_foreign` FOREIGN KEY (`Type_ventes_id`) REFERENCES `type_ventes` (`id`);

--
-- Contraintes pour la table `pack_articles`
--
ALTER TABLE `pack_articles`
  ADD CONSTRAINT `pack_articles_articles_id_foreign` FOREIGN KEY (`Articles_id`) REFERENCES `articles` (`id`),
  ADD CONSTRAINT `pack_articles_pack_id_foreign` FOREIGN KEY (`Pack_id`) REFERENCES `packs` (`id`);

--
-- Contraintes pour la table `ventes_details`
--
ALTER TABLE `ventes_details`
  ADD CONSTRAINT `ventes_details_articles_id_foreign` FOREIGN KEY (`Articles_id`) REFERENCES `articles` (`id`),
  ADD CONSTRAINT `ventes_details_pack_id_foreign` FOREIGN KEY (`Pack_id`) REFERENCES `packs` (`id`),
  ADD CONSTRAINT `ventes_details_ventes_id_foreign` FOREIGN KEY (`Ventes_id`) REFERENCES `ventes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
