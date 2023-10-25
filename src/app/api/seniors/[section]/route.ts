import { NextResponse } from "next/server"



function getValues(page?: string) {
    let result = { slides: {}, price: {},generalInfo:{} }

    if (page == "femenino") {
        result.slides = getFemSlides()
        result.price = getFemPrice()
        result.generalInfo = getFemGeneralInfo()
    }else if (page == "masculino") {
        result.slides = getMascSlides()
        result.price = getMascPrice()
        result.generalInfo = getMascGeneralInfo()
    }else if (page == "touch") {
        result.slides = getTouchSlides()
        result.price = getTouchPrice()
        result.generalInfo = getTouchGeneralInfo()

    }


    return result

}


export async function GET(request: Request,
    { params }: { params: { section: string } }) {    
    let result = getValues(params.section)    
    return NextResponse.json(result)
}


function getFemSlides() {
    return [
        {
            type: "image",
            assetSrc: "/images/femenino/femCampeonas.jpg",
            assetAlt: "Campeonas rugby femenino",
            title: "SENIOR FEMENINO",
            description: "Nuestras campeonas de segunda división ahora jugarán en primera, con un amplio equipo federado compitiendo también en la liga de desarrollo femenina.",
            buttons: [
                {
                    text: "QUIERO APUNTARME",
                    color: "red",
                    variant: "filled",
                    url: "/",
                },
            ],
        }

    ];
}

function getMascSlides() {
    return [
        {
            type: "image",
            assetSrc: "/images/masculino/_DSC0848.jpg",
            assetAlt: "image 1",
            title: "SENIOR MASCULINO",
            description: "Nuestro senior masculino cuenta con más de 70 jugadores federados y compiten en la Tercera y Segunda División regional con 2 equipos.",
            muted: false,
            loop: false,
            buttons: [
                {
                    text: "QUIERO APUNTARME",
                    color: "red",
                    variant: "filled",
                    url: "/",
                },
            ],
        }

    ];
}
function getTouchSlides() {
    return [
        
        {
            type: "image",
            assetSrc: "/images/touch/DSC_0074.jpg",
            assetAlt: "image 1",
            title: "TOUCH",
            description: "Contamos con un equipo mixto de este deporte emergente sin contacto y más de 20 fichas federadas.",
            buttons: [
                {
                    text: "QUIERO APUNTARME",
                    color: "red",
                    variant: "filled",
                    url: "/",
                },
            ],
        }

    ];
}

function getMascPrice() {

    return {
        title: "Cuota Anual",
        subTitle:
            "¡Forma parte de nuestro equipo! Tu cuota anual cubre la inscripción en la Federación de Rugby de Madrid y una contribución al club.",
        description: "¡Ven y prueba nuestros entrenamientos sin ningún compromiso!",
        pricingCards: [
            
            {
                title: "Senior Masculino",
                price: ["€", "336"],
                priceSubTitle: "Temporada Completa",
                subTitle: "El pago se puede realizar en tres cuotas: la primera de 196€ y las dos siguientes de 70€ cada una.",
                options: [],
            },
        ],
    }

}

function getFemPrice() {

    return {
        title: "Cuota Anual",
        subTitle:
            "¡Forma parte de nuestro equipo! Tu cuota anual cubre la inscripción en la Federación de Rugby de Madrid y una contribución al club.",
        description: "¡Ven y prueba nuestros entrenamientos sin ningún compromiso!",
        pricingCards: [
            {
                title: "Ficha Promocion",
                price: ["€", "272"],
                priceSubTitle: "Temporada Completa",
                subTitle:
                    "Precio especial para chicas que nunca han tenido una ficha de rugby antes.",
                options: [],
            },
            {
                title: "Ficha Senior",
                price: ["€", "297"],
                priceSubTitle: "Temporada Completa",
                subTitle: "",
                options: [],
            },
        ],
    }

}
function getTouchPrice() {

    return {
        title: "Cuota Anual",
        subTitle:
            "¡Forma parte de nuestro equipo! Tu cuota anual cubre la inscripción en la Federación de Rugby de Madrid y una contribución al club.",
        description: "¡Ven y prueba nuestros entrenamientos sin ningún compromiso!",
        pricingCards: [
            {
                title: "Touch",
                price: ["€", "225"],
                priceSubTitle: "Temporada Completa",
                subTitle:
                    "El pago se puede realizar en tres cuotas: la primera de 85€ y las dos siguientes de 70€ cada una.",
                options: [],
            }
        ],
    }

}

function getTouchGeneralInfo() {
    return {
        imageUrl: "/images/touch/IMG_1297.jpg",
        imageAlt: "delive instant answers",
        title: "Entrenamientos",
        subTitle: "¡Únete a nuestro equipo de Touch! Entrenamos dos veces a la semana en el Campo de Rugby Los Arbolitos.",
        schedule: ["Miercoles de 20 a 22hs", "Viernes de 19 a 21hs"],
        btnText: "Cómo llegar?",
        btnLink: "https://goo.gl/maps/JYCdviXyggiir3xP8"
    }
}

function getMascGeneralInfo() {
    return {
        imageUrl: "/images/masculino/_DSC0825.jpg",
        imageAlt: "delive instant answers",
        title: "Entrenamientos",
        subTitle: "¡Únete a nuestro equipo senior Masculino! Entrenamos dos veces a la semana en el Campo de Rugby Los Arbolitos.",
        schedule: ["Martes de 20 a 22hs", "Jueves de 21 a 23hs"],
        btnText: "Cómo llegar?",
        btnLink: "https://goo.gl/maps/JYCdviXyggiir3xP8"
    }
}
function getFemGeneralInfo() {
    return {
        imageUrl: "/images/femenino/IMG_9829.JPG",
        imageAlt: "delive instant answers",
        title: "Entrenamientos",
        subTitle: "¡Únete a nuestro equipo senior femenino! Entrenamos dos veces a la semana en el Campo de Rugby Los Arbolitos.",
        schedule: ["Martes de 21 a 23hs", "Jueves de 20 a 22hs"],
        btnText: "Cómo llegar?",
        btnLink: "https://goo.gl/maps/JYCdviXyggiir3xP8"
    }
}