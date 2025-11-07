import ProfileForm from "@/components/userSetting";

export default function Settings(
  {
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  
  return (

    
    <div className="flex  w-screen h-screen gap-6 px-4 md:px-8 py-5 bg-lieaar-to-b from-orange-50/30 to-white">
      <ProfileForm />
    </div>
  );
}
