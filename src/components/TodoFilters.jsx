function TodoFilters({ filter, onFilterChange, activeCount }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p>Осталось: {activeCount}</p>

      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          style={{
            marginRight: "5px",
            fontWeight: filter === f ? "bold" : "normal",
          }}
        >
          {f === "all" ? "Все" : f === "active" ? "Активные" : "Выполненные"}
        </button>
      ))}
    </div>
  );
}

export default TodoFilters;
