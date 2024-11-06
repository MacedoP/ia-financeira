import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


const LoginPage = async () => {
    const { userId } = await auth()

    //se eu estiver logado , redireciona para a página principal, ou na minha Home Page
    if (userId) {
        redirect("/")
    }
  return (
    <div className="grid h-full grid-cols-2">
      {/*********** COLUNA A ESQUERDA CONTENDO A LOGO *********/}
      <div className="relative mx-auto flex h-full w-full max-w-[500px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          alt="Finance AI Logo"
          width={173}
          height={39}
          className="mb-8"
        />

        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>

        <p className="text-muted-foreground mb-8 text-justify">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        {/*********** BUTTON DE FAZER O LOGIN *********/}
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login
          </Button>
        </SignInButton>

      </div>

      {/*********** COLUNA A DIREITA CONTENDO A IMAGEM COM OS GRAFICOS *********/}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Imagem de login ou de tela inicial"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
