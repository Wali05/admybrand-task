"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#features">AI Content Generation</HoveredLink>
            <HoveredLink href="#features">Advanced Analytics</HoveredLink>
            <HoveredLink href="#features">Automation Tools</HoveredLink>
            <HoveredLink href="#features">Performance Optimization</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="AI Content Suite"
              href="#features"
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=140&h=70&fit=crop"
              description="Generate compelling marketing content with advanced AI technology."
            />
            <ProductItem
              title="Analytics Dashboard"
              href="#features"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=140&h=70&fit=crop"
              description="Real-time insights and predictive analytics for your campaigns."
            />
            <ProductItem
              title="Automation Platform"
              href="#features"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=140&h=70&fit=crop"
              description="Streamline your workflow with intelligent automation tools."
            />
            <ProductItem
              title="Brand Intelligence"
              href="#features"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=140&h=70&fit=crop"
              description="Ensure brand consistency with AI-powered monitoring."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#pricing">Starter - $29/month</HoveredLink>
            <HoveredLink href="#pricing">Professional - $79/month</HoveredLink>
            <HoveredLink href="#pricing">Enterprise - $199/month</HoveredLink>
            <HoveredLink href="#pricing">Custom Solutions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#resources">Blog & Articles</HoveredLink>
            <HoveredLink href="#resources">Case Studies</HoveredLink>
            <HoveredLink href="#resources">Documentation</HoveredLink>
            <HoveredLink href="#resources">Support Center</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarDemo;
