// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user) {
    return user.userRole === 'ADMIN'
}

function getEmail(user) {
    let firstInitial = user.firstName.toLowerCase()[0];
    let lastNameLowerCase = user.lastName.toLowerCase();
    return `${firstInitial}${lastNameLowerCase}.prsvr@gmail.com`
}

function getPlaylistLength(playlist) {
    return playlist.songs.length;
}

function getHardestHomework(arr) {
    if (arr.length === 0) {
        return ''
    }
    let hardestHomework = arr[0].name;
    let lowestScore = arr[0].averageScore;

    for(let i = 1; i < arr.length; i++) {
        if (arr[i].averageScore < lowestScore) {
            lowestScore = arr[i].averageScore;
            hardestHomework = arr[i].name;
        }
    }

    return hardestHomework;
}

function createPhonebook(name,num) {
let phoneBook = {};

for(let i = 0; i < name.length; i++){
    phoneBook[name[i]] = num[i];
}

return phoneBook;
}
console.log(createPhonebook(['Melissa', 'Andre'], ['206-111-2233', '321-123-2424']))
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};