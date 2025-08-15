import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full p-4 border-b">
      <div className="relative w-full max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search (Ctrl+I)" 
          className="pl-10"
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="font-medium">Ahmad Akbar</span>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@ahmadakbar" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}