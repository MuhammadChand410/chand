import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg flex">
      <Sidebar />
      <main className="flex-1 md:ml-[260px] p-9 min-h-screen overflow-x-hidden max-md:pt-[90px] max-md:px-4 max-md:pb-8">
        {children}
      </main>
    </div>
  );
}
