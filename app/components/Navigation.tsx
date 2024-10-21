"use client";

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BookContent } from '../types';

interface NavigationProps {
  chapters: BookContent[];
  onChapterSelect: (chapter: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ chapters, onChapterSelect }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Chapters</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {chapters.map((chapter) => (
                <li key={chapter.chapter}>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => onChapterSelect(chapter.chapter)}
                    >
                      <div className="text-sm font-medium leading-none">
                        Chapter {chapter.chapter}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {chapter.title}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;