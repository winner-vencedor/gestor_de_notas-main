import SettingsPage from "@/components/userSetting";


export default function Settings(
  {
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  
  return (

    
    <div className="w-full h-screen gap-6 px-4 md:px-8 py-5 bg-lieaar-to-b from-orange-50/30 to-white mr-3 p-5">
      <SettingsPage />
    </div>
  );
}
