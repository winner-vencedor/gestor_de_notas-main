
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function SettingsPage() {
  return (
    <div className=" p-8 flex justify-center">
      <Card className="w-full max-w-3xl shadow-md rounded-2xl">
        <CardHeader>
          <h2 className="text-2xl font-bold text-orange-600">Configurações do Usuário</h2>
        </CardHeader>
        <CardContent className="space-y-8">
        
          <section>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Informações Pessoais</h3>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/avatar-placeholder.png"
                alt="Foto do usuário"
                width={100}
                height={100}
                className="rounded-full border-2 border-gray-700"
              />
              <Button variant="outline"   className="bg-orange-200 text-white hover:bg-orange-700 ">Alterar Foto</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2  placeholder:text-gray-500/70">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Ex: João Silva" />
              </div>
              <div className="flex flex-col gap-2  placeholder:text-gray-500/70">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Ex: joao@email.com" />
              </div>
            </div>
          </section>

        
          <section>
            <h3 className="text-lg font-semibold mb-4  text-orange-600">Segurança</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2  placeholder:text-gray-500/70">
                <Label htmlFor="senha-atual">Senha Atual</Label>
                <Input id="senha-atual" type="password" placeholder="••••••••" />
              </div>
              <div className="flex flex-col gap-2  placeholder:text-gray-500/70">
                <Label htmlFor="nova-senha">Nova Senha</Label>
                <Input id="nova-senha" type="password" placeholder="••••••••" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2  placeholder:text-gray-500/70">
                <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                <Input id="confirmar-senha" type="password" placeholder="••••••••" />
              </div >
            </div>
          </section>

         
          <section>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">Informações da Instituição</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-2  placeholder:text-gray-500/70">
                <Label htmlFor="instituicao">Instituição</Label>
                <Input id="instituicao" placeholder="Ex: Kieto" />
              </div>
              <div className="flex flex-col gap-2  placeholder:text-gray-500/70">
                <Label htmlFor="cargo">Cargo/Função</Label>
                <Input id="cargo" placeholder="Ex: Estudante" />
              </div>
              <div className="flex flex-col gap-2  placeholder:text-gray-500/70">
                <Label htmlFor="data">Data de Registro</Label>
                <Input id="data" type="date" />
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <Button className="bg-orange-200 hover:bg-orange-700 text-white">
              Salvar Alterações
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
