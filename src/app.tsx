export function App() {
  return (
    <div className="h-screen">
      <div className=" flex justify-end h-full -z-10 pr-2">
        <div className="top-0 h-full w-32 mr-2 bg-azul-500"></div>
        <div className="top-0 h-full w-32 mr-2 bg-azul-500"></div>
        <div className="top-0 h-full w-32 mr-2 bg-azul-600"></div>
        <div className="top-0 h-full w-32 mr-2 bg-azul-600"></div>
        <div className="top-0 h-full w-32 mr-2 bg-azul-700"></div>
        <div className="top-0 h-full w-32 mr-2 bg-azul-700"></div>
        <div className="top-0 h-full w-32 mr-2 bg-azul-800"></div>
        <div className="top-0 h-full w-32 mr-2 bg-azul-800"></div>
      </div>
      <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full z-0">
        <div className="flex justify-center items-center flex-col bg-white bg-opacity-95 w-[1000px] h-[600px] p-5 relative gap-12">
          <button className="w-10 h-10 top-5 right-5 absolute rounded-full bg-white text-3xl text-zinc-400 border border-zinc-400 hover:text-zinc-600 hover:border-zinc-600">?</button>
          <button className="w-10 h-10 top-5 right-[70px] absolute rounded-full bg-white text-3xl text-zinc-400 border border-zinc-400 hover:text-zinc-600 hover:border-zinc-600">S</button>
          <img src="/SNG PNG.png" alt="Sistema de Gestão do Negocio"/>
          <h3 className="text-2xl text-azul-600 font-semibold">Clique para acessar.</h3>
          <button className="w-[450px] h-16 bg-azul-600 hover:bg-azul-700 text-4xl text-white">Acessar</button>
        </div>
      </div>
    </div>
  )
}
