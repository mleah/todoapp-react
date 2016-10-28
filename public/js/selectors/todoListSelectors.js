import { createSelector } from 'reselect'
import { SortTypes } from "../actions/sortActions";


const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todoList.items;
const getCurrentSort = (state) => state.currentSort;
const getCurrentWeek = (state) => state.currentWeekDates;



export const getSortedAndFilteredTodoList = createSelector(
    [getVisibilityFilter, getTodos, getCurrentSort],
    (currentVisibility, todoList, currentSort) => {
        const sortedArray = sortToDos(todoList, currentSort);
        return filterVisibleTodos(sortedArray, currentVisibility);
    }
);


export const getWeeklyCompletedTodos = createSelector(
    [getTodos, getCurrentWeek],
    (todoList, currentWeek) => {
        return currentWeek.map( day =>
            todoList.filter( todo =>
                (todo.completedOn === day )).length)
    }
);


//ToDo refactor the boolean logic in getWeeklyActiveTodos
export const getWeeklyActiveTodos = createSelector(
    [getTodos, getCurrentWeek],
    (todoList, currentWeek) => {
        return currentWeek.map( day =>
            todoList.filter( todo =>
                (
                    (isActive(todo) && onOrAfterCreationDate(todo.dateAdded, day)) ||
                    (!isActive(todo) && beforeCompletionDate(todo.completedOn, day) && onOrAfterCreationDate(todo.dateAdded, day))
                )
            ).length)
    }
);



const sortToDos = (todoArray, sortType) => {
    if (sortType !== SortTypes.DATE_ADDED) {
        return sortByDate(sortType, todoArray);
    }

    return todoArray.sort((firstToDo, secondToDo) => firstToDo.id - secondToDo.id);
};


const sortByDate = (sortType, todoArray)  => {
    return todoArray.slice().sort((firstToDo, secondToDo) => {
        const [dueDateOne, dueDateTwo] = [firstToDo, secondToDo].map(todo => {
            let date = new Date(todo.dueDate);
            if (date == "Invalid Date") {
                date = -Infinity;
            }
            return date;
        });

        return sortType === SortTypes.DUE_DATE_ASC ? dueDateOne - dueDateTwo : dueDateTwo - dueDateOne;
    });
};


const filterVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
    }
};


const isActive = (todo) => todo.completedOn === null;


const beforeCompletionDate = (dateCompleted, currentDayOfWeek) => {
    let todoDateCompleted = new Date(dateCompleted);
    let currentDate = new Date(currentDayOfWeek);
    return currentDate < todoDateCompleted;
};


const onOrAfterCreationDate = (dateAdded, currentDayOfWeek) => {
    let todoDateAdded = new Date(dateAdded);
    let currentDate = new Date(currentDayOfWeek);
    return currentDate >= todoDateAdded;
};