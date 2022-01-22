export interface ListPropsType {
  key: number;
  boardId: number;
  listId: number;
  listName: string;
  tasks: Array<TaskType>;
}

export interface TaskPropsType {
  key: number;
  boardId: number;
  listId: number;
  taskId: number;
  index: number;
  taskName: string;
  taskDescription: string;
}

export interface BoardPropsType {
  key: number;
  boardId: number;
  boardName: string;
}

export interface TaskListType {
  id: number;
  listName: string;
  tasks: Array<TaskType>;
}

export interface TaskType {
  id: number;
  taskName: string;
  description: string;
}

export interface BoardStateType {
  boards: Array<BoardType>;
}

export interface EditBoardModalPropsType {
  boardId: number;
  boardName: string;
  active: boolean;
  setActive: (active: boolean) => void;
}

export interface EditTaskDescriptionModalPropsType {
  boardId: number;
  listId: number;
  taskId: number;
  taskName: string;
  taskDescription: string;
  active: boolean;
  setActive: (active: boolean) => void;
}

export interface listType {
  id: number;
  listName: string;
  tasks: Array<TaskType>;
}

export interface EditTaskNameModalPropsType {
  boardId: number;
  listId: number;
  taskId: number;
  taskName: string;
  active: boolean;
  setActive: (active: boolean) => void;
}

export interface BoardType {
  boardId: number;
  boardName: string;
  taskLists: Array<TaskListType>;
}

export interface EditBoardListAcionPayloadType {
  boardId: number;
  boardName: string;
}

export interface DeleteBoardAcionPayloadType {
  boardId: number;
}

export interface AddTaskAcionPayloadType {
  boardId: number;
  listId: number;
  taskName: string;
}

export interface EditTaskListAcionPayloadType {
  boardId: number;
  listId: number;
  listName: string;
}

export interface EditTaskAcionPayloadType {
  boardId: number;
  listId: number;
  taskId: number;
  taskName: string;
}

export interface DeleteTaskListAcionPayloadType {
  boardId: number;
  listId: number;
}

export interface AddTaskListAcionPayloadType {
  boardId: number;
  listName: string;
}

export interface DeleteTaskAcionPayloadType {
  boardId: number;
  listId: number;
  taskId: number;
}

export interface SortAcionPayloadType {
  boardId: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
}

export interface EditTaskDescriptionAcionPayloadType {
  boardId: number;
  listId: number;
  taskId: number;
  description: string;
}

export interface AddListFormPropsType {
  setActive: (active: boolean) => void;
  boardId: number;
}

export interface AddListButtonPropsType {
  setActive: (active: boolean) => void;
}

export interface ListExtraMenuPropsType {
  boardId: number;
  listId: number;
  setActive: (active: boolean) => void;
}

export interface ListHeaderPropsType {
  boardId: number;
  listId: number;
  listName: string;
  setActive: (active: boolean) => void;
}

export interface ListHeaderTittlePropsType {
  boardId: number;
  listId: number;
  listName: string;
}

export interface ListContentPropsType {
  boardId: number;
  listId: number;
  active: boolean;
  tasks: Array<TaskType>;
  setActive: (active: boolean) => void;
}

export interface AddTaskButtonPropsType {
  setActive: (active: boolean) => void;
}

export interface AddTaskFormPropsType {
  boardId: number;
  listId: number;
  setActive: (active: boolean) => void;
}

export interface EditTaskButtonPropsType {
  taskName: string;
  taskDescription: string;
  setEditNameActive: (active: boolean) => void;
  setEditDescriptionActive: (active: boolean) => void;
}
