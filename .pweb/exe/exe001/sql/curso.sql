CREATE TABLE IF NOT EXISTS curso (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

INSERT INTO curso (nome, descricao) VALUES 
    ('Banco de Dados', 'Fundamentos e administração de bancos de dados relacionais'),
    ('Programação em Python', 'Introdução à linguagem Python e automação de processos'),
    ('Redes de Computadores', 'Conceitos básicos e avançados de redes e segurança'),
    ('Inteligência Artificial', 'Fundamentos de Machine Learning e Deep Learning'),
    ('Desenvolvimento Mobile', 'Criação de aplicativos para Android e iOS');
