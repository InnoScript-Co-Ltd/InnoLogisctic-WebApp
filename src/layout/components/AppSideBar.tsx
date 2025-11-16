import * as React from "react";
import { Archive, GalleryVerticalEnd, Gamepad, ScrollText } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { NavUser } from "./NavUser";
import { Link } from "react-router-dom";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "User",
      email: "user@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Inventory",
        url: "inventory",
        icon: Archive,
        isActive: true,
        items: [
          {
            title: "Brands",
            url: "brands",
            items: [
              {
                title: "Add New Brand",
                url: "/brand-create",
              },
              {
                title: "All Brands",
                url: "/brands",
              },
            ],
          },
          {
            title: "Tags",
            url: "tags",
            items: [
              {
                title: "Add New Tag",
                url: "/tag-create",
              },
              {
                title: "All Tags",
                url: "/tags",
              },
            ],
          },
          {
            title: "Categories",
            url: "categories",
            items: [
              {
                title: "Add New Category",
                url: "/category-create",
              },
              {
                title: "All Categories",
                url: "/categories",
              },
              {
                title: "Add New Sub Category",
                url: "/sub-category-create",
              },
              {
                title: "All Sub Categories",
                url: "/sub-categories",
              },
              {
                title: "Add New Special Category",
                url: "/special-category-create",
              },
              {
                title: "All Special Categories",
                url: "/special-categories",
              },
            ],
          },
          {
            title: "Products",
            url: "products",
            items: [
              {
                title: "Add New Single Product",
                url: "/product-create",
              },
              {
                title: "All Single Products",
                url: "/products",
              },
            ],
          },
          {
            title: "Variable Products",
            url: "variable-products",
            items: [
              {
                title: "Add New Variable Product",
                url: "/variable-product-create",
              },
              {
                title: "All Variable Products",
                url: "/variable-products",
              },
            ],
          },
        ],
      },
      {
        title: "Marketing",
        url: "marketing",
        icon: ScrollText,
        isActive: false,
        items: [
          {
            title: "Campaigns",
            url: "discountables",
            items: [
              {
                title: "Add New Campaign",
                url: "/discountable-create",
              },
              {
                title: "All Campaign",
                url: "/discountables",
              },
            ],
          },
          {
            title: "Combo Products",
            url: "products",
            items: [
              {
                title: "Add New Combo Product",
                url: "/combo-product-create",
              },
              {
                title: "All Combo Products",
                url: "/combo-products",
              },
            ],
          },
          {
            title: "Discountable Products",
            url: "discountable-items",
            items: [
              {
                title: "Add New Discountable Product",
                url: "/discountable-item-create",
              },
              {
                title: "All Discountable Products",
                url: "/discountable-items",
              },
            ],
          },
        ],
      },
      {
        title: "Sale",
        url: "sale",
        icon: ScrollText,
        isActive: false,
        items: [
          {
            title: "Order",
            url: "orders",
            items: [
              {
                title: "Order List",
                url: "/orders",
              },
            ],
          },
        ],
      },
      {
        title: "User",
        url: "users",
        icon: Gamepad,
        isActive: false,
        items: [
          {
            title: "Users List",
            url: "/users",
          },
        ],
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Zip P Panel</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
