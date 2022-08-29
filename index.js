function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let tooQuiet = "I can't hear you!";
    let justRight = "YES INDEED!"

    if string.toLowerCase(string) === string {
        return tooQuiet;

    } else if string.toUpperCase(string) === string {
        return justRight;
    }
}
