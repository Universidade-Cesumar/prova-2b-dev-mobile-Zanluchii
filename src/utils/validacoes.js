export function validarRetirada(estoque, quantidadeRetirada) {
  const estoqueValido = Number.isFinite(estoque) && estoque >= 0;
  const retiradaValida = Number.isFinite(quantidadeRetirada) && quantidadeRetirada > 0;

  return estoqueValido && retiradaValida && quantidadeRetirada <= estoque;
}

export default validarRetirada;
