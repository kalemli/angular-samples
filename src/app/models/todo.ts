export class TodoModel {
    user;
    items;

    constructor() {
        this.user = 'Atif GALAMOV';
        this.items = [
            new TodoItem("Task - 1", true),
            new TodoItem("Task - 2", false),
            new TodoItem("Task - 3", false),
            new TodoItem("Task - 4", false)
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}