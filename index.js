

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let strNew = ''
    for (let i = 0; i < length; i++) {
        strNew = strNew + characters.charAt(Math.random() * length)
    }
    return strNew
}

const key = generateKey(16, characters)
console.log(key)