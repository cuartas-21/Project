import { AppLogo } from '@/components/icons';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
       <div className="w-full max-w-md">
        <div className="mb-6 text-center">
            <Link href="/" className="inline-block">
                <AppLogo className="h-12 w-auto mx-auto text-primary" />
            </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
