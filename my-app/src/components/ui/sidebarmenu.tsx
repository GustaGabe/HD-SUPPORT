'use client'
import Optionside from "./optionside";
import IconChart from "./iconChart";
import IconDash from "./icondash";
import { useRouter } from "next/navigation";
import IconTable from "./icontable";
import IconChat from "./iconchat";
import { Button } from "./button";
import axios from 'axios';
import { useEffect, useState } from "react";
interface Option{
    title: string;
    svg: React.FC;
    path: string;
}

import { motion } from 'framer-motion';



const SidebarMenu: React.FC = () => {


const handleEmprestimo = () =>{
    router.push("/emprestimo")
}

const handleFuncionario = () =>{
    router.push("/funcionario")
}
const handleEquipamento = () =>{
    router.push("/equipamento")
}
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
    const toggleOpcoes = () => {
        setMostrarOpcoes(!mostrarOpcoes);
      };

    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => { 
      setDarkMode(!darkMode); 
  
      const newMode = !darkMode;
  
      setDarkMode(newMode);
  
      localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled')
  } 
  
  useEffect(() => {
  
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'enabled'){
      setDarkMode(true);
    }
  },
  
  []);



    

    const router = useRouter();
    const redirectTo = (path: string) => () => {
        router.push(path);
    }
    const option: Option[] = [
        {
            title: 'Painel',
            svg: IconDash,
            path: '/dashmenu',
        },
        {
            title: 'Gráficos',
            svg: IconChart,
            path: '/graficos',
        },
        {
            title: 'Chamados',
            svg: IconChat,
            path: '/chat',
        },
    ]
    const setAuthToken = (token: any) => {
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          localStorage.setItem('token', token);
        } else {
          delete axios.defaults.headers.common['Authorization'];
          localStorage.removeItem('token');
        }
      };
    const handleLogout = () => {
        setAuthToken(null);
        router.push('/');
      };
      
      const handleProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`https://hd-api.azurewebsites.net/api/Usuario/BuscarTokenJWT?token=${token}`);
            const userData = response.data;
            console.log('Dados do usuário:', userData);
            // Aqui você pode fazer algo com os dados recebidos, como redirecionar para a página de perfil com os dados do usuário
            router.push({
                pathname: '/Profile',
                state: { userData: userData }
            });
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
        }
    };
    
    

    return(
        <div className={`${darkMode && "dark"}`}>
            <div className="h-[90vh] ml-2 w-[180px] dark:border-black bg-black dark:bg-white dark:text-black border-2 rounded-[14px] border-slate-50">
            <header className="flex items-center dark:border-black border-slate-50 justify-center border-b-2 p-[20px]">
                <h1 className="font-bold text-slate-50 dark:text-black flex relative left-2 text-2xl">
                    Help Desk
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket-takeoff text-slate-50 dark:text-neutral-950 relative bottom-1" viewBox="0 0 16 16">
                        <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532"/>
                        <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z"/>
                        <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"/>
                    </svg>
                </h1>
            </header>
            <div className="mt-5 dark:text-black">
                 <div className="h-[500px] dark:text-black space-y-6 flex flex-col items-center">
                    {option.map((item) => (
                        <Optionside  key={item.title} title={item.title} svg={item.svg} path={item.path} />
                    ))}

<div className="flex dark:border-black cursor-pointer space-x-3 mt-3 w-[full] border-2 justify-center rounded-[10px] items-center border-slate-50 text-white p-[10px]">
                            <IconTable/>
                            <button className="text-white  dark:text-black w-[100px] font-bold" onClick={toggleOpcoes}>Tabela</button>
                        </div>
                       <motion.div
                        initial={{ opacity: 0, y: -20 }} // Define o estado inicial da animação
                        animate={{ opacity: mostrarOpcoes ? 1 : 0, y: mostrarOpcoes ? 0 : -20 }} // Define o estado de animação atual
                        transition={{ duration: 0.3 }} // Define a duração da transição da animação
                       >
                       {mostrarOpcoes && (
                                 <div className="flex justify-center border-2  darK:border-black rounded items-center flex-col">
                            <div className="flex  cursor-pointer  space-x-3  w-4/5 justify-center rounded-[10px] items-center  text-white p-[15px]">
                            
                                <button onClick={handleEmprestimo} className="text-white  dark:text-black w-[100px] font-bold">Empréstimo</button>
                            </div>
                            <div className="flex cursor-pointer w-4/5   space-x-3 mt-3   justify-center rounded-[10px] items-center  text-white p-[15px]">
                            
                                <button onClick={handleEquipamento} className="text-white  dark:text-black text-sm font-bold">Equipamento</button>
                            </div>
                            <div className="flex  cursor-pointer w-4/5   space-x-3 mt-3   justify-center rounded-[10px] items-center  text-white p-[15px]">
                            
                                <button onClick={handleFuncionario} className="text-white  dark:text-black w-[100px] font-bold">Funcionário</button>
                            </div>
                            
                            </div>
                        )}
                       </motion.div>
                </div>
            </div>
            <div className="flex justify-between  w-full relative top-4">
                <Button onClick={handleProfile} className="w-[90px] border-none shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round text-white dark:text-black"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                </Button>
                <Button onClick={handleLogout}  className="w-[90px] shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-red-800 lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                </Button>
            </div>           
        </div>
        </div>
    );
}

export default SidebarMenu;