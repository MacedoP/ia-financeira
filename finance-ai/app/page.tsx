import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const name = " "

const Home = async () => {
  const { userId } = await auth()
  
  //se o ususario nao estiver logado fica na tela de login
  if(!userId){
    redirect("/login")
  }
  return (
    <div className="grid h-full place-items-center">
      <UserButton  showName/>
    </div>
  );
};

export default Home;
