CREATE TABLE IF NOT EXISTS endereco (
    id SERIAL PRIMARY KEY,
    rua VARCHAR(255) NOT NULL,
    numero INTEGER,
    complemento TEXT,
    bairro VARCHAR(255)
);

INSERT INTO enderecos (rua, numero, bairro) VALUES ('Rua das Flores', 10, 'Centro');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Rua das Flores', 25, 'Vila Nova');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Rua das Palmeiras', 45, 'Jardim Primavera');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Rua das Palmeiras', 67, 'Alto da Serra');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Avenida Brasil', 1200, 'Centro');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Avenida Brasil', 1305, 'Bairro Industrial');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Rua do Sol', 88, 'Vila do Sol');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Rua do Sol', 95, 'Jardim Estrela');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Travessa Esperança', 7, 'Centro Histórico');
INSERT INTO enderecos (rua, numero, bairro) VALUES ('Travessa Esperança', 15, 'Bairro Antigo');