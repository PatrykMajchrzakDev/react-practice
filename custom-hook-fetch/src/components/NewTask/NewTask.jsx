/* eslint-disable react/prop-types */
import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: addTaskRequest } = useHttp();

  //taskText is not accessed by default from eterTaskHandler props
  //solution to this it to predefine it via .bind method down below
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    addTaskRequest(
      {
        url: "https://react-http-262f1-default-rtdb.europe-west1.firebasedatabase.app//tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      //createTasks expects one argument although I can predefine first argument to taskText
      //this way even tho applyData(data) in use-https.jsx has one arg, taskText is predefined from here
      //null is to not "bind" "this" keyword from this file to this function
      createTask.bind(null, taskText)
    );
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
