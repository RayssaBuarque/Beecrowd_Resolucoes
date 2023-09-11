/*
  NENHUMA LOCAÇÃO

  A locadora pretende fazer uma promoção para os clientes que ainda não fizeram nenhuma locação.
  Seu trabalho é nos entregar o ID e o nome dos clientes que não realizaram nenhuma locação. Ordene a saída por ID.

ESQUEMAS E TABELAS: https://www.beecrowd.com.br/judge/pt/problems/view/2616
*/

SELECT c.id, c.name FROM customers c
    LEFT JOIN locations l ON c.id = l.id_customers
    WHERE l.id_customers IS NULL;
