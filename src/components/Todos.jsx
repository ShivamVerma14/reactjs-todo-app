import Card from "./Card";

function Todos({
  todos,
  deleteTodo,
  handleUpdateClick,
  toggleTodoCompleteStatus,
}) {
  const todoCards = todos.map(todo => (
    <Card
      key={todo.id}
      todo={todo}
      deleteTodo={deleteTodo}
      handleUpdateClick={handleUpdateClick}
      toggleTodoCompleteStatus={toggleTodoCompleteStatus}
    />
  ));

  return <div className="flex flex-col gap-3 justify-start">{todoCards}</div>;
}

export default Todos;
