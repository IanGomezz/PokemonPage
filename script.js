const pokemonAcutal = {
  normal: 0.0,
  fuego: 0.0,
  agua: 0.0,
  planta: 0.0,
  electrico: 0.0,
  hielo: 0.0,
  lucha: 0.0,
  veneno: 0.0,
  tierra: 0.0,
  volador: 0.0,
  psiquico: 0.0,
  bicho: 0.0,
  roca: 0.0,
  fantasma: 0.0,
  dragon: 0.0,
  siniestro: 0.0,
  acero: 0.0,
  hada: 0.0
};
const efectividades = {
  acero: { // Cómo le afectan los ataques al tipo ACERO
    normal: "0", fuego: "-1", agua: "-1", planta: "0", electrico: "-1", hielo: "+1", lucha: "0", veneno: "0",
    tierra: "0", volador: "0", psiquico: "0", bicho: "0", roca: "+1", fantasma: "0", dragon: "0", siniestro: "0", acero: "-1", hada: "+1"
  },
  volador: { // Cómo le afectan los ataques al tipo VOLADOR
    normal: "0", fuego: "0", agua: "0", planta: "+1", electrico: "-1", hielo: "0", lucha: "+1", veneno: "0",
    tierra: "0", volador: "0", psiquico: "0", bicho: "+1", roca: "-1", fantasma: "0", dragon: "0", siniestro: "0", acero: "-1", hada: "0"
  },
  agua: { // Cómo le afectan los ataques al tipo AGUA
    normal: "0", fuego: "+1", agua: "-1", planta: "-1", electrico: "0", hielo: "0", lucha: "0", veneno: "0",
    tierra: "+1", volador: "0", psiquico: "0", bicho: "0", roca: "+1", fantasma: "0", dragon: "-1", siniestro: "0", acero: "0", hada: "0"
  },
  hielo: { // Cómo le afectan los ataques al tipo HIELO
    normal: "0", fuego: "-1", agua: "-1", planta: "+1", electrico: "0", hielo: "-1", lucha: "0", veneno: "0",
    tierra: "+1", volador: "+1", psiquico: "0", bicho: "0", roca: "0", fantasma: "0", dragon: "+1", siniestro: "0", acero: "-1", hada: "0"
  },
  planta: { // Cómo le afectan los ataques al tipo PLANTA
    normal: "0", fuego: "-1", agua: "+1", planta: "-1", electrico: "0", hielo: "0", lucha: "0", veneno: "-1",
    tierra: "+1", volador: "-1", psiquico: "0", bicho: "-1", roca: "+1", fantasma: "0", dragon: "-1", siniestro: "0", acero: "-1", hada: "0"
  },
  bicho: { // Cómo le afectan los ataques al tipo BICHO
    normal: "0", fuego: "-1", agua: "0", planta: "+1", electrico: "0", hielo: "0", lucha: "-1", veneno: "-1",
    tierra: "0", volador: "-1", psiquico: "+1", bicho: "0", roca: "0", fantasma: "-1", dragon: "0", siniestro: "+1", acero: "-1", hada: "-1"
  },
  electrico: { // Cómo le afectan los ataques al tipo ELÉCTRICO
    normal: "0", fuego: "0", agua: "+1", planta: "-1", electrico: "-1", hielo: "0", lucha: "0", veneno: "0",
    tierra: "-10", volador: "+1", psiquico: "0", bicho: "0", roca: "0", fantasma: "0", dragon: "-1", siniestro: "0", acero: "0", hada: "0"
  },
  normal: { // Cómo le afectan los ataques al tipo NORMAL
    normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "0", veneno: "0",
    tierra: "0", volador: "0", psiquico: "0", bicho: "0", roca: "-1", fantasma: "-10", dragon: "0", siniestro: "0", acero: "-1", hada: "0"
  },
  roca: { // Cómo le afectan los ataques al tipo ROCA
    normal: "0", fuego: "+1", agua: "0", planta: "0", electrico: "0", hielo: "+1", lucha: "-1", veneno: "0",
    tierra: "-1", volador: "+1", psiquico: "0", bicho: "+1", roca: "0", fantasma: "0", dragon: "0", siniestro: "0", acero: "-1", hada: "0"
  },
  tierra: { // Cómo le afectan los ataques al tipo TIERRA
    normal: "0", fuego: "+1", agua: "0", planta: "-1", electrico: "+1", hielo: "0", lucha: "0", veneno: "+1",
    tierra: "0", volador: "-10", psiquico: "0", bicho: "-1", roca: "+1", fantasma: "0", dragon: "0", siniestro: "0", acero: "+1", hada: "0"
  },
  fuego: { // Cómo le afectan los ataques al tipo FUEGO
    normal: "0", fuego: "-1", agua: "-1", planta: "+1", electrico: "0", hielo: "+1", lucha: "0", veneno: "0",
    tierra: "0", volador: "0", psiquico: "0", bicho: "+1", roca: "-1", fantasma: "0", dragon: "-1", siniestro: "0", acero: "+1", hada: "0"
  },
  lucha: { // Cómo le afectan los ataques al tipo LUCHA
    normal: "+1", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "+1", lucha: "0", veneno: "-1",
    tierra: "0", volador: "-1", psiquico: "-1", bicho: "-1", roca: "+1", fantasma: "-10", dragon: "0", siniestro: "+1", acero: "+1", hada: "-1"
  },
  hada: { // Cómo le afectan los ataques al tipo HADA
    normal: "0", fuego: "-1", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "+1", veneno: "-1",
    tierra: "0", volador: "0", psiquico: "0", bicho: "0", roca: "0", fantasma: "0", dragon: "+1", siniestro: "+1", acero: "-1", hada: "0"
  },
  psiquico: { // Cómo le afectan los ataques al tipo PSIQUICO
    normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "+1", veneno: "+1",
    tierra: "0", volador: "0", psiquico: "-1", bicho: "0", roca: "0", fantasma: "0", dragon: "0", siniestro: "-10", acero: "-1", hada: "0"
  },
  veneno: { // Cómo le afectan los ataques al tipo VENENO
    normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "0", veneno: "-1",
    tierra: "-1", volador: "0", psiquico: "0", bicho: "0", roca: "-1", fantasma: "-1", dragon: "0", siniestro: "0", acero: "-10", hada: "+1"
  },
  dragon: { // Cómo le afectan los ataques al tipo DRAGÓN
    normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "0", veneno: "0",
    tierra: "0", volador: "0", psiquico: "0", bicho: "0", roca: "0", fantasma: "0", dragon: "+1", siniestro: "0", acero: "-1", hada: "-10"
  },
  fantasma: { // Cómo le afectan los ataques al tipo FANTASMA
    normal: "-10", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "0", veneno: "0",
    tierra: "0", volador: "0", psiquico: "+1", bicho: "0", roca: "0", fantasma: "+1", dragon: "0", siniestro: "-1", acero: "0", hada: "0"
  },
  siniestro: { // Cómo le afectan los ataques al tipo SINIESTRO
    normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "-1", veneno: "0",
    tierra: "0", volador: "0", psiquico: "+1", bicho: "0", roca: "0", fantasma: "+1", dragon: "0", siniestro: "-1", acero: "0", hada: "-1"
  }
};
/**
 * Compara uno o dos tipos de Pokémon y devuelve un objeto con listas de efectividades.
 * @param {string} tipo1 - Primer tipo de Pokémon
 * @param {string} [tipo2] - Segundo tipo de Pokémon (opcional)
 * @returns {object} Listas de tipos agrupados por efectividad
 */
function valorAMultiplicador(valor) {
  if (valor === 2) return 4;
  if (valor === 1) return 2;
  if (valor === 0) return 1;
  if (valor === -1) return 0.5;
  if (valor === -2) return 0.25;
  return 1;
}

function comparar(tipo1, tipo2) {
  const tipos = Object.keys(efectividades);
  const resultado = {
    x4: [],
    x2: [],
    neutro: [],
    "0.5": [],
    "0.25": [],
    inmune: [] // Agregado para inmunidades
  };

  tipos.forEach(tipoAtaque => {
    const valor1 = Number(efectividades[tipoAtaque][tipo1]);
    const valor2 = tipo2 ? Number(efectividades[tipoAtaque][tipo2]) : 0;

    // Si alguno es menor que 5, es inmune
    if (valor1 < 5 || valor2 < 5) {
      resultado.inmune.push(tipoAtaque);
      return;
    }

    const mult1 = valorAMultiplicador(valor1);
    const mult2 = valorAMultiplicador(valor2);
    const total = mult1 * mult2;

    if (total === 4) resultado.x4.push(tipoAtaque);
    else if (total === 2) resultado.x2.push(tipoAtaque);
    else if (total === 1) resultado.neutro.push(tipoAtaque);
    else if (total === 0.5) resultado["0.5"].push(tipoAtaque);
    else if (total === 0.25) resultado["0.25"].push(tipoAtaque);
  });

  Object.entries(resultado).forEach(([clave, tipos]) => {
    console.log(`${clave}: ${tipos.join(", ")}`);
  });

  return resultado;
}





