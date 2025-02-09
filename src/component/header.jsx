export default function Header(){
    console.log(import.meta.env.VITE_JSONBIN_API_KEY)
    console.log(import.meta.env.VITE_JSONBIN_BIN_ID)
    return(
        <header className="font-serif font-medium italic text-center text-3xl text-[#DAA520] pt-6">
            <h1>XV</h1>
            <h1>Najú</h1>
        </header>
    )
}