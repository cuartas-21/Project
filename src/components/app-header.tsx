"use client"

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { UserNav } from "@/components/user-nav"
import { useIsMobile } from "@/hooks/use-mobile"
import { Search } from "lucide-react"
import { Input } from "./ui/input"

export function AppHeader() {
    const isMobile = useIsMobile();
    const { state } = useSidebar();
    
    return (
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
            <SidebarTrigger className="md:hidden" />
            
            <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-secondary pl-8 md:w-[200px] lg:w-[336px]"
                />
            </div>

            {isMobile && state === 'collapsed' && <UserNav />}
        </header>
    )
}