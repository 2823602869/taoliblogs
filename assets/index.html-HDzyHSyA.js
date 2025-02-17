import{_ as e,c as s,a as i,o as a}from"./app-Cw2o-BxM.js";const l={};function d(t,n){return a(),s("div",null,n[0]||(n[0]=[i(`<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法：</span></a></h2><p>在nginx.conf的http{}中按照说明修改server{}字段</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">server {</span>
<span class="line">        listen       80;</span>
<span class="line">        server_name  www.example.com;  #所绑定的域名</span>
<span class="line">        location / {</span>
<span class="line">            root   example;  #该域名对应的网站根目录</span>
<span class="line">            index  index.html index.htm index.php;</span>
<span class="line">        }</span>
<span class="line">        location ~ \\.php$ {  #支持php</span>
<span class="line">            root           C:/nginx/html;  #php访问目录</span>
<span class="line">            fastcgi_pass   127.0.0.1:9000;</span>
<span class="line">            fastcgi_index  index.php;</span>
<span class="line">            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span>
<span class="line">            include        fastcgi_params;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想添加多个网站，添加多个server{}并绑定不同的域名，设置不同的根目录即可。</p><h2 id="以下是禁止通过ip访问的代码" tabindex="-1"><a class="header-anchor" href="#以下是禁止通过ip访问的代码"><span>以下是禁止通过ip访问的代码</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">server {</span>
<span class="line">        listen 80 default_server;</span>
<span class="line">        server_name _;</span>
<span class="line">        return 444;  #当有用户通过ip访问时返回的HTTP状态码</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁止访问某些目录" tabindex="-1"><a class="header-anchor" href="#禁止访问某些目录"><span>禁止访问某些目录</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">location ^~ /admin/test/ {</span>
<span class="line">deny all;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以禁止访问/admin/test目录下的任何文件</p>`,9)]))}const p=e(l,[["render",d],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/docs/guide/jisuanjijichu/2020-06-07-nginxtianjiaduogewangzhanjinzhiipfangwen/","title":"nginx添加多个网站禁止ip访问","lang":"en-US","frontmatter":{"title":"nginx添加多个网站禁止ip访问","date":"2020-06-07","categories":["html","blog"],"tags":["nginx"],"coverImage":"2020042612355625.jpg"},"headers":[{"level":2,"title":"方法：","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"以下是禁止通过ip访问的代码","slug":"以下是禁止通过ip访问的代码","link":"#以下是禁止通过ip访问的代码","children":[]},{"level":2,"title":"禁止访问某些目录","slug":"禁止访问某些目录","link":"#禁止访问某些目录","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/guide/计算机基础/2020-06-07-nginx添加多个网站禁止ip访问/index.md"}');export{p as comp,c as data};
