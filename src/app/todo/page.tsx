import { Header } from "@/components/layout/Header";
import { TodoList } from "@/components/todo/TodoList";

export default function TodoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col items-center flex-1 w-full px-4 py-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">
          To Do
        </h1>
        <TodoList />
      </main>
    </div>
  );
}
