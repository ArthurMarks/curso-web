CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    info_route VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT NOW()
);

CREATE TABLE village (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    info_route VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT NOW()
);

CREATE TABLE clan (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    info_route VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT NOW()
);

CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    info_route VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT NOW()
);

CREATE TABLE person_skill (
    id SERIAL PRIMARY KEY,
    person_id INTEGER,
    skill_id INTEGER,
    FOREIGN KEY (person_id) REFERENCES person(id),
    FOREIGN KEY (skill_id) REFERENCES skill(id)
);

CREATE TABLE clan_person (
    id SERIAL PRIMARY KEY,
    clan_id INTEGER,
    person_id INTEGER,
    FOREIGN KEY (clan_id) REFERENCES clan(id),
    FOREIGN KEY (person_id) REFERENCES person(id)
);

CREATE TABLE clan_skill (
    id SERIAL PRIMARY KEY,
    clan_id INTEGER,
    skill_id INTEGER,
    FOREIGN KEY (clan_id) REFERENCES clan(id),
    FOREIGN KEY (skill_id) REFERENCES skill(id)
);