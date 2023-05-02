import { useState } from "react";
import { useRouter } from "next/router";

export default function EditTodoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the todo in your backend or local storage
    router.push("/");
  };

  const handleDelete = () => {
    // Delete the todo in your backend or local storage
    router.push("/");
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  );
}
