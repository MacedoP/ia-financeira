import { ArrowDownUp } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {

    //chamando o nosso banco de dados
    const transactions = await db.transaction.findMany({

        
    })
    return ( 
        <div className="p-6 space-y-6 ">
            {/**** Titulo e  botão ****/}
           <div className="flex justify-between w-full items-center">
            <h1 className="font-bold">Transactions</h1>
            <Button className="rounded-full">
                Add Transactions
                <ArrowDownUp className="ml-1"/>
            </Button>
           </div>

           <DataTable columns={transactionColumns}  data={transactions} />
            
        </div>
     );
}
 
export default TransactionsPage;