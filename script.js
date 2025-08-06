
    // Tu script original
    const pokemonAcutal = { normal: 0.0, fuego: 0.0, agua: 0.0, planta: 0.0, electrico: 0.0, hielo: 0.0, lucha: 0.0, veneno: 0.0, tierra: 0.0, volador: 0.0, psiquico: 0.0, bicho: 0.0, roca: 0.0, fantasma: 0.0, dragon: 0.0, siniestro: 0.0, acero: 0.0, hada: 0.0 };
    const efectividades = {
        acero: { normal: "0", fuego: "-1", agua: "-1", planta: "0", electrico: "-1", hielo: "+1", lucha: "0", veneno: "0", tierra: "0", volador: "0", psiquico: "0", bicho: "0", roca: "+1", fantasma: "0", dragon: "0", siniestro: "0", acero: "-1", hada: "+1" },
        volador: { normal: "0", fuego: "0", agua: "0", planta: "+1", electrico: "-1", hielo: "0", lucha: "+1", veneno: "0", tierra: "0", volador: "0", psiquico: "0", bicho: "+1", roca: "-1", fantasma: "0", dragon: "0", siniestro: "0", acero: "-1", hada: "0" },
        agua: { normal: "0", fuego: "+1", agua: "-1", planta: "-1", electrico: "0", hielo: "0", lucha: "0", veneno: "0", tierra: "+1", volador: "0", psiquico: "0", bicho: "0", roca: "+1", fantasma: "0", dragon: "-1", siniestro: "0", acero: "0", hada: "0" },
        hielo: { normal: "0", fuego: "-1", agua: "-1", planta: "+1", electrico: "0", hielo: "-1", lucha: "0", veneno: "0", tierra: "+1", volador: "+1", psiquico: "0", bicho: "0", roca: "0", fantasma: "0", dragon: "+1", siniestro: "0", acero: "-1", hada: "0" },
        planta: { normal: "0", fuego: "-1", agua: "+1", planta: "-1", electrico: "0", hielo: "0", lucha: "0", veneno: "-1", tierra: "+1", volador: "-1", psiquico: "0", bicho: "-1", roca: "+1", fantasma: "0", dragon: "-1", siniestro: "0", acero: "-1", hada: "0" },
        bicho: { normal: "0", fuego: "-1", agua: "0", planta: "+1", electrico: "0", hielo: "0", lucha: "-1", veneno: "-1", tierra: "0", volador: "-1", psiquico: "+1", bicho: "0", roca: "0", fantasma: "-1", dragon: "0", siniestro: "+1", acero: "-1", hada: "-1" },
        electrico: { normal: "0", fuego: "0", agua: "+1", planta: "-1", electrico: "-1", hielo: "0", lucha: "0", veneno: "0", tierra: "-10", volador: "+1", psiquico: "0", bicho: "0", roca: "0", fantasma: "0", dragon: "-1", siniestro: "0", acero: "0", hada: "0" },
        normal: { normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "0", veneno: "0", tierra: "0", volador: "0", psiquico: "0", bicho: "0", roca: "-1", fantasma: "-10", dragon: "0", siniestro: "0", acero: "-1", hada: "0" },
        roca: { normal: "0", fuego: "+1", agua: "0", planta: "0", electrico: "0", hielo: "+1", lucha: "-1", veneno: "0", tierra: "-1", volador: "+1", psiquico: "0", bicho: "+1", roca: "0", fantasma: "0", dragon: "0", siniestro: "0", acero: "-1", hada: "0" },
        tierra: { normal: "0", fuego: "+1", agua: "0", planta: "-1", electrico: "+1", hielo: "0", lucha: "0", veneno: "+1", tierra: "0", volador: "-10", psiquico: "0", bicho: "-1", roca: "+1", fantasma: "0", dragon: "0", siniestro: "0", acero: "+1", hada: "0" },
        fuego: { normal: "0", fuego: "-1", agua: "-1", planta: "+1", electrico: "0", hielo: "+1", lucha: "0", veneno: "0", tierra: "0", volador: "0", psiquico: "0", bicho: "+1", roca: "-1", fantasma: "0", dragon: "-1", siniestro: "0", acero: "+1", hada: "0" },
        lucha: { normal: "+1", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "+1", lucha: "0", veneno: "-1", tierra: "0", volador: "-1", psiquico: "-1", bicho: "-1", roca: "+1", fantasma: "-10", dragon: "0", siniestro: "+1", acero: "+1", hada: "-1" },
        hada: { normal: "0", fuego: "-1", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "+1", veneno: "-1", tierra: "0", volador: "0", psiquico: "0", bicho: "0", roca: "0", fantasma: "0", dragon: "+1", siniestro: "+1", acero: "-1", hada: "0" },
        psiquico: { normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "+1", veneno: "+1", tierra: "0", volador: "0", psiquico: "-1", bicho: "0", roca: "0", fantasma: "0", dragon: "0", siniestro: "-10", acero: "-1", hada: "0" },
        veneno: { normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "0", veneno: "-1", tierra: "-1", volador: "0", psiquico: "0", bicho: "0", roca: "-1", fantasma: "-1", dragon: "0", siniestro: "0", acero: "-10", hada: "+1" },
        dragon: { normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "0", veneno: "0", tierra: "0", volador: "0", psiquico: "0", bicho: "0", roca: "0", fantasma: "0", dragon: "+1", siniestro: "0", acero: "-1", hada: "-10" },
        fantasma: { normal: "-10", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "0", veneno: "0", tierra: "0", volador: "0", psiquico: "+1", bicho: "0", roca: "0", fantasma: "+1", dragon: "0", siniestro: "-1", acero: "0", hada: "0" },
        siniestro: { normal: "0", fuego: "0", agua: "0", planta: "0", electrico: "0", hielo: "0", lucha: "-1", veneno: "0", tierra: "0", volador: "0", psiquico: "+1", bicho: "0", roca: "0", fantasma: "+1", dragon: "0", siniestro: "-1", acero: "0", hada: "-1" }
    };
    function valorAMultiplicador(valor) {
        if (valor === 2) return 4; if (valor === 1) return 2; if (valor === 0) return 1; if (valor === -1) return 0.5; if (valor === -2) return 0.25; return 1;
    }
    function comparar(tipo1, tipo2) {
        const tipos = Object.keys(efectividades);
        const resultado = { x4: [], x2: [], neutro: [], "0.5": [], "0.25": [], inmune: [] };
        tipos.forEach(tipoAtaque => {
            const valor1 = Number(efectividades[tipoAtaque][tipo1]);
            const valor2 = tipo2 ? Number(efectividades[tipoAtaque][tipo2]) : 0;
            if (valor1 < -5 || valor2 < -5) { resultado.inmune.push(tipoAtaque); return; }
            const mult1 = valorAMultiplicador(valor1);
            const mult2 = valorAMultiplicador(valor2);
            const total = mult1 * mult2;
            if (total === 4) resultado.x4.push(tipoAtaque);
            else if (total === 2) resultado.x2.push(tipoAtaque);
            else if (total === 1) resultado.neutro.push(tipoAtaque);
            else if (total === 0.5) resultado["0.5"].push(tipoAtaque);
            else if (total === 0.25) resultado["0.25"].push(tipoAtaque);
        });
        Object.entries(resultado).forEach(([clave, tipos]) => { console.log(`${clave}: ${tipos.join(", ")}`); });
        return resultado;
    }
    
    // --- LÓGICA DEL BUSCADOR ---
    let listaTodosLosPokemon = [];
    const inputBuscador = document.getElementById('buscadorPokemon');
    const divSugerencias = document.getElementById('sugerencias');
    const traduccionTipos = {
        normal: "normal", fire: "fuego", water: "agua", grass: "planta", electric: "electrico", ice: "hielo", fighting: "lucha", poison: "veneno", ground: "tierra", flying: "volador", psychic: "psiquico", bug: "bicho", rock: "roca", ghost: "fantasma", dragon: "dragon", dark: "siniestro", steel: "acero", fairy: "hada"
    };

    // --- INICIO: CÓDIGO NUEVO PARA ESTADÍSTICAS ---
    const traduccionStats = {
        hp: "PS", attack: "Ataque", defense: "Defensa", "special-attack": "At. esp.", "special-defense": "Def. esp.", speed: "Velocidad"
    };
    function calcularPS(base, nivel, ivs, evs) {
        return Math.floor(((2 * base + ivs + Math.floor(evs / 4)) * nivel) / 100) + nivel + 10;
    }
    function calcularOtraStat(base, nivel, ivs, evs, naturaleza) {
        let stat = Math.floor(((2 * base + ivs + Math.floor(evs / 4)) * nivel) / 100) + 5;
        return Math.floor(stat * naturaleza);
    }
    // --- FIN: CÓDIGO NUEVO PARA ESTADÍSTICAS ---

    async function cargarListaPokemon() {
        try {
            const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
            if (!respuesta.ok) throw new Error('No se pudo cargar la lista de Pokémon');
            const data = await respuesta.json();
            listaTodosLosPokemon = data.results;
            console.log("Lista de Pokémon cargada:", listaTodosLosPokemon.length);
        } catch (error) {
            console.error("Error al cargar Pokémon:", error);
        }
    }
    inputBuscador.addEventListener('input', () => {
        const textoBusqueda = inputBuscador.value.toLowerCase();
        divSugerencias.innerHTML = '';
        if (textoBusqueda.length === 0) { return; }
        const pokemonsFiltrados = listaTodosLosPokemon.filter(pokemon =>
            pokemon.name.toLowerCase().startsWith(textoBusqueda)
        );
        pokemonsFiltrados.slice(0, 5).forEach(pokemon => {
            const sugerenciaItem = document.createElement('button');
            sugerenciaItem.type = 'button';
            sugerenciaItem.classList.add('list-group-item', 'list-group-item-action');
            sugerenciaItem.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            sugerenciaItem.addEventListener('click', () => {
                seleccionarPokemon(pokemon.name);
            });
            divSugerencias.appendChild(sugerenciaItem);
        });
    });

    async function seleccionarPokemon(nombrePokemon) {
        try {
            const nombreCapitalizado = nombrePokemon.charAt(0).toUpperCase() + nombrePokemon.slice(1);
            inputBuscador.value = nombreCapitalizado;
            divSugerencias.innerHTML = '';
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
            if (!respuesta.ok) throw new Error('Pokémon no encontrado');
            const data = await respuesta.json();

            // Lógica de tipos (original)
            const tiposPokemon = data.types.map(t => traduccionTipos[t.type.name]);
            const select1 = document.getElementById('tipo1');
            const select2 = document.getElementById('tipo2');
            select1.value = tiposPokemon[0];
            select1.dispatchEvent(new Event('change'));
            if (tiposPokemon.length > 1) {
                select2.disabled = false;
                select2.value = tiposPokemon[1];
            } else {
                select2.value = '';
                select2.disabled = true;
            }
            calcular();

            // --- INICIO: LÓGICA AÑADIDA PARA TABLA DE ESTADÍSTICAS ---
            const statsContainer = document.getElementById('stats-container');
            let totalBaseStats = 0;
            let tableRowsHTML = '';

            data.stats.forEach(statInfo => {
                const base = statInfo.base_stat;
                totalBaseStats += base;
                const statName = traduccionStats[statInfo.stat.name];
                const effort = statInfo.effort;

                const min50 = (statName === 'PS') ? calcularPS(base, 50, 0, 0) : calcularOtraStat(base, 50, 0, 0, 0.9);
                const max50 = (statName === 'PS') ? calcularPS(base, 50, 31, 252) : calcularOtraStat(base, 50, 31, 252, 1.1);
                const min100 = (statName === 'PS') ? calcularPS(base, 100, 0, 0) : calcularOtraStat(base, 100, 0, 0, 0.9);
                const max100 = (statName === 'PS') ? calcularPS(base, 100, 31, 252) : calcularOtraStat(base, 100, 31, 252, 1.1);
                
                let barClass = 'low';
                if (base >= 150) barClass = 'excellent';
                else if (base >= 110) barClass = 'high';
                else if (base >= 90) barClass = 'good';
                else if (base >= 60) barClass = 'medium';

                tableRowsHTML += `
                    <tr>
                        <td class="stat-name">${statName}</td>
                        <td><b>${base}</b></td>
                        <td>
                            <div class="stat-bar-container">
                                <div class="stat-bar ${barClass}" style="width: ${Math.min(100, base / 200 * 100)}%"></div>
                            </div>
                        </td>
                        <td>${min50}</td>
                        <td>${max50}</td>
                        <td>${min100}</td>
                        <td>${max100}</td>
                        <td>${effort}</td>
                    </tr>
                `;
            });
            
            statsContainer.innerHTML = `
                <table id="stats-table">
                    <thead>
                        <tr>
                            <th colspan="3">Características base</th>
                            <th colspan="2">Nivel 50</th>
                            <th colspan="2">Nivel 100</th>
                            <th>PE</th>
                        </tr>
                        <tr>
                            <td colspan="3"></td><td>Mín</td><td>Máx</td><td>Mín</td><td>Máx</td><td></td>
                        </tr>
                    </thead>
                    <tbody>${tableRowsHTML}</tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td><b>${totalBaseStats}</b></td>
                            <td colspan="6"></td>
                        </tr>
                    </tfoot>
                </table>
            `;
            // --- FIN: LÓGICA AÑADIDA ---

        } catch (error) {
            console.error("Error al seleccionar el Pokémon:", error);
        }
    }
    document.addEventListener('DOMContentLoaded', cargarListaPokemon);

    // --- TU LÓGICA ORIGINAL PARA LOS SELECTS Y EL CÁLCULO DE TIPOS ---
    const tipos = ["normal", "fuego", "agua", "planta", "electrico", "hielo", "lucha", "veneno", "tierra", "volador", "psiquico", "bicho", "roca", "fantasma", "dragon", "siniestro", "acero", "hada"].sort();
    const select1 = document.getElementById('tipo1');
    const select2 = document.getElementById('tipo2');
    tipos.forEach(tipo => {
        select1.innerHTML += `<option value="${tipo}">${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</option>`;
        select2.innerHTML += `<option value="${tipo}">${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</option>`;
    });
    select2.disabled = true;
    select1.addEventListener('change', function () {
        if (this.value) {
            select2.disabled = false;
            Array.from(select2.options).forEach(opt => {
                opt.disabled = opt.value === this.value && opt.value !== "";
            });
            if (select2.value === this.value) select2.value = "";
        } else {
            select2.disabled = true;
            select2.value = "";
        }
    });
    select2.addEventListener('change', function () {
        if (this.value === select1.value && this.value !== "") {
            alert("No puedes seleccionar el mismo tipo en ambos campos.");
            this.value = "";
        }
    });
    function crearChips(arr) {
        if (!arr.length) return "Ninguno";
        return arr.map(tipo => `<span class="tipo ${tipo}">${tipo.toUpperCase()}</span>`).join(" ");
    }
    function calcular() {
        const tipo1 = select1.value;
        const tipo2 = select2.value || undefined;
        if (!tipo1) {
            document.getElementById('tabla').innerHTML = "<div class='alert alert-warning'>Selecciona al menos un tipo.</div>";
            return;
        }
        if (tipo1 === tipo2 && tipo2) {
            document.getElementById('tabla').innerHTML = "<div class='alert alert-danger'>No puedes seleccionar el mismo tipo en ambos campos.</div>";
            return;
        }
        const resultado = comparar(tipo1, tipo2);
        document.getElementById('tabla').innerHTML = `
            <table class="table table-bordered table-hover align-middle mt-4" id="tablaResultado">
                <thead>
                    <tr>
                        <th>Daño recibido</th>
                        <th>Tipos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="x4">x4 <span>Superdébil a:</span></td><td>${crearChips(resultado.x4)}</td></tr>
                    <tr><td class="x2">x2 <span>Débil a:</span></td><td>${crearChips(resultado.x2)}</td></tr>
                    <tr><td class="neutro">- <span>Daño normal:</span></td><td>${crearChips(resultado.neutro)}</td></tr>
                    <tr><td class="x05">½ <span>Resistente a:</span></td><td>${crearChips(resultado["0.5"])}</td></tr>
                    <tr><td class="x025">¼ <span>Superresistente a:</span></td><td>${crearChips(resultado["0.25"])}</td></tr>
                    <tr><td class="inmune"><span>Inmune a:</span></td><td>${crearChips(resultado.inmune)}</td></tr>
                </tbody>
            </table>
            <div class="footer-note">
                Estas debilidades y resistencias corresponden a la última generación bajo condiciones normales de combate.
            </div>
            `;
    }
  