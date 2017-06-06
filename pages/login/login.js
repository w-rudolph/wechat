// login.js
let { countDown } = require('../../utils/util.js');

Page({
    data: {
        canGetPhoneCode: false,
        phoneCodeBtnText: '获取验证码',
        phoneNumber: '',
        phoneCode: ''
    },
    getPhoneCode() {
        this.setData({
            phoneCode: ''
        });
        countDown(60)((count) => {
            if (count === 0) {
                this.setData({
                    phoneCodeBtnText: '获取验证码',
                    canGetPhoneCode: true
                });
            } else {
                this.setData({
                    phoneCodeBtnText: count + 's后获取',
                    canGetPhoneCode: false
                });
            }
        });
    },
    handlePhoneNumberChange(e) {
        let phoneNumber = e.detail.value
        let phoneNumberReg = /^1(3|4|5|7|8)\d{9}$/;
        if (phoneNumberReg.test(phoneNumber)) {
            this.setData({
                canGetPhoneCode: true,
                phoneNumber: phoneNumber
            })
        } else {
            this.setData({
                canGetPhoneCode: false
            })
        }
    },
    handlePhoneCodeChange(e) {
        this.setData({
            phoneCode: e.detail.value
        });
    }
})