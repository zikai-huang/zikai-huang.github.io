"use strict";(self["webpackChunkshop_manager"]=self["webpackChunkshop_manager"]||[]).push([[627],{978:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var o=n(5478),d=(n(6809),n(7658),n(3396)),r=n(4870),a=n(7139),s=n(9242);const i="$treeNodeId",l=function(e,t){t&&!t[i]&&Object.defineProperty(t,i,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},c=function(e,t){return e?t[e]:t[i]},h=(e,t,n)=>{const o=e.value.currentNode;n();const d=e.value.currentNode;o!==d&&t("current-change",d?d.data:null,d)},u=e=>{let t=!0,n=!0,o=!0;for(let d=0,r=e.length;d<r;d++){const r=e[d];(!0!==r.checked||r.indeterminate)&&(t=!1,r.disabled||(o=!1)),(!1!==r.checked||r.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:o,half:!t&&!n}},p=function(e){if(0===e.childNodes.length||e.loading)return;const{all:t,none:n,half:o}=u(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):o?(e.checked=!1,e.indeterminate=!0):n&&(e.checked=!1,e.indeterminate=!1);const d=e.parent;d&&0!==d.level&&(e.store.checkStrictly||p(d))},f=function(e,t){const n=e.store.props,o=e.data||{},d=n[t];if("function"===typeof d)return d(o,e);if("string"===typeof d)return o[d];if("undefined"===typeof d){const e=o[t];return void 0===e?"":e}};let g=0;class y{constructor(e){this.id=g++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const t in e)(0,a.RI)(e,t)&&(this[t]=e[t]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const t=e.props;if(t&&"undefined"!==typeof t.isLeaf){const e=f(this,"isLeaf");"boolean"===typeof e&&(this.isLeafByUser=e)}if(!0!==e.lazy&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||l(this,this.data),!this.data)return;const n=e.defaultExpandedKeys,o=e.key;o&&n&&n.includes(this.key)&&this.expand(null,e.autoExpandParent),o&&void 0!==e.currentNodeKey&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),!this.parent||1!==this.level&&!0!==this.parent.expanded||(this.canFocus=!0)}setData(e){let t;Array.isArray(e)||l(this,e),this.data=e,this.childNodes=[],t=0===this.level&&Array.isArray(this.data)?this.data:f(this,"children")||[];for(let n=0,o=t.length;n<o;n++)this.insertChild({data:t[n]})}get label(){return f(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return f(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}get previousSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}contains(e,t=!0){return(this.childNodes||[]).some((n=>n===e||t&&n.contains(e)))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,t,n){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof y)){if(!n){const n=this.getChildren(!0);n.includes(e.data)||("undefined"===typeof t||t<0?n.push(e.data):n.splice(t,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=(0,r.qj)(new y(e)),e instanceof y&&e.initialize()}e.level=this.level+1,"undefined"===typeof t||t<0?this.childNodes.push(e):this.childNodes.splice(t,0,e),this.updateLeafState()}insertBefore(e,t){let n;t&&(n=this.childNodes.indexOf(t)),this.insertChild(e,n)}insertAfter(e,t){let n;t&&(n=this.childNodes.indexOf(t),-1!==n&&(n+=1)),this.insertChild(e,n)}removeChild(e){const t=this.getChildren()||[],n=t.indexOf(e.data);n>-1&&t.splice(n,1);const o=this.childNodes.indexOf(e);o>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(o,1)),this.updateLeafState()}removeChildByData(e){let t=null;for(let n=0;n<this.childNodes.length;n++)if(this.childNodes[n].data===e){t=this.childNodes[n];break}t&&this.removeChild(t)}expand(e,t){const n=()=>{if(t){let e=this.parent;while(e.level>0)e.expanded=!0,e=e.parent}this.expanded=!0,e&&e(),this.childNodes.forEach((e=>{e.canFocus=!0}))};this.shouldLoadData()?this.loadData((e=>{Array.isArray(e)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||p(this),n())})):n()}doCreateChildren(e,t={}){e.forEach((e=>{this.insertChild(Object.assign({data:e},t),void 0,!0)}))}collapse(){this.expanded=!1,this.childNodes.forEach((e=>{e.canFocus=!1}))}shouldLoadData(){return!0===this.store.lazy&&this.store.load&&!this.loaded}updateLeafState(){if(!0===this.store.lazy&&!0!==this.loaded&&"undefined"!==typeof this.isLeafByUser)return void(this.isLeaf=this.isLeafByUser);const e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}setChecked(e,t,n,o){if(this.indeterminate="half"===e,this.checked=!0===e,this.store.checkStrictly)return;if(!this.shouldLoadData()||this.store.checkDescendants){const{all:n,allWithoutDisable:d}=u(this.childNodes);this.isLeaf||n||!d||(this.checked=!1,e=!1);const r=()=>{if(t){const n=this.childNodes;for(let a=0,s=n.length;a<s;a++){const d=n[a];o=o||!1!==e;const r=d.disabled?d.checked:o;d.setChecked(r,t,!0,o)}const{half:d,all:r}=u(n);r||(this.checked=r,this.indeterminate=d)}};if(this.shouldLoadData())return void this.loadData((()=>{r(),p(this)}),{checked:!1!==e});r()}const d=this.parent;d&&0!==d.level&&(n||p(d))}getChildren(e=!1){if(0===this.level)return this.data;const t=this.data;if(!t)return null;const n=this.store.props;let o="children";return n&&(o=n.children||"children"),void 0===t[o]&&(t[o]=null),e&&!t[o]&&(t[o]=[]),t[o]}updateChildren(){const e=this.getChildren()||[],t=this.childNodes.map((e=>e.data)),n={},o=[];e.forEach(((e,d)=>{const r=e[i],a=!!r&&t.findIndex((e=>e[i]===r))>=0;a?n[r]={index:d,data:e}:o.push({index:d,data:e})})),this.store.lazy||t.forEach((e=>{n[e[i]]||this.removeChildByData(e)})),o.forEach((({index:e,data:t})=>{this.insertChild({data:t},e)})),this.updateLeafState()}loadData(e,t={}){if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(t).length)e&&e.call(this);else{this.loading=!0;const n=n=>{this.childNodes=[],this.doCreateChildren(n,t),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,n)}}}class k{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const t in e)(0,a.RI)(e,t)&&(this[t]=e[t]);this.nodesMap={}}initialize(){if(this.root=new y({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,(e=>{this.root.doCreateChildren(e),this._initDefaultCheckedNodes()}))}else this._initDefaultCheckedNodes()}filter(e){const t=this.filterNodeMethod,n=this.lazy,o=function(d){const r=d.root?d.root.childNodes:d.childNodes;if(r.forEach((n=>{n.visible=t.call(n,e,n.data,n),o(n)})),!d.visible&&r.length){let e=!0;e=!r.some((e=>e.visible)),d.root?d.root.visible=!1===e:d.visible=!1===e}e&&(!d.visible||d.isLeaf||n||d.expand())};o(this)}setData(e){const t=e!==this.root.data;t?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof y)return e;const t=(0,a.Kn)(e)?c(this.key,e):e;return this.nodesMap[t]||null}insertBefore(e,t){const n=this.getNode(t);n.parent.insertBefore({data:e},n)}insertAfter(e,t){const n=this.getNode(t);n.parent.insertAfter({data:e},n)}remove(e){const t=this.getNode(e);t&&t.parent&&(t===this.currentNode&&(this.currentNode=null),t.parent.removeChild(t))}append(e,t){const n=t?this.getNode(t):this.root;n&&n.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],t=this.nodesMap;e.forEach((e=>{const n=t[e];n&&n.setChecked(!0,!this.checkStrictly)}))}_initDefaultCheckedNode(e){const t=this.defaultCheckedKeys||[];t.includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const t=this.key;if(e&&e.data)if(t){const t=e.key;void 0!==t&&(this.nodesMap[e.key]=e)}else this.nodesMap[e.id]=e}deregisterNode(e){const t=this.key;t&&e&&e.data&&(e.childNodes.forEach((e=>{this.deregisterNode(e)})),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,t=!1){const n=[],o=function(d){const r=d.root?d.root.childNodes:d.childNodes;r.forEach((d=>{(d.checked||t&&d.indeterminate)&&(!e||e&&d.isLeaf)&&n.push(d.data),o(d)}))};return o(this),n}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map((e=>(e||{})[this.key]))}getHalfCheckedNodes(){const e=[],t=function(n){const o=n.root?n.root.childNodes:n.childNodes;o.forEach((n=>{n.indeterminate&&e.push(n.data),t(n)}))};return t(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map((e=>(e||{})[this.key]))}_getAllNodes(){const e=[],t=this.nodesMap;for(const n in t)(0,a.RI)(t,n)&&e.push(t[n]);return e}updateChildren(e,t){const n=this.nodesMap[e];if(!n)return;const o=n.childNodes;for(let d=o.length-1;d>=0;d--){const e=o[d];this.remove(e.data)}for(let d=0,r=t.length;d<r;d++){const e=t[d];this.append(e,n.data)}}_setCheckedKeys(e,t=!1,n){const o=this._getAllNodes().sort(((e,t)=>t.level-e.level)),d=Object.create(null),r=Object.keys(n);o.forEach((e=>e.setChecked(!1,!1)));for(let a=0,s=o.length;a<s;a++){const n=o[a],s=n.data[e].toString(),i=r.includes(s);if(!i){n.checked&&!d[s]&&n.setChecked(!1,!1);continue}let l=n.parent;while(l&&l.level>0)d[l.data[e]]=!0,l=l.parent;if(n.isLeaf||this.checkStrictly)n.setChecked(!0,!1);else if(n.setChecked(!0,!0),t){n.setChecked(!1,!1);const e=function(t){const n=t.childNodes;n.forEach((t=>{t.isLeaf||t.setChecked(!1,!1),e(t)}))};e(n)}}}setCheckedNodes(e,t=!1){const n=this.key,o={};e.forEach((e=>{o[(e||{})[n]]=!0})),this._setCheckedKeys(n,t,o)}setCheckedKeys(e,t=!1){this.defaultCheckedKeys=e;const n=this.key,o={};e.forEach((e=>{o[e]=!0})),this._setCheckedKeys(n,t,o)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach((e=>{const t=this.getNode(e);t&&t.expand(null,this.autoExpandParent)}))}setChecked(e,t,n){const o=this.getNode(e);o&&o.setChecked(!!t,n)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const t=this.currentNode;t&&(t.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,t=!0){const n=e[this.key],o=this.nodesMap[n];this.setCurrentNode(o),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,t=!0){if(null===e||void 0===e)return this.currentNode&&(this.currentNode.isCurrent=!1),void(this.currentNode=null);const n=this.getNode(e);n&&(this.setCurrentNode(n),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}var v=n(5862),N=n(9559),C=n(1015),x=n(2748),b=n(5989),m=n(6734);const w=(0,d.aZ)({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(e){const t=(0,m.s)("tree"),n=(0,d.f3)("NodeInstance"),o=(0,d.f3)("RootTree");return()=>{const r=e.node,{data:a,store:s}=r;return e.renderContent?e.renderContent(d.h,{_self:n,node:r,data:a,store:s}):(0,d.h)("span",{class:t.be("node","label")},[o.ctx.slots.default?o.ctx.slots.default({node:r,data:a}):r.label])}}});var D=(0,b.Z)(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function E(e){const t=(0,d.f3)("TreeNodeMap",null),n={treeNodeExpand:t=>{e.node!==t&&e.node.collapse()},children:[]};return t&&t.children.push(n),(0,d.JJ)("TreeNodeMap",n),{broadcastExpanded:t=>{if(e.accordion)for(const e of n.children)e.treeNodeExpand(t)}}}var K=n(529);const A=Symbol("dragEvents");function S({props:e,ctx:t,el$:n,dropIndicator$:o,store:a}){const s=(0,m.s)("tree"),i=(0,r.iH)({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null}),l=({event:n,treeNode:o})=>{if("function"===typeof e.allowDrag&&!e.allowDrag(o.node))return n.preventDefault(),!1;n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain","")}catch(d){}i.value.draggingNode=o,t.emit("node-drag-start",o.node,n)},c=({event:d,treeNode:r})=>{const a=r,l=i.value.dropNode;l&&l!==a&&(0,K.IV)(l.$el,s.is("drop-inner"));const c=i.value.draggingNode;if(!c||!a)return;let h=!0,u=!0,p=!0,f=!0;"function"===typeof e.allowDrop&&(h=e.allowDrop(c.node,a.node,"prev"),f=u=e.allowDrop(c.node,a.node,"inner"),p=e.allowDrop(c.node,a.node,"next")),d.dataTransfer.dropEffect=u||h||p?"move":"none",(h||u||p)&&l!==a&&(l&&t.emit("node-drag-leave",c.node,l.node,d),t.emit("node-drag-enter",c.node,a.node,d)),(h||u||p)&&(i.value.dropNode=a),a.node.nextSibling===c.node&&(p=!1),a.node.previousSibling===c.node&&(h=!1),a.node.contains(c.node,!1)&&(u=!1),(c.node===a.node||c.node.contains(a.node))&&(h=!1,u=!1,p=!1);const g=a.$el.getBoundingClientRect(),y=n.value.getBoundingClientRect();let k;const v=h?u?.25:p?.45:1:-1,N=p?u?.75:h?.55:0:1;let C=-9999;const x=d.clientY-g.top;k=x<g.height*v?"before":x>g.height*N?"after":u?"inner":"none";const b=a.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),m=o.value;"before"===k?C=b.top-y.top:"after"===k&&(C=b.bottom-y.top),m.style.top=`${C}px`,m.style.left=b.right-y.left+"px","inner"===k?(0,K.cn)(a.$el,s.is("drop-inner")):(0,K.IV)(a.$el,s.is("drop-inner")),i.value.showDropIndicator="before"===k||"after"===k,i.value.allowDrop=i.value.showDropIndicator||f,i.value.dropType=k,t.emit("node-drag-over",c.node,a.node,d)},h=e=>{const{draggingNode:n,dropType:o,dropNode:d}=i.value;if(e.preventDefault(),e.dataTransfer.dropEffect="move",n&&d){const r={data:n.node.data};"none"!==o&&n.node.remove(),"before"===o?d.node.parent.insertBefore(r,d.node):"after"===o?d.node.parent.insertAfter(r,d.node):"inner"===o&&d.node.insertChild(r),"none"!==o&&a.value.registerNode(r),(0,K.IV)(d.$el,s.is("drop-inner")),t.emit("node-drag-end",n.node,d.node,o,e),"none"!==o&&t.emit("node-drop",n.node,d.node,o,e)}n&&!d&&t.emit("node-drag-end",n.node,null,o,e),i.value.showDropIndicator=!1,i.value.draggingNode=null,i.value.dropNode=null,i.value.allowDrop=!0};return(0,d.JJ)(A,{treeNodeDragStart:l,treeNodeDragOver:c,treeNodeDragEnd:h}),{dragState:i}}var _=n(4620);const T=(0,d.aZ)({name:"ElTreeNode",components:{ElCollapseTransition:v.Z,ElCheckbox:N.Xb,NodeContent:D,ElIcon:C.gn,Loading:x.gbz},props:{node:{type:y,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(e,t){const n=(0,m.s)("tree"),{broadcastExpanded:o}=E(e),s=(0,d.f3)("RootTree"),i=(0,r.iH)(!1),l=(0,r.iH)(!1),u=(0,r.iH)(null),p=(0,r.iH)(null),f=(0,r.iH)(null),g=(0,d.f3)(A),y=(0,d.FN)();(0,d.JJ)("NodeInstance",y),s||(0,_.N)("Tree","Can not find node's tree."),e.node.expanded&&(i.value=!0,l.value=!0);const k=s.props["children"]||"children";(0,d.YP)((()=>{const t=e.node.data[k];return t&&[...t]}),(()=>{e.node.updateChildren()})),(0,d.YP)((()=>e.node.indeterminate),(t=>{C(e.node.checked,t)})),(0,d.YP)((()=>e.node.checked),(t=>{C(t,e.node.indeterminate)})),(0,d.YP)((()=>e.node.expanded),(e=>{(0,d.Y3)((()=>i.value=e)),e&&(l.value=!0)}));const v=e=>c(s.props.nodeKey,e.data),N=t=>{const n=e.props.class;if(!n)return{};let o;if((0,a.mf)(n)){const{data:e}=t;o=n(e,t)}else o=n;return(0,a.HD)(o)?{[o]:!0}:o},C=(t,n)=>{u.value===t&&p.value===n||s.ctx.emit("check-change",e.node.data,t,n),u.value=t,p.value=n},b=t=>{h(s.store,s.ctx.emit,(()=>s.store.value.setCurrentNode(e.node))),s.currentNode.value=e.node,s.props.expandOnClickNode&&D(),s.props.checkOnClickNode&&!e.node.disabled&&K(null,{target:{checked:!e.node.checked}}),s.ctx.emit("node-click",e.node.data,e.node,y,t)},w=t=>{s.instance.vnode.props["onNodeContextmenu"]&&(t.stopPropagation(),t.preventDefault()),s.ctx.emit("node-contextmenu",t,e.node.data,e.node,y)},D=()=>{e.node.isLeaf||(i.value?(s.ctx.emit("node-collapse",e.node.data,e.node,y),e.node.collapse()):(e.node.expand(),t.emit("node-expand",e.node.data,e.node,y)))},K=(t,n)=>{e.node.setChecked(n.target.checked,!s.props.checkStrictly),(0,d.Y3)((()=>{const t=s.store.value;s.ctx.emit("check",e.node.data,{checkedNodes:t.getCheckedNodes(),checkedKeys:t.getCheckedKeys(),halfCheckedNodes:t.getHalfCheckedNodes(),halfCheckedKeys:t.getHalfCheckedKeys()})}))},S=(e,t,n)=>{o(t),s.ctx.emit("node-expand",e,t,n)},T=t=>{s.props.draggable&&g.treeNodeDragStart({event:t,treeNode:e})},L=t=>{t.preventDefault(),s.props.draggable&&g.treeNodeDragOver({event:t,treeNode:{$el:f.value,node:e.node}})},B=e=>{e.preventDefault()},O=e=>{s.props.draggable&&g.treeNodeDragEnd(e)};return{ns:n,node$:f,tree:s,expanded:i,childNodeRendered:l,oldChecked:u,oldIndeterminate:p,getNodeKey:v,getNodeClass:N,handleSelectChange:C,handleClick:b,handleContextMenu:w,handleExpandIconClick:D,handleCheckChange:K,handleChildNodeExpand:S,handleDragStart:T,handleDragOver:L,handleDrop:B,handleDragEnd:O,CaretRight:x.TZ}}}),L=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],B=["aria-expanded"];function O(e,t,n,o,r,i){const l=(0,d.up)("el-icon"),c=(0,d.up)("el-checkbox"),h=(0,d.up)("loading"),u=(0,d.up)("node-content"),p=(0,d.up)("el-tree-node"),f=(0,d.up)("el-collapse-transition");return(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",{ref:"node$",class:(0,a.C_)([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:t[1]||(t[1]=(0,s.iM)(((...t)=>e.handleClick&&e.handleClick(...t)),["stop"])),onContextmenu:t[2]||(t[2]=(...t)=>e.handleContextMenu&&e.handleContextMenu(...t)),onDragstart:t[3]||(t[3]=(0,s.iM)(((...t)=>e.handleDragStart&&e.handleDragStart(...t)),["stop"])),onDragover:t[4]||(t[4]=(0,s.iM)(((...t)=>e.handleDragOver&&e.handleDragOver(...t)),["stop"])),onDragend:t[5]||(t[5]=(0,s.iM)(((...t)=>e.handleDragEnd&&e.handleDragEnd(...t)),["stop"])),onDrop:t[6]||(t[6]=(0,s.iM)(((...t)=>e.handleDrop&&e.handleDrop(...t)),["stop"]))},[(0,d._)("div",{class:(0,a.C_)(e.ns.be("node","content")),style:(0,a.j5)({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?((0,d.wg)(),(0,d.j4)(l,{key:0,class:(0,a.C_)([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:(0,s.iM)(e.handleExpandIconClick,["stop"])},{default:(0,d.w5)((()=>[((0,d.wg)(),(0,d.j4)((0,d.LL)(e.tree.props.icon||e.CaretRight)))])),_:1},8,["class","onClick"])):(0,d.kq)("v-if",!0),e.showCheckbox?((0,d.wg)(),(0,d.j4)(c,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:t[0]||(t[0]=(0,s.iM)((()=>{}),["stop"])),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):(0,d.kq)("v-if",!0),e.node.loading?((0,d.wg)(),(0,d.j4)(l,{key:2,class:(0,a.C_)([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:(0,d.w5)((()=>[(0,d.Wm)(h)])),_:1},8,["class"])):(0,d.kq)("v-if",!0),(0,d.Wm)(u,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),(0,d.Wm)(f,null,{default:(0,d.w5)((()=>[!e.renderAfterExpand||e.childNodeRendered?(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",{key:0,class:(0,a.C_)(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.node.childNodes,(t=>((0,d.wg)(),(0,d.j4)(p,{key:e.getNodeKey(t),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:t,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"])))),128))],10,B)),[[s.F8,e.expanded]]):(0,d.kq)("v-if",!0)])),_:1})],42,L)),[[s.F8,e.node.visible]])}var I=(0,b.Z)(T,[["render",O],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]),q=n(6367),M=n(9619);function $({el$:e},t){const n=(0,m.s)("tree"),o=(0,r.XI)([]),a=(0,r.XI)([]);(0,d.bv)((()=>{i()})),(0,d.ic)((()=>{o.value=Array.from(e.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"))})),(0,d.YP)(a,(e=>{e.forEach((e=>{e.setAttribute("tabindex","-1")}))}));const s=d=>{const r=d.target;if(!r.className.includes(n.b("node")))return;const a=d.code;o.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const s=o.value.indexOf(r);let i;if([M.n.up,M.n.down].includes(a)){if(d.preventDefault(),a===M.n.up){i=-1===s?0:0!==s?s-1:o.value.length-1;const e=i;while(1){if(t.value.getNode(o.value[i].dataset.key).canFocus)break;if(i--,i===e){i=-1;break}i<0&&(i=o.value.length-1)}}else{i=-1===s?0:s<o.value.length-1?s+1:0;const e=i;while(1){if(t.value.getNode(o.value[i].dataset.key).canFocus)break;if(i++,i===e){i=-1;break}i>=o.value.length&&(i=0)}}-1!==i&&o.value[i].focus()}[M.n.left,M.n.right].includes(a)&&(d.preventDefault(),r.click());const l=r.querySelector('[type="checkbox"]');[M.n.enter,M.n.space].includes(a)&&l&&(d.preventDefault(),l.click())};(0,q.ORN)(e,"keydown",s);const i=()=>{var t;o.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"));const d=e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);d.length?d[0].setAttribute("tabindex","0"):null==(t=o.value[0])||t.setAttribute("tabindex","0")}}var H=n(2039),j=n(2137),z=n(563);const P=(0,d.aZ)({name:"ElTree",components:{ElTreeNode:I},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:H.AA}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(e,t){const{t:n}=(0,j.bU)(),o=(0,m.s)("tree"),a=(0,r.iH)(new k({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));a.value.initialize();const s=(0,r.iH)(a.value.root),i=(0,r.iH)(null),l=(0,r.iH)(null),u=(0,r.iH)(null),{broadcastExpanded:p}=E(e),{dragState:f}=S({props:e,ctx:t,el$:l,dropIndicator$:u,store:a});$({el$:l},a);const g=(0,d.Fl)((()=>{const{childNodes:e}=s.value;return!e||0===e.length||e.every((({visible:e})=>!e))}));(0,d.YP)((()=>e.currentNodeKey),(e=>{a.value.setCurrentNodeKey(e)})),(0,d.YP)((()=>e.defaultCheckedKeys),(e=>{a.value.setDefaultCheckedKey(e)})),(0,d.YP)((()=>e.defaultExpandedKeys),(e=>{a.value.setDefaultExpandedKeys(e)})),(0,d.YP)((()=>e.data),(e=>{a.value.setData(e)}),{deep:!0}),(0,d.YP)((()=>e.checkStrictly),(e=>{a.value.checkStrictly=e}));const y=t=>{if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");a.value.filter(t)},v=t=>c(e.nodeKey,t.data),N=t=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const n=a.value.getNode(t);if(!n)return[];const o=[n.data];let d=n.parent;while(d&&d!==s.value)o.push(d.data),d=d.parent;return o.reverse()},C=(e,t)=>a.value.getCheckedNodes(e,t),x=e=>a.value.getCheckedKeys(e),b=()=>{const e=a.value.getCurrentNode();return e?e.data:null},w=()=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const t=b();return t?t[e.nodeKey]:null},D=(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");a.value.setCheckedNodes(t,n)},K=(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");a.value.setCheckedKeys(t,n)},A=(e,t,n)=>{a.value.setChecked(e,t,n)},_=()=>a.value.getHalfCheckedNodes(),T=()=>a.value.getHalfCheckedKeys(),L=(n,o=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");h(a,t.emit,(()=>a.value.setUserCurrentNode(n,o)))},B=(n,o=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");h(a,t.emit,(()=>a.value.setCurrentNodeKey(n,o)))},O=e=>a.value.getNode(e),I=e=>{a.value.remove(e)},q=(e,t)=>{a.value.append(e,t)},M=(e,t)=>{a.value.insertBefore(e,t)},H=(e,t)=>{a.value.insertAfter(e,t)},P=(e,n,o)=>{p(n),t.emit("node-expand",e,n,o)},Z=(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");a.value.updateChildren(t,n)};return(0,d.JJ)("RootTree",{ctx:t,props:e,store:a,root:s,currentNode:i,instance:(0,d.FN)()}),(0,d.JJ)(z.K,void 0),{ns:o,store:a,root:s,currentNode:i,dragState:f,el$:l,dropIndicator$:u,isEmpty:g,filter:y,getNodeKey:v,getNodePath:N,getCheckedNodes:C,getCheckedKeys:x,getCurrentNode:b,getCurrentKey:w,setCheckedNodes:D,setCheckedKeys:K,setChecked:A,getHalfCheckedNodes:_,getHalfCheckedKeys:T,setCurrentNode:L,setCurrentKey:B,t:n,getNode:O,remove:I,append:q,insertBefore:M,insertAfter:H,handleNodeExpand:P,updateKeyChildren:Z}}});function Z(e,t,n,o,r,i){var l;const c=(0,d.up)("el-tree-node");return(0,d.wg)(),(0,d.iD)("div",{ref:"el$",class:(0,a.C_)([e.ns.b(),e.ns.is("dragging",!!e.dragState.draggingNode),e.ns.is("drop-not-allow",!e.dragState.allowDrop),e.ns.is("drop-inner","inner"===e.dragState.dropType),{[e.ns.m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.root.childNodes,(t=>((0,d.wg)(),(0,d.j4)(c,{key:e.getNodeKey(t),node:t,props:e.props,accordion:e.accordion,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent,onNodeExpand:e.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"])))),128)),e.isEmpty?((0,d.wg)(),(0,d.iD)("div",{key:0,class:(0,a.C_)(e.ns.e("empty-block"))},[(0,d._)("span",{class:(0,a.C_)(e.ns.e("empty-text"))},(0,a.zw)(null!=(l=e.emptyText)?l:e.t("el.tree.emptyText")),3)],2)):(0,d.kq)("v-if",!0),(0,d.wy)((0,d._)("div",{ref:"dropIndicator$",class:(0,a.C_)(e.ns.e("drop-indicator"))},null,2),[[s.F8,e.dragState.showDropIndicator]])],2)}var F=(0,b.Z)(P,[["render",Z],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);F.install=e=>{e.component(F.name,F)};const R=F,Y=R;n(1758),n(88);function J(e,t,n,r,a,s){const i=Y,l=o.mi;return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)(i,{ref:"treeRef",data:e.list,"show-checkbox":"","node-key":"roleId","check-strictly":!0,"default-checked-keys":e.authority,props:{children:"roleList",label:"name"}},null,8,["data","default-checked-keys"]),(0,d.Wm)(l,{onClick:e.updateAuthority},{default:(0,d.w5)((()=>[(0,d.Uk)("确认修改")])),_:1},8,["onClick"])])}var U=n(2483),W=n(2482);class V{constructor(e,t){(0,W.Z)(this,"id",void 0),(0,W.Z)(this,"authority",void 0),(0,W.Z)(this,"list",[]),(0,W.Z)(this,"treeRef",void 0),this.id=e,this.authority=t}}var X=n(2270),G=(0,d.aZ)({setup(){(0,d.bv)((()=>{(0,X.RT)().then((e=>{o.list=e.data}))}));const e=(0,U.yj)(),t=(0,U.tv)(),n=e.query,o=(0,r.qj)(new V(n.id,n.authority.split(",")));function a(){console.log(o.treeRef.getCheckedKeys().sort((function(e,t){return e-t}))),t.push({name:"role"})}return{...(0,r.BK)(o),updateAuthority:a}}}),Q=n(89);const ee=(0,Q.Z)(G,[["render",J]]);var te=ee},2482:function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return o}})},6835:function(e,t,n){n.d(t,{O7:function(){return d},f_:function(){return o}});const o="update:modelValue",d="change"},7925:function(e,t){function n(e,t){var n=-1,o=t.length,d=e.length;while(++n<o)e[d+n]=t[n];return e}t["Z"]=n},493:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(681),d=n(3835),r="[object Arguments]";function a(e){return(0,d.Z)(e)&&(0,o.Z)(e)==r}var s=a,i=Object.prototype,l=i.hasOwnProperty,c=i.propertyIsEnumerable,h=s(function(){return arguments}())?s:function(e){return(0,d.Z)(e)&&l.call(e,"callee")&&!c.call(e,"callee")},u=h},2905:function(e,t){var n=9007199254740991;function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}t["Z"]=o}}]);
//# sourceMappingURL=627.a8c1d075.js.map