// ^ TABS COMPONENT ====================================================================================================================================
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/COMPONENTS/ui/tabs";

export function TabsComponent() {
  return (
    <div className="w-full flex items-center justify-center py-4 mx-auto">
      <Tabs defaultValue="account" className="w-full sm:w-2/3 bg-zinc-100 mx-auto">
        <TabsList className="bg-zinc-300 text-white w-full py-4">
          <TabsTrigger value="account" className=" text-black text-xl  p-2">
            Account
          </TabsTrigger>
          <TabsTrigger value="password" className="text-black text-xl  p-2">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
