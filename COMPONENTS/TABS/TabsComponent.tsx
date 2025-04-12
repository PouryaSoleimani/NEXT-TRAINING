// ^ TABS COMPONENT ====================================================================================================================================
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/COMPONENTS/ui/tabs";

export function TabsComponent() {
    return (
        <div className="w-full flex items-center justify-center py-4 mx-auto">
            <Tabs defaultValue="account" className="w-full sm:w-2/3 mx-auto rounded">

                <TabsList className="bg-zinc-700 text-white w-fit grid grid-cols-2 place-items-center h-auto justify-items-center mx-auto mt-1 sm:grid-cols-4">
                    <TabsTrigger value="inbox" className=" text-black text-xl  p-2 font-black"> Inbox </TabsTrigger>
                    <TabsTrigger value="account" className=" text-black text-xl  p-2 font-black"> Account </TabsTrigger>
                    <TabsTrigger value="dashboard" className=" text-black text-xl  p-2 font-black"> Dashboard </TabsTrigger>
                    <TabsTrigger value="password" className="text-black text-xl  p-2 font-black"> Settings </TabsTrigger>
                </TabsList>

                <TabsContent value="inbox" className="h-[10rem] p-3 bg-zinc-900 text-white text-center font-black text-2xl">INBOX</TabsContent>
                <TabsContent value="account" className="h-[10rem] p-3 bg-zinc-900 text-white text-center font-black text-2xl">ACCOUNT</TabsContent>
                <TabsContent value="dashboard" className="h-[10rem] p-3 bg-zinc-900 text-white text-center font-black text-2xl">DASHBOARD</TabsContent>
                <TabsContent value="password" className="h-[10rem] p-3 bg-zinc-900 text-white text-center font-black text-2xl">PASSWORD</TabsContent>

            </Tabs>
        </div>
    );
}
