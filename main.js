var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);

        return _this;
    }

    Main.prototype.onAddToStage = function (event) {

        window['canvass'] = this;


        // RES.getResByUrl('http://192.168.5.107:8080/resource/skins/dailycharge/btnshouchong.png', function (texture) {
        //     var result = new egret.Bitmap();
        //     result.texture = texture;
        //     result.scaleX = result.scaleY = 0.5;
        //     result.anchorOffsetX = result.width / 2;
        //     result.anchorOffsetY = result.height / 2;
        //     result.x = 50;
        //     result.y = 60;
        //     this.addChild(result);
        // }, this, RES.ResourceItem.TYPE_IMAGE);

        
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");