import{_ as n,c as e,a as i,o as a}from"./app-D0tMrQXM.js";const l={};function t(d,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>我们很多时候都会遇到伪造搜索引擎爬虫的UA，但是很多时候又无法判断他的真实性。</p><p>以下代码，为检验部分搜索引擎真实性的案例，如有更多方法，请回复评论。</p><p>因为英语不太好，所以下面的内容就有部分中文了。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;?php</span>
<span class="line">if(getspider()){</span>
<span class="line">	exit(&#39;假的搜索引擎！&#39;);</span>
<span class="line">}</span>
<span class="line">function getspider(){</span>
<span class="line">	$访问UA = strtolower($_SERVER[&#39;HTTP_USER_AGENT&#39;]);</span>
<span class="line">  	$访问IP = isset($_SERVER[&#39;REMOTE_ADDR&#39;]) ? $_SERVER[&#39;REMOTE_ADDR&#39;] : &#39;&#39;;</span>
<span class="line">  	if(isset($_SERVER[&#39;HTTP_X_FORWARDED_FOR&#39;])){</span>
<span class="line">  		$list = explode(&#39;,&#39;, $_SERVER[&#39;HTTP_X_FORWARDED_FOR&#39;]);</span>
<span class="line">  		$访问IP = $list[0];</span>
<span class="line">  	}</span>
<span class="line">  	if (!ip2long($访问IP)) $访问IP = &#39;未知IP&#39;;</span>
<span class="line">	$访问主机 = str_replace(&#39;.&#39;, &#39;-&#39;, $访问IP);</span>
<span class="line">	if (strpos($访问UA, &#39;googlebot&#39;) !== false){</span>
<span class="line">		$解析主机 = gethostbyaddr($_SERVER[&#39;REMOTE_ADDR&#39;]);</span>
<span class="line">		if ($解析主机 != &#39;crawl-&#39;.$访问主机.&#39;.googlebot.com&#39;) return &#39;googlebot?&#39;;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	if (strpos($访问UA, &#39;sogou&#39;) !== false){</span>
<span class="line">		$解析主机 = gethostbyaddr($_SERVER[&#39;REMOTE_ADDR&#39;]);</span>
<span class="line">		if ($解析主机 != &#39;sogouspider-&#39;.$访问主机.&#39;.crawl.sogou.com&#39;) return &#39;sogou&#39;;</span>
<span class="line">	}</span>
<span class="line">	if (strpos($useragent, &#39;bing&#39;) !== false){</span>
<span class="line">		$解析主机 = gethostbyaddr($_SERVER[&#39;REMOTE_ADDR&#39;]);</span>
<span class="line">		if ($解析主机 != &#39;msnbot-&#39;.$访问主机.&#39;.search.msn.com&#39;) return &#39;bing&#39;;</span>
<span class="line">	}</span>
<span class="line">	if (strpos($访问UA, &#39;baiduspider&#39;) !== false){</span>
<span class="line">		$解析主机 = gethostbyaddr($_SERVER[&#39;REMOTE_ADDR&#39;]);</span>
<span class="line">		if ($解析主机 != &#39;baiduspider-&#39;.$访问主机.&#39;.crawl.baidu.com&#39;) return &#39;baiduspider?&#39;;</span>
<span class="line">	}</span>
<span class="line">	return false;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const c=n(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/blogs/post-doc/2020/06/2020-06-20-jianchasousuoyinqingzhizhupachongzhenshixing/","title":"检查搜索引擎蜘蛛爬虫真实性","lang":"en-US","frontmatter":{"title":"检查搜索引擎蜘蛛爬虫真实性","date":"2020-06-20","categories":["blog"],"tags":["php"],"coverImage":"2020042612355625.jpg"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/post-doc/2020/06/2020-06-20-检查搜索引擎蜘蛛爬虫真实性/index.md"}');export{c as comp,r as data};
