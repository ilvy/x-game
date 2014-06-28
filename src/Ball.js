/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-6-5
 * Time: 下午11:03
 * To change this template use File | Settings | File Templates.
 */

var Ball = cc.Sprite.extend({

    _touchBegan:false,
    _touchEnabled:true,
    prevPos:{},
    ctor:function(){
        this._super();
        this.initWithSpriteFrameName("ballBag.png");//initWithSpriteFrameName(res.ballBag);
        this.prevPos = {};
    },
    setPosition:function(){
        this._super(arguments[0]);
        console.log(arguments);
    },
    onEnter:function(){
        this._super();
//        cc.registerTargetedDelegate(0,true,this);
        cc.Director.getInstance().getTouchDispatcher()._addStandardDelegate(this, 0);
        this._touchEnabled=true;
        console.log("onEnter");
    },
    onExit:function(){
        this._super();
        cc.unregisterTouchDelegate(this);
        this._touchEnabled=false;
    },
    touchRect:function(){
        console.log("touchRect");
        console.log(this);
        return this.getBoundingBoxToWorld();
    },
    setTouchEnabled:function(enable){
        if(enable&&!this._touchEnabled){
            cc.Director.getInstance().getTouchDispatcher()._addStandardDelegate(this, 0);
            this._touchEnabled=true;
        }
        else if(!enable&&this._touchEnabled){
            cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
            this._touchEnabled=false;
        }
        console.log("setTouchEnabled");
    },
    onTouchesBegan:function(touches,event){
//        if(cc.Rect.CCRectContainsPoint(this.touchRect(),touches[0].getLocation())){
//            this._touchBegan=true;
//        }
        if(cc.rectContainsPoint(this.touchRect(),touches[0].getLocation())){
            this._touchBegan = true;
            return true;
        }

        console.log("onTouchesBegan");
        return false;
    },
    onTouchesMoved:function(touches,event){

        console.log("onTouchesMoved");
    },
    onTouchesEnded:function(touches,event){
        if(this._touchBegan){
            this._touchBegan=false;
        }
        console.log("onTouchesEnded");
    }
});


