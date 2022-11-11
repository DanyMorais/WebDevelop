let string = '';

function verify(string, word) {
    if (string.slice(0, word.length) == word)
        return true;
    else 
        return false;
}

function verify2(string, word) {
    for (let i = 0; i < word.length; i++) {
        if (string[i] != word[i]) {
            return false;
        }
    }
    return true;
}

function stringStarts(string, word) {
    return string.startsWith(word);
}

function verify3(string, word) {
    if (string.search(word) != -1)
        return true;
    else
        return false;
}