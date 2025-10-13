CREATE TABLE IF NOT EXISTS character (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS village (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS clan (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS skill (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type_skill VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS character_skill (
    id SERIAL PRIMARY KEY,
    character_id INTEGER,
    skill_id INTEGER,
    FOREIGN KEY (character_id) REFERENCES character(id),
    FOREIGN KEY (skill_id) REFERENCES skill(id)
);

CREATE TABLE IF NOT EXISTS clan_character (
    id SERIAL PRIMARY KEY,
    clan_id INTEGER,
    character_id INTEGER,
    FOREIGN KEY (clan_id) REFERENCES clan(id),
    FOREIGN KEY (character_id) REFERENCES character(id)
);

CREATE TABLE IF NOT EXISTS clan_skill (
    id SERIAL PRIMARY KEY,
    clan_id INTEGER,
    skill_id INTEGER,
    FOREIGN KEY (clan_id) REFERENCES clan(id),
    FOREIGN KEY (skill_id) REFERENCES skill(id)
);