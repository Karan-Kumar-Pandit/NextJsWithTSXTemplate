'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import { MyProvider } from '@/redux/provider/my-provider';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
     return (
          <MyProvider>
               <html lang="en">
                    <body>{children}</body>
               </html>
          </MyProvider>
     );
}
