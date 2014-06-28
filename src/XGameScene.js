/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-5-27
 * Time: 下午11:05
 * To change this template use File | Settings | File Templates.
 */


var XGame = cc.Layer.extend({
    space : null,
    ctor:function(){
        this._super();
    },
    init:function(){
        console.log("XGame init");
        this.initPhysics();
        var size = cc.Director.getInstance().getWinSize();
//        var layer = cc.LayerColor.create(cc.c4(255,255,255,255),size.width,size.height);
//        layer.setPosition(cc.p(0,0));
        cc.SpriteFrameCache.getInstance().addSpriteFrame(cc.SpriteFrame.create(res.ballBag,cc.rect(0,0,60,60)),"ballBag.png");
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
        var whiteBall = new Ball();//cc.Sprite.create(res.ballBag);//
        whiteBall.setPosition(cc.p(size.width / 2,size.height / 2));
        var ball = this.createPhysicsSprite(cc.p(200,400));
        this.scheduleUpdate();
        this.addChild(ball);
        this.addChild(whiteBall);
//        this.addChild(layer);
    },
    initPhysics:function(){
        this.space = new cp.Space();
        this.space.gravity = cp.v(0,-10);
//        this.space
//        this.space.iterations = 10;
        var wallBottom = new cp.SegmentShape(this.space.staticBody,
            cp.v(0, g_groundHeight),// start point
            cp.v(4294967295, g_groundHeight),// MAX INT:4294967295
            0);// thickness of wall
        this.space.addStaticShape(wallBottom);
        this.space.addCollisionHandler( 1, 0, null, this.impulse, null, null);
//        this.space.step(2);
    },
    createPhysicsSprite:function(pos){
        var body = new cp.Body(1,cp.momentForBox(1,48,108));
        body.setPos(pos);
//        body.setVel(cp.v(0, -100));
        body.setAngVel(1);
        this.space.addBody(body);
        var shape = new cp.BoxShape(body,48,108);
        shape.setElasticity(0.5);
        shape.setFriction(0.5);
        this.space.addShape(shape);
        var sprite = cc.PhysicsSprite.create(res.ballBag);
        sprite.setBody(body);
        return sprite;
    },
    update:function(dt){
        var steps = 3;
        dt /= steps;
        for (var i = 0; i < 3; i++){
            this.space.step(dt);
        }
    },
    impulse:function(arb,space){
        var shapes = arb.getShapes();
        var poly = shapes[0];
        var body = poly.getBody();
        return true;
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