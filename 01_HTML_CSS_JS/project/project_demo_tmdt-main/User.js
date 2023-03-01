export class User{
    userId;
    password;
    role; // 0: admin, 1: user; mặc định là user

    constructor(userId, password, role = 1) {
        this.userId = userId;
        this.password = this.hashPassword(password);
    }

    getUserId(){
        return this.userId;
    }

    setPassword(newPass, oldPass){
        if(this.hashPassword(oldPass) === this.password){
            this.password = this.hashPassword(newPass);
            alert('Thay đổi mật khẩu thành công!');
        }else{
            alert('mật khẩu cũ không đúng, mời nhập lại!');
        }
    }

    // mã hóa password
    hashPassword(password){
        const crypto = require('crypto');
        const salt = 'random_salt_string'; // đây là giá trị salt, bạn có thể tạo ngẫu nhiên
        const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
        return hash;
    }
}
