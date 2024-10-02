import Sidebar from "../components/navigation/sidebar/sidebar";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full pt-[64px] bg-background/10 h-screen flex items-center">
      <Sidebar />
      <div className="bg-muted/20 sticky top-[64px] overflow-x-hidden h-full w-full">
        {children}
      </div>
    </div>
  );
};
export default Layout;
