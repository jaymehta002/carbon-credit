export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen w-full flex">
        <div className="w-1/2 h-full hidden md:block">
            <img 
            src="/hero.jpg"
            className="w-full h-full object-cover object-[20%]"
             alt="" />
        </div>
        <div className="md:w-1/2 w-full h-full flex items-center justify-center px-4 dark:bg-black">
            {children}
        </div>
    </div>
    );
  }