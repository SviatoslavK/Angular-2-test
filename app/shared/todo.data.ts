export class TodoSeedData {

    createDb() {
        let todos = [
            { id: 1, title: 'Изучить TypeScript', done: false },
            { id: 2, title: 'Изучить ES6', done: false },
            { id: 3, title: 'Изучить Angular 2', done: false },
            { id: 4, title: 'Изучить Babel', done: false }
        ];

        return { todos };
     }
}