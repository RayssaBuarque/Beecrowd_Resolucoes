/*
  SELECT BÁSICO

  Sua empresa está fazendo um levantamento de quantos clientes estão cadastrados nos estados, porém, faltou levantar os dados do estado do Rio Grande do Sul.
  Então você deve Exibir o nome de todos os clientes cujo estado seja ‘RS’.

  TABELAS E ESQUEMAS: https://www.beecrowd.com.br/judge/pt/problems/view/2602
*/

select name from customers where state = 'RS';
