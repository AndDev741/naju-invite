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
                    <Map  defaultCenter={[-16.7585, -49.2643]} defaultZoom={15} metaWheelZoom={true}>
                        <Marker width={50} anchor={[-16.7585, -49.2643]} />
                        <ZoomControl />
                    </Map>
                </div>
                <p className="text-center text-white text-lg">
                Av. Independência, Qd 29 - Lt 01 - Jardim Mont Serrat, Aparecida de Goiânia - GO, 74917-490, Brasil
                </p>
                <a className="underline text-xl text-[#DAA520]" 
                href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place//data%3D!4m2!3m1!1s0x935efa0cc86b8839:0x5fc33cb9f0ec1840%3Fsa%3DX%26ved%3D1t:8290%26ictx%3D111&ved=2ahUKEwinpqH9u8WLAxWgUMMIHV2lAYgQ4kB6BAhJEAM&usg=AOvVaw22ArXuMY9vf2uzW9bmib5R"
                target="_blank">
                    Veja no google maps</a>
            </main>
        </>
    )
}