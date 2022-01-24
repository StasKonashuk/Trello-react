import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  BoardStateType,
  BoardType,
  EditBoardListAcionPayloadType,
  DeleteBoardAcionPayloadType,
  AddTaskListAcionPayloadType,
  AddTaskAcionPayloadType,
  EditTaskListAcionPayloadType,
  TaskListType,
  TaskType,
  EditTaskAcionPayloadType,
  DeleteTaskListAcionPayloadType,
  DeleteTaskAcionPayloadType,
  EditTaskDescriptionAcionPayloadType,
  SortAcionPayloadType,
} from '../types/types';

const initialState: BoardStateType = {
  boards: [
    {
      boardId: 1,
      boardName: 'trello',
      taskLists: [
        {
          id: 1,
          listName: 'Нужно сделать',
          tasks: [
            { id: 1, taskName: 'Add styles for component', description: '' },
            { id: 2, taskName: 'Add submit button', description: '' },
          ],
        },
        {
          id: 2,
          listName: 'Готово',
          tasks: [
            { id: 3, taskName: 'Add styles for component', description: '' },
            { id: 4, taskName: 'Add submit button', description: '' },
          ],
        },
        {
          id: 3,
          listName: 'Hello',
          tasks: [
            { id: 5, taskName: 'Add styles for component', description: '' },
            { id: 6, taskName: 'Add submit button', description: '' },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard(state, { payload }: PayloadAction<string>) {
      const newBoard = {
        boardId: Date.now(),
        boardName: payload,
        taskLists: [],
      } as BoardType;
      state.boards.push(newBoard);
    },
    editBoard(
      state,
      { payload }: PayloadAction<EditBoardListAcionPayloadType>
    ) {
      const board = state.boards.find(
        (board) => board.boardId === payload.boardId
      );
      board!.boardName = payload.boardName;
    },
    deleteBoard(
      state,
      { payload }: PayloadAction<DeleteBoardAcionPayloadType>
    ) {
      const index = state.boards.findIndex(
        (board) => board.boardId === payload.boardId
      ) as number;
      if (index !== -1) {
        state.boards.splice(index, 1);
      }
    },
    addTaskList(
      state,
      { payload }: PayloadAction<AddTaskListAcionPayloadType>
    ) {
      const newTaskList = {
        id: Date.now(),
        listName: payload.listName,
        tasks: [],
      } as TaskListType;
      state.boards
        .find((board) => board.boardId === payload.boardId)
        ?.taskLists.push(newTaskList);
    },
    addTask(state, { payload }: PayloadAction<AddTaskAcionPayloadType>) {
      const newTask = {
        id: Date.now(),
        taskName: payload.taskName,
        description: '',
      } as TaskType;
      const list = state.boards
        .find((board) => board.boardId === payload.boardId)
        ?.taskLists.find((list) => list.id === payload.listId)
        ?.tasks.push(newTask);
    },
    editTaskList(
      state,
      { payload }: PayloadAction<EditTaskListAcionPayloadType>
    ) {
      const list = state.boards
        .find((board) => board.boardId === payload.boardId)
        ?.taskLists.find((list) => list.id === payload.listId);
      list!.listName = payload.listName;
    },
    editTask(state, { payload }: PayloadAction<EditTaskAcionPayloadType>) {
      const task = state.boards
        .find((board) => board.boardId === payload.boardId)
        ?.taskLists.find((list) => list.id === payload.listId)
        ?.tasks.find((task) => task.id === payload.taskId);
      task!.taskName = payload.taskName;
    },
    deleteTaskList(
      state,
      { payload }: PayloadAction<DeleteTaskListAcionPayloadType>
    ) {
      const index = state.boards
        .find((board) => board.boardId === payload.boardId)
        ?.taskLists.findIndex((list) => list.id === payload.listId) as number;
      const taskLists = state.boards.find(
        (board) => board.boardId === payload.boardId
      )?.taskLists;
      if (index !== -1) {
        taskLists?.splice(index, 1);
      }
    },
    deleteTask(state, { payload }: PayloadAction<DeleteTaskAcionPayloadType>) {
      const list = state.boards
        .find((board) => board.boardId === payload.boardId)
        ?.taskLists.find((list) => list.id === payload.listId);
      const index = list?.tasks.findIndex(
        (task) => task.id === payload.taskId
      ) as number;
      if (index !== -1) {
        list?.tasks.splice(index, 1);
      }
    },
    editTaskDescription(
      state,
      { payload }: PayloadAction<EditTaskDescriptionAcionPayloadType>
    ) {
      const { boardId, listId, taskId, description } = payload;
      const task = state.boards
        .find((board) => board.boardId === boardId)
        ?.taskLists.find((list) => list.id === payload.listId)
        ?.tasks.find((task) => task.id === payload.taskId);

      task!.description = payload.description;
    },
    sort(state, { payload }: PayloadAction<SortAcionPayloadType>) {
      const {
        boardId,
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      } = payload;

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.boards
          .find((board) => board.boardId === boardId)
          ?.taskLists.find((list) => list.id === Number(droppableIdStart));
        const task = list?.tasks.splice(
          droppableIndexStart,
          1
        ) as Array<TaskType>;
        list?.tasks.splice(droppableIndexEnd, 0, ...task);
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where drag happend
        const listStart = state.boards
          .find((board) => board.boardId === boardId)
          ?.taskLists.find((list) => list.id === Number(droppableIdStart));

        // pull out the card from this list
        const task = listStart?.tasks.splice(
          droppableIndexStart,
          1
        ) as Array<TaskType>;

        // find the list where drag ended
        const listEnd = state.boards
          .find((board) => board.boardId === boardId)
          ?.taskLists.find((list) => list.id === Number(droppableIdEnd));

        // put the card in the new list
        listEnd?.tasks.splice(droppableIndexEnd, 0, ...task);
      }
    },
  },
});

export const {
  addBoard,
  editBoard,
  deleteBoard,
  addTaskList,
  addTask,
  editTaskList,
  editTask,
  deleteTaskList,
  deleteTask,
  editTaskDescription,
  sort,
} = boardsSlice.actions;

export default boardsSlice.reducer;
