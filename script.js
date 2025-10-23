function createMission(nazwaMisji, typMisji) {

    return {
        nazwa: nazwaMisji,
        typ: typMisji,
        zaloga: ["badacz asteryoidów", "lekarz"],
        spszet: ["latarka", "c4", "laptop"],
        dystans: 0,
        zapasy: 100
    }

}

const misja = createMission("Ekspedycja na księżyc", "Badawcze")


function dodanieDoZalogi(misja, zaloga) {
    misja.zaloga.push(zaloga)
}

function dodanieSprzetu(misja, spszet) {
    misja.spszet.push(spszet)
}


function mirzenieDystansu(misja) {
    const Odleglosc = misja.dystans
    misja.dystans = Odleglosc + 20
}

function iloscZapasow(misja) {
    const Ilosc = misja.zapasy
    zapasy.dystans = Ilosc + 20
}





function wyswetlMisje(misja) {
    // console.log(misja)
    // console.log("*** RAPORT MISJI: " + misja.nazwa + " ***")
    console.log(`
        *** RAPORT MISJI: ${misja.nazwa} ***
        Typ misji: ${misja.typ}
        Przebyty dystans: ${misja.dystans}
        Pozostałe zapasy: ${misja.zapasy}

        --- ZAŁOGA ---
        ${misja.zaloga}
        

        --- SPRZĘT W ŁADOWNI ---
        ${misja.spszet}

        `)

}



// console.log(misja);

// console.log("*** RAPORT MISJI: " + misja.nazwa + " ***")
wyswetlMisje(misja)