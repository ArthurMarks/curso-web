-- Personagens
INSERT INTO character (id, name)
VALUES
    (1, 'Ashura-Otsutsuki'),
    (2, 'Asuma-Sarutobi'),
    (3, 'Danzou'),
    (4, 'Fugaku-Uchiha'),
    (5, 'Gaara'),
    (6, 'Hagoromo-Otsutsuki'),
    (7, 'Hamura-Otsutsuki'),
    (8, 'Hashirama-Senju'),
    (9, 'Hinata-Hyuga'),
    (10, 'Hiruzen-Sarutobi'),
    (11, 'Indra-Otsutsuki'),
    (12, 'Ino-Yamanaka'),
    (13, 'Itachi-Uchiha'),
    (14, 'Izuna-Uchiha'),
    (15, 'Jiraya'),
    (16, 'Kakashi-Hatake'),
    (17, 'Kankuro'),
    (18, 'Kiba-Inuzuka'),
    (19, 'Konan'),
    (20, 'Konohamaru-Sarutobi'),
    (21, 'Kushina-Uzumaki'),
    (22, 'Madara-Uchiha'),
    (23, 'MightGuy'),
    (24, 'Minato'),
    (25, 'Nagato-Uzumaki'),
    (26, 'Naruto-Uzumaki'),
    (27, 'Neji-Hyuga'),
    (28, 'Obito-Uchiha'),
    (29, 'Onoki'),
    (30, 'Orochimaru'),
    (31, 'Rin'),
    (32, 'Rock-Lee'),
    (33, 'Sai'),
    (34, 'Sakumo-Hatake'),
    (35, 'Sakura'),
    (36, 'Sasuke-Uchiha'),
    (37, 'Shikamaru-Nara'),
    (38, 'Shisui-Uchiha'),
    (39, 'Temari'),
    (40, 'Tobirama-Senju'),
    (41, 'Tsunade-Senju');

-- Clãs
INSERT INTO clan (id, name)
VALUES
    (1, 'clan_hatake'),
    (2, 'clan_hyuga'),
    (3, 'clan_inuzuka'),
    (4, 'clan_nara'),
    (5, 'clan_otsutsuki'),
    (6, 'clan_sarutobi'),
    (7, 'clan_senju'),
    (8, 'clan_uchiha'),
    (9, 'clan_uzumaki'),
    (10, 'clan_yamanaka');

-- Vilas
INSERT INTO village (id, name)
VALUES
    (1, 'Amegakure(Vila da Chuva)'),
    (2, 'Iwagakure(Vila da Pedra)'),
    (3, 'Kirigakure(Vila da Névoa)'),
    (4, 'Konohagakure(Vila da Folha)'),
    (5, 'Kumogakure(Vila da Nuvem)'),
    (6, 'Sunagakure(Vila da Areia)'),
    (7, 'Uzushigakure(Vila do Redemoinho)');

-- Habilidades
INSERT INTO skill (id, name, type_skill)
VALUES
    (1, 'byakugan', 'doujutsu'),
    (2, 'devastação_planetaria_catastrofica', 'ninjutsu'),
    (3, 'doujutsu(habilidades_oculares)', 'doujutsu'),
    (4, 'escudo_de_Shukaku', 'ninjutsu'),
    (5, 'esferas_da_verdade','kekkei_moura'),
    (6, 'flecha_de_indra', 'ninjutsu'),
    (7, 'golem_de_pedra', 'ninjutsu'),
    (8, 'jutsu_bola_de_fogo', 'ninjutsu'),
    (9, 'jutsu_caixao_de_areia', 'ninjutsu'),
    (10, 'jutsu_chama_destruidora_majestosa' ,'ninjutsu'),
    (11, 'jutsu_chidori_dos_seis_caminhos', 'ninjutsu'),
    (12, 'jutsu_clone_das_sombras', 'ninjutsu'),
    (13, 'jutsu_clone_de_areia', 'ninjutsu'),
    (14, 'jutsu_clone_de_madeira', 'ninjutsu'),
    (15, 'jutsu_clone_de_raio', 'ninjutsu'),
    (16, 'jutsu_das_chamas_negras', 'ninjutsu'),
    (17, 'jutsu_das_multiplas_espirais_de_vento', 'ninjutsu'),
    (18, 'jutsu_das_verdadeiras_mil_maos', 'senjutsu'),
    (19, 'jutsu_dragao_de_agua', 'ninjutsu'),
    (20, 'jutsu_dragao_de_fogo', 'ninjutsu'),
    (21, 'jutsu_dragao_de_madeira', 'ninjutsu'),
    (22, 'jutsu_esfera_de_vacuo', 'ninjutsu'),
    (23, 'jutsu_flor_de_fenix', 'ninjutsu'),
    (24, 'jutsu_humano_de_madeira', 'ninjutsu'),
    (25, 'jutsu_lanca_de_chidori', 'ninjutsu'),
    (26, 'jutsu_nascimento_do_mundo_das_arvores', 'ninjutsu'),
    (27, 'jutsu_prisao_medieval', 'ninjutsu'),
    (28, 'jutsu_prisão_cúpula_de_terra', 'ninjutsu'),
    (29, 'jutsu_tubarao_de_agua', 'ninjutsu'),
    (30, 'kekkei_genkai(habilidades_por_heranca_sanguinea)', 'kekkei_genkai'),
    (31, 'kirin', 'ninjutsu'),
    (32, 'mangekyou_sharingan', 'doujutsu'),
    (33, 'mangekyou_sharingan_eterno', 'doujutsu'),
    (34, 'mudanca_de_chakra(ninjutsu)', 'ninjutsu'),
    (35, 'raikiri', 'ninjutsu'),
    (36, 'rasengan', 'ninjutsu'),
    (37, 'rasenshuriken', 'ninjutsu'),
    (38, 'reencarnação_impura', 'ninjutsu'),
    (39, 'repulsao_celestial', 'senjutsu'),
    (40, 'rinne_sharingan', 'kekkei_moura'),
    (41, 'rinnegan', 'doujutsu'),
    (42, 'senjutsu', 'senjutsu'),
    (43, 'sharingan', 'doujutsu'),
    (44, 'shiden', 'ninjutsu'),
    (45, 'susanoo', 'kekkei_genkai'),
    (46, 'tenseigan', 'doujutsu');

-- Relação clã-personagem

INSERT INTO clan_character (clan_id, character_id)
VALUES
    (5, 1), -- Clã Ōtsutsuki
    (5, 6),
    (5, 7),
    (5, 11),
    (6, 2), -- Clã Sarutobi
    (6, 10),
    (6, 20),
    (8, 4), -- Clã Uchiha
    (8, 13),
    (8, 14),
    (8, 22),
    (8, 28),
    (8, 36),
    (8, 38),
    (7, 8), -- Clã Senju
    (7, 40),
    (7, 41),
    (2, 9), -- Clã Hyuga
    (2, 27),
    (10, 12), -- Clã Yamanaka
    (1, 16), -- Clã Hatake
    (1, 34),
    (3, 18), -- Clã Inuzuka
    (9, 21), -- Clã Uzumaki
    (9, 25),
    (9, 26),
    (4, 37); -- Clã Nara

-- Relação clã-habilidade

INSERT INTO clan_skill (clan_id, skill_id)
VALUES
    (2, 1), -- Clã Hyuga
    (5, 2), -- Clã Otsutsuki
    (5, 5),
    (5, 39),
    (5, 40),
    (5, 41),
    (5, 46),
    (8, 16), -- Clã Uchiha
    (8, 32),
    (8, 33),
    (8, 43),
    (8, 45);

-- Relação personagem-habilidade

INSERT INTO character_skill (character_id, skill_id) 
VALUES
    (1, 18), -- Ashura Otsutsuki
    (1, 17),
    (1, 42),
    (1, 34),
    (2, 34), -- Asuma Sarutobi
    (3, 34), -- Danzou
    (4, 43), -- Fugaku Uchiha
    (4, 32),
    (4, 34),
    (5, 4), -- Gaara
    (5, 9),
    (5, 13),
    (5, 34),
    (6, 41), -- Hagoromo Otsutsuki
    (6, 5),
    (6, 42),
    (6, 34),
    (7, 46), -- Hamura Otsutsuki
    (7, 42),
    (7, 34),
    (8, 18), -- Hashirama Senju
    (8, 26),
    (8, 21),
    (8, 24),
    (8, 42),
    (8, 34),
    (9, 1), -- Hinata Hyuga
    (9, 34),
    (10, 34), -- Hiruzen Sarutobi
    (11, 32), -- Indra Otsutsuki
    (11, 6),
    (11, 34),
    (12, 34), -- Ino Yamanaka
    (13, 32), -- Itachi Uchiha
    (13, 45),
    (13, 16),
    (13, 23),
    (13, 8),
    (13, 34),
    (14, 43), -- Izuna Uchiha
    (14, 32),
    (14, 34),
    (15, 42), -- Jiraya
    (15, 34),
    (16, 43), -- Kakashi Hatake
    (16, 35),
    (16, 15),
    (16, 29),
    (16, 34),
    (17, 34), -- Kankuro
    (18, 34), -- Kiba Inuzuka
    (19, 34), -- Konan
    (20, 34), -- Konohamaru Sarutobi
    (21, 34), -- Kushina Uzumaki
    (22, 33), -- Madara Uchiha
    (22, 41),
    (22, 45),
    (22, 32),
    (22, 23),
    (22, 8),
    (22, 34),
    (23, 34), -- Might Guy
    (24, 36), -- Minato
    (24, 34),
    (25, 41), -- Nagato Uzumaki
    (25, 39),
    (25, 2),
    (25, 34),
    (26, 36), -- Naruto Uzumaki
    (26, 37),
    (26, 12),
    (26, 42),
    (26, 34),
    (27, 1), -- Neji Hyuga
    (27, 34),
    (28, 32), -- Obito Uchiha
    (28, 12),
    (28, 41),
    (28, 34),
    (29, 34), -- Onoki
    (30, 34), -- Orochimaru
    (31, 34), -- Rin
    (32, 34), -- Rock Lee
    (33, 34), -- Sai
    (34, 34), -- Sakumo Hatake
    (35, 34), -- Sakura
    (36, 33), -- Sasuke Uchiha
    (36, 41),
    (36, 45),
    (36, 11),
    (36, 25),
    (36, 44),
    (36, 31),
    (36, 20),
    (36, 34),
    (37, 34), -- Shikamaru Nara
    (38, 32), -- Shisui Uchiha
    (38, 43),
    (38, 34),
    (39, 34), -- Temari
    (40, 19), -- Tobirama Senju
    (40, 22),
    (40, 38),
    (40, 34),
    (41, 34); -- Tsunade Senju

-- Consultas

SELECT * FROM character;
SELECT * FROM village;
SELECT * FROM clan;
SELECT * FROM skill;
SELECT * FROM clan_character;
SELECT * FROM clan_skill;
SELECT * FROM character_skill;

-- Exclusão (ZONA DE PERIGO)

DELETE FROM character;
DELETE FROM village;
DELETE FROM clan;
DELETE FROM skill;
DELETE FROM clan_character;
DELETE FROM clan_skill;
DELETE FROM character_skill;