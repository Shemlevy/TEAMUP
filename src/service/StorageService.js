function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return (val)? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val);
}

function clearStorage(){
    localStorage.clear();
}

export default {
    loadFromStorage,
    saveToStorage,
    clearStorage
}