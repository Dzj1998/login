//登录js
class Login {
    constructor() {
        //获取登录按钮
        this.dl = $('.dl');
        //获取注册按钮
        this.zc = $('.zc');
        //获取手机号盒子
        this.pbox = $('.phone_box');
        //判定登录注册触发状态
        this.login_status = false;
        this.Sign();

    }
    Sign() {
        //记录this
        let that = this;
        //点击登录事件
        this.dl.click(function () {

            $('.dl_center').css('display', 'block');
            $('.zc_center').css('display', 'none');
            $('.dl span').css({
                color: 'black',
                borderBottom: ' 6px solid red '

            })
            $('.zc span').css({
                color: '#bbb',
                borderBottom: '0px'

            })

        })
        //点击注册事件
        this.zc.click(function () {

            $('.dl_center').css('display', 'none');
            $('.zc_center').css('display', 'block');
            $('.dl span').css({
                color: '#bbb',
                borderBottom: '0px'
            })
            $('.zc span').css({
                color: 'black',
                borderBottom: '6px solid red '
            })
        })
        // 点击事件  上面div高度变成一半   input显示
        this.pbox.click(function () {
            $('.txt').css({
                'height': '30px',
                'fontSize': '12px',
                'lineHeight': '30px'
            });
            $('#phoneNumber').css('display', 'block').focus();
            $('.input').css('border', '2px solid orange')
        })
        //input失焦事件  还原原来的状态
        $('#phoneNumber').blur(function () {
            $('.txt').css({
                'height': '60px',
                'fontSize': '17px',
                'lineHeight': '60px'
            });
            $('.input').css('border', '0px solid orange')
            // 声明正则
            let re = /^\d{11}$/
            //内容为空
            if ($('#phoneNumber').val() == '') {
                that.login_status = false;
                $('.txt').css('color', 'red');
                $('.input').css('background', 'pink');
                $('#phoneNumber').css(
                    {
                        'color': 'red',
                        'background': 'pink',
                        'display': 'none'
                    }
                );
                $('.rel').text('请输入手机号').css('color', 'red')
                //内容正则错误
            } else if (re.test($('#phoneNumber').val()) == false) {
                that.login_status = false;
                $('.txt').css('color', 'red');
                $('.input').css('background', 'pink');
                $('#phoneNumber').css(
                    {
                        'color': 'red',
                        'background': 'pink'
                    }
                );
                $('.txt').css({
                    'height': '30px',
                    'fontSize': '12px',
                    'lineHeight': '30px'
                });
                $('.rel').text('手机号码格式错误').css('color', 'red')
                //手机号错误
            } else if($('#phoneNumber').val() != $.cookie('login')){
                that.login_status = false;
                $('.txt').css('color', 'red');
                $('.input').css('background', 'pink');
                $('#phoneNumber').css(
                    {
                        'color': 'red',
                        'background': 'pink'
                    }
                );
                $('.txt').css({
                    'height': '30px',
                    'fontSize': '12px',
                    'lineHeight': '30px'
                });
                $('.rel').text('手机号码错误').css('color', 'red')
            }
            else {
                that.login_status = true;
                $('.txt').css('color', 'black');
                $('.input').css('background', '');
                $('#phoneNumber').css(
                    {
                        'color': 'black',
                        'background': '#fff'
                    }
                );
                $('.btn').css('background', '#FF5C00');
                $('.txt').css({
                    'height': '30px',
                    'fontSize': '12px',
                    'lineHeight': '30px'
                });
                $('.rel').text('').css('color', 'red')
            }
        })
        //点击跳转到首页
        $('.btn').click(function () {
            // alert($('.dl_center .checkbox:checked').val())
            if (that.login_status == true && ($('.dl_center .checkbox:checked').val() == 'on')) {
                location.href = '../index.html'
            }
        })
    }
}

new Login();

//注册js
class Register {
    constructor() {
        //获取输入手机号的盒子
        this.phone_input = $('.phone_input');
        //获取验证码的盒子
        this.inp = $('.inp');
        //添加事件
        this.addevent();
        //判定
        this.register_status = false;
        this.register_phone_status = false;
        this.code = '';
        this.time = '';
        this.code_switch = true;
    }
    //添加事件
    addevent() {
        //记录this
        let that = this;
        //点击div让里面的input显示出来
        this.phone_input.click(function () {
            $('.txt1').css({
                'height': '30px',
                'fontSize': '12px',
                'lineHeight': '30px'
            });
            $('.phoneNum').css('display', 'block').focus();
            //大框的边框
            $('.phone').css('border', '2px solid orange');
        })
        $('.phoneNum').blur(function () {
            $('.txt1').css({
                'height': '60px',
                'fontSize': '17px',
                'lineHeight': '60px'
            });
            $('.phone').css('border', '0px solid orange');

            //声明正则
            let re = /^\d{11}$/;
            //内容为空
            if ($('.phoneNum').val() == '') {
                that.register_phone_status = false;
                $('.txt1').css('color', 'red');
                $('.phone').css('background', 'pink');
                $('.phoneNum').css({
                    'color': 'red',
                    'background': 'pink',
                    'display': 'none'
                });
                $('.tishi').text('请输入手机号').css({
                    'color': 'red',
                    'fontSize': '12px'
                })
                //内容正则错误
            } else if (re.test($('.phoneNum').val()) == false) {
                that.register_phone_status = false;
                $('.txt1').css({
                    'color': 'red',
                    'height': '30px',
                    'fontSize': '12px',
                    'lineHeight': '30px'
                });
                $('.phone').css('background', 'pink');
                $('.phoneNum').css({
                    'color': 'red',
                    'background': 'pink',
                    'display': 'block'

                });

                $('.tishi').text('手机格式错误').css({
                    'color': 'red',
                    'fontSize': '12px'
                })

            //正确
            } else {
                that.register_phone_status = true;
                $('.txt1').css('color', 'black')
                $('.phone').css('background', '');
                $('.phoneNum').css({
                    'color': 'black',
                    'background': '#fff',
                });
                $('.zc_btn').css({
                    'background': 'red',
                });
                $('.txt1').css({
                    'height': '30px',
                    'fontSize': '12px',
                    'lineHeight': '30px'
                });
                $('.tishi').text('')
            }
        })

        //验证码
        //随机验证码 警告框输出
        $('.send').mouseenter(function () {

            if (that.code_switch) {
                $('.send').click(function () {
                    that.code_switch = false;
                    clearInterval(that.time);
                    let count = 60;
                    that.time = setInterval(function () {
                        $('.send a').text(`重新发送 ${count}s`);
                        count--;
                        if (count <= 0) {
                            that.code_switch = true;
                            $('.send a').text(`重新发送`);
                            clearInterval(that.time);
                        }
                    }, 1000);

                    that.code = (Math.round(Math.random() * (0xffffff) + 150000)).toString(16);
                    alert(that.code);
                })
            } else {
                $('.send').off('click');
            }
        })
        //点击里面的div高度变化 input显示出来
        this.inp.click(function () {
            $('.txt_ver').css({
                'height': '30px',
                'fontSize': '12px',
                'lineHeight': '30px'
            });
            $('.ver_num').css('display', 'block').focus();
            //大框的边框
            $('.Verification_Code').css('border', '2px solid orange');
        })
        //input失焦还原原来的样子
        $('.ver_num').blur(function () {
            $('.txt_ver').css({
                'height': '60px',
                'fontSize': '17px',
                'lineHeight': '60px'
            });
            //最外层边框消失
            $('.Verification_Code').css('border', '0px solid orange');

            //声明验证码正则
            let re = /^[\w]{6}$/;
            //内容为空
            if ($('.ver_num').val() == '') {
                that.register_status = false;
                $('.txt_ver').css('color', 'red');
                $('.Verification_Code').css('background', 'pink');
                $('.ver_num').css({
                    'color': 'red',
                    'background': 'pink',
                    'display': 'none'
                });
                $('.ver_rel').text('请输入验证码').css({
                    'color': 'red',
                    'fontSize': '12px'
                })

            } else if (re.test($('.ver_num').val()) == false) {
                that.register_status = false;
                $('.txt_ver').css({
                    'color': 'red',
                    'height': '30px',
                    'fontSize': '12px',
                    'lineHeight': '30px'
                });
                $('.Verification_Code').css('background', 'pink');
                $('.ver_num').css({
                    'color': 'red',
                    'background': 'pink',

                });
                $('.ver_rel').text('验证码格式错误').css({
                    'color': 'red',
                    'fontSize': '12px'
                })
            } else if ($('.ver_num').val() != that.code) {
                that.register_status = false;
                $('.txt_ver').css({
                    'color': 'red',
                    'height': '30px',
                    'fontSize': '12px',
                    'lineHeight': '30px'
                });
                $('.Verification_Code').css('background', 'pink');
                $('.ver_num').css({
                    'color': 'red',
                    'background': 'pink',

                });
                $('.ver_rel').text('验证码错误').css({
                    'color': 'red',
                    'fontSize': '12px'
                })
            }
            else {
                that.register_status = true;
                $('.txt_ver').css({
                    'color': 'black',
                    'height': '30px',
                    'fontSize': '12px',
                    'lineHeight': '30px'
                });
                $('.Verification_Code').css('background', '#fff');
                $('.ver_num').css({
                    'color': 'black',
                    'background': '#fff',

                });
                $('.ver_rel').css('display', 'none')

            }
        })
        //点击注册按钮到登陆页面
        $('.zc_btn').click(function () {
            if ( that.register_phone_status&& that.register_status && $('#read1:checked').val() == 'on') {
                $.cookie('login',`${$('.phoneNum').val()}`,{path:'/',expires : 7});


                $('.dl_center').css('display', 'block');
                $('.zc_center').css('display', 'none');
                $('.dl span').css({
                    color: 'black',
                    borderBottom: '6px solid red'
                })
                $('.zc span').css({
                    color: '#bbb',
                    borderBottom: '0px'
                })
                $('.phoneNum').val('')
                $('.ver_num').val('')
                that.register_status = false;
                taht.register_phone_status = false;
            }
        })

    }
}
new Register()
