"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { AppLogo } from "@/components/icons";
import { LayoutDashboard, CalendarDays, BarChart3, Users, Settings, LogOut } from "lucide-react";
import { UserNav } from "./user-nav";
import { useIsMobile } from "@/hooks/use-mobile";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/bookings", label: "My Bookings", icon: CalendarDays },
];

const adminMenuItems = [
    { href: "/admin", label: "Overview", icon: BarChart3 },
    { href: "/admin/bookings", label: "All Bookings", icon: CalendarDays },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/courts", label: "Courts", icon: Settings },
]

export function MainSidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  // In a real app, this would come from an auth context
  const userRole = "admin"; 

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <AppLogo className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
                <span className="text-lg font-headline font-semibold text-sidebar-foreground">SyntheticPei</span>
            </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <span className="text-xs text-sidebar-foreground/70 px-2 pb-1">MENU</span>
          </SidebarMenuItem>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={item.label}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {userRole === 'admin' && (
            <SidebarMenu className="mt-4">
                <SidebarMenuItem>
                    <span className="text-xs text-sidebar-foreground/70 px-2 pb-1">ADMIN</span>
                </SidebarMenuItem>
                {adminMenuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                    <Link href={item.href}>
                        <SidebarMenuButton
                        isActive={isActive(item.href)}
                        tooltip={item.label}
                        >
                        <item.icon />
                        <span>{item.label}</span>
                        </SidebarMenuButton>
                    </Link>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        )}
      </SidebarContent>

      <SidebarFooter>
        {!isMobile ? (
          <div className="border-t border-sidebar-border p-2">
            <UserNav />
          </div>
        ) : (
          <div className="p-2">
            <Link href="/">
              <SidebarMenuButton>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </Link>
          </div>
        )}
      </SidebarFooter>
    </>
  );
}
