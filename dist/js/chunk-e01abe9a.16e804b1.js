(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e01abe9a"],{"48ee":function(t,e,n){"use strict";n("7bdb")},"6f42":function(t,e,n){},"7bdb":function(t,e,n){},8567:function(t,e,n){"use strict";n("6f42")},bb51:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",[n("h3",[t._v("Теги")]),n("Tag",{attrs:{tags:t.$store.state.tags}})],1),n("section",[n("h3",[t._v("Датасеты")]),n("Neurons",{attrs:{neurons:t.$store.getters.SortByTags}})],1)])},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tags.length>0?n("div",{staticClass:"tags"},[n("div",{staticClass:"row flex"},t._l(t.tags,(function(e){return n("TagItem",{key:e,ref:"item"+e,refInFor:!0,nativeOn:{click:function(n){return t.addSortTags(e)}}},[t._v(" "+t._s(e)+" ")])})),1)]):n("div",[n("p",{staticClass:"empty"},[t._v("Пока ничего тут нет :)")])])},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags-item"},[n("span",[t._t("default")],2)])},u=[],c={name:"TagItem"},l=c,m=(n("48ee"),n("2877")),f=Object(m["a"])(l,i,u,!1,null,"6c8445e1",null),d=f.exports,v={name:"Tag",components:{TagItem:d},props:{tags:{type:Array,default:function(){return[]}}},methods:{addSortTags:function(t){var e="item".concat(t);this.$refs[e][0].$el.className.indexOf("tag-item--active")>-1?this.$store.commit("RemoveSortTags",t):this.$store.commit("AddSortTags",t),this.$refs[e][0].$el.classList.toggle("tag-item--active")}}},g=v,p=Object(m["a"])(g,r,o,!1,null,null,null),_=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.neurons.length>0?n("div",{staticClass:"neurons"},[n("div",{staticClass:"row grid"},t._l(t.neurons,(function(t){return n("NeuronItem",{key:t.id,attrs:{neuron:t}})})),1)]):n("div",[n("p",{staticClass:"empty"},[t._v("Пока ничего тут нет :)")])])},b=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"neuron-item"},[n("h3",[t._v(t._s(t.neuron.name))]),n("div",{staticClass:"neuron-tags"},t._l(t.neuron.tags,(function(e){return n("span",{key:t.neuron.id+e,staticClass:"item-neuron-tags"},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"neuron-memory"},[n("span",[t._v(t._s(t.neuron.memory||"предустановленный"))])])])},$=[],C={name:"NeuronsItem",props:{neuron:{type:Object,default:function(){}}}},T=C,w=(n("8567"),Object(m["a"])(T,y,$,!1,null,"757c7346",null)),O=w.exports,k={name:"Neurons",components:{NeuronItem:O},props:{neurons:{type:Array,default:function(){return[]}}}},x=k,I=Object(m["a"])(x,h,b,!1,null,null,null),N=I.exports,j={name:"Home",components:{Tag:_,Neurons:N}},E=j,S=Object(m["a"])(E,s,a,!1,null,null,null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-e01abe9a.16e804b1.js.map