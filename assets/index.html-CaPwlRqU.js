import{_ as s,c as n,a as i,o as a}from"./app-BlXaiT8W.js";const l={};function t(r,e){return a(),n("div",null,e[0]||(e[0]=[i(`<p><strong>方法1：少量IP手动绑定:</strong></p><p>（这里以绑定IP到eth0为例，其它网卡的话修改相应的文件名即可）</p><p>1.复制ifcfg-eth0的网卡配置文件并改名为ifcfg-eth0:0</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[root@taoli /]# cd /etc/sysconfig/network-scripts</span>
<span class="line">[root@taoli /]# cp ifcfg-eth0 ifcfg-eth0:0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.编辑ifcfg-eth0:0文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[root@taoli /]# vim /etc/sysconfig/network-scripts/ifcfg-eth0:0</span>
<span class="line"></span>
<span class="line">DEVICE=eth0:0                 // 这里修改为eth0:0跟文件名保持一致</span>
<span class="line">BOOTPROTO=static              // 协议为静态，用none也可以</span>
<span class="line">HWADDR=00:0C:29:6F:62:A7      // MAC地址</span>
<span class="line">ONBOOT=yes                    // 开机启用此网卡</span>
<span class="line">IPADDR=192.168.1.3            // 新绑定的IP</span>
<span class="line">NETMASK=255.255.255.0         // 子网掩码</span>
<span class="line">GATEWAY=192.168.1.1           // 网关</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、启动网卡：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[root@taoli /]# ifup eth0:0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注：有人在这一步喜欢用service network restart重启网络，其实这是没必要的，只需要启用这张网卡就可以了</p><p>然后再试ping 一下，如果能ping通的话，就可以了。</p><p><strong>方法2：自动绑定一个IP段或多个IP段:</strong></p><p>（同样这里以eth0为例，其它网卡的话修改相应的文件名即可）</p><p>1.新建ifcfg-eth0-range0文件：</p><p>（注意这里的文件名不要调换range的位置或写错单词，不然的话绑定的IP是不会生效的，如果你还有几段IP要绑定到eth0上的话，你可以再新建ifcfg-eth0-range1, ifcfg-eth0-range2等文件，不过这里要注意每个range文件中的定义的CLONENUM_START值不能重叠，不然的话会出问题。 ）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[root@taoli /]# /etc/sysconfig/network-scripts/ifcfg-eth0-range0</span>
<span class="line"></span>
<span class="line">#写入以下内容</span>
<span class="line"></span>
<span class="line">DEVICE=eth0                   //绑定IP段的网卡名称</span>
<span class="line">ONBOOT=yes                    //开机启用此网卡</span>
<span class="line">BOOTPROTO=static              //协议为静态</span>
<span class="line">IPADDR_START=192.168.0.101    //网段的起始IP</span>
<span class="line">IPADDR_END=192.168.0.120      //网段的截止IP</span>
<span class="line">NETMASK=255.255.255.255       //子网掩码</span>
<span class="line">CLONENUM_START=0              //这个数字是网卡别名的开始位置，比如这里的3是指eth0:0,并且会把IPADDR_START设置的IP192.168.0.101绑定到eth0:0上,以此类推</span>
<span class="line">NO_ALIASROUTING=yes           //这个参数的作用是数据包始终通过eth0进出，不走网卡别名（如eth0:0），设置这个参数可以加快路由的响应速度，所以强烈建议配置。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、后重启网络：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[root@taoli /]# service network restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再测试一下，能ping就大功告成了。</p>`,18)]))}const d=s(l,[["render",t],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/blogs/post-doc/2020/06/2020-06-03-centosshezhiduogeipdizhi/","title":"centos设置多个ip地址","lang":"en-US","frontmatter":{"title":"centos设置多个ip地址","date":"2020-06-03","categories":["linux","blog"],"tags":["centos","linux"],"coverImage":"linux.png"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/post-doc/2020/06/2020-06-03-centos设置多个ip地址/index.md"}');export{d as comp,p as data};
