!function(){const{jQuery:t,SimpleBar:o}=window,i=t(document);!/Mac|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&void 0!==o&&(i.on("extendClass.vpf",((t,i)=>{"vpf"===t.namespace&&(i.prototype.initCustomScrollbar=function(){const t=this;t.emitEvent("beforeInitCustomScrollbar"),t.$items_wrap.find(".vp-portfolio__custom-scrollbar").each((function(){o.instances.get(this)||new o(this)})),t.emitEvent("initCustomScrollbar")},i.prototype.destroyCustomScrollbar=function(){this.$items_wrap.find('[data-simplebar="init"].vp-portfolio__custom-scrollbar').each((function(){const t=o.instances.get(this);t&&t.unMount()})),this.emitEvent("destroyCustomScrollbar")})})),i.on("addItems.vpf",((t,o,i,n)=>{"vpf"===t.namespace&&(n&&o.destroyCustomScrollbar(),o.initCustomScrollbar())})),i.on("init.vpf",((t,o)=>{"vpf"===t.namespace&&o.initCustomScrollbar()})),i.on("destroy.vpf",((t,o)=>{"vpf"===t.namespace&&o.destroyCustomScrollbar()})),i.on("initSwiper.vpf",((t,o)=>{"vpf"===t.namespace&&"true"===o.options.sliderLoop&&o.initCustomScrollbar()})),t((()=>{t('[data-simplebar="init"].vp-portfolio__custom-scrollbar').each((function(){const t=o.instances.get(this);t&&t.recalculate()}))})))}();