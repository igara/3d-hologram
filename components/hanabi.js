import React, {Component} from "react";

export default class Hanabi extends Component {
    /**
     * @param {any} props
     * @param {any} context
     */
    constructor(props, context) {
        super(props, context);
        this.state = {
            hanabi_num: this.props.hanabi_num
        };
    }

    /**
     * @return {JSX.Element}
     * @see {Component}
     */
    render() {
        return (
<canvas id={"hanabi_" + this.state.hanabi_num} style={style.hanabi}></canvas>
        );
    }

    /**
     * After render Event
     * @see {Component}
     */
    componentDidMount() {
        this.setHanabi();
    }

    setHanabi() {

        Math.Radian = Math.PI * 2;

        var hibana = [],
        hibanaRenderBuff = [],
        canvas = document.getElementById("hanabi_" + this.state.hanabi_num),
        count = 0,

        b = document.body,
        d = document.documentElement;

        var colors = ['#ffffaa','#AA0066','#008000','#ffd700','#0000ff'];
        var cols = colors.length;

        canvas.width = Math.max(b.clientWidth , b.scrollWidth, d.scrollWidth, d.clientWidth);
        canvas.height = Math.max(b.clientHeight , b.scrollHeight, d.scrollHeight, d.clientHeight);

        var hanabi = {
            'quantity' : 10,
            'size' : 3,
            'circle' : 0.97,
            'gravity' : 0.5,
            'speed' : 3,
            'top' : canvas.height / 3,
            'left' : canvas.width / 3,
            'z' : 0,
            'opacity': 1,
            'persistence': 3,
            'color' : ['#ffffaa','#AA0066','#ffffaa']
        };
    
        var rising = {
            'rise': false,
            'x': 0,
            'y': 0,
            'gravity' : 0.98,
            'st': 12,
            'size': 1,
            'opacity': 0.8,
            'color': "#CCC"
        };

        var cvs = {
            'elm': canvas,
            'w': canvas.width,
            'h': canvas.height,
            'ctx': canvas.getContext('2d'),
            'left': canvas.getBoundingClientRect ? canvas.getBoundingClientRect().left : 0,
            'top': canvas.getBoundingClientRect ? canvas.getBoundingClientRect().top : 0,
            'pos_x' : 0,
            'pos_y' : 0
        };

        function makeHibanaList() {

            var i, angle1, angle2,
                xyst, zst,
                x = hanabi.left + Math.floor(Math.random()* 100) - 50,
                y = hanabi.top + Math.floor(Math.random()* 100) - 50,
                col1 = colors[Math.floor(Math.random()* cols)],
                col2 = colors[Math.floor(Math.random()* cols)],
                l = hanabi.quantity;

            hanabi.color[0] = col1;
            hanabi.color[1] = col2;
            hanabi.speed = Math.floor(Math.random()*3) + 1;
        
            // Reset Rising
            rising.x = x;
            rising.y = cvs.h;
            rising.rise = false;
            rising.st = 12;

            for( i=0; i< l; i++ ) {
                angle1 = Math.random() * Math.Radian;
                angle2 = Math.random() * Math.Radian;
                xyst = Math.random() * (hanabi.speed*0.8);
                zst = hanabi.speed - xyst;

                hibana.push({
                    x: x,
                    y: y,
                    size: hanabi.size,
                    xst: Math.cos(angle1) * xyst,
                    yst: Math.sin(angle1) * xyst,
                    zst: Math.cos(angle2) * zst,
                    op: hanabi.opacity
                });
            }
            //        console.dir(hibana);
        }

        function hibanaMotion( h ) {
            var new_x = h.x + h.xst,
                new_y = h.y + h.yst,
                new_size = h.size * hanabi.circle,
                new_op = h.op;

            if(new_size < 0.5 ) {
                new_x = h.x + h.xst;
                new_y = h.y + h.yst + hanabi.gravity;
                new_size = h.size * hanabi.circle;
                new_op = h.op * hanabi.circle;
                if( Math.floor(Math.random()*40) === 0 ) {
                    return false;
                }
            }
            if(new_size < 0.1 ) {
                return false;
            }

            return ( {
                x: new_x,
                y: new_y,
                size: new_size,
                xst: h.xst,
                yst: h.yst,
                zst: h.zst,
                op: new_op
            });
        }

        function hanabiMaker() {
            var i, h, x, y, size,
                color = hanabi.color[0],
                col1 = hanabi.color[1],
                col2 = hanabi.color[2],
                l = hibana.length < 100 ? 100 : hibana.length;

            if (!hibana.length) {
                return false;
            }
        
            if( hibanaRenderBuff.length && rising.rise === false) {
                return true;
            }

            if( hibanaRenderBuff.length >  hanabi.persistence * l ) {
                hibanaRenderBuff.splice(0,l);
            }

            l = hibana.length;
            for (i = 0; i < l; i++) {
                h = hibana[i];
                if( h ) {
                    if( h.size < 0.3 ) { color = col2; }
                    else if( h.size < 1 ) { color = col1; }
                
                    size = Math.round( h.size *100 ) /100;
                    x =  Math.round( h.x ) ;
                    y =  Math.round( h.y ) ;
                    h.op = Math.round( h.op *10 ) /10;

                    hibanaRenderBuff.push({
                        x: x,
                        y: y,
                        color: color,
                        size: size,
                        op: h.op
                    });

                    // update
                    hibana[i] = hibanaMotion( h );
                    if( hibana[i] === false ) {
                        hibana.splice(i,1);
                    }
                }
            }
            return hibanaRenderBuff.length;
        }
    
    

        function render2() {
            var i, h,
                x,y,st,
                l = hibanaRenderBuff.length;

            if (!hibanaRenderBuff.length) {
                return true;
            }

            if( count % hanabi.persistence === 0 ) {
                cvs.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                cvs.ctx.fillRect(0, 0, cvs.w, cvs.h);
            }
        
            if( rising.rise === false ) {
                x = rising.x;
                y = rising.y - rising.st;
                st = rising.st * rising.gravity;
                rising.st = st < 2 ? 2 : st;
            
                if( y < hanabi.top ) {
                    y = hanabi.top;
                    rising.rise = true;
                }

                cvs.ctx.strokeStyle = rising.color;
                cvs.ctx.globalAlpha = rising.opacity;
                cvs.ctx.lineWidth = rising.size;
                cvs.ctx.beginPath();
                cvs.ctx.moveTo(x, rising.y);
                cvs.ctx.lineTo(x, y);
                cvs.ctx.stroke();
                rising.y = y;
                count++;
                return true;
            }

            for (i = 0; i < l; i++) {
                h = hibanaRenderBuff[i];
                if( h ) {
                    cvs.ctx.fillStyle = h.color;
                    cvs.ctx.globalAlpha = h.op;
                    cvs.ctx.beginPath();
                    cvs.ctx.arc(h.x, h.y, h.size, 0, Math.Radian, true);
                    cvs.ctx.fill();
                }
            }
            count++;
            return hibanaRenderBuff.length;
        }

        function animationLoop() {
            if( !hanabiMaker() ) {
                if( rising.rise ) {
                    setTimeout( makeHibanaList, 1000 / 1 );
                }
            }
            if ( render2() ) {
                requestAnimationFrame(animationLoop);
            }
        }

        makeHibanaList();
        animationLoop();
    }
}

const style = {
    hanabi: {
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100%",
    }
};
