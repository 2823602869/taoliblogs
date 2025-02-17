import{_ as n,c as a,a as e,o as i}from"./app-BlXaiT8W.js";const l={};function t(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h4 id="添加以下代码到footer-php中" tabindex="-1"><a class="header-anchor" href="#添加以下代码到footer-php中"><span>添加以下代码到footer.php中</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">/* 鼠标特效 */</span>
<span class="line">var a_idx = 0;</span>
<span class="line">jQuery(document).ready(function($) {</span>
<span class="line">   $(&quot;body&quot;).click(function(e) {</span>
<span class="line">       var a = new Array(&quot;富强&quot;, &quot;民主&quot;, &quot;文明&quot;, &quot;和谐&quot;, &quot;自由&quot;, &quot;平等&quot;, &quot;公正&quot; ,&quot;法治&quot;, &quot;爱国&quot;, &quot;敬业&quot;, &quot;诚信&quot;, &quot;友善&quot;);</span>
<span class="line">       var $i = $(&quot;&lt;span/&gt;&quot;).text(a[a_idx]);</span>
<span class="line">       a_idx = (a_idx + 1) % a.length;</span>
<span class="line">       var x = e.pageX,</span>
<span class="line">       y = e.pageY;</span>
<span class="line">       $i.css({</span>
<span class="line">           &quot;z-index&quot;: 999999999999999999999999999999999999999999999999999999999999999999999,</span>
<span class="line">           &quot;top&quot;: y - 20,</span>
<span class="line">           &quot;left&quot;: x,</span>
<span class="line">           &quot;position&quot;: &quot;absolute&quot;,</span>
<span class="line">           &quot;font-weight&quot;: &quot;bold&quot;,</span>
<span class="line">           &quot;color&quot;: &quot;#ff6651&quot;</span>
<span class="line">       });</span>
<span class="line">       $(&quot;body&quot;).append($i);</span>
<span class="line">       $i.animate({</span>
<span class="line">           &quot;top&quot;: y - 180,</span>
<span class="line">           &quot;opacity&quot;: 0</span>
<span class="line">       },</span>
<span class="line">       1500,</span>
<span class="line">       function() {</span>
<span class="line">           $i.remove();</span>
<span class="line">       });</span>
<span class="line">   });</span>
<span class="line">});</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const u=n(l,[["render",t],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/docs/guide/wordpress/2020-04-25-wordpresssjiafuqiangminzhudianjitexiao/","title":"wordpresss加富强民主点击特效","lang":"en-US","frontmatter":{"title":"wordpresss加富强民主点击特效","date":"2020-04-25","categories":["wp","blog"],"tags":["wordpress","wordpress美化"]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/guide/wordpress/2020-04-25-wordpresss加富强民主点击特效/index.md"}');export{u as comp,p as data};
