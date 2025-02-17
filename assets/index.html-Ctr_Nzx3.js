import{_ as n,c as e,a as i,o as a}from"./app-BlXaiT8W.js";const l="/assets/d-BxDhEd9G.png",t={};function d(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h3 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令"><span>Git常用命令：</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">ssh-keygen -t rsa -C ‘xxx@xxx.com’ 参数是你邮箱</span>
<span class="line"></span>
<span class="line">git init     初始化本地仓库 </span>
<span class="line"></span>
<span class="line">git remote add origin XXX      添加远程仓库地址</span>
<span class="line"></span>
<span class="line">git config --global user.name &quot;xxx&quot; // 注册时的用户名</span>
<span class="line"></span>
<span class="line">git config --global user.email xxxxx@qq.com // github注册时的邮箱</span>
<span class="line"></span>
<span class="line">git add -A 选择你需要上传的东西</span>
<span class="line"></span>
<span class="line">git commit -m &quot; &quot; 添加上传说明</span>
<span class="line"></span>
<span class="line">git push -u origin master 第一次上传需要加-u，后续上传不需要</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git部分问题解决-后期博主遇到新问题会更新" tabindex="-1"><a class="header-anchor" href="#git部分问题解决-后期博主遇到新问题会更新"><span>Git部分问题解决（后期博主遇到新问题会更新）：</span></a></h3><p><strong>问题1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git push origin master时遇到(被拒绝)，所以在remote add后不要着急git add，一定要git pull origin master，出现这个原因</span>
<span class="line">是因为你在码云创建的仓库有ReadMe文件，而本地没有，造成本地和远程的不同步，</span>
<span class="line">那么有以下两种方案可以解决：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">one ：</span>
<span class="line">本地没有ReadMe文件，那么就在本地生成一个：</span>
<span class="line"></span>
<span class="line">git pull --rebase origin master     本地生成ReadMe文件</span>
<span class="line">git push origin master </span>
<span class="line"></span>
<span class="line">two：</span>
<span class="line">那我就强制上传覆盖远程文件</span>
<span class="line">git push -f origin master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题2：</strong></p><p><img src="`+l+`" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git commit -am &quot;&quot; -a表示新增</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,9)]))}const p=n(t,[["render",d],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/docs/guide/jisuanjijichu/2020-12-14-gitchangyongminglingjibufenwentijiejuebanfa/","title":"Git常用命令及部分问题解决办法","lang":"en-US","frontmatter":{"title":"Git常用命令及部分问题解决办法","date":"2020-12-14","categories":["git","blog"],"tags":["git","git命令"],"coverImage":"git.png"},"headers":[{"level":3,"title":"Git常用命令：","slug":"git常用命令","link":"#git常用命令","children":[]},{"level":3,"title":"Git部分问题解决（后期博主遇到新问题会更新）：","slug":"git部分问题解决-后期博主遇到新问题会更新","link":"#git部分问题解决-后期博主遇到新问题会更新","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/guide/计算机基础/2020-12-14-git常用命令及部分问题解决办法/index.md"}');export{p as comp,u as data};
