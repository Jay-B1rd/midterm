function search(nameList, searchTerm) {
    let returnString = [];

    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i].toLowerCase().includes(searchTerm.toLowerCase()) === true) {
            returnString.push(nameList[i]);
        }
    }
    return returnString;
}