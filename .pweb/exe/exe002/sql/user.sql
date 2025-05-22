create table users (
    id serial primary key,
    username varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);

INSERT INTO users (username, email, password) VALUES
    ('joao123', 'joao123@example.com', 'senha123'),
    ('maria456', 'maria456@example.com', 'senha456'),
    ('pedro789', 'pedro789@example.com', 'senha789'),
    ('ana1011', 'ana1011@example.com', 'senha1011'),
    ('carlos1213', 'carlos1213@example.com', 'senha1213'),
    ('julia1415', 'julia1415@example.com', 'senha1415'),
    ('gabriel1617', 'gabriel1617@example.com', 'senha1617'),
    ('sofia1819', 'sofia1819@example.com', 'senha1819'),
    ('lucas2021', 'lucas2021@example.com', 'senha2021'),
    ('beatriz2223', 'beatriz2223@example.com', 'senha2223');