// To run this code, ensure you have Bun installed:
// bun add elysia
// bun run server.ts

import { Elysia, t } from 'elysia';

// Define the core TypeScript types for our data model
interface Task {
    id: number;
    title: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
}

// Initialize the Elysia application with a dedicated API prefix
const app = new Elysia({ prefix: '/api/v1' })
    // Seed an in-memory data store using the state plugin
    .state('tasks', [
        { id: 1, title: 'Learn ElysiaJS', completed: false, priority: 'high' },
        { id: 2, title: 'Build clean TypeScript backends', completed: true, priority: 'medium' }
    ] as Task[])
    
    // Global Request Logger Middleware
    .onRequest(({ request }) => {
        const time = new Date().toISOString();
        console.log(`[${time}] Global Interceptor: ${request.method} -> ${request.url}`);
    })
    
    // Explicit Error Handling Middleware
    .onError(({ code, error, set }) => {
        console.error(`Exception triggered: ${error.message}`);
        
        switch (code) {
            case 'VALIDATION':
                set.status = 400;
                return { success: false, error: 'Payload validation failed', details: error.validator };
            case 'NOT_FOUND':
                set.status = 404;
                return { success: false, error: 'The requested route or resource was not found' };
            default:
                set.status = 500;
                return { success: false, error: 'Internal server error occurred' };
        }
    })

    // Grouping task routes for clean lifecycle and separation of concerns
    .group('/tasks', (router) => router
        // Route 1: Fetch all tasks with an optional priority filter
        .get('/', ({ store, query }) => {
            const { priority } = query;
            if (priority) {
                return store.tasks.filter(t => t.priority === priority);
            }
            return store.tasks;
        }, {
            query: t.Optional(t.Object({
                priority: t.Optional(t.Union([t.Literal('low'), t.Literal('medium'), t.Literal('high')]))
            }))
        })

        // Route 2: Fetch a single task by its numeric path identifier
        .get('/:id', ({ store, params, error }) => {
            const task = store.tasks.find(t => t.id === Number(params.id));
            if (!task) return error(404, `Task with ID ${params.id} does not exist`);
            return task;
        }, {
            params: t.Object({ id: t.Numeric() })
        })

        // Route 3: Create a new task with incoming schema validation
        .post('/', ({ store, body, set }) => {
            const newTask: Task = {
                id: store.tasks.length > 0 ? Math.max(...store.tasks.map(t => t.id)) + 1 : 1,
                title: body.title,
                completed: false,
                priority: body.priority
            };
            
            store.tasks.push(newTask);
            set.status = 201; // Created
            return { success: true, data: newTask };
        }, {
            body: t.Object({
                title: t.String({ minLength: 3, error: 'Title must be at least 3 characters long' }),
                priority: t.Union([t.Literal('low'), t.Literal('medium'), t.Literal('high')])
            })
        })

        // Route 4: Delete a specific task by ID
        .delete('/:id', ({ store, params, error }) => {
            const taskIndex = store.tasks.findIndex(t => t.id === Number(params.id));
            if (taskIndex === -1) return error(404, `Cannot delete missing task ID ${params.id}`);
            
            const [deletedTask] = store.tasks.splice(taskIndex, 1);
            return { success: true, removed: deletedTask };
        }, {
            params: t.Object({ id: t.Numeric() })
        })
    )

    // Fallback catching route for health checks
    .get('/health', () => ({ status: 'healthy', timestamp: Date.now() }))

    // Bind server instance to network port
    .listen(3000);

console.log(`🦊 Elysia runtime successfully mounted at http://${app.server?.hostname}:${app.server?.port}`);
