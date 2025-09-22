INSERT INTO person (name, info_route) 
VALUES
    ('Obito', 'characters/obito'),
    ('Minato', 'characters/minato'),
    ('Neji', 'characters/neji');

INSERT INTO village (name, info_route) 
VALUES
    ('Aldeia da Folha', 'villages/folha'),
    ('Aldeia da Pedra', 'villages/pedra'),
    ('Aldeia da Névoa', 'villages/nevoa');

INSERT INTO clan (name, info_route)
VALUES
    ('Uchiha', 'clans/uchiha'),
    ('Namikaze', 'clans/namikaze'),
    ('Hyuga', 'clans/hyuga');

INSERT INTO skill (name, info_route)
VALUES
    ('Kamui', 'skills/kamui'),
    ('Hiraishin no Justu', 'skills/hiraishin'),
    ('Byakugan', 'skiils/byakugan');

INSERT INTO person_skill (person_id, skill_id)
VALUES (1, 1), (2, 2), (3, 3);


SELECT * FROM person;
SELECT * FROM village;
SELECT * FROM clan;
SELECT * FROM skill;