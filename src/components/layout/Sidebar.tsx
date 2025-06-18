import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming react-router-dom
import { cn } from '@/lib/utils'; // For conditional classes
import { Package2, Home, ShoppingCart, Users, LineChart, Settings } from 'lucide-react'; // Example icons

interface SidebarProps {
  className?: string;
  appName?: string;
}

// Example navigation items
const mainNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/orders", label: "Orders", icon: ShoppingCart /*, badge: "6"*/ },
  { href: "/products", label: "Products", icon: Package2 },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/analytics", label: "Analytics", icon: LineChart },
];

const secondaryNavItems = [
    { href: "/settings", label: "Settings", icon: Settings },
    // Add more secondary navigation items if needed
];

const Sidebar: React.FC<SidebarProps> = ({ className, appName = "AppDashboard" }) => {
  console.log("Rendering Sidebar");
  const location = useLocation();

  const renderNavItems = (items: typeof mainNavItems) => {
    return items.map((item) => {
      const Icon = item.icon;
      const isActive = location.pathname.startsWith(item.href);
      return (
        <Link
          key={item.label}
          to={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
            isActive ? "bg-muted text-primary" : "text-muted-foreground"
          )}
        >
          <Icon className="h-4 w-4" />
          {item.label}
          {/* {item.badge && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              {item.badge}
            </Badge>
          )} */}
        </Link>
      );
    });
  };

  return (
    <aside className={cn("hidden border-r bg-muted/40 md:block", className)}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" /> {/* Replace with your app logo component if available */}
            <span className="">{appName}</span>
          </Link>
          {/* Optional: Add a button here, e.g., notifications icon */}
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {renderNavItems(mainNavItems)}
          </nav>
        </div>
        {secondaryNavItems.length > 0 && (
            <div className="mt-auto p-2 lg:p-4">
                 <nav className="grid items-start text-sm font-medium">
                    {renderNavItems(secondaryNavItems)}
                 </nav>
            </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;