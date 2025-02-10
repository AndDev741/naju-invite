import Header from "../component/header";
import { useState, useEffect } from "react";
import { getInvites } from "../component/api";

export default function Invites(){
    const [invites, setInvites] = useState([]);

    useEffect(() => {
            const invites = async () => {
                const invitesFromCloud = await getInvites();
                setInvites(invitesFromCloud);
              };
              invites();
        }, [])
    return(
        <>
            <Header/>
            <main className="flex flex-col items-center min-h-[100vh]">
                <h2 className="text-[#DAA520] text-2xl my-4">Convidados</h2>
                <ul>
                    {invites.map((invite, index) => (
                        <li key={index} className="text-white list-disc">
                            {invite}
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}