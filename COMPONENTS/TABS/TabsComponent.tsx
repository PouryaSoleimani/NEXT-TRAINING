// ^ TABS COMPONENT ====================================================================================================================================
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/COMPONENTS/ui/tabs";

export function TabsComponent() {
    return (
        <div className="w-full flex items-center justify-center py-4 mx-auto">
            <Tabs defaultValue="account" className="w-full sm:w-2/3 bg-zinc-100 mx-auto rounded">

                <TabsList className="bg-zinc-700 text-white w-full">
                    <TabsTrigger value="inbox" className=" text-black text-xl  p-2 font-black"> Inbox </TabsTrigger>
                    <TabsTrigger value="account" className=" text-black text-xl  p-2 font-black"> Account </TabsTrigger>
                    <TabsTrigger value="dashboard" className=" text-black text-xl  p-2 font-black"> Dashboard </TabsTrigger>
                    <TabsTrigger value="password" className="text-black text-xl  p-2 font-black"> Settings </TabsTrigger>
                </TabsList>

                <TabsContent value="inbox" className="h-[20rem] p-3 bg-zinc-900 text-white text-center font-black text-6xl">INBOX</TabsContent>
                <TabsContent value="account" className="h-[20rem] p-3 bg-zinc-900 text-white text-center font-black text-6xl">ACCOUNT</TabsContent>
                <TabsContent value="dashboard" className="h-[20rem] p-3 bg-zinc-900 text-white text-center font-black text-6xl">DASHBOARD</TabsContent>
                <TabsContent value="password" className="h-[20rem] p-3 bg-zinc-900 text-white text-center font-black text-6xl">PASSWORD</TabsContent>

            </Tabs>
        </div>
    );
}
