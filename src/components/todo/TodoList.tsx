'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Data dummy awal
const initialTodos: Todo[] = [
  { id: 1, text: 'Hello', completed: true },
  { id: 2, text: 'This', completed: false },
  { id: 3, text: 'Good', completed: false },
];

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodoText, setNewTodoText] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  // Fungsi untuk menambah todo baru
  const handleAddTodo = () => {
    if (newTodoText.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setNewTodoText('');
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  const handleSelect = (id: number, isSelected: boolean) => {
    const newSelectedIds = new Set(selectedIds);
    if (isSelected) {
      newSelectedIds.add(id);
    } else {
      newSelectedIds.delete(id);
    }
    setSelectedIds(newSelectedIds);
  };

  const handleDeleteSelected = () => {
    setTodos(todos.filter((todo) => !selectedIds.has(todo.id)));
    setSelectedIds(new Set());
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <div className="flex items-end gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="new-task">Add a new task</Label>
            <Input
              id="new-task"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
              placeholder="Hello"
            />
          </div>
          <Button onClick={handleAddTodo} className="bg-blue-500 h-12">Add Todo</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {todos.map((todo, index) => (
            <div key={todo.id}>
              <div className="flex items-center gap-4 p-2">
                <div 
                  onClick={() => handleToggleComplete(todo.id)} 
                  className="cursor-pointer"
                >
                  {todo.completed ? (
                    <div className="flex items-center justify-center h-6 w-6 rounded bg-green-500 text-white">
                      <Check size={16} />
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded border-2 border-gray-300" />
                  )}
                </div>
                
                <span
                  className={cn(
                    'flex-1 text-lg',
                    todo.completed && 'line-through text-muted-foreground'
                  )}
                >
                  {todo.text}
                </span>

                <div className="flex items-center gap-4">
                  <button onClick={() => handleToggleComplete(todo.id)}>
                    <div className="flex items-center justify-center h-7 w-7 rounded-full border-2 border-green-500">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                     <div className="flex items-center justify-center h-7 w-7 rounded-full border-2 border-red-500">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                  </button>
                </div>
              </div>
              {index < todos.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="destructive" 
          onClick={handleDeleteSelected}
          disabled={selectedIds.size === 0}
        >
          Deleted Selected
        </Button>
      </CardFooter>
    </Card>
  );
}
