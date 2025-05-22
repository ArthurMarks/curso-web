const toJson = (todo) => {
    return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
        user_id: todo.user_id,
        created_at: todo.created_at
    }
}

const arrayToJson = (todos) => {
    return todos.map(todo => toJson(todo))
}

module.exports = {
    toJson,
    arrayToJson
}