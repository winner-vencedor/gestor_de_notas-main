"use client";
import { FeatureCard } from "@/components/feature-card";
import { PricingCard } from "@/components/pricing-card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  LineChart,
  ShieldCheck,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-linear-to-b from-orange-50 to-white text-gray-800">
      <header className="flex items-center justify-between px-8 py-5 border-b border-orange-100 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2 text-orange-600 font-bold text-xl">
          <GraduationCap className="size-6" />
          <span>Gestor de Notas</span>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-orange-600 transition">
            Funcionalidades
          </a>
          <a href="#about" className="hover:text-orange-600 transition">
            Sobre
          </a>
          <a href="#pricing" className="hover:text-orange-600 transition">
            Planos
          </a>
          <a href="#contact" className="hover:text-orange-600 transition">
            Contato
          </a>
        </nav>

        <div className="flex gap-3">
          <Link href="/login">
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Entrar
            </Button>
          </Link>
          <Link href="/cadastro">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Cadastrar
            </Button>
          </Link>
        </div>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-24 gap-10">
        <div className="flex flex-col gap-6 text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Simplifique o controle das suas{" "}
            <span className="text-orange-600">notas e desempenho</span>.
          </h1>
          <p className="text-gray-600 text-lg">
            O <strong>Gestor de Notas</strong> ajuda estudantes a organizarem
            suas instituições, disciplinas e avaliações com praticidade e
            inteligência. Um painel moderno e automatizado para acompanhar seu
            progresso escolar como nunca antes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/cadastro">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-6">
                Começar agora
              </Button>
            </Link>
            <Link href="#pricing">
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-6"
              >
                Ver planos
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full">
          {/* <img
            src="/illustration-dashboard.svg"
            alt="Painel ilustrativo"
            className="w-[380px] md:w-[500px] drop-shadow-md"
          /> */}
        </div>
      </section>

      <section id="features" className="px-10 md:px-20 py-20 bg-orange-50/60">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Funcionalidades principais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="text-orange-600 size-8 mb-3" />}
            title="Gestão de Instituições"
            desc="Organize suas escolas e turmas, mantendo um histórico centralizado de notas e médias."
          />
          <FeatureCard
            icon={<LineChart className="text-orange-600 size-8 mb-3" />}
            title="Análise de Desempenho"
            desc="Veja gráficos e estatísticas que mostram sua evolução ao longo do tempo."
          />
          <FeatureCard
            icon={<ShieldCheck className="text-orange-600 size-8 mb-3" />}
            title="Segurança e Privacidade"
            desc="Todos os seus dados são protegidos com autenticação moderna e criptografia."
          />
          <FeatureCard
            icon={<Layers className="text-orange-600 size-8 mb-3" />}
            title="Organização Inteligente"
            desc="Trimestres, semestres e disciplinas em uma estrutura simples e automatizada."
          />
          <FeatureCard
            icon={<Users className="text-orange-600 size-8 mb-3" />}
            title="Perfil Personalizado"
            desc="Gerencie seu perfil, histórico e desempenho de forma prática e visual."
          />
          <FeatureCard
            icon={<Sparkles className="text-orange-600 size-8 mb-3" />}
            title="Interface Responsiva"
            desc="Design adaptável e fluido em qualquer dispositivo — computador, tablet ou celular."
          />
        </div>
      </section>

      <section id="about" className="px-10 md:px-20 py-28 bg-white">
        <div className="max-w-5xl space-y-10">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight text-center">
              Muito mais que um{" "}
              <span className="text-orange-600">sistema de notas</span> - é a
              sua jornada de aprendizado visualizada.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-full text-justify">
              O <strong>Gestor de Notas</strong> nasceu com o propósito de
              transformar a forma como os alunos acompanham seu desempenho. Em
              vez de planilhas confusas e cálculos manuais, o sistema oferece
              uma experiência fluida e inteligente — permitindo que você
              visualize seu progresso acadêmico de maneira prática e
              inspiradora.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed max-w-full text-justify">
              Com ele, é possível registrar instituições, disciplinas e
              avaliações, calcular médias automáticas por trimestre ou semestre
              e acompanhar sua evolução ao longo do tempo com clareza e
              precisão. Tudo pensado para que o aluno se concentre no que
              realmente importa:
              <span className="font-semibold text-orange-600">
                {" "}
                aprender e evoluir
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center pt-10">
            <div className="bg-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl text-center font-bold text-orange-600">
                +2.000
              </h3>
              <p className="text-gray-700 text-center text-sm mt-1">
                Alunos utilizando diariamente
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl text-center font-bold text-orange-600">
                98%
              </h3>
              <p className="text-gray-700 text-center text-sm mt-1">
                Taxa de satisfação dos usuários
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl text-center font-bold text-orange-600">
                100%
              </h3>
              <p className="text-gray-700 text-center text-sm mt-1">
                Controle do seu progresso acadêmico
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-10 md:px-20 py-24 bg-orange-50/60">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Planos e Preços
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Escolha o plano ideal para você. Todos incluem segurança,
            praticidade e suporte rápido.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Básico"
              price="Gratuito"
              desc="Perfeito para alunos que querem começar a organizar suas notas."
              features={[
                "Cadastro de até 2 instituições",
                "Controle trimestral e semestral",
                "Cálculo automático de médias",
                "Interface responsiva",
              ]}
            />

            <PricingCard
              title="Premium"
              price="R$19/mês"
              desc="Ideal para alunos que desejam relatórios completos e recursos extras."
              features={[
                "Instituições ilimitadas",
                "Gráficos de desempenho",
                "Exportação de relatórios",
                "Acesso prioritário ao suporte",
              ]}
              highlighted
            />

            <PricingCard
              title="Institucional"
              price="Sob consulta"
              desc="Versão completa para escolas e universidades com múltiplos alunos."
              features={[
                "Painel administrativo completo",
                "Gerenciamento de turmas",
                "Importação de planilhas",
                "Suporte dedicado",
              ]}
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 py-14 px-10 md:px-20 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <GraduationCap className="text-white size-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Gestor de Notas
              </h3>
            </div>
            <p className="text-gray-600 text-sm max-w-md leading-relaxed">
              O <strong>Gestor de Notas</strong> é uma plataforma inteligente
              para ajudar alunos a monitorar seu desempenho acadêmico com
              clareza e simplicidade. Acompanhe suas médias, instituições e
              avaliações de forma prática e visual.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#hero" className="hover:text-orange-600 transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-600 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-orange-600 transition">
                  Planos
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-orange-600 transition">
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/cadastro"
                  className="hover:text-orange-600 transition"
                >
                  Cadastro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:suporte@gestordenotas.com"
                  className="hover:text-orange-600 transition"
                >
                  suporte@gestordenotas.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+550000000000"
                  className="hover:text-orange-600 transition"
                >
                  +55 (00) 00000-0000
                </a>
              </li>
              <li>
                <p className="text-gray-500">
                  Atendimento de seg. à sex., das 8h às 18h
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Gestor de Notas. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="#" className="hover:text-orange-600 transition">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-orange-600 transition">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
