import { addTodoRow } from "../components/CreateTodoRow.js";

export function saveTableData(dataArray) {
    localStorage.setItem('tableData', JSON.stringify(dataArray));
}

export function getTableData() {
    const storedData = localStorage.getItem('tableData');
    return storedData ? JSON.parse(storedData) : [];
}

export function deleteRow(rowId) {
    const tbody = document.getElementById("tbody");
    const rowToDelete = document.getElementById(rowId)
    tbody.removeChild(rowToDelete);

    const tableData = getTableData();
    const data = tableData.filter((row) => row.id !== rowId);
    saveTableData(data);
}

export function changeRowState(note) {
    const tableData = getTableData();

    const tbody = document.getElementById("tbody");
    const rowToDelete = document.getElementById(note.id)
    tbody.removeChild(rowToDelete);


    saveTableData(tableData.map((item) => {
        if (item.id === note.id) {
            return { ...item, isArchived: !item.isArchived }
        }
        return item;
    }));
}

export function archiveRow(note) { 
    const tableData = getTableData(); 
    
    saveTableData(tableData.map((item) => {
         if (item.id === note.id) {
             return {...item, isArchived: !item.isArchived} 
         }
         return item
    })); 
}

function createId() {
    const id = crypto.randomUUID();
    return id;
}

export function assignIdNote(note) {
  const tableData = getTableData();
  const createdNote = { ...note, id: createId() };
  saveTableData([...tableData, createdNote]);
  return createdNote;
}

export function getId(note) {
    const id = note.id;
    return id;
}

export function renderArchived() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    const filteredData = getTableData().filter((note) => note.isArchived);
    filteredData.forEach((todo) => { addTodoRow(todo, tbody) });
}

export function renderUnarchived() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    const filteredData = getTableData().filter((note) => !note.isArchived);
    filteredData.forEach((todo) => { addTodoRow(todo, tbody) });
}