import Header from "../component/header";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function Location(){
    return(
        <>
            <Header/>
            <main className="flex flex-col items-center mt-8 min-h-[100vh]">
                <h2 className="text-white text-2xl mb-3">
                    Localização
                </h2>
                <div className="flex items-center justify-center w-[90vw] h-[300px] md:w-[700px] md:h-[400px] mb-5 md:mb-0">
                    <Map  defaultCenter={[-16.8103, -49.2973]} defaultZoom={15} metaWheelZoom={true}>
                        <Marker width={50} anchor={[-16.8103, -49.2973]} />
                        <ZoomControl />
                    </Map>
                </div>
                <p className="text-center text-white text-lg">
                Alameda Dona Gercina Borges, Qd K-41, chácara 6 - Bairro Independência, Aparecida de Goiânia - GO, 74967-470
                </p>
                <a className="underline text-xl text-[#DAA520]" 
                href="https://www.google.com/maps/place/Espa%C3%A7o+De+Eventos+Princesa/@-16.8106132,-49.2982534,17.29z/data=!4m6!3m5!1s0x935ef9ce347f7d09:0x71bcfaa31423bd21!8m2!3d-16.8103732!4d-49.2969748!16s%2Fg%2F11l6x0vzk6?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank">
                    Veja no google maps</a>
            </main>
        </>
    )
}