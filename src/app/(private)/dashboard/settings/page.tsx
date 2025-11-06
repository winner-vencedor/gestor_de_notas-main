export default function Settings() {
  return (
    <div className="flex  w-full h-full gap-6 px-4 md:px-8 py-5 bg-lieaar-to-b from-orange-50/30 to-white">
     <aside className="w-64 bg-white rounded-xl focus-within:outline-0  p-5 space-y-4  ">
        <h1 className="text   font-bold">Configurações</h1>
        <nav className="flex flex-col space-y-2">
          <button className="text-left hover:bg-orange-200  p-2 -rounder: rounded-2xl font-bold text-sm   ">Perfil</button>
          <button className="text-left hover:bg-orange-200  p-2 -rounder: rounded-2xl font-bold text-sm   ">Conta</button>
          <button className="text-left hover:bg-orange-200  p-2 -rounder: rounded-2xl font-bold text-sm   ">Preferências</button>
          <button className="text-left hover:bg-orange-200  p-2 -rounder: rounded-2xl font-bold text-sm   ">Acadêmico</button>
          <button className="text-left hover:bg-orange-200  p-2 -rounder: rounded-2xl font-bold text-sm   ">Ajuda</button>
        </nav>
      </aside>
{/* 
        <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">Informações pessoais</h2>

        <form className="grid grid-cols-2 gap-6 max-w-3xl">
          <div>
            <label className="block font-medium mb-1">Nome completo</label>
            <input className="border p-2 rounded w-full" placeholder="Ex: João da Silva" />
          </div>

          <div>
            <label className="block font-medium mb-1">Número de estudante</label>
            <input className="border p-2 rounded w-full" value="2025-00123" disabled />
          </div>

          <div>
            <label className="block font-medium mb-1">Data de nascimento</label>
            <input type="date" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block font-medium mb-1">E-mail</label>
            <input type="email" className="border p-2 rounded w-full" />
          </div>

          <div className="col-span-2 text-right">
            <button className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700">
              Salvar alterações
            </button>
          </div>
        </form>
      </main> */}
    </div>
  );
}
