(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{156:function(e,t,a){var n={"./BAT.svg":700,"./Bitcoin.svg":701,"./XRP.svg":702,"./bank.svg":317,"./betacoin.png":703,"./betacoin1.svg":704,"./dogecoin.svg":705,"./eos.svg":706,"./ethereum.svg":707,"./isk.png":708,"./litecoin.svg":709,"./monero.svg":710};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=156},2225:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(104),o=a.n(s),i=(a(350),a(351),a(342)),c=a(40),l=a.n(c),u=a(27),m=a(28),p=a(35),d=a(34),h=a(36),g=r.a.createContext(null);a(316),a(699);var v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={lastAngle:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.xMin,a=e.xMax;a<t&&(a=t);var n=0;n=100*(1-(n=this.props.testPoints[this.props.testPoints.length-1][1])/this.props.yMax)+"%";var s=0;s="calc( "+((s=this.props.testPoints[this.props.testPoints.length-1][0]/1e3)/a*200-100)+"% - 32px )";this.props.testPoints.length>22&&this.props.testPoints.length;var o=this.props.testPoints[this.props.testPoints.length-2],i=this.props.testPoints[this.props.testPoints.length-1],c=Math.sqrt(Math.pow(o[0]/1e3-i[0]/1e3,2)+Math.pow(o[1]-i[1],2)),l=i[1]-o[1],u=Math.acos(l/c)*(180/Math.PI);return u=u,r.a.createElement("div",{class:"boost-rocket-wrapper"},r.a.createElement("div",{class:"boost-rocket-sprite",style:{left:s,top:n,transform:"rotate(70deg)",transformOrigin:"center top "}},r.a.createElement(y,null)))}}]),t}(n.Component);function y(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",{className:"rocket-sprite"}),r.a.createElement("div",{className:"rocket-sprite-flames"},r.a.createElement("div",{class:"fire"},r.a.createElement("div",{class:"flame"}),r.a.createElement("div",{class:"flame"}),r.a.createElement("div",{class:"flame"}),r.a.createElement("div",{class:"flame"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}),r.a.createElement("div",{class:"spark"}))))}var f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={height:0,offset:15},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("y-axis").clientHeight;this.setState({height:e})}},{key:"render",value:function(){var e=this.state,t=e.height,a=e.offset,n=this.props,s=n.yMax,o=n.step;s++;for(var i=1+o,c=[1];i<=2*(s+o);)c.push(i),i+=o;c=function(e,t){for(var a=[e[0]],n=e.length-2,r=Math.floor(n/(t-2)),s=1;s<t-1;s++)a.push(e[s*r]);return a.push(e[e.length-1]),a}(c,50);for(var l=[],u=0;u<c.length;u++){var m=(c[u]-1)/(s-1)*(t-a)+a;c.length;l.push(r.a.createElement(E,{value:c[u],majorTick:!1,height:m}))}return l=l.reverse(),r.a.createElement("div",{className:"y-axis-element"},r.a.createElement("div",{class:"boost-yaxis-wrapper"},l))}}]),t}(n.Component);function E(e){var t=e.height+7;return r.a.createElement("div",{class:"yaxis-tick-wrapper",style:{bottom:t+"px"}},r.a.createElement("div",{class:"yaxis-tick-large"}),Math.round(100*e.value)/100)}var b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={width:0,offset:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("x-axis").clientWidth;this.setState({width:e})}},{key:"render",value:function(){for(var e=this.props.xMax,t=this.state,a=t.width,n=t.offset,s=2,o=[2];s<=e+2;)o.push(s),s+=2;for(var i=[],c=0;c<o.length;c++){var l=(o[c]-1)/(e-1)*(a-n)+n;i.push(r.a.createElement(x,{value:o[c],left:l}))}return r.a.createElement("div",{id:"x-axis",className:"x-axis-element"},r.a.createElement("div",{className:"boost-x-axis"},i))}}]),t}(n.Component);function x(e){return r.a.createElement("div",{class:"xaxis-tick-wrapper",style:{left:e.left+"px"}},r.a.createElement("div",{class:"xaxis-tick"}),r.a.createElement("div",null,e.value,"s"))}var w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t={};return this.props.crashed&&(t.color="red"),this.props.wager.value&&(e=r.a.createElement("div",{class:"boost-payout-currency-value"},"+ $",(this.props.currentPayout*parseFloat(this.props.wager.value)).toFixed(2))),this.props.wager.payout?e=r.a.createElement("div",{class:"boost-payout-currency-value"},"+ $",(parseFloat(this.props.wager.payout)*parseFloat(this.props.wager.value)).toFixed(2)):this.props.crashed&&this.props.wager.value&&(e=r.a.createElement("div",{class:"boost-payout-currency-value",style:t},"- $",parseFloat(this.props.wager.value).toFixed(2))),r.a.createElement("div",{className:"boost-payout-number-wrapper"},r.a.createElement("div",{className:"boots-payout-display",style:t},r.a.createElement("div",{className:"boost-payout-number"},this.props.currentPayout.toFixed(2),"x"),r.a.createElement("div",{className:"boost-payout-subtitle"},"Current Payout"),e))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.testPoints,a=e.xMax,n=e.xMin,s=e.wagers;a<n&&(a=n);for(var o=[],i=1;i<t.length;i++){var c=t[i-1][0]/1e3/a*100-.02+"%",l=100*(1-t[i-1][1]/this.props.yMax)-.02+"%",u=t[i][0]/1e3/a*100+.02+"%",m=100*(1-t[i][1]/this.props.yMax)+.02+"%";o.push(r.a.createElement("line",{"stroke-linecap":"round",x1:c,y1:l,x2:u,y2:m,style:{stroke:"rgb(255,255,255,0.3)",strokeWidth:"5",borderRadius:"3px"},key:"line-segment-"+i}))}var p=[],d=!0,h=!1,g=void 0;try{for(var v,y=s[Symbol.iterator]();!(d=(v=y.next()).done);d=!0){var f=v.value;if(f.payout){var E=f.cashout/1e3/a*100-.02+"%",b=(f.payout-1)/this.props.yMax*100+"%";p.push(r.a.createElement(O,{bottom:b,left:E,multiplyer:f.payout,tick:f.cashout,value:f.value,wager:f}))}}}catch(x){h=!0,g=x}finally{try{d||null==y.return||y.return()}finally{if(h)throw g}}return r.a.createElement("div",{class:"boost-line-wrapper"},r.a.createElement("div",{class:"boost-line-inner-wrapper"},r.a.createElement("div",{className:"boost-line-svg-wrapper"},r.a.createElement("svg",{class:"boost-line-svg"},o)),r.a.createElement("div",{className:"boost-line-wager-wrapper"},r.a.createElement("div",{className:"boost-line-wager"},p))))}}]),t}(n.Component);function C(e){return r.a.createElement("div",{className:"pre-round-wrapper"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(y,null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{className:"pre-round-title"},"Perparing Round"),r.a.createElement("div",{className:"pre-round-round-down"},"Starting In ",r.a.createElement("span",null,e.timeRemaining,"s")))))}var O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={height:0,width:0,elmID:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,a="x"==e?t:3&t|8;return a.toString(16)}))+"-wager-placement",hover:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById(this.state.elmID).clientHeight,t=document.getElementById(this.state.elmID).clientWidth;this.setState({height:e,width:t})}},{key:"onMouseOver",value:function(){console.log("mouse over"),this.setState({hover:!0})}},{key:"onMouseOut",value:function(){console.log("mouse out"),this.setState({hover:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.elmID,s=t.height,o=t.width,i=this.props,c=i.bottom,l=i.left,u=i.wager;return r.a.createElement("div",{onMouseEnter:function(){e.onMouseOver()},id:n,style:{position:"absolute",bottom:"calc( "+c+" - "+s/2+"px )",left:"calc( "+l+" - "+o/2+"px )",zIndex:1e4}},r.a.createElement("img",{src:a(156)("./"+u.currency.image),style:{height:"1.5rem",width:"1.5rem"}}))}}]),t}(n.Component);var M=a(203),P=(a(711),a(339)),j=a(2227),N=a(2234),B=a(2228),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={betType:"manual"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"selectBetType",value:function(e){this.setState({betType:e})}},{key:"render",value:function(){var e=this,t=this.state.betType,a=this.props,n=a.currentWager,s=a.cancelBet,o=a.nextRoundWager,i=a.waitingForNextRound,c=a.crashed,l=a.selectedCurrency,u=(a.selectCurrency,r.a.createElement(S,{placeManualBet:this.props.placeManualBet,cashout:this.props.cashout,wagers:this.props.wagers,currentPayout:this.props.currentPayout,currentWager:n,nextRoundWager:o,waitingForNextRound:i,crashed:c,cancelBet:s,selectedCurrency:l,logMessage:this.props.logMessage}));return"auto"==t&&(u=r.a.createElement(R,null)),r.a.createElement("div",{className:"betting-pannel-wrapper"},r.a.createElement("div",{className:"bet-type-selector"},r.a.createElement(P.a,{onClick:function(){e.selectBetType("manual")},color:"primary",size:"sm",style:{marginRight:"0.25rem"}},"Manuel")," ",r.a.createElement(P.a,{onClick:function(){e.selectBetType("auto")},color:"primary",size:"sm"},"Auto-bet")," "),r.a.createElement("div",{style:{paddingTop:"0rem",flexGrow:"1",height:"100%",overflow:"hidden"}},u))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){a.setState(Object(M.a)({},e.target.name,e.target.value))},a.state={betAmmount:0,autoCashout:0,betPlaced:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"submitBet",value:function(){this.props.logMessage({title:"Wager Submitted"});var e=this.state,t=e.betAmmount,a=e.autoCashout;console.log(this.state),console.log("submitting wager"),this.props.placeManualBet(t,a),this.setState({betPlaced:!0})}},{key:"cashout",value:function(){this.props.logMessage({title:"Wager Cashed Out"}),this.props.cashout()}},{key:"cancelBet",value:function(){this.props.logMessage({title:"Bet Canceled"}),this.props.cancelBet()}},{key:"render",value:function(){var e=this.state,t=e.betAmmount,a=e.autoCashout,n=(e.betPlaced,this.props),s=(n.currentPayout,n.currentWager),o=n.nextRoundWager,i=n.waitingForNextRound,c=(n.crashed,n.selectCurrency,n.selectedCurrency,this),l=r.a.createElement(P.a,{color:"primary",size:"sm",block:!0,onClick:function(){c.submitBet()}},"Place Bet"),u={position:" absolute",backgroundColor:"rgb(0,0,0,0.5)",top:0,zIndex:95};o.value&&(!s.value||s.payout&&s.value)&&(l=r.a.createElement(P.a,{color:"primary",size:"sm",block:!0,onClick:function(){c.cancelBet()}},"Cancel Bet"),u.height="100%",u.width="100%"),s.value&&!s.payout&&(l=r.a.createElement(P.a,{color:"primary",size:"sm",block:!0,onClick:function(){c.cashout()}},"Cashout"),u.height="100%",u.width="100%"),s.value&&i&&(l=r.a.createElement(P.a,{color:"primary",size:"sm",block:!0,disabled:!0},"Waiting For Round..."),u.height="100%",u.width="100%");var m=r.a.createElement("div",{style:{padding:"0.5rem"}},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",null,"Bet Ammount"),r.a.createElement(j.a,{size:"sm"},r.a.createElement(N.a,{addonType:"prepend"},"$"),r.a.createElement(B.a,{name:"betAmmount",value:t,onChange:this.onChange}),r.a.createElement(N.a,{addonType:"append"},r.a.createElement(P.a,null,"1/2")),r.a.createElement(N.a,{addonType:"append"},r.a.createElement(P.a,null,"x2")),r.a.createElement(N.a,{addonType:"append"},r.a.createElement(P.a,null,"Max"))),r.a.createElement("div",null,"Auto Cashout"),r.a.createElement(j.a,{size:"sm",style:{paddingBottom:"1rem"}},r.a.createElement(N.a,{addonType:"prepend"},"$"),r.a.createElement(B.a,{name:"autoCashout",value:a,onChange:this.onChange}),r.a.createElement(N.a,{addonType:"append"},r.a.createElement(P.a,null,"X"))),r.a.createElement("div",{style:u})),r.a.createElement("div",null,l));return r.a.createElement("div",{class:"manual-bet-pannel"},m,r.a.createElement("div",{style:{flexGrow:1,height:"100%",overflow:"hidden"}},r.a.createElement(W,{wagers:this.props.wagers})))}}]),t}(n.Component),W=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[],t=this.props.wagers.sort((function(e,t){return e.bot-t.bot})),a=!0,n=!1,s=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var c=o.value,l=c.value,u="";c.payout&&(l=(parseFloat(c.payout)*parseFloat(c.value)).toFixed(2),u="x"+c.payout),e.push(r.a.createElement("div",{className:"session-wager-list-item"},r.a.createElement("div",{className:"session-wager-player-status"}),r.a.createElement("div",{className:"session-wager-player-name"},c.name),r.a.createElement("div",{className:"session-wager-player-delta"},u),r.a.createElement("div",{className:"session-wager-player-ammount"},"$",l),r.a.createElement("div",{className:"session-wager-player-currency"})))}}catch(m){n=!0,s=m}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}return r.a.createElement("div",{className:"betting-session-wagers"},r.a.createElement("div",{className:"session-wagers-header"},r.a.createElement("div",{className:"session-wagers-players"},t.length," players"),r.a.createElement("div",{className:"session-wagers-total"},"$",t.length>0?t.map((function(e){return parseFloat(e.value)})).reduce((function(e,t){return e+t})):0)),r.a.createElement("div",{className:"session-wager-list"},e))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){a.setState(Object(M.a)({},e.target.name,e.target.value))},a.state={betAmmount:0,betChashout:0,totalBets:0,onWin:0,onWinIncrease:!0,onLoss:0,onLossIncrease:!0,stopAtProfit:0,stopAtLoss:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"placeBet",value:function(){}},{key:"cancelBet",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.betAmmount,a=e.betChashout,n=e.totalBets,s=e.onWin,o=e.onWinIncrease,i=e.onLoss,c=e.onLossIncrease,l=e.stopAtProfit,u=e.stopAtLoss,m=this;return r.a.createElement("div",{className:"auto-bet-pannel"},r.a.createElement("div",{style:{padding:"0.5rem"}},r.a.createElement("div",null,"Bet Ammount"),r.a.createElement(j.a,{size:"sm",style:{paddingBottom:"0.5rem"}},r.a.createElement(N.a,{addonType:"prepend"},"$"),r.a.createElement(B.a,{name:"betAmmount",value:t,onChange:this.onChange}),r.a.createElement(N.a,{addonType:"append"},r.a.createElement(P.a,null,"1/2")),r.a.createElement(N.a,{addonType:"append"},r.a.createElement(P.a,null,"x2")),r.a.createElement(N.a,{addonType:"append"},r.a.createElement(P.a,null,"Max")))),r.a.createElement("div",{className:"bet-row"},r.a.createElement("div",{className:"bet-col",style:{marginRight:"0.5rem"}},r.a.createElement("div",null,"Bet Cashout"),r.a.createElement(j.a,{size:"sm",style:{paddingBottom:"0.5rem"}},r.a.createElement(N.a,{addonType:"prepend"},"$"),r.a.createElement(B.a,{name:"betChashout",value:a,onChange:this.onChange}))),r.a.createElement("div",{className:"bet-col"},r.a.createElement("div",null,"Total Bets"),r.a.createElement(j.a,{size:"sm",style:{paddingBottom:"0.5rem"}},r.a.createElement(N.a,{addonType:"prepend"},"#"),r.a.createElement(B.a,{name:"totalBets",value:n,onChange:this.onChange})))),r.a.createElement("div",{style:{padding:"0.5rem"}},r.a.createElement("div",null,"On Win"),r.a.createElement(j.a,{size:"sm",style:{paddingBottom:"0.5rem"}},r.a.createElement(N.a,{addonType:"prepend"},"%"),r.a.createElement(B.a,{name:"onWin",value:s,onChange:this.onChange}),r.a.createElement(N.a,{addonType:"append",onClick:function(){m.setState({onWinIncrease:!0})}},r.a.createElement(P.a,{outline:!o},"Increase")),r.a.createElement(N.a,{onClick:function(){m.setState({onWinIncrease:!1})},addonType:"append"},r.a.createElement(P.a,{outline:o},"Reset")))),r.a.createElement("div",{style:{padding:"0.5rem"}},r.a.createElement("div",null,"On Loss"),r.a.createElement(j.a,{size:"sm",style:{paddingBottom:"0.5rem"}},r.a.createElement(N.a,{addonType:"prepend"},"%"),r.a.createElement(B.a,{name:"onLoss",value:i,onChange:this.onChange}),r.a.createElement(N.a,{onClick:function(){m.setState({onLossIncrease:!0})},addonType:"append"},r.a.createElement(P.a,{outline:!c},"Increase ")),r.a.createElement(N.a,{onClick:function(){m.setState({onLossIncrease:!1})},addonType:"append"},r.a.createElement(P.a,{outline:c},"Reset")))),r.a.createElement("div",{className:"bet-row"},r.a.createElement("div",{className:"bet-col",style:{marginRight:"0.5rem"}},r.a.createElement("div",null,"Stop At Profit"),r.a.createElement(j.a,{size:"sm",style:{paddingBottom:"0.5rem"}},r.a.createElement(N.a,{addonType:"prepend"},"$"),r.a.createElement(B.a,{name:"stopAtProfit",value:l,onChange:this.onChange}))),r.a.createElement("div",{className:"bet-col"},r.a.createElement("div",null,"Stop At Loss"),r.a.createElement(j.a,{size:"sm",style:{paddingBottom:"0.5rem"}},r.a.createElement(N.a,{addonType:"prepend"},"#"),r.a.createElement(B.a,{name:"stopAtLoss",value:u,onChange:this.onChange})))),r.a.createElement("div",{style:{padding:"0.5rem"}},r.a.createElement(P.a,{color:"primary",size:"sm",block:!0},"Place Bet")))}}]),t}(n.Component),A=a(343),I=a(2233),z=a(2229),L=a(2235),F=a(2230),D=a(2231),$=a(2232);a(714),a(715),a(716);function G(e){return r.a.createElement("div",{className:"boost-footer"},r.a.createElement("div",{className:"footer-icon-wrapper"},r.a.createElement("div",{className:"game-fullscreen-button"})),r.a.createElement("div",{className:"footer-icon-wrapper"},r.a.createElement("div",{className:"game-expand-button"})),e.children,r.a.createElement("div",{className:"footer-disapear"}))}function H(e){var t=[],a=!0,n=!1,s=void 0;try{for(var o,i=e.payoutHistory[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var c=o.value;t.push(r.a.createElement(X,{value:c}))}}catch(l){n=!0,s=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}return r.a.createElement("div",{className:"session-history-wrapper"},t)}function X(e){return r.a.createElement("div",{className:"payout-history-element"},e.value,"x")}function _(e){return r.a.createElement("div",{className:"boost-header"},r.a.createElement("div",{className:"header-icon"}),r.a.createElement("div",{className:"boost-header-title"},"Boost"),r.a.createElement("div",{className:"boost-header-maxpayout"},r.a.createElement(U,null),e.children))}var J,U=function(e){var t=Object(n.useState)(!1),a=Object(A.a)(t,2),s=a[0],o=a[1];return r.a.createElement("div",null,r.a.createElement("div",{id:"TooltipExample",className:"boost-header-maxpayout"},"Max Profit ",r.a.createElement("div",{className:"boost-header-maxpayout-icon"})),r.a.createElement(I.a,{placement:"left",isOpen:s,target:"TooltipExample",toggle:function(){return o(!s)}},r.a.createElement("div",{style:{fontSize:"0.75rem",color:"rgb(255,255,255,0.5)"}},"$7000 max Profit")))},V=[{name:"BTC",image:"Bitcoin.svg",ammount:3245.32},{name:"BAT",image:"BAT.svg",ammount:3245.32},{name:"DOGE",image:"dogecoin.svg",ammount:22.32},{name:"EOS",image:"eos.svg",ammount:45.32},{name:"ETH",image:"ethereum.svg",ammount:45.32},{name:"LTC",image:"litecoin.svg",ammount:3245.32},{name:"XMR",image:"monero.svg",ammount:3.32},{name:"XRP",image:"XRP.svg",ammount:1.32},{name:"BETA",image:"betacoin.png",ammount:432.34}],q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={listOfCoins:e.coins},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.selectedCurrency,s=t.selectCurrency,o=this,i=this.state,c=i.listOfCoins,l=i.dropdownOpen,u=[],m=!0,p=!1,d=void 0;try{for(var h,g=function(){var t=h.value;u.push(r.a.createElement(z.a,{color:"primary",size:"sm",style:{display:"flex",width:"100%",fontWeight:500,alignItems:"center",fontSize:"0.9rem"},onClick:function(){s(t)}},r.a.createElement("img",{src:a(156)("./"+t.image),style:{height:"1.5rem",width:"1.5rem",marginRight:"0.5rem"}}),t.name,r.a.createElement("div",{style:{marginright:"0.5rem",fontSize:"0.8rem",flexGrow:1,marginLeft:"1rem",textAlign:"right",fontWeight:400}},"$",t.ammount))),t.name==n.name&&(e=r.a.createElement(L.a,{caret:!0,style:{display:"flex",width:"100%",alignItems:"center",fontSize:"0.9rem",flexWrap:"no-wrap",fontWeight:600}},r.a.createElement("img",{src:a(156)("./"+t.image),style:{height:"1.5rem",width:"1.5rem",marginRight:"0.5rem"}}),t.name,r.a.createElement("div",{style:{marginright:"0.5rem",fontSize:"0.9rem",flexGrow:1,marginLeft:"1rem",textAlign:"right",fontWeight:400}},"$",t.ammount)))},v=c[Symbol.iterator]();!(m=(h=v.next()).done);m=!0)g()}catch(y){p=!0,d=y}finally{try{m||null==v.return||v.return()}finally{if(p)throw d}}return r.a.createElement(F.a,{isOpen:l,size:"sm",toggle:function(){o.setState({dropdownOpen:!l})}},e,r.a.createElement(D.a,{right:!0},r.a.createElement(z.a,{header:!0},"Wallet"),u,r.a.createElement(z.a,{divider:!0}),r.a.createElement(z.a,{style:{display:"flex",width:"100%",alignItems:"center",fontSize:"0.9rem",flexWrap:"no-wrap"}},r.a.createElement("img",{src:a(317),style:{height:"1.5rem",width:"1.5rem",marginRight:"0.5rem"}}),"My Account")))}}]),t}(n.Component),Y=(n.Component,function(e){return e.dismissTimer&&setTimeout((function(){e.close()}),e.dismissTimer),r.a.createElement($.a,{size:"sm",color:"secondary",isOpen:!0},r.a.createElement("img",{src:a(736),style:{height:"0.75rem",width:"0.75rem",marginRight:"0.5rem"}}),e.messageBody)}),K=a(206),Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={xMax:6,xMin:2,yMax:2.5,currentPayout:1,currentTick:0,testPoints:[[0,0],[.1,.01]],wagers:[],lastPayout:1.43,coins:V,payoutHistory:[],roundStart:(new Date).getTime(),timeReaming:0,crashed:!1,nextRoundWager:{},currentWager:{},autoBetParameter:{enabled:!1,baseValue:0,cashoutValue:0,totalBets:0,onWin:0,onWinIncrease:!0,onLoss:0,onLossIncrease:!0,stopAtProfit:0,stopAtLost:0},autoBetCounters:{totalBets:0,wagerSum:0},waitingForNextRound:!1,selectedCurrency:{name:"BETA",image:"betacoin.png",ammount:3245.32},notificationCenterMessage:[]},a.inializeConnection(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"inializeConnection",value:function(){var e,t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=this).startGameLoop(),n.abrupt("return");case 9:return t=n.sent,console.log(t),n.next=13,l.a.awrap((void 0).subscribe());case 13:(a=n.sent).on("open",(function(){console.log("subscription opened"),e.startGameLoop()})),a.on("update",(function(e){console.log("object updated")})),a.on("close",(function(){console.log("subscription closed")}));case 17:case"end":return n.stop()}}),null,this)}},{key:"addNotificationCenterMessage",value:function(e){var t=this,a=this.state.notificationCenterMessage;a.unshift({dissmissMessage:function(){console.log(e),e.dismissed=!0,t.setState({})},message:e}),this.setState({notificationCenterMessage:a})}},{key:"startGameLoop",value:function(){var e=this.state.currentTick+16,t=this,a=Math.round(100*(this.getPayoutAtTick(e)+1))/100;if(this.state.testPoints[this.state.testPoints.length-1][1]<this.state.lastPayout){var n=this.state.testPoints;this.state.testPoints[this.state.testPoints.length-1];n.push([e,this.getPayoutAtTick(e)]);var r=this.state.yMax;a>2.2&&(r=a+.3);var s=Object(i.a)(this.state.wagers),o=!0,c=!1,l=void 0;try{for(var u,m=s[Symbol.iterator]();!(o=(u=m.next()).done);o=!0){var p=u.value;p.bot&&p.pull_out<100*a&&!p.cashout&&this.cashoutBot(p)}}catch(h){c=!0,l=h}finally{try{o||null==m.return||m.return()}finally{if(c)throw l}}this.setState({testPoints:n,xMax:this.state.testPoints[this.state.testPoints.length-1][0]/1e3,currentTick:e,currentPayout:a,yMax:r,wagers:s}),setTimeout((function(){t.startGameLoop()}),16)}else{console.log("done");var d=this.state.payoutHistory;d.unshift(this.state.currentPayout),t.setState({crashed:!0,payoutHistory:d}),this.endBoostRound()}}},{key:"endBoostRound",value:function(){var e=this,t=this;setTimeout((function(){e.setState({roundStart:(new Date).getTime()+7500,wagers:[],currentWager:{},waitingForNextRound:!0}),t.roundPreperationLoop()}),3e3)}},{key:"roundPreperationLoop",value:function(){var e=this;this.state.roundStart<(new Date).getTime()?(this.setState({xMax:6,yMax:2.5,currentPayout:1,testPoints:[[0,0],[.1,.01]],lastPayout:10*Math.random(),timeReaming:0,currentTick:0,crashed:!1,waitingForNextRound:!1}),setTimeout((function(){e.startGameLoop()}),16)):(this.state.timeReaming%10==0&&this.submitBotWager(100,200),this.state.nextRoundWager.value?(this.submitWager(this.state.nextRoundWager.value,this.state.nextRoundWager.autoCashout),this.setState({nextRoundWager:{}})):this.state.autoBetParameter.enabled,e.setState({timeReaming:this.state.roundStart-(new Date).getTime()}),setTimeout((function(){e.roundPreperationLoop()}),0))}},{key:"getPayoutAtTick",value:function(e){return e<10472?e/1e3*.2:Math.pow(e/1e3+4,2)/100}},{key:"placeManualBet",value:function(e,t){console.log(e,t),this.state.roundStart>(new Date).getTime()?this.submitWager(e,t):this.setState({nextRoundWager:{name:"test account",value:e,autoCashout:t,currenty:this.state.selectedCurrency}})}},{key:"cashout",value:function(){var e=this.state.currentWager;e.cashout=this.state.currentTick,e.payout=this.state.currentPayout,this.setState({currentWager:e}),this.addNotificationCenterMessage({message:e.name+" cashed out at $"+parseFloat(e.value)*this.state.currentPayout+"!",image:e.currency.image})}},{key:"cashoutBot",value:function(e){console.log("payed out bot",e),e.cashout=this.state.currentTick.toString(),e.payout=this.state.currentPayout.toString(),this.addNotificationCenterMessage({message:e.name+" cashed out at $"+parseFloat(e.value)*this.state.currentPayout+"!",image:e.currency.image})}},{key:"submitWager",value:function(e,t){var a=this.state.wagers,n={name:K.internet.userName(),value:e,autoCashout:t,currency:this.state.selectedCurrency};a.push(n),console.log(a),this.setState({wagers:a,currentWager:n})}},{key:"submitBotWager",value:function(e,t){var a=this.state.wagers,n={name:K.internet.userName(),value:Math.floor(300*Math.abs(Math.random()-Math.random())+1.25).toString(),autoCashout:t,currency:V[Math.floor(Math.random()*V.length)],pull_out:Math.floor(2900.99*Math.abs(Math.random()-Math.random())+100.01),bot:!0};a.push(n),console.log(a),this.setState({wagers:a})}},{key:"cancelWager",value:function(){console.log("cancleing wager"),this.setState({nextRoundWager:{}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.wagers,s=t.currentWager,o=t.nextRoundWager,i=t.xMin,c=t.yMax,l=t.timeReaming,u=t.crashed,m=t.testPoints,p=t.currentPayout,d=t.payoutHistory,h=t.currentTick,g=t.waitingForNextRound,y=t.selectedCurrency,E=this,x=r.a.createElement("div",{class:"boost-game-wrapper"},r.a.createElement("div",{class:"boost-game-top-wrapper"},r.a.createElement("div",{class:"boost-graph-wrapper"},r.a.createElement(k,{testPoints:m,xMax:h/1e3,xMin:i,yMax:c,wagers:n}),r.a.createElement(v,{testPoints:m,xMax:h/1e3,crashed:u,yMax:c,xMin:i}),r.a.createElement(w,{crashed:u,currentPayout:p,wager:s})),r.a.createElement(b,{xMax:h/1e3,xMin:i})),r.a.createElement("div",{id:"y-axis",class:"boost-game-bottom-wrapper"},r.a.createElement("div",{class:"boost-y-axis-wrapper"},r.a.createElement(f,{yMax:c,step:.1}))));return this.state.roundStart>(new Date).getTime()&&(x=r.a.createElement(C,{timeRemaining:(l/1e3).toFixed(2)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"boost-wrapper shadow-lg"},r.a.createElement("div",{className:"boost-header-wrapper"},r.a.createElement(_,null,r.a.createElement(q,{coins:this.state.coins,selectCurrency:function(t){e.setState({selectedCurrency:t})},selectedCurrency:y}))),r.a.createElement("div",{className:"boost-main-wrapper"},r.a.createElement("div",{className:"boost-session-wrapper"},r.a.createElement("div",{style:{marginRight:"   0rem"}},r.a.createElement(T,{crashed:u,wagers:n,nextRoundWager:o,currentWager:s,currentPayout:p,logMessage:function(e){console.log(e.title)},waitingForNextRound:g,placeManualBet:function(e,t){E.placeManualBet(e,t)},cashout:function(){E.cashout()},cancelBet:function(){E.cancelWager()}})),x)),r.a.createElement("div",{className:"boost-footer-wrapper"},r.a.createElement(G,null,r.a.createElement(H,{payoutHistory:d})))),r.a.createElement("div",{style:{padding:"1rem",maxHeight:"500px",overflowY:"scroll"}},this.state.notificationCenterMessage.map((function(e){return r.a.createElement("div",{style:{padding:"0.5rem",display:"flex",alignItems:"center"}},r.a.createElement("img",{style:{height:"18px",width:"18px",marginRight:"1rem"},src:a(156)("./"+e.message.image)}),e.message.message)}))))}}]),t}(n.Component),Z=(J=Q,function(e){return r.a.createElement(g.Consumer,null,(function(t){return r.a.createElement(J,Object.assign({},e,{parse:t}))}))});var ee=function(){return r.a.createElement(Z,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("boost_game_container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},316:function(e,t,a){},317:function(e,t,a){e.exports=a.p+"static/media/bank.f306cda7.svg"},345:function(e,t,a){e.exports=a(2225)},350:function(e,t,a){},351:function(e,t,a){},582:function(e,t){},584:function(e,t){},617:function(e,t){},618:function(e,t){},699:function(e,t,a){},700:function(e,t,a){e.exports=a.p+"static/media/BAT.8ebed5e7.svg"},701:function(e,t,a){e.exports=a.p+"static/media/Bitcoin.d7876d48.svg"},702:function(e,t,a){e.exports=a.p+"static/media/XRP.d47fb469.svg"},703:function(e,t,a){e.exports=a.p+"static/media/betacoin.22a9cab5.png"},704:function(e,t,a){e.exports=a.p+"static/media/betacoin1.32f9a94e.svg"},705:function(e,t,a){e.exports=a.p+"static/media/dogecoin.605642c7.svg"},706:function(e,t,a){e.exports=a.p+"static/media/eos.81713350.svg"},707:function(e,t,a){e.exports=a.p+"static/media/ethereum.18708d3e.svg"},708:function(e,t,a){e.exports=a.p+"static/media/isk.804ad7d2.png"},709:function(e,t,a){e.exports=a.p+"static/media/litecoin.c151518b.svg"},710:function(e,t,a){e.exports=a.p+"static/media/monero.f9caaf1e.svg"},711:function(e,t,a){},714:function(e,t,a){},715:function(e,t,a){},716:function(e,t,a){},736:function(e,t,a){e.exports=a.p+"static/media/information-dark.19072fe2.svg"}},[[345,1,2]]]);
//# sourceMappingURL=main.71cc3edd.chunk.js.map