create table todos (
    id serial primary key,
    title varchar(255) not null,
    description text,
    completed boolean default false,
    user_id integer references users(id),
    created_at timestamp default current_timestamp
);

INSERT INTO todos (title, description, user_id) VALUES
  ('Comprar produtos', 'Comprar leite, ovos, pão e frutas no supermercado.', 1),
  ('Finalizar relatório do projeto', 'Concluir o rascunho final do relatório trimestral do projeto.', 2),
  ('Chamar encanador', 'Agendar uma visita para consertar a pia da cozinha que está vazando.', 3),
  ('Planejar viagem de fim de semana', 'Pesquisar destinos e acomodações para a viagem de fim de semana.', 4),
  ('Ler um livro', 'Terminar de ler o romance atual antes de segunda-feira.', 5),
  ('Sessão de treino', 'Comparecer à sessão de treino na academia às 18h.', 6),
  ('Organizar espaço de trabalho', 'Limpar a mesa e organizar arquivos para melhor produtividade.', 7),
  ('Enviar faturas', 'Preparar e enviar faturas para clientes por trabalhos concluídos.', 8),
  ('Atualizar currículo', 'Adicionar experiência de trabalho recente e habilidades ao currículo.', 9),
  ('Agendar consulta odontológica', 'Ligar para a clínica odontológica e agendar uma consulta.', 10);
