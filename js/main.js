define(["jquery"], function ($) {

    $(window).scroll(function () {
    })
    $(function () {
        $(".accordionn").click(function () {
            $(".accordion-desc").not($(this).next()).slideUp('fast');
            $(this).next().slideToggle(400);
        });
        if (parent) {
        }
    })
    window.showAlert = function (msg, callBack) {
        $(".alert").show();
        $(".alert .info-body").html(msg);
        $("#ok").focus();

        $("#ok").unbind("click");
        $("#ok").click(function () {
            $(".alert").hide();
            if (callBack)
                callBack();
        });
        $(".info-l").unbind("click");
        $(".info-l").click(function () {
            $(".alert").hide();
            if (callBack)
                callBack();
        });
    }
    window.showComfirm = function (msg, callBack, nocallBack) {
        $(".comfirm").show();
        $(".comfirm .info-body").html(msg);
        $("#comfirmYes").focus();
        $("#comfirmYes").unbind("click");
        $("#comfirmYes").click(function () {
            $(".comfirm").hide();
            if (callBack)
                callBack();
        });
        $("#comfirmNO").unbind("click");
        $("#comfirmNO").click(function () {
            $(".comfirm").hide();
            if (nocallBack)
                nocallBack();
        });
        $(".info-l").unbind("click");
        $(".info-l").click(function () {
            $(".comfirm").hide();
            if (nocallBack)
                nocallBack();
        });
    }

    window.showMsg = function (data, successFunc, failureFunc, otherFunc) {
        if (data.code == "success") {
            successFunc();
        }
        else if (data.code == "failure") {
            window.showAlert(data.msg);
            if (failureFunc) {
                failureFunc();
            }
        }
        else if (data.code == "-1") {
            window.location.href = "/User/Login.aspx";
        }
        else {
            if (otherFunc)
            { otherFunc(); }
        }
    }
    window.showMsgBlock = function (data, successFunc, failureFunc, otherFunc) {
        if (data.code == "success") {
            window.showAlert(data.msg, successFunc);
        }
        else if (data.code == "failure") {
            window.showAlert(data.msg, failureFunc);
        }
        else if (data.code == "-1") {
            window.location.href = "/User/Login.aspx";
        }
        else {
            if (otherFunc)
            { otherFunc(); }
        }
    }

    window.calculateAPY = function (APY) {
        return (APY * 100).toFixed(2);
    }
    window.comdify = function (value) {
        var val = value.toString().replace(/,/g, "");
        if (val.length > 10) {
            val = val.substring(0, 10);
        }

        var re = /\d{1,3}(?=(\d{3})+$)/g;
        var n1 = val.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { return s1.replace(re, "$&,") + s2; });
        return n1;
    };

    window.BaiFenBiJinDu=function(shengyu,zong){
        var w = shengyu / zong * 100;
        var y = (zong - shengyu) / zong * 100;
        return Math.round(y > 0 ? (y < 1 ? 1 : (w > 0 ? (w < 1 ? 99 : y) : 100)) : 0);
    }

})
































