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
        var ballbags = [];
        ballbags[0] = cc.Sprite.create(res.ballBag);
        ballbags[1] = cc.Sprite.create(res.ballBag);
        ballbags[2] = cc.Sprite.create(res.ballBag);
        ballbags[3] = cc.Sprite.create(res.ballBag);
        ballbags[4] = cc.Sprite.create(res.ballBag);
        ballbags[5] = cc.Sprite.create(res.ballBag);
        ballbags[0].setPosition(cc.p(0,0));
        ballbags[1].setPosition(cc.p(size.width / 2,0));
        ballbags[2].setPosition(cc.p(size.width,0));
        ballbags[3].setPosition(cc.p(0,size.height));
        ballbags[4].setPosition(cc.p(size.width / 2,size.height));
        ballbags[5].setPosition(cc.p(size.width,size.height));
        this.addChild(snookerDesk);
        for(var i = 0; i < 6; i++){
            this.addChild(ballbags[i]);
        }
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