/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-5-27
 * Time: 下午11:05
 * To change this template use File | Settings | File Templates.
 */
var XGame = cc.Layer.extend({
    ctor:function(){
        this._super();
    },
    init:function(){
        console.log("XGame init");
        var size = cc.Director.getInstance().getWinSize();
//        var layer = cc.LayerColor.create(cc.c4(255,255,255,255),size.width,size.height);
//        layer.setPosition(cc.p(0,0));
        var snookerDesk = cc.Sprite.create(res.snookerDesk);
        snookerDesk.setPosition(cc.p(size.width / 2,size.height / 2));
        this.addChild(snookerDesk);
//        this.addChild(layer);
    }
});

var XGameScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var xgame = new XGame();
        xgame.init();
        this.addChild(xgame);
    }
});