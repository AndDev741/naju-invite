import { useState, useEffect } from "react";
import Header from "../component/header";
import { getInvites, saveInvite } from "../component/api";

export default function Confirmation(){
    const [invites, setInvites] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        const invites = async () => {
            const nomesObtidos = await getInvites();
            setInvites(nomesObtidos);
          };
          invites();
    }, [])

    const handleAddInvite = async () => {
        if (name === "") return;

        await saveInvite(name);
        setInvites([...invites, name]);
        setName(""); 
    };

    return(
        <>
            <Header/>
            <main className="min-h-[100vh] flex flex-col items-center mt-8 font-serif">
                <h2 className="text-white text-2xl mb-3">
                    Confirmar Presença
                </h2>
                <div className="flex flex-col items-center w-[80vw] border-2 border-[#DAA520] py-3 rounded-md">
                    <h2 className="text-[#DAA520] text-2xl font-medium">Nome</h2>

                    <input className="bg-gray-300 rounded-md text-center my-3 py-1 text-lg"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>

                    <button onClick={handleAddInvite}
                    type="button" class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 cursor-pointer"> 
                        Confirmar
                    </button>

                    <p className="text-xl text-white text-center">
                        Dia 15 de março <br/>
                    às 19:00</p>
                </div>
                <h2 className="text-[#DAA520] text-2xl my-3">Convidados</h2>
                <ul>
                    {invites.map((name, index) => (
                    <li className="text-white list-disc" 
                    key={index}>{name}</li>
                    ))}
                </ul>
            </main> 
        </>
    )
}