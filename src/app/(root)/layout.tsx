import Navbar from '@/components/global/Navbar';
import React from 'react'


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (

        <div className="hidden space-y-6 p-10 pb-16 md:block">
            <Navbar />
            {/* <Profile /> */}
            {children}
        </div>
    );
}
