import{_ as e,c as n,a,o as i}from"./app-D0tMrQXM.js";const l={};function d(t,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h2 id="linux关机-重启" tabindex="-1"><a class="header-anchor" href="#linux关机-重启"><span>Linux关机,重启</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 关机shutdown -h now# 重启shutdown -r now</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查看系统-cpu信息" tabindex="-1"><a class="header-anchor" href="#查看系统-cpu信息"><span>查看系统,CPU信息</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 查看系统内核信息</span>
<span class="line">uname -a</span>
<span class="line"># 查看系统内核版本</span>
<span class="line">cat /proc/version</span>
<span class="line"># 查看当前用户环境变量</span>
<span class="line">envcat /proc/cpuinfo</span>
<span class="line"># 查看有几个逻辑cpu, 包括cpu型号</span>
<span class="line">cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c</span>
<span class="line"># 查看有几颗cpu,每颗分别是几核</span>
<span class="line">cat /proc/cpuinfo | grep physical | uniq -c</span>
<span class="line"># 查看当前CPU运行在32bit还是64bit模式下, 如果是运行在32bit下也不代表CPU不支持</span>
<span class="line">64bitgetconf LONG_BIT</span>
<span class="line"># 结果大于0, 说明支持64bit计算. lm指long mode, 支持lm则是</span>
<span class="line">64bitcat /proc/cpuinfo | grep flags | grep &#39; lm &#39; | wc -l</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建立软连接" tabindex="-1"><a class="header-anchor" href="#建立软连接"><span>建立软连接</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ln -s /usr/local/jdk1.8/ jdk</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="rpm相关" tabindex="-1"><a class="header-anchor" href="#rpm相关"><span>rpm相关</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 查看是否通过rpm安装了该软件</span>
<span class="line">rpm -qa | grep 软件名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sshkey" tabindex="-1"><a class="header-anchor" href="#sshkey"><span>sshkey</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 创建</span>
<span class="line">sshkeyssh-keygen -t rsa -C your_email@example.com</span>
<span class="line">#id_rsa.pub 的内容拷贝到要控制的服务器的 home/username/.ssh/authorized_keys 中,如果没有则新建(.ssh权限为700, authorized_keys权限为600)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令重命名" tabindex="-1"><a class="header-anchor" href="#命令重命名"><span>命令重命名</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 在各个用户的.bash_profile中添加重命名配置</span>
<span class="line">alias ll=&#39;ls -alF&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同步服务器时间" tabindex="-1"><a class="header-anchor" href="#同步服务器时间"><span>同步服务器时间</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo ntpdate -u ntp.api.bz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="后台运行命令" tabindex="-1"><a class="header-anchor" href="#后台运行命令"><span>后台运行命令</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 后台运行,并且有nohup.out输出</span>
<span class="line">nohup xxx &amp;</span>
<span class="line"># 后台运行, 不输出任何日志</span>
<span class="line">nohup xxx &gt; /dev/null &amp;</span>
<span class="line"># 后台运行, 并将错误信息做标准输出到日志中 </span>
<span class="line">nohup xxx &gt;out.log 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制活动用户退出" tabindex="-1"><a class="header-anchor" href="#强制活动用户退出"><span>强制活动用户退出</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 命令来完成强制活动用户退出.其中TTY表示终端名称</span>
<span class="line">pkill -kill -t [TTY]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看命令路径" tabindex="-1"><a class="header-anchor" href="#查看命令路径"><span>查看命令路径</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">which &lt;命令&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查看进程所有打开最大fd数" tabindex="-1"><a class="header-anchor" href="#查看进程所有打开最大fd数"><span>查看进程所有打开最大fd数</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ulimit -n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置dns" tabindex="-1"><a class="header-anchor" href="#配置dns"><span>配置dns</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vim /etc/resolv.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="nslookup-查看域名路由表" tabindex="-1"><a class="header-anchor" href="#nslookup-查看域名路由表"><span>nslookup,查看域名路由表</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">nslookup google.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="last-最近登录信息列表" tabindex="-1"><a class="header-anchor" href="#last-最近登录信息列表"><span>last, 最近登录信息列表</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 最近登录的5个账号last -n 5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="设置固定ip" tabindex="-1"><a class="header-anchor" href="#设置固定ip"><span>设置固定ip</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ifconfig em1  192.168.5.177 netmask 255.255.255.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查看进程内加载的环境变量" tabindex="-1"><a class="header-anchor" href="#查看进程内加载的环境变量"><span>查看进程内加载的环境变量</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 也可以去 cd /proc 目录下, 查看进程内存中加载的东西</span>
<span class="line">ps eww -p  XXXXX(进程号)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看进程树找到服务器进程" tabindex="-1"><a class="header-anchor" href="#查看进程树找到服务器进程"><span>查看进程树找到服务器进程</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ps auwxf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查看进程启动路径" tabindex="-1"><a class="header-anchor" href="#查看进程启动路径"><span>查看进程启动路径</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cd /proc/xxx(进程号)</span>
<span class="line">ls -all</span>
<span class="line"># cwd对应的是启动路径</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加用户-配置sudo权限" tabindex="-1"><a class="header-anchor" href="#添加用户-配置sudo权限"><span>添加用户, 配置sudo权限</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 新增用户</span>
<span class="line">useradd 用户名</span>
<span class="line">passwd 用户名</span>
<span class="line"># 增加sudo权限</span>
<span class="line">vim /etc/sudoers</span>
<span class="line"># 修改文件里面的</span>
<span class="line"># root  ALL=(ALL)       ALL</span>
<span class="line"># 用户名 ALL=(ALL)       ALL</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制关闭进程名包含xxx的所有进程" tabindex="-1"><a class="header-anchor" href="#强制关闭进程名包含xxx的所有进程"><span>强制关闭进程名包含xxx的所有进程</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ps aux|grep xxx | grep -v grep | awk &#39;{print $2}&#39; | xargs kill -9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="磁盘-文件-目录相关操作" tabindex="-1"><a class="header-anchor" href="#磁盘-文件-目录相关操作"><span>磁盘,文件,目录相关操作</span></a></h1><h2 id="vim操作" tabindex="-1"><a class="header-anchor" href="#vim操作"><span>vim操作</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#normal模式下 g表示全局, x表示查找的内容, y表示替换后的内容</span>
<span class="line">:%s/x/y/g</span>
<span class="line">#normal模式下</span>
<span class="line">0  # 光标移到行首(数字0)</span>
<span class="line">$  # 光标移至行尾</span>
<span class="line">shift + g # 跳到文件最后</span>
<span class="line">gg # 跳到文件头</span>
<span class="line"># 显示行号</span>
<span class="line">:set nu</span>
<span class="line"># 去除行号</span>
<span class="line">:set nonu</span>
<span class="line"># 检索</span>
<span class="line">/xxx(检索内容)  # 从头检索, 按n查找下一个</span>
<span class="line">?xxx(检索内容)  # 从尾部检索</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打开只读文件-修改后需要保存时-不用切换用户即可保存的方式" tabindex="-1"><a class="header-anchor" href="#打开只读文件-修改后需要保存时-不用切换用户即可保存的方式"><span>打开只读文件,修改后需要保存时(不用切换用户即可保存的方式)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 在normal模式下</span>
<span class="line">:w !sudo tee %</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看磁盘-文件目录基本信息" tabindex="-1"><a class="header-anchor" href="#查看磁盘-文件目录基本信息"><span>查看磁盘, 文件目录基本信息</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 查看磁盘挂载情况</span>
<span class="line">mount</span>
<span class="line"># 查看磁盘分区信息</span>
<span class="line">df</span>
<span class="line"># 查看目录及子目录大小</span>
<span class="line">du -H -h</span>
<span class="line"># 查看当前目录下各个文件, 文件夹占了多少空间, 不会递归</span>
<span class="line">du -sh *</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wc命令" tabindex="-1"><a class="header-anchor" href="#wc命令"><span>wc命令</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 查看文件里有多少行</span>
<span class="line">wc -l filename</span>
<span class="line"># 看文件里有多少个</span>
<span class="line">wordwc -w filename</span>
<span class="line"># 文件里最长的那一行是多少个字</span>
<span class="line">wc -L filename</span>
<span class="line"># 统计字节数</span>
<span class="line">wc -c</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用压缩-解压缩命令" tabindex="-1"><a class="header-anchor" href="#常用压缩-解压缩命令"><span>常用压缩, 解压缩命令</span></a></h2><h3 id="压缩命令" tabindex="-1"><a class="header-anchor" href="#压缩命令"><span>压缩命令</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">tar czvf xxx.tar 压缩目录</span>
<span class="line">zip -r xxx.zip 压缩目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解压缩命令" tabindex="-1"><a class="header-anchor" href="#解压缩命令"><span>解压缩命令</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">tar zxvf xxx.tar</span>
<span class="line"># 解压到指定文件夹</span>
<span class="line">tar zxvf xxx.tar -C /xxx/yyy/</span>
<span class="line">unzip xxx.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变更文件所属用户-用户组" tabindex="-1"><a class="header-anchor" href="#变更文件所属用户-用户组"><span>变更文件所属用户, 用户组</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">chown eagleye.eagleye xxx.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="cp-scp-mkdir" tabindex="-1"><a class="header-anchor" href="#cp-scp-mkdir"><span>cp, scp, mkdir</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#复制</span>
<span class="line">cp xxx.log</span>
<span class="line"># 复制并强制覆盖同名文件</span>
<span class="line">cp -f xxx.log</span>
<span class="line"># 复制文件夹</span>
<span class="line">cp -r xxx(源文件夹) yyy(目标文件夹)</span>
<span class="line"># 远程复制</span>
<span class="line">scp -P ssh端口 username@10.10.10.101:/home/username/xxx /home/xxx</span>
<span class="line"># 级联创建目录</span>
<span class="line">mkdir -p /xxx/yyy/zzz</span>
<span class="line"># 批量创建文件夹, 会在test,main下都创建java, resources文件夹</span>
<span class="line">mkdir -p src/{test,main}/{java,resources}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较两个文件" tabindex="-1"><a class="header-anchor" href="#比较两个文件"><span>比较两个文件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">diff -u 1.txt 2.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="日志输出的字节数-可以用作性能测试" tabindex="-1"><a class="header-anchor" href="#日志输出的字节数-可以用作性能测试"><span>日志输出的字节数,可以用作性能测试</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 如果做性能测试, 可以每执行一次, 往日志里面输出 “.” , 这样日志中的字节数就是实际的性能测试运行的次数, 还可以看见实时速率.</span>
<span class="line">tail -f xxx.log | pv -bt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看-去除特殊字符" tabindex="-1"><a class="header-anchor" href="#查看-去除特殊字符"><span>查看, 去除特殊字符</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 查看特殊字符</span>
<span class="line">cat -v xxx.sh</span>
<span class="line"># 去除特殊字符</span>
<span class="line">sed -i &#39;s/^M//g’ env.sh  去除文件的特殊字符, 比如^M:  需要这样输入: ctrl+v+enter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理因系统原因引起的文件中特殊字符的问题" tabindex="-1"><a class="header-anchor" href="#处理因系统原因引起的文件中特殊字符的问题"><span>处理因系统原因引起的文件中特殊字符的问题</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 可以转换为该系统下的文件格式</span>
<span class="line">cat file.sh &gt; file.sh_bak</span>
<span class="line"># 先将file.sh中文件内容复制下来然后运行, 然后粘贴内容, 最后ctrl + d 保存退出cat &gt; file1.sh</span>
<span class="line"># 在vim中通过如下设置文件编码和文件格式</span>
<span class="line">:set fileencodings=utf-8 ，然后 w （存盘）一下即可转化为 utf8 格式，</span>
<span class="line">:set fileformat=unix</span>
<span class="line"># 在mac下使用dos2unix进行文件格式化</span>
<span class="line">find . -name &quot;*.sh&quot; | xargs dos2unix</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tee-重定向的同时输出到屏幕" tabindex="-1"><a class="header-anchor" href="#tee-重定向的同时输出到屏幕"><span>tee, 重定向的同时输出到屏幕</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">awk ‘{print $0}’ xxx.log | tee test.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="检索相关" tabindex="-1"><a class="header-anchor" href="#检索相关"><span>检索相关</span></a></h1><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 反向匹配, 查找不包含xxx的内容</span>
<span class="line">grep -v xxx</span>
<span class="line"># 排除所有空行</span>
<span class="line">grep -v &#39;^/pre&gt;</span>
<span class="line"># 返回结果 2,则说明第二行是空行</span>
<span class="line">grep -n “^$” 111.txt    </span>
<span class="line"># 查询以abc开头的行</span>
<span class="line">grep -n “^abc” 111.txt</span>
<span class="line"> # 同时列出该词语出现在文章的第几行</span>
<span class="line">grep &#39;xxx&#39; -n xxx.log</span>
<span class="line"># 计算一下该字串出现的次数</span>
<span class="line">grep &#39;xxx&#39; -c xxx.log</span>
<span class="line"># 比对的时候，不计较大小写的不同</span>
<span class="line">grep &#39;xxx&#39; -i xxx.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk"><span>awk</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 以&#39;:&#39; 为分隔符,如果第五域有user则输出该行</span>
<span class="line">awk -F &#39;:&#39; &#39;{if ($5 ~ /user/) print $0}&#39; /etc/passwd </span>
<span class="line"># 统计单个文件中某个字符（串）(中文无效)出现的次数</span>
<span class="line">awk -v RS=&#39;character&#39; &#39;END {print --NR}&#39; xxx.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="find检索命令" tabindex="-1"><a class="header-anchor" href="#find检索命令"><span>find检索命令</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 在目录下找后缀是.mysql的文件</span>
<span class="line">find /home/eagleye -name &#39;*.mysql&#39; -print</span>
<span class="line"># 会从 /usr 目录开始往下找，找最近3天之内存取过的文件。</span>
<span class="line">find /usr -atime 3 –print</span>
<span class="line"># 会从 /usr 目录开始往下找，找最近5天之内修改过的文件。</span>
<span class="line">find /usr -ctime 5 –print</span>
<span class="line"># 会从 /doc 目录开始往下找，找jacky 的、文件名开头是 j的文件。  </span>
<span class="line">find /doc -user jacky -name &#39;j*&#39; –print</span>
<span class="line"># 会从 /doc 目录开始往下找，找寻文件名是 ja 开头或者 ma开头的文件。</span>
<span class="line">find /doc \\( -name &#39;ja*&#39; -o- -name &#39;ma*&#39; \\) –print</span>
<span class="line">#  会从 /doc 目录开始往下找，找到凡是文件名结尾为 bak的文件，把它删除掉。-exec 选项是执行的意思，rm 是删除命令，{ } 表示文件名，“\\;”是规定的命令结尾。 </span>
<span class="line">find /doc -name &#39;*bak&#39; -exec rm {} \\;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="网络相关" tabindex="-1"><a class="header-anchor" href="#网络相关"><span>网络相关</span></a></h1><h2 id="查看什么进程使用了该端口" tabindex="-1"><a class="header-anchor" href="#查看什么进程使用了该端口"><span>查看什么进程使用了该端口</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">lsof -i:port</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="获取本机ip地址" tabindex="-1"><a class="header-anchor" href="#获取本机ip地址"><span>获取本机ip地址</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/sbin/ifconfig -a|grep inet|grep -v 127.0.0.1|grep -v inet6|awk &#39;{print $2}&#39;|tr -d &quot;addr:&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables"><span>iptables</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 查看iptables状态</span>
<span class="line">service iptables status</span>
<span class="line"># 要封停一个</span>
<span class="line">ipiptables -I INPUT -s ***.***.***.*** -j DROP</span>
<span class="line"># 要解封一个IP，使用下面这条命令：</span>
<span class="line">iptables -D INPUT -s ***.***.***.*** -j DROP备注: 参数-I是表示Insert（添加），-D表示Delete（删除）。后面跟的是规则，INPUT表示入站，***.***.***.***表示要封停的IP，DROP表示放弃连接。</span>
<span class="line">#开启9090端口的访问</span>
<span class="line">/sbin/iptables -I INPUT -p tcp --dport 9090 -j ACCEPT </span>
<span class="line"># 防火墙开启、关闭、重启</span>
<span class="line">/etc/init.d/iptables status</span>
<span class="line">/etc/init.d/iptables start</span>
<span class="line">/etc/init.d/iptables stop</span>
<span class="line">/etc/init.d/iptables restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nc命令-tcp调试利器" tabindex="-1"><a class="header-anchor" href="#nc命令-tcp调试利器"><span>nc命令, tcp调试利器</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#给某一个endpoint发送TCP请求,就将data的内容发送到对端nc 192.168.0.11 8000 &lt; data.txt</span>
<span class="line">#nc可以当做服务器，监听某个端口号,把某一次请求的内容存储到received_data里</span>
<span class="line">nc -l 8000 &gt; received_data</span>
<span class="line">#上边只监听一次，如果多次可以加上-k参数</span>
<span class="line">nc -lk 8000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tcpdump" tabindex="-1"><a class="header-anchor" href="#tcpdump"><span>tcpdump</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># dump出本机12301端口的tcp包</span>
<span class="line">tcpdump -i em1 tcp port 12301 -s 1500 -w abc.pcap</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跟踪网络路由路径" tabindex="-1"><a class="header-anchor" href="#跟踪网络路由路径"><span>跟踪网络路由路径</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># traceroute默认使用udp方式, 如果是-I则改成icmp方式</span>
<span class="line">traceroute -I www.163.com</span>
<span class="line"># 从ttl第3跳跟踪</span>
<span class="line">traceroute -M 3 www.163.com  </span>
<span class="line"># 加上端口跟踪</span>
<span class="line">traceroute -p 8080 192.168.10.11</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ss" tabindex="-1"><a class="header-anchor" href="#ss"><span>ss</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 显示本地打开的所有端口</span>
<span class="line">ss -l </span>
<span class="line"># 显示每个进程具体打开的socket</span>
<span class="line">ss -pl </span>
<span class="line"># 显示所有tcp socket</span>
<span class="line">ss -t -a </span>
<span class="line"># 显示所有的UDP Socekt</span>
<span class="line">ss -u -a </span>
<span class="line"># 显示所有已建立的SMTP连接</span>
<span class="line">ss -o state established &#39;( dport = :smtp or sport = :smtp )&#39;  </span>
<span class="line"># 显示所有已建立的HTTP连接 </span>
<span class="line">ss -o state established &#39;( dport = :http or sport = :http )&#39;  </span>
<span class="line"># 找出所有连接X服务器的进程</span>
<span class="line">ss -x src /tmp/.X11-unix/*  </span>
<span class="line">列出当前socket统计信息</span>
<span class="line">ss -s </span>
<span class="line">解释：netstat是遍历/proc下面每个PID目录，ss直接读/proc/net下面的统计信息。所以ss执行的时候消耗资源以及消耗的时间都比netstat少很多</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="netstat" tabindex="-1"><a class="header-anchor" href="#netstat"><span>netstat</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 输出每个ip的连接数，以及总的各个状态的连接数netstat -</span>
<span class="line">n | awk &#39;/^tcp/ {n=split($(NF-1),array,&quot;:&quot;);if(n&lt;=2)++S[array[(1)]];else++S[array[(4)]];++s[$NF];++N} END {for(a in S){printf(&quot;%-20s %s\\n&quot;, a, S[a]);++I}printf(&quot;%-20s %s\\n&quot;,&quot;TOTAL_IP&quot;,I);for(a in s) printf(&quot;%-20s %s\\n&quot;,a, s[a]);printf(&quot;%-20s %s\\n&quot;,&quot;TOTAL_LINK&quot;,N);}&#39;</span>
<span class="line"># 统计所有连接状态, </span>
<span class="line"># CLOSED：无连接是活动的或正在进行</span>
<span class="line"># LISTEN：服务器在等待进入呼叫</span>
<span class="line"># SYN_RECV：一个连接请求已经到达，等待确认</span>
<span class="line"># SYN_SENT：应用已经开始，打开一个连接</span>
<span class="line"># ESTABLISHED：正常数据传输状态</span>
<span class="line"># FIN_WAIT1：应用说它已经完成</span>
<span class="line"># FIN_WAIT2：另一边已同意释放</span>
<span class="line"># ITMED_WAIT：等待所有分组死掉</span>
<span class="line"># CLOSING：两边同时尝试关闭</span>
<span class="line"># TIME_WAIT：主动关闭连接一端还没有等到另一端反馈期间的状态</span>
<span class="line"># LAST_ACK：等待所有分组死掉</span>
<span class="line">netstat -n | awk &#39;/^tcp/ {++state[$NF]} END {for(key in state) print key,&quot;\\t&quot;,state[key]}&#39;</span>
<span class="line"># 查找较多time_wait连接</span>
<span class="line">netstat -n|grep TIME_WAIT|awk &#39;{print $5}&#39;|sort|uniq -c|sort -rn|head -n20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="监控linux性能命令" tabindex="-1"><a class="header-anchor" href="#监控linux性能命令"><span>监控linux性能命令</span></a></h1><h2 id="top" tabindex="-1"><a class="header-anchor" href="#top"><span>top</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">按大写的 F 或 O 键，然后按 a-z 可以将进程按照相应的列进行排序, 然后回车。而大写的 R 键可以将当前的排序倒转</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>列名</th><th>含义</th></tr></thead><tbody><tr><td>PID</td><td>进程id</td></tr><tr><td>PPID</td><td>父进程id</td></tr><tr><td>RUSER</td><td>Real user name</td></tr><tr><td>UID</td><td>进程所有者的用户id</td></tr><tr><td>USER</td><td>进程所有者的用户名</td></tr><tr><td>GROUP</td><td>进程所有者的组名</td></tr><tr><td>TTY</td><td>启动进程的终端名。不是从终端启动的进程则显示为 ?</td></tr><tr><td>PR</td><td>优先级</td></tr><tr><td>NI</td><td>nice值。负值表示高优先级，正值表示低优先级</td></tr><tr><td>P</td><td>最后使用的CPU，仅在多CPU环境下有意义</td></tr><tr><td>%CPU</td><td>上次更新到现在的CPU时间占用百分比</td></tr><tr><td>TIME</td><td>进程使用的CPU时间总计，单位秒</td></tr><tr><td>TIME+</td><td>进程使用的CPU时间总计，单位1/100秒</td></tr><tr><td>%MEM</td><td>进程使用的物理内存百分比</td></tr><tr><td>VIRT</td><td>进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES</td></tr><tr><td>SWAP</td><td>进程使用的虚拟内存中，被换出的大小，单位kb。</td></tr><tr><td>RES</td><td>进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA</td></tr><tr><td>CODE</td><td>可执行代码占用的物理内存大小，单位kb</td></tr><tr><td>DATA</td><td>可执行代码以外的部分(数据段+栈)占用的物理内存大小，单位kb</td></tr><tr><td>SHR</td><td>共享内存大小，单位kb</td></tr><tr><td>nFLT</td><td>页面错误次数</td></tr><tr><td>nDRT</td><td>最后一次写入到现在，被修改过的页面数。</td></tr><tr><td>S</td><td>进程状态。D=不可中断的睡眠状态,R=运行,S=睡眠,T=跟踪/停止,Z=僵尸进程</td></tr><tr><td>COMMAND</td><td>命令名/命令行</td></tr><tr><td>WCHAN</td><td>若该进程在睡眠，则显示睡眠中的系统函数名</td></tr><tr><td>Flags</td><td>任务标志，参考 sched.h</td></tr></tbody></table><h2 id="dmesg-查看系统日志" tabindex="-1"><a class="header-anchor" href="#dmesg-查看系统日志"><span>dmesg,查看系统日志</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">dmesg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="iostat-磁盘io情况监控" tabindex="-1"><a class="header-anchor" href="#iostat-磁盘io情况监控"><span>iostat,磁盘IO情况监控</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">iostat -xz 1</span>
<span class="line"># r/s, w/s, rkB/s, wkB/s：分别表示每秒读写次数和每秒读写数据量（千字节）。读写量过大，可能会引起性能问题。</span>
<span class="line"># await：IO操作的平均等待时间，单位是毫秒。这是应用程序在和磁盘交互时，需要消耗的时间，包括IO等待和实际操作的耗时。如果这个数值过大，可能是硬件设备遇到了瓶颈或者出现故障。</span>
<span class="line"># avgqu-sz：向设备发出的请求平均数量。如果这个数值大于1，可能是硬件设备已经饱和（部分前端硬件设备支持并行写入）。</span>
<span class="line"># %util：设备利用率。这个数值表示设备的繁忙程度，经验值是如果超过60，可能会影响IO性能（可以参照IO操作平均等待时间）。如果到达100%，说明硬件设备已经饱和。</span>
<span class="line"># 如果显示的是逻辑设备的数据，那么设备利用率不代表后端实际的硬件设备已经饱和。值得注意的是，即使IO性能不理想，也不一定意味这应用程序性能会不好，可以利用诸如预读取、写缓存等策略提升应用性能。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="free-内存使用情况" tabindex="-1"><a class="header-anchor" href="#free-内存使用情况"><span>free,内存使用情况</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">free -m</span>
<span class="line">eg:     total      used       free     shared    buffers     cached</span>
<span class="line">Mem:    1002        769        232          0         62        421</span>
<span class="line">-/+ buffers/cache:  286        715S</span>
<span class="line">wap:    1153        0       1153</span>
<span class="line">第一部分Mem行:</span>
<span class="line">total 内存总数: 1002M</span>
<span class="line">used 已经使用的内存数: 769Mfree 空闲的内存数: 232M</span>
<span class="line">shared 当前已经废弃不用,总是0</span>
<span class="line">buffers Buffer 缓存内存数: 62M</span>
<span class="line">cached Page 缓存内存数:421M</span>
<span class="line">关系：total(1002M) = used(769M) + free(232M)</span>
<span class="line">第二部分(-/+ buffers/cache):</span>
<span class="line">(-buffers/cache) used内存数：286M (指的第一部分Mem行中的used – buffers – cached)</span>
<span class="line">(+buffers/cache) free内存数: 715M (指的第一部分Mem行中的free + buffers + cached)</span>
<span class="line">可见-buffers/cache反映的是被程序实实在在吃掉的内存,而+buffers/cache反映的是可以挪用的内存总数.</span>
<span class="line">第三部分是指交换分区</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sar-查看网络吞吐状态" tabindex="-1"><a class="header-anchor" href="#sar-查看网络吞吐状态"><span>sar,查看网络吞吐状态</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># sar命令在这里可以查看网络设备的吞吐率。在排查性能问题时，可以通过网络设备的吞吐量，判断网络设备是否已经饱和</span>
<span class="line">sar -n DEV 1</span>
<span class="line">#</span>
<span class="line"># sar命令在这里用于查看TCP连接状态，其中包括：</span>
<span class="line"># active/s：每秒本地发起的TCP连接数，既通过connect调用创建的TCP连接；</span>
<span class="line"># passive/s：每秒远程发起的TCP连接数，即通过accept调用创建的TCP连接；</span>
<span class="line"># retrans/s：每秒TCP重传数量；</span>
<span class="line"># TCP连接数可以用来判断性能问题是否由于建立了过多的连接，进一步可以判断是主动发起的连接，还是被动接受的连接。TCP重传可能是因为网络环境恶劣，或者服务器压力过大导致丢包sar -n TCP,ETCP 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vmstat-给定时间监控cpu使用率-内存使用-虚拟内存交互-io读写" tabindex="-1"><a class="header-anchor" href="#vmstat-给定时间监控cpu使用率-内存使用-虚拟内存交互-io读写"><span>vmstat, 给定时间监控CPU使用率, 内存使用, 虚拟内存交互, IO读写</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 2表示每2秒采集一次状态信息, 1表示只采集一次(忽略既是一直采集)</span>
<span class="line">vmstat 2 1</span>
<span class="line">eg:</span>
<span class="line">r b swpd free buff cache si so bi bo in cs us sy id wa</span>
<span class="line">1 0 0 3499840 315836 3819660 0 0 0 1 2 0 0 0 100 0</span>
<span class="line">0 0 0 3499584 315836 3819660 0 0 0 0 88 158 0 0 100 0</span>
<span class="line">0 0 0 3499708 315836 3819660 0 0 0 2 86 162 0 0 100 0</span>
<span class="line">0 0 0 3499708 315836 3819660 0 0 0 10 81 151 0 0 100 0</span>
<span class="line">1 0 0 3499732 315836 3819660 0 0 0 2 83 154 0 0 100 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>r 表示运行队列(就是说多少个进程真的分配到CPU)，我测试的服务器目前CPU比较空闲，没什么程序在跑，当这个值超过了CPU数目，就会出现CPU瓶颈了。这个也和top的负载有关系，一般负载超过了3就比较高，超过了5就高，超过了10就不正常了，服务器的状态很危险。top的负载类似每秒的运行队列。如果运行队列过大，表示你的CPU很繁忙，一般会造成CPU使用率很高。</li><li>b 表示阻塞的进程,这个不多说，进程阻塞，大家懂的。</li><li>swpd 虚拟内存已使用的大小，如果大于0，表示你的机器物理内存不足了，如果不是程序内存泄露的原因，那么你该升级内存了或者把耗内存的任务迁移到其他机器。</li><li>free 空闲的物理内存的大小，我的机器内存总共8G，剩余3415M。</li><li>buff Linux/Unix系统是用来存储，目录里面有什么内容，权限等的缓存，我本机大概占用300多M</li><li>cache cache直接用来记忆我们打开的文件,给文件做缓冲，我本机大概占用300多M(这里是Linux/Unix的聪明之处，把空闲的物理内存的一部分拿来做文件和目录的缓存，是为了提高 程序执行的性能，当程序使用内存时，buffer/cached会很快地被使用。)</li><li>si 每秒从磁盘读入虚拟内存的大小，如果这个值大于0，表示物理内存不够用或者内存泄露了，要查找耗内存进程解决掉。我的机器内存充裕，一切正常。</li><li>so 每秒虚拟内存写入磁盘的大小，如果这个值大于0，同上。</li><li>bi 块设备每秒接收的块数量，这里的块设备是指系统上所有的磁盘和其他块设备，默认块大小是1024byte，我本机上没什么IO操作，所以一直是0，但是我曾在处理拷贝大量数据(2-3T)的机器上看过可以达到140000/s，磁盘写入速度差不多140M每秒</li><li>bo 块设备每秒发送的块数量，例如我们读取文件，bo就要大于0。bi和bo一般都要接近0，不然就是IO过于频繁，需要调整。</li><li>in 每秒CPU的中断次数，包括时间中断</li><li>cs 每秒上下文切换次数，例如我们调用系统函数，就要进行上下文切换，线程的切换，也要进程上下文切换，这个值要越小越好，太大了，要考虑调低线程或者进程的数目,例如在apache和nginx这种web服务器中，我们一般做性能测试时会进行几千并发甚至几万并发的测试，选择web服务器的进程可以由进程或者线程的峰值一直下调，压测，直到cs到一个比较小的值，这个进程和线程数就是比较合适的值了。系统调用也是，每次调用系统函数，我们的代码就会进入内核空间，导致上下文切换，这个是很耗资源，也要尽量避免频繁调用系统函数。上下文切换次数过多表示你的CPU大部分浪费在上下文切换，导致CPU干正经事的时间少了，CPU没有充分利用，是不可取的。</li><li>us 用户CPU时间，我曾经在一个做加密解密很频繁的服务器上，可以看到us接近100,r运行队列达到80(机器在做压力测试，性能表现不佳)。</li><li>sy 系统CPU时间，如果太高，表示系统调用时间长，例如是IO操作频繁。</li><li>id 空闲 CPU时间，一般来说，id + us + sy = 100,一般我认为id是空闲CPU使用率，us是用户CPU使用率，sy是系统CPU使用率。</li><li>wt 等待IO CPU时间。</li></ul><p>来源 | siye1982.github.io/2016/02/25/linux-list/</p>`,108)]))}const c=e(l,[["render",d],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/docs/guide/Linux/2021-10-22-xinrenwenyibanduyongnaxie-linux-mingling，wobazhegerengliaoguoqu/","title":"新人问一般都用哪些 Linux 命令，我把这个扔了过去","lang":"en-US","frontmatter":{"title":"新人问一般都用哪些 Linux 命令，我把这个扔了过去","date":"2021-10-22","categories":["linux","blog"],"tags":["linux","linux命令"],"coverImage":"mmexport1634877662511.png"},"headers":[{"level":2,"title":"Linux关机,重启","slug":"linux关机-重启","link":"#linux关机-重启","children":[]},{"level":2,"title":"查看系统,CPU信息","slug":"查看系统-cpu信息","link":"#查看系统-cpu信息","children":[]},{"level":2,"title":"建立软连接","slug":"建立软连接","link":"#建立软连接","children":[]},{"level":2,"title":"rpm相关","slug":"rpm相关","link":"#rpm相关","children":[]},{"level":2,"title":"sshkey","slug":"sshkey","link":"#sshkey","children":[]},{"level":2,"title":"命令重命名","slug":"命令重命名","link":"#命令重命名","children":[]},{"level":2,"title":"同步服务器时间","slug":"同步服务器时间","link":"#同步服务器时间","children":[]},{"level":2,"title":"后台运行命令","slug":"后台运行命令","link":"#后台运行命令","children":[]},{"level":2,"title":"强制活动用户退出","slug":"强制活动用户退出","link":"#强制活动用户退出","children":[]},{"level":2,"title":"查看命令路径","slug":"查看命令路径","link":"#查看命令路径","children":[]},{"level":2,"title":"查看进程所有打开最大fd数","slug":"查看进程所有打开最大fd数","link":"#查看进程所有打开最大fd数","children":[]},{"level":2,"title":"配置dns","slug":"配置dns","link":"#配置dns","children":[]},{"level":2,"title":"nslookup,查看域名路由表","slug":"nslookup-查看域名路由表","link":"#nslookup-查看域名路由表","children":[]},{"level":2,"title":"last, 最近登录信息列表","slug":"last-最近登录信息列表","link":"#last-最近登录信息列表","children":[]},{"level":2,"title":"设置固定ip","slug":"设置固定ip","link":"#设置固定ip","children":[]},{"level":2,"title":"查看进程内加载的环境变量","slug":"查看进程内加载的环境变量","link":"#查看进程内加载的环境变量","children":[]},{"level":2,"title":"查看进程树找到服务器进程","slug":"查看进程树找到服务器进程","link":"#查看进程树找到服务器进程","children":[]},{"level":2,"title":"查看进程启动路径","slug":"查看进程启动路径","link":"#查看进程启动路径","children":[]},{"level":2,"title":"添加用户, 配置sudo权限","slug":"添加用户-配置sudo权限","link":"#添加用户-配置sudo权限","children":[]},{"level":2,"title":"强制关闭进程名包含xxx的所有进程","slug":"强制关闭进程名包含xxx的所有进程","link":"#强制关闭进程名包含xxx的所有进程","children":[]},{"level":2,"title":"vim操作","slug":"vim操作","link":"#vim操作","children":[]},{"level":2,"title":"打开只读文件,修改后需要保存时(不用切换用户即可保存的方式)","slug":"打开只读文件-修改后需要保存时-不用切换用户即可保存的方式","link":"#打开只读文件-修改后需要保存时-不用切换用户即可保存的方式","children":[]},{"level":2,"title":"查看磁盘, 文件目录基本信息","slug":"查看磁盘-文件目录基本信息","link":"#查看磁盘-文件目录基本信息","children":[]},{"level":2,"title":"wc命令","slug":"wc命令","link":"#wc命令","children":[]},{"level":2,"title":"常用压缩, 解压缩命令","slug":"常用压缩-解压缩命令","link":"#常用压缩-解压缩命令","children":[{"level":3,"title":"压缩命令","slug":"压缩命令","link":"#压缩命令","children":[]},{"level":3,"title":"解压缩命令","slug":"解压缩命令","link":"#解压缩命令","children":[]}]},{"level":2,"title":"变更文件所属用户, 用户组","slug":"变更文件所属用户-用户组","link":"#变更文件所属用户-用户组","children":[]},{"level":2,"title":"cp, scp, mkdir","slug":"cp-scp-mkdir","link":"#cp-scp-mkdir","children":[]},{"level":2,"title":"比较两个文件","slug":"比较两个文件","link":"#比较两个文件","children":[]},{"level":2,"title":"日志输出的字节数,可以用作性能测试","slug":"日志输出的字节数-可以用作性能测试","link":"#日志输出的字节数-可以用作性能测试","children":[]},{"level":2,"title":"查看, 去除特殊字符","slug":"查看-去除特殊字符","link":"#查看-去除特殊字符","children":[]},{"level":2,"title":"处理因系统原因引起的文件中特殊字符的问题","slug":"处理因系统原因引起的文件中特殊字符的问题","link":"#处理因系统原因引起的文件中特殊字符的问题","children":[]},{"level":2,"title":"tee, 重定向的同时输出到屏幕","slug":"tee-重定向的同时输出到屏幕","link":"#tee-重定向的同时输出到屏幕","children":[]},{"level":2,"title":"grep","slug":"grep","link":"#grep","children":[]},{"level":2,"title":"awk","slug":"awk","link":"#awk","children":[]},{"level":2,"title":"find检索命令","slug":"find检索命令","link":"#find检索命令","children":[]},{"level":2,"title":"查看什么进程使用了该端口","slug":"查看什么进程使用了该端口","link":"#查看什么进程使用了该端口","children":[]},{"level":2,"title":"获取本机ip地址","slug":"获取本机ip地址","link":"#获取本机ip地址","children":[]},{"level":2,"title":"iptables","slug":"iptables","link":"#iptables","children":[]},{"level":2,"title":"nc命令, tcp调试利器","slug":"nc命令-tcp调试利器","link":"#nc命令-tcp调试利器","children":[]},{"level":2,"title":"tcpdump","slug":"tcpdump","link":"#tcpdump","children":[]},{"level":2,"title":"跟踪网络路由路径","slug":"跟踪网络路由路径","link":"#跟踪网络路由路径","children":[]},{"level":2,"title":"ss","slug":"ss","link":"#ss","children":[]},{"level":2,"title":"netstat","slug":"netstat","link":"#netstat","children":[]},{"level":2,"title":"top","slug":"top","link":"#top","children":[]},{"level":2,"title":"dmesg,查看系统日志","slug":"dmesg-查看系统日志","link":"#dmesg-查看系统日志","children":[]},{"level":2,"title":"iostat,磁盘IO情况监控","slug":"iostat-磁盘io情况监控","link":"#iostat-磁盘io情况监控","children":[]},{"level":2,"title":"free,内存使用情况","slug":"free-内存使用情况","link":"#free-内存使用情况","children":[]},{"level":2,"title":"sar,查看网络吞吐状态","slug":"sar-查看网络吞吐状态","link":"#sar-查看网络吞吐状态","children":[]},{"level":2,"title":"vmstat, 给定时间监控CPU使用率, 内存使用, 虚拟内存交互, IO读写","slug":"vmstat-给定时间监控cpu使用率-内存使用-虚拟内存交互-io读写","link":"#vmstat-给定时间监控cpu使用率-内存使用-虚拟内存交互-io读写","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/guide/Linux/2021-10-22-新人问一般都用哪些-linux-命令，我把这个扔了过去/index.md"}');export{c as comp,p as data};
