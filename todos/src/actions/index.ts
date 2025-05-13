"use server";
import db from "../../utils/db";

import { redirect } from "next/navigation";

export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;

  await db.todo.create({
    data: { title: input },
  });

  redirect("/");
}

export async function editTodo(formData: FormData) {
  const input = formData.get("input") as string;
  const inputId = formData.get("inputId") as string;

  await db.todo.update({
    where: { id: inputId },
    data: { title: input },
  });

  redirect("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await db.todo.delete({
    where: { id: inputId },
  });
  redirect("/");
}
