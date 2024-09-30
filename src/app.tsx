import { useState } from "react"
import { User, KeyRound, Eye, Undo2, Headset, EyeOff, MessageCircle, Mail, Phone, X } from "lucide-react"

export function App() {

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false)

  function changeToModalLogin() {
    setIsModalLoginOpen(!isModalLoginOpen)
  } 
  
  function turnPasswordVisible() {
    setIsPasswordVisible(!isPasswordVisible)
  }

  function openModalSupport() {
    setIsSupportModalOpen(!isSupportModalOpen)
  }

  return (
    <div className="h-screen">
      {isModalLoginOpen ? ( // 4 listras - tela login
        <div className="h-screen">   
          <div className=" flex justify-end h-full -z-10 pr-10">
            <div className="top-0 h-full w-32 mr-2 bg-azul-500"></div>
            <div className="top-0 h-full w-32 mr-2 bg-azul-600"></div>
            <div className="top-0 h-full w-32 mr-2 bg-azul-700"></div>
            <div className="top-0 h-full w-32 mr-2 bg-azul-800"></div>
          </div>
        </div>
       ) : ( // 8 listras - tela acessar
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
        </div>
      )}

      {isModalLoginOpen ? ( // modal login
      <div>
        <div className="flex justify-start items-center fixed top-0 left-[10%] w-full h-full z-0">
          <img src="/SESI-SENAI-LOGO.png" alt="Senai e Sesi - juntos pela industria" className="w-[750px] h-auto"/>
        </div>
        <div className="flex justify-end items-center fixed top-0 right-20 w-full h-full z-0">
          <div className="flex justify-center items-center flex-col bg-white bg-opacity-95 w-[650px] h-[800px] rounded-3xl p-5 relative">
            <button className="z-10 top-7 left-7 absolute ">
              <Undo2 onClick={changeToModalLogin} className="text-zinc-400 hover:text-blue-800"></Undo2>
            </button>
            <button className="z-10 top-7 right-7 absolute ">
              <Headset onClick={openModalSupport} className="text-zinc-400 hover:text-blue-800"></Headset>
            </button>
            <h3 className="text-6xl text-azul-600 font-extrabold">Login</h3>
            <form className="mt-16 mb-16">
              <div className="mb-6">
                <label htmlFor="username" className="block mb-1 text-xl font-medium text-black">Usuário: </label>
                <div className=" flex items-center w-[400px] h-20 rounded-lg bg-slate-200">
                  <User className="fixed z-10 ml-5"></User>
                  <input type="text" id="username" className="w-[400px] h-20 rounded-lg bg-transparent px-14" placeholder="Informe o nome de usuário"/>
                </div>
              </div>
              <div className="mb-1">
                <label htmlFor="password" className="block mb-1 text-xl font-medium text-black">Senha: </label>
                <div className=" flex items-center w-[400px] h-20 rounded-lg bg-slate-200">
                  <KeyRound className="fixed z-10 ml-5"></KeyRound>
                  <input type={isPasswordVisible ? "text" : "password"} id="password" className="w-[400px] h-20 rounded-lg bg-transparent px-14 " placeholder="Digite a senha"/>
                  
                    <button type="button" onClick={turnPasswordVisible} className="fixed z-10 ml-[348px]">
                      {isPasswordVisible ? (
                        <Eye/>
                      ) : (
                        <EyeOff/>
                      )}
                    </button>
                </div>
              </div>
              <a href="#" className="flex justify-end mb-5">esqueceu a senha?</a>
              <button type="submit" className="w-[400px] h-20 rounded-lg bg-azul-600 hover:bg-azul-700 text-4xl text-white">Entrar</button>
            </form>
          </div>
        </div>
        {isSupportModalOpen && (
          <div className='fixed z-30 inset-0 bg-black/60 flex items-center justify-center'>
            <div className="flex justify-center items-center flex-col bg-white bg-opacity-95 w-[500px] rounded-lg p-5 relative">
              <button onClick={openModalSupport} className="z-30 top-4 right-4 absolute">
                <X/>
              </button>
              <h1 className="flex justify-center text-2xl text-azul-600 font-semibold mb-4  ">Fale Conosco</h1>
              <div className="space-y-2 mb-5">
                <div className="flex items-center space-x-2">
                <Mail/>
                  <p > E-mail: </p>
                  <p>sesisenai_support@sesisenai.org.br</p>
                </div>
                <div className="flex items-center space-x-2">
                <MessageCircle/>
                  <p> Whatsapp: </p>
                  <p>(47) 91234-1234</p>
                </div>
                <div className="flex items-center space-x-2">
                <Phone/>
                  <p> Telefone: </p>
                  <p>0800 123 1234</p>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="SESI-SENAI-LOGO-2.png" alt="SESI SENAI LOGO"/>
              </div>
            </div>
          </div>
        )}
      </div>
      ) : ( // modal acessar
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full z-0">
          <div className="flex justify-center items-center flex-col bg-white bg-opacity-95 w-[1000px] h-[600px] p-5 relative gap-12">
            <img src="/SNG-LOGO.png" alt="Sistema de Gestão do Negocio"/>
            <h3 className="text-2xl text-azul-600 font-semibold">Clique para acessar.</h3>
            <button onClick={changeToModalLogin} className="w-[450px] h-16 bg-azul-600 hover:bg-azul-700 text-4xl text-white">Acessar</button>
          </div>
        </div>
      )}
    </div>
  )
}
