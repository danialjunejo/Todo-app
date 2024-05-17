import zod from "zod";

const createTodo = {
  title: zod.string(),
  description: zod.string(),
};

const updateTodo = {
  id: zod.string(),
};


export {createTodo, updateTodo};