//암호화 하는 모듈 가져오기
const crypto = require('crypto');

//암호화 하는 코드
const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        const hashed = derivedKey.toString('hex');
        console.log('salt : ', salt);
        console.log('hashed : ', hashed);
    });
}

const password = 'fl0wer';
const salt = crypto.randomBytes(32).toString('hex');
encrypt(salt, password);