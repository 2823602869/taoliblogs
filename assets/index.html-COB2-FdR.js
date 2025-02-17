import{_ as s,c as n,a as e,o as t}from"./app-Cw2o-BxM.js";const i={};function l(r,a){return t(),n("div",null,a[0]||(a[0]=[e(`<p>有朋友说最近使用苏醒的主题，后台加载速度比较慢 ? 。</p><p>在这里说明下：最主要是两个因素造成的，一个是谷歌字体，一个是头像的问题。</p><p>其他朋友，自行添加到functions.php即可?。</p><p>谷歌字体</p><p>后台加载谷歌字体也没什么卵用，所以直接把他禁止掉即可。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">add_filter( &#39;gettext_with_context&#39;, &#39;disable_open_sans&#39;, 888, 4 );</span>
<span class="line">function disable_open_sans( $translations, $text, $context, $domain ) {</span>
<span class="line">if ( &#39;Open Sans font: on or off&#39; == $context &amp;&amp; &#39;on&#39; == $text ) {</span>
<span class="line">$translations = &#39;off&#39;;</span>
<span class="line">}</span>
<span class="line">return $translations;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决Gravatar头像不显示的问题</p><p>以下两个办法，<strong>二选一</strong>即可。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//官方Gravatar头像调用ssl头像链接</span>
<span class="line">function suxingme_get_avatar($avatar) {</span>
<span class="line">$avatar = preg_replace(&#39;/.*\\/avatar\\/(.*)\\?s=([\\d]+)&amp;.*/&#39;,&#39;&lt;img src=&quot;https://secure.gravatar.com/avatar/$1?s=$2&quot; class=&quot;avatar avatar-$2&quot; height=&quot;$2&quot; width=&quot;$2&quot;&gt;&#39;,$avatar);</span>
<span class="line">return $avatar;</span>
<span class="line">}</span>
<span class="line">add_filter(&#39;get_avatar&#39;, &#39;suxingme_get_avatar&#39;);</span>
<span class="line"></span>
<span class="line">//使用Gravatar头像服务的（HTTPS）加密线路</span>
<span class="line">function suxingme_replace_avatar($avatar) {</span>
<span class="line">$avatar = str_replace(array(&quot;www.gravatar.com&quot;, &quot;0.gravatar.com&quot;, &quot;1.gravatar.com&quot;, &quot;2.gravatar.com&quot;), &quot;cn.gravatar.com&quot;, $avatar);</span>
<span class="line">return $avatar;</span>
<span class="line">}</span>
<span class="line">add_filter( &#39;get_avatar&#39;, &#39;suxingme_replace_avatar&#39;, 10, 3 );</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const c=s(i,[["render",l],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/blogs/post-doc/2020/06/2020-06-23-wordpresshoutaijiazaisudumandewenti/","title":"WordPress后台加载速度慢的问题","lang":"en-US","frontmatter":{"title":"WordPress后台加载速度慢的问题","date":"2020-06-23","categories":["wp","blog"],"coverImage":"timthumb.jpg"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/post-doc/2020/06/2020-06-23-wordpress后台加载速度慢的问题/index.md"}');export{c as comp,p as data};
