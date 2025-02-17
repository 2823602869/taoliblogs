import{_ as s,c as e,a,o as i}from"./app-Cw2o-BxM.js";const l="/taoliblogs/assets/2020050220064640-scaled-BhmsJc_j.jpg",t={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>正常情况下 自己的一些网站的一些代码不想被别人扒来扒去的，可以看看本方法。</p><p>可以设置复制提示,禁f12,禁止调试是很有必要的<br> 当然这个防不了大佬，只能防防小学生</p><h3 id="具体方法" tabindex="-1"><a class="header-anchor" href="#具体方法"><span>具体方法：</span></a></h3><p>1、首先我们需要下载web弹层组件layer<br> 2、解压上传到服务器，上js代码，修改成你的layer.js所在位置<br> 3、如果有幸等js未加载完之前按了f12，那也没关系，还可以禁止调试<br> 即使打开了开发者工具也会执行 debugger 命令<br> 执行该命令会 浏览器会进入debug状态。<br>  debug状态有个特性， 界面被冻住，不管我们怎么点击界面都不会触发事件。<br> 将代码复制粘贴到<br> 模板尾部的HTML代码中即可。</p><p>禁用F12和禁用调试代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;script src=&quot;######&quot;&gt;&lt;/script&gt;</span>
<span class="line">//这里设置为你自己的layer.js所在位置</span>
<span class="line">&lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">&lt;!--复制弹框--&gt;</span>
<span class="line">document.body.oncopy = function() {layer.msg(&#39;复制成功，若要转载请务必保留本文链接！&#39;);};</span>
<span class="line">&lt;!--禁用F12--&gt;</span>
<span class="line">document.onkeydown = function(){</span>
<span class="line">    if(window.event &amp;&amp; window.event.keyCode == 1.3) {</span>
<span class="line">        layer.msg(&quot;F12被禁用&quot;);</span>
<span class="line">        event.keyCode=0;</span>
<span class="line">        event.returnValue=false;</span>
<span class="line">    }</span>
<span class="line">这里修改成你的layer.js所在位置</span>
<span class="line"></span>
<span class="line">如果有幸等js未加载完之前按了f12，那也没关系，还可以禁止调试</span>
<span class="line">&lt;!--禁止调试--&gt;</span>
<span class="line">(function noDebuger() {</span>
<span class="line">    function testDebuger() {</span>
<span class="line">        var d = new Date();</span>
<span class="line">        debugger;</span>
<span class="line">        if (new Date() - d &gt; 10) {</span>
<span class="line">            document.body.innerHTML = &#39;&lt;div style=&quot;width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;&quot;&gt;都说了F12被禁用，还试&lt;a href=&quot;/&quot; target=&quot;_blank&quot; style=&quot;color:#4285f4;&quot;&gt;点击返回&lt;/a&gt;~&lt;/div&gt;&#39;;</span>
<span class="line">            return true;</span>
<span class="line">        }</span>
<span class="line">        return false;</span>
<span class="line">    }</span>
<span class="line">    function start() {</span>
<span class="line">        while (testDebuger()) {</span>
<span class="line">            testDebuger();</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    if (!testDebuger()) {</span>
<span class="line">        window.onblur = function () {</span>
<span class="line">            setTimeout(function () {</span>
<span class="line">                start();</span>
<span class="line">            }, 500)</span>
<span class="line">        }</span>
<span class="line">    }else {</span>
<span class="line">        start();</span>
<span class="line">    }</span>
<span class="line">})();</span>
<span class="line">}    </span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图"><span>效果图：</span></a></h4><p><img src="`+l+'" alt=""></p>',8)]))}const r=s(t,[["render",d],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/blogs/post-doc/2020/05/2020-05-02-wangzhanjinyongf12-jinzhidiaoshidaimafangfa/","title":"网站禁用f12 禁止调试代码方法","lang":"en-US","frontmatter":{"title":"网站禁用f12 禁止调试代码方法","date":"2020-05-02","categories":["html","blog"],"tags":["html","course"]},"headers":[{"level":3,"title":"具体方法：","slug":"具体方法","link":"#具体方法","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/post-doc/2020/05/2020-05-02-网站禁用f12-禁止调试代码方法/index.md"}');export{r as comp,v as data};
