import Header from "../component/header";

export default function GiftSugestion(){
    const giftListParfum = [
        {name: "Egeo  Choc",  description: "Oboticário"},
        {name: "Egeo Red", description: "Oboticário"},
        {name: "Egeo dolce", description: "Oboticário"},
        {name: "Egeo Vanilla", description: "Oboticário"},
        {name: "Floratta Red", description: 'Oboticário'},
        {name: "Lily", description: "Oboticário"},
        {name: "Viagem Encantada", description: "Oboticário"},
        {name: "Creme Corporal", description: "Oboticário"},
        {name: "Coffe Woman Seduction", description: 'Oboticário'},
    ]

    const giftListClothes = [
        {name: "Blusa", description: "P/M"},
        {name: "Cropped", description: "P/M"},
        {name: "Short", description: "36-38 ou M"},
        {name: "Calça", description: "36/38 ou M"},
        {name: "Vestido", description: "P/M"},
        {name: "Jaqueta", description: "(Jeans / Couro"},
        {name: "Tênis", description: "37/38"},
        {name: "Havaianas ", description: "37/38"},
        {name: "Bolsa ou mochila", description: ""},
        {name: "Anel", description: "De preferência de Prata"},
        {name: "Rasteirinha", description: "37/38"},
        {name: "Colar", description: "De preferência de Prata"},
        {name: "Pulseira", description: "De preferência de Prata"},
        {name: "Camisa do Corinthians", description: "P/M"},
    ]

    const giftListAutocare = [
        {name: "GLOSS", description: "LIPHONEY"},
        {name: "GLOSS", description: "GLOSSLICIOUS "},
        {name: "Gelatina ", description: "Salon Line"},
        {name: "Creme de pentear", description: "Salon Line"},
        {name: "Shampoo e Condionador", description: "Eudora/Oboticário"},
        {name: "Máscara de Hidratação/Nutrição/Restauração", description: "Eudora/Oboticário"},
        {name: "Kit de skincare", description: "hidratantes, máscaras faciais"},
    ]
    return(
        <>
            <Header/>
            <main className="flex flex-col items-center mt-12 min-h-[100vh]">
                <h2 className="text-white text-2xl">Sugestão de presentes</h2>
                <h3 className="text-[#DAA520] text-2xl mt-6 mb-2">Perfumaria</h3>
                <div className="flex flex-wrap items-center justify-center text-center text-[#DAA520] w-[90vw] border-2 border-[#DAA520]">
                    {giftListParfum.map((gift, index) => (
                        <div key={index} className="border-1 border-white rounded-md m-2 p-2">
                            <h4 className="font-medium text-[#FFBB10]">{gift.name}</h4>
                            <h4>{gift.description}</h4>
                        </div>
                    ))}
                </div>

                <h3 className="text-[#DAA520] text-2xl mt-6 mb-2">Vestuário</h3>
                <div className="flex flex-wrap items-center justify-center text-center text-[#DAA520] w-[90vw] border-2 border-[#DAA520]">
                    {giftListClothes.map((gift, index) => (
                        <div key={index} className="border-1 border-white rounded-md m-2 p-2">
                            <h4 className="font-medium text-[#FFBB10]">{gift.name}</h4>
                            <h4>{gift.description}</h4>
                        </div>
                    ))}
                </div>

                <h3 className="text-[#DAA520] text-2xl mt-6 mb-2">Autocuidado</h3>
                <div className="flex flex-wrap items-center justify-center text-center text-[#DAA520] w-[90vw] border-2 border-[#DAA520] mb-3">
                    {giftListAutocare.map((gift, index) => (
                        <div key={index} className="border-1 border-white rounded-md m-2 p-2">
                            <h4 className="font-medium text-[#FFBB10]">{gift.name}</h4>
                            <h4>{gift.description}</h4>
                        </div>
                    ))}
                </div>
                <p className="text-white mb-4 underline">Calçados e Roupas com opção de Troca</p>
            </main>
        </>
    )
}