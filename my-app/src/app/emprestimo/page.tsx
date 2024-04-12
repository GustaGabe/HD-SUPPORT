"use client"
import { useState } from 'react';
import {Trash2} from "lucide-react";
import {PencilLine } from "lucide-react";
import {FolderPlus} from "lucide-react";
import { FolderKanban } from 'lucide-react';
import SidebarMenu from '@/components/ui/sidebarmenu';

const Emprestimo = () => {

	{/*Abrir Adicionar*/}
	const [isOpenAdd, setIsOpenAdd] = useState(false);

	const openModalAdd = () => {
		setIsOpenAdd(true);
	};

	const closeModalAdd = () => {
		setIsOpenAdd(false);
	};

	{/*Abrir Edit*/}
	const [isOpenEdit, setIsOpenEdit] = useState(false);

	const openModalEdit = () => {
		setIsOpenEdit(true);
	};

	const closeModalEdit = () => {
		setIsOpenEdit(false);
	};

	{/*Abrir detalhes*/}
	const [isOpenDetail, setIsOpenDetail] = useState(false);

	const openModalDetail = () => {
		setIsOpenDetail(true);
	};

	const closeModalDetail = () => {
		setIsOpenDetail(false);
	};
	{/*Abrir Comfirmar Excluir*/}
	const [isOpenComfirmDel, setIsOpenComfirmDel] = useState(false);

	const openModalComfirmDel = () => {
		setIsOpenComfirmDel(true);
	};

	const closeModalComfirmDel = () => {
		setIsOpenComfirmDel(false);
	};

	return(
		<div className="flex items-center justify-center w-full h-full">
            	<SidebarMenu/>
			<div className="w-[1300px] h-[500px] bg-black rounded-[5px] border-2 border-white">
				<div className="w-full flex items-center justify-between p-[20px] px-[40px] bg-black to-sky-200 rounded-t-md mb-[10px]">
					<div>
						<h1 className="text-[24px] text-white">Gerenciar <b>Emprestimos</b></h1>
					</div>
					<div className="space-x-2 flex items-center">
						{/*<button className="bg-[#dc3545] px-[10px] py-[8px] rounded-[5px] text-[14px] flex"> <Trash2 className="mr-[5px]"/> Excluir</button>*/}
						<button className="bg-gradient-to-r from-blue-800 to-cyan-500 px-[10px] py-[8px] rounded-[5px] text-[14px] flex" onClick={openModalAdd}> <FolderPlus className="mr-[5px]"/> Adicionar novo Emprestimo</button>
					</div>
				</div>
				<table className="text-black w-full bg-black">
					<thead className="h-[45px] text-blue-500">
						<tr className="">
							<th className="w-[20%]" scope="col">Nome</th>
							<th className="w-[20%]" scope="col">Email</th>
							<th className="w-[20%]" scope="col">Endereços</th>
							<th className="w-[20%]" scope="col">Telefone</th>
							<th className="w-[20%]" scope="col">Ações</th>
						</tr>
					</thead>
					{/*linha dados do crud*/}
					<tbody className="text-white">
						<tr className="h-[50px] border-y border-blue-300">
							<td className=" text-center mr-2">Walter</td>
							<td className=" text-center mr-2">walter[potma@gmail.com]</td>
							<td className=" text-center mr-2">Rua pontal do sul, 222</td>
							<td className=" text-center mr-2">(41) 99861-9825</td>
							<td className="flex justify-center mt-[10px]">
								<button onClick={openModalComfirmDel}><Trash2 className="text-blue-700"/></button>
								<button onClick={openModalDetail}><FolderKanban className="text-sky-600 ml-[8px]"/></button>
								<button onClick={openModalEdit}><PencilLine className="text-cyan-500 ml-[8px] "/></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				{isOpenAdd && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
						<div className="bg-white p-4 pt-6 px-6 rounded-lg w-[400px] ">
							<div className='flex justify-between'> 
								<h1 className='text-black text-[20px]'>Cadastro de Emprestimo</h1>
								<button onClick={closeModalAdd} className=" bg-red-500 hover:bg-red-600 text-white py-0 px-3 rounded-lg float-right">x</button>
							</div>
							<form >
								<div className="mb-4 mt-6">
								<input type="text" id="nome" name="nome" className="form-input mt-1 block w-full bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Nome'/>
								</div>
								<div className="mb-4">
								<input type="email" id="email" name="email" className="form-input mt-1 block w-full  bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Email'/>
								</div>
								<div className="mb-4">
								<input type="password" id="senha" name="senha" className="form-input mt-1 block w-full  bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite sua Senha'/>
								</div>
								<div className="mb-4">
								<input type="text" id="telefone" name="telefone" className="form-input mt-1 block w-full  bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Telefone'/>
								</div>
								<div className="mb-4">
								<input type="text" id="cargo" name="cargo" className="form-input mt-1 block w-full  bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Cargo'/>
								</div>
								<div className='flex justify-center'>
									<button type="submit" className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white py-2 px-4 rounded-lg w-full mt-2">Enviar</button>
								</div>
							</form>
						</div>
					</div>
				)}
    		</div>
			<div>
				{isOpenEdit && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-white p-4 pt-6 px-6 rounded-lg w-[400px] ">
							<div className='flex justify-between'> 
								<h1 className='text-black text-[20px]'>Editar Emprestimo</h1>
								<button onClick={closeModalEdit} className=" bg-red-500 hover:bg-red-600 text-white py-0 px-3 rounded-lg float-right">x</button>
							</div>
							<form >
								<div className="mb-4 mt-6">
								<input type="text" id="nome" name="nome" className="form-input mt-1 block w-full bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Nome'/>
								</div>
								<div className="mb-4">
								<input type="email" id="email" name="email" className="form-input mt-1 block w-full  bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Email'/>
								</div>
								<div className="mb-4">
								<input type="password" id="senha" name="senha" className="form-input mt-1 block w-full  bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite sua Senha'/>
								</div>
								<div className="mb-4">
								<input type="text" id="telefone" name="telefone" className="form-input mt-1 block w-full  bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Telefone'/>
								</div>
								<div className="mb-4">
								<input type="text" id="cargo" name="cargo" className="form-input mt-1 block w-full  bg-gray-100 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Cargo'/>
								</div>
								<div className='flex justify-center'>
									<button type="submit" className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white py-2 px-4 rounded-lg w-full mt-2">Enviar</button>
								</div>
							</form>
						</div>
					</div>
				)}
    		</div>
			<div>
				{isOpenDetail && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
						<div className="bg-white p-4 px-6 rounded-lg w-[600px] ">
							<div className='flex justify-between mb-5 items-center'>
								<h1 className='text-black text-[21px]'>Detalhes Emprestimo</h1>
								<button onClick={closeModalDetail} className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg float-right">x</button>
							</div>
							<div className=" flex flex-col text-gray-700">
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
							</div>
						</div>
					</div>
				)}
    		</div>
			<div>
				{isOpenComfirmDel && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-white p-8 rounded-lg">
						<h2 className="text-lg font-semibold mb-4 text-black">Tem Certeza que deseja Excluir o Emprestimo?</h2>
						<div className='flex justify-center px-[20px]'>
							<button onClick={closeModalComfirmDel} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-lg">Cancelar</button>
							<button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-3 px-5 rounded-lg ml-6">Comfirmar</button>
						</div>
					</div>
					</div>
				)}
    		</div>
		</div>
	);
};


export default Emprestimo;