const organizarConsultas = (arr) => {
    let arrayConsultaOrdenada = [];
    let sectores = arr;
    let _secciones = [];
    for (let i in sectores) {
        let zonas = sectores[i].zones;
        for (let j in zonas) {
            let secciones = zonas[j].sections
            _secciones.push(zonas[j].sections)
            for (let k in secciones) {
                let filas = secciones[k].rows;
                for (let l in filas) {
                    let asientos = filas[l].seats;
                    for (let m in asientos) {
                        arrayConsultaOrdenada.push({
                            sector: sectores[i].sectorClass.name,
                            zona: zonas[j].zoneClass.name,
                            seccion: secciones[k].sectionClass.name,
                            fila: filas[l].rowNumber,
                            columna: asientos[m].column,
                            asiento: asientos[m].seatNumber,
                            disponible: asientos[m].isAvailableSeat
                        })
                    }
                }
            }
        }
    }

    return _secciones;
}

export default organizarConsultas