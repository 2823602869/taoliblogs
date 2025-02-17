import{_ as n,c as l,a as s,o as a}from"./app-BDGVfunK.js";const i={};function t(d,e){return a(),l("div",null,e[0]||(e[0]=[s(`<p>比如：www.ataoli.cn 要重定向到 www.uomg.com</p><p>qrpay.uomg.com 到 qrpay.ataoli.cn一个一个解析跳转不太实际。这里给大家提供两个方法。</p><h3 id="php版本" tabindex="-1"><a class="header-anchor" href="#php版本"><span>PHP版本</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;?php </span>
<span class="line">$url =</span>
<span class="line">&#39;http://&#39;.$_SERVER[&#39;HTTP_HOST&#39;].$_SERVER[&#39;REQUEST_URI&#39;]; $url = str_replace(&#39;uomg.com&#39;, &#39;uomg.cn&#39;, $url); </span>
<span class="line">header(&#39;location:&#39;.$url,true,301); ?&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html版本" tabindex="-1"><a class="header-anchor" href="#html版本"><span>HTML版本</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line"> &lt;title&gt;泛解析二级域名批量跳转&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;&lt;script </span>
<span class="line">type=&quot;text/javascript&quot;&gt; </span>
<span class="line">var url = &#39;http://www.uomg.com/1.html&#39;; </span>
<span class="line">url = url.replace(/uomg+\\.com/g,&#39;uomg.cn&#39;); window.location.href = url;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const c=n(i,[["render",t],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/docs/guide/jisuanjijichu/2020-06-05-piliangerjiyuming301zhongdingxiang/","title":"批量二级域名301重定向","lang":"en-US","frontmatter":{"title":"批量二级域名301重定向","date":"2020-06-05","categories":["html","blog"],"tags":["html"],"coverImage":"2020042612355625.jpg"},"headers":[{"level":3,"title":"PHP版本","slug":"php版本","link":"#php版本","children":[]},{"level":3,"title":"HTML版本","slug":"html版本","link":"#html版本","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/guide/计算机基础/2020-06-05-批量二级域名301重定向/index.md"}');export{c as comp,p as data};
