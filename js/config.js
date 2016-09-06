define(["jquery"], function ($) {
    var imgPath = imgUrl;
    getImgPath = function () {
        return imgPath;
    };
    return {
        getImgPath: getImgPath
    };
});