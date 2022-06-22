const organizarConsultas = (sectors) => {
    let sections = [];
    for (const sector of sectors) {
        for (const zone of sector.zones) {
            for (const section of zone.sections) {
                sections.push({
                    name: section._id,
                    id: `${sector._id} ${zone._id} ${section._id}`,
                    path: section.svgUrl
                    })
            }
        }
    }
    
    return sections;
}

export default organizarConsultas