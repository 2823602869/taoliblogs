import{_ as e,c as n,a,o as i}from"./app-Cw2o-BxM.js";const l="/taoliblogs/assets/a1f8a45157bf275e5729a83099fe15b8-CyOkV9kN.png",t="/taoliblogs/assets/623e9c7b1e8f76dea8b8a52e19ef93b1-BgA1ubDd.png",d="/taoliblogs/assets/15a402d41db3e6873b3bb49751380b66-BMD-ZGDF.png",r="/taoliblogs/assets/44a449ecdbbd64667e719e0c5857463e-Dr-9TqgL.png",c="/taoliblogs/assets/067733f894f051af5404b915f6adbd48-B4EfF1z5.png",p="/taoliblogs/assets/6a1644850f99e214ca07b75be9256174-BQ11Wcoq.png",v="/taoliblogs/assets/02a7f6dd05233c1009dd8135ccf5f6ba-C6xdsemX.png",u="/taoliblogs/assets/ade52b2194cc748c5eee91cd65520b4f-ChzRAsFL.png",o="/taoliblogs/assets/795414b672aef8e154286c5f12042b0f-Ccq_L1Rx.png",m="/taoliblogs/assets/2b6f83fdc0a3980268acbd6a72d974e8-CQ6M4gi1.png",b="/taoliblogs/assets/94afbcf8a6185bfdd2c0be456993f2b6-CzdzVpvK.png",h="/taoliblogs/assets/b8f46e07797d75f5413191b11fb3e647-Ox_1_SFt.png",g="/taoliblogs/assets/93894c1add8c7358033303715e2a2967-Co5Vem5S.png",x="/taoliblogs/assets/4cab4800a0d9534afbafe67bcc95f176-BqMpikew.png",f="/taoliblogs/assets/8e24109cba8ae7679c68c953f3fa4c7c-BWt66dQZ.png",q="/taoliblogs/assets/0884db3eae746c8fad0b82696964208c-C9B7iXYX.png",k="/taoliblogs/assets/0811f7139508263db8611bd69701d070-B6wQ_rIv.png",y="/taoliblogs/assets/020e0eb0e6a818988b1b2853fcd92825-A7J5qkYu.png",j="/taoliblogs/assets/6d708a36c3f8828fb19db27d171bb65e-QxBsjgNV.png",_="/taoliblogs/assets/d8cddb7cf41bb4a6d8afef71bfc0c632-B6pT-NnW.png",A="/taoliblogs/assets/acfa59c0a4db3377681c298dc9912fce-D990bydz.png",E="/taoliblogs/assets/48abfbd96a5f4c59457796bcc32ba4d8-DAd5bvf0.png",w="/taoliblogs/assets/52a274d2ce58bad8c67f69165d84bd1e-qUyKSMlx.png",T="/taoliblogs/assets/a3d444d137286f1b3baddd3adc54535e-B-9ha3KX.png",L="/taoliblogs/assets/d606b92c205df335f771b930b4e35653-3dJ5z8N5.png",R="/taoliblogs/assets/95d91f2dcaf5e603d846fa2c063ceef0-D4-kg-KP.png",N="/taoliblogs/assets/e93f2d8b5101fcec822d95ce0913ebbf-Ci-c4SBt.png",I={};function M(C,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h4 id="mysql常见命令" tabindex="-1"><a class="header-anchor" href="#mysql常见命令"><span>MySQL常见命令</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">net start msyql; #启动mysql</span>
<span class="line">net stop mysql; #停止mysql</span>
<span class="line">show databases;   #查看所有库</span>
<span class="line">use 库名; #打开指定的库</span>
<span class="line">show tables; #查看当前库内的所有表</span>
<span class="line">show tables from mysql;</span>
<span class="line">select database(); #查看当前库</span>
<span class="line">create table 表名(列名 列类型,name varchar(20)); #创建表</span>
<span class="line">desc 表名; #查看表结构</span>
<span class="line">select * from 表名; #查看表内数据</span>
<span class="line">insert into 表名(id,name) values(序号，&#39;rose&#39;); #向表中插入数据</span>
<span class="line">update 表名 set name=&#39;&#39; where id=序号(id); #修改表中数据</span>
<span class="line">delete from 表名 where id=序号; #删除指定数据</span>
<span class="line">select version();  mysql --version  mysql -V #查看当前mysql版本</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mysql不区分大小写</p></blockquote><p><strong>去重</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select distinct department_id from 表名 #去重</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>+号的作用</strong></p><blockquote><p>只能数值相加，如果一边为字符型，那么会试图转换为数值型.</p><p>如果一边为null 那么一定为null</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">concat(&#39;a&#39;,&#39;b&#39;,&#39;c&#39;); #输出abc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询"><span>条件查询</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">语法：</span>
<span class="line">	select </span>
<span class="line">			查询列表</span>
<span class="line">	from</span>
<span class="line">    		表名</span>
<span class="line">   	where</span>
<span class="line">   			筛选条件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询"><span>模糊查询</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">like</span>
<span class="line">between and </span>
<span class="line">in</span>
<span class="line">is null | is not null</span>
<span class="line">#安全等于</span>
<span class="line">&lt;=&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>like用法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#案例 查询员工名中第二个字符为_的员工名</span>
<span class="line">select </span>
<span class="line">		last_name</span>
<span class="line">from  </span>
<span class="line">		employees(数据库名);</span>
<span class="line">where</span>
<span class="line">		last_name like &#39;&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>between and</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select </span>
<span class="line">   	*</span>
<span class="line">from</span>
<span class="line">   	employees数据库名;</span>
<span class="line">where</span>
<span class="line">   	employees_id between 100 and 120;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询"><span>排序查询</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> select 查询列表</span>
<span class="line"> from  表</span>
<span class="line">【where 筛选条件】</span>
<span class="line"> order by 排序列表 【asc|desc】</span>
<span class="line"># asc代表升序 desc代表降序</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见函数" tabindex="-1"><a class="header-anchor" href="#常见函数"><span>常见函数</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select 函数名（实参列表）【from表】</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>分类</p></blockquote><p>1.单行函数</p><p>如 concat、length、ifnull等</p><p>2.分组函数</p><p>功能：做统计使用，又称为统计函数、聚合函数、组函数</p><h5 id="单行函数" tabindex="-1"><a class="header-anchor" href="#单行函数"><span>单行函数</span></a></h5><blockquote><p><strong>字符函数</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#length 获取参数值的字节个数</span>
<span class="line">select length(&#39;&#39;);</span>
<span class="line">#concat 拼接字符串</span>
<span class="line">select concat(,&#39;&#39;,);</span>
<span class="line">from 表名;</span>
<span class="line">#upper、lower</span>
<span class="line">select upper(&#39;&#39;);</span>
<span class="line">#substr、substring</span>
<span class="line">select substr(&#39;&#39;,索引,&#39;&#39;);</span>
<span class="line">#instr 返回字串第一次出现的索引，如果找不到返回0</span>
<span class="line">select instr(&#39;&#39;,&#39;&#39;);</span>
<span class="line">#trim 去前后空格</span>
<span class="line">select trim(&#39;&#39;);</span>
<span class="line">#lpad 用指定的字符左填充指定长度</span>
<span class="line">select lpad(&#39;&#39;,指定长度,&#39;指定的字符&#39;);</span>
<span class="line">#replace 替换</span>
<span class="line">select replace(&#39;&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>示例</strong> 将姓变大写，名变小写，然后拼接</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select concat(upper(last_name),lower(first_name)) from 表名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>示例</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select trim(&#39;a&#39; from &#39;aaaaa张aaaa三aaaa&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>数学函数</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#round 四舍五入</span>
<span class="line">select round(1.45);</span>
<span class="line">#ceil 向上取整,返回&gt;=该参数的最小数</span>
<span class="line">select ceil(1.00);</span>
<span class="line">#floor 向下取整，返回&lt;=该参数的最大整数</span>
<span class="line">select floor(9.99);</span>
<span class="line">#truncate 截断</span>
<span class="line">select truncate(1.69999,1);</span>
<span class="line">#mod 取余</span>
<span class="line">select mod(-10,-3);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>日期函数</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#now 返回当前系统日期＋时间</span>
<span class="line">select now();</span>
<span class="line">#curdate 返回当前系统日期，不包括时间</span>
<span class="line">#curtime 返回当前时间，不包括日期</span>
<span class="line">#str_to_date 将字符通过指定的格式转换成日期</span>
<span class="line">#date_format 将日期转换成字符</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>图片</strong></p></blockquote><p><img src="`+l+'" alt="image-20210316194330235"></p><p><img src="'+t+`" alt="image-20210316194254705"></p><blockquote><p><strong>其他函数</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># version</span>
<span class="line"># database</span>
<span class="line"># user</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>流程控制函数</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># if 函数  if else效果</span>
<span class="line"># 1 case 函数 switch case</span>
<span class="line">case 要判断的字段或表达式</span>
<span class="line">when 常量1 then 要显示的值1或者语句1;</span>
<span class="line">when 常量2 then 要显示的值2或者语句2;</span>
<span class="line">...</span>
<span class="line">else 要显示的值n或者语句n;</span>
<span class="line">end</span>
<span class="line"># 2</span>
<span class="line">case </span>
<span class="line">when 条件1 then 要显示的值1或语句1</span>
<span class="line">when 条件2 then 要显示的值2或语句2</span>
<span class="line">...</span>
<span class="line">else 要显示的值n或者语句n</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="分组函数" tabindex="-1"><a class="header-anchor" href="#分组函数"><span>分组函数</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select 分组函数，分组后的字段</span>
<span class="line">from 表</span>
<span class="line">【where 筛选条件】</span>
<span class="line">group by 分组的字段</span>
<span class="line">【having 分组后的筛选】</span>
<span class="line">【order 不要 排序列表】</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="image-20210317112452942"></p><blockquote><p>1.都忽略null值</p><p>2.sum，avg一般用于处理数值型，max min count可以处理任何类型</p><p>3.可以和distinct搭配实现去重</p><p>4.一般使用count(*)用作统计行数</p><p>5.和分组函数一同查询的字段要求是group by后的字段</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#sum 求和</span>
<span class="line">#avg 平均值</span>
<span class="line">#max 最大值</span>
<span class="line">#min 最小值</span>
<span class="line">#count 计算非空值的个数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询"><span>分组查询</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select 分组函数，列(要求出现在group by的后面)</span>
<span class="line">from 表</span>
<span class="line">【where 筛选条件】</span>
<span class="line">group by 分组的列表</span>
<span class="line">【order by 子句】</span>
<span class="line"># 按多个字段分组</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>多表连接</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select 字段1,字段2</span>
<span class="line">from 表1,表2,...;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>笛卡尔乘积</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select name,boyName from beauty,boys;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="sql92语法" tabindex="-1"><a class="header-anchor" href="#sql92语法"><span>SQL92语法</span></a></h5><blockquote><p><strong>等值连接</strong></p></blockquote><p>①多表等值连接的结果为多表的交集部分</p><p>②n表连接，至少需要n-1个连接条件</p><p>③多表的顺序没有要求</p><p>④一般需要为表起别名</p><p>⑤可以搭配前面介绍的所有子句使用，比如排序、分组、筛选</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select e.last_name,e.job_id,j.job_title #select 查询列表</span>
<span class="line">from 数据库名 e,表名 j #from 表1 别名,表2 别名</span>
<span class="line">where e.&#39;job.id&#39; = j.&#39;job_id&#39;; #where 表1.key = 表2.key;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>非等值连接</strong></p></blockquote><p><img src="`+r+`" alt="image-20210317105343073"></p><blockquote><p><strong>自连接</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#select 查询列表</span>
<span class="line">#from 表 别名1,表 别名2</span>
<span class="line">#where 等值连接;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sql99语法" tabindex="-1"><a class="header-anchor" href="#sql99语法"><span>SQL99语法</span></a></h5><blockquote><p>语法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select 查询列表</span>
<span class="line">from 表1 别名 【连接类型】</span>
<span class="line">join 表2 别名</span>
<span class="line">on 连接条件</span>
<span class="line">where 筛选条件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>分类</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">内连接： inner</span>
<span class="line"></span>
<span class="line">外连接： left【outer】</span>
<span class="line"></span>
<span class="line">​			左外： left【outer】</span>
<span class="line"></span>
<span class="line">​			右外： right【outer】</span>
<span class="line"></span>
<span class="line">​			全外： full【outer】</span>
<span class="line"></span>
<span class="line">交叉连接：cross</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>内连接</strong></p></blockquote><p><img src="`+c+'" alt="image-20210317142658385"></p><blockquote><p><strong>外连接</strong></p></blockquote><p><img src="'+p+'" alt="image-20210317153720655"></p><blockquote><p><strong>全外</strong></p></blockquote><p><img src="'+v+`" alt="image-20210317155344937"></p><blockquote><p><strong>交叉连接</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select 查询列表</span>
<span class="line">from 表1 别名</span>
<span class="line">cross join 表2 别名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询"><span>子查询</span></a></h4><p><img src="`+u+'" alt="image-20210318083004217"></p><p>​</p><h4 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询"><span>分页查询</span></a></h4><p><img src="'+o+'" alt="image-20210318101814315"></p><p><img src="'+m+`" alt="image-20210318112236110"></p><h4 id="union联合查询" tabindex="-1"><a class="header-anchor" href="#union联合查询"><span>union联合查询</span></a></h4><blockquote><p><strong>语法</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">查询语句1</span>
<span class="line">union</span>
<span class="line">查询语句2</span>
<span class="line">union</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dml语言" tabindex="-1"><a class="header-anchor" href="#dml语言"><span>DML语言</span></a></h4><h4 id="插入语句" tabindex="-1"><a class="header-anchor" href="#插入语句"><span>插入语句</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#①</span>
<span class="line">insert into 表名(列名,...)</span>
<span class="line">values(值1,....);</span>
<span class="line">#②</span>
<span class="line">insert into 表名</span>
<span class="line">set 列名=值，列名=值....</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改语句" tabindex="-1"><a class="header-anchor" href="#修改语句"><span>修改语句</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">update 表名</span>
<span class="line">set 列=新值,列=新值...</span>
<span class="line">where 筛选条件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除语句</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#① 单表删除</span>
<span class="line">delete from 表名 where 筛选条件</span>
<span class="line">#② </span>
<span class="line">truncate table 表名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Sql192语法</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 多表删除</span>
<span class="line">delete 表1的别名，表2的别名</span>
<span class="line">from 表1 别名。表2 别名</span>
<span class="line">where 连接条件</span>
<span class="line">and 筛选条件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Sql199语法</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 多表删除</span>
<span class="line">delete 表1的别名,表2的别名</span>
<span class="line">from 表1 别名</span>
<span class="line">inner|left|right join 表2 别名 on 连接条件</span>
<span class="line">where 筛选条件;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl"><span>DDL</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">创建：create</span>
<span class="line">修改：alter</span>
<span class="line">删除：drop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="库的管理" tabindex="-1"><a class="header-anchor" href="#库的管理"><span>库的管理</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create database [if not exists] 库名;</span>
<span class="line"></span>
<span class="line">#更改库的字符集</span>
<span class="line">alter database books character set 编码;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="库的删除" tabindex="-1"><a class="header-anchor" href="#库的删除"><span>库的删除</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">drop database [if exists] books;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="表的创建" tabindex="-1"><a class="header-anchor" href="#表的创建"><span>表的创建</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create table 表名{</span>
<span class="line">		别名 列的类型[(长度) 约束],</span>
<span class="line">		别名 列的类型[(长度) 约束],</span>
<span class="line">		别名 列的类型[(长度) 约束],</span>
<span class="line">		...</span>
<span class="line">		别名 列的类型[(长度) 约束],</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="表的修改" tabindex="-1"><a class="header-anchor" href="#表的修改"><span>表的修改</span></a></h5><blockquote><p><strong>修改列名</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">alter table book change column 旧列名 新列名 datetime;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>修改列的类型或约束</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">alter table book modify column 列名 timestamp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>添加新列</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">alter table author add column 列名 double;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>删除列</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">alter table author drop column 列名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>修改表名</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">alter table author rename to 表名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="表的删除" tabindex="-1"><a class="header-anchor" href="#表的删除"><span>表的删除</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">drop table [if exists]表名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>表的复制</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#仅仅只复制表的结构</span>
<span class="line">create table copy like 表名;</span>
<span class="line">#复制表的结构+数据</span>
<span class="line">create table copy2</span>
<span class="line">select * from 表名;</span>
<span class="line">#只复制部分数据</span>
<span class="line">create table copy3</span>
<span class="line">select id,name </span>
<span class="line">from 表名</span>
<span class="line">where nation = 中国;</span>
<span class="line"># 仅仅复制某些字段</span>
<span class="line">create table 表名</span>
<span class="line">select id,au_name</span>
<span class="line">from author</span>
<span class="line">where 1=2;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见的数据类型" tabindex="-1"><a class="header-anchor" href="#常见的数据类型"><span>常见的数据类型</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">数值型:</span>
<span class="line">		整数</span>
<span class="line">		小数:</span>
<span class="line">				定点数</span>
<span class="line">				浮点数</span>
<span class="line">字符型:</span>
<span class="line">		较短的文本:char、varchar</span>
<span class="line">		较长的文本:text、blob(较长的二进制数据)</span>
<span class="line">日期型</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="整型" tabindex="-1"><a class="header-anchor" href="#整型"><span>整型</span></a></h5><p><img src="`+b+'" alt="image-20210322080654033"></p><h5 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型"><span>浮点型</span></a></h5><p><img src="'+h+'" alt="image-20210322082651606"></p><p><img src="'+g+'" alt="image-20210322083530742"></p><h5 id="字符型" tabindex="-1"><a class="header-anchor" href="#字符型"><span>字符型</span></a></h5><p><img src="'+x+'" alt="image-20210322084308405"></p><h5 id="日期型" tabindex="-1"><a class="header-anchor" href="#日期型"><span>日期型</span></a></h5><p><img src="'+f+`" alt="image-20210322084902384"></p><h4 id="常见约束" tabindex="-1"><a class="header-anchor" href="#常见约束"><span>常见约束</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create table 表名(</span>
<span class="line">	字段名 字段类型 约束</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+q+'" alt="image-20210322094603177"></p><p><img src="'+k+`" alt="image-20210322094630548"></p><h5 id="创建表时添加约束" tabindex="-1"><a class="header-anchor" href="#创建表时添加约束"><span>创建表时添加约束</span></a></h5><blockquote><p>直接在字段名和类型后面追加 约束类型即可</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create table stuinfo(</span>
<span class="line">		id INT PRIMARY KEY,</span>
<span class="line">    	stuName VARCHAR() NOT NULL,</span>
<span class="line">    	gender CHAR(1) CHECK(gender=&#39;男&#39; OR gender=&#39;女&#39;),检查</span>
<span class="line">    	seat INT UNIQUE,#唯一</span>
<span class="line">    	age INT DEFAULT 18,#默认约束</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="添加表级约束" tabindex="-1"><a class="header-anchor" href="#添加表级约束"><span>添加表级约束</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#表级约束加在最后</span>
<span class="line">create table stuinfo(</span>
<span class="line">		id INT ,</span>
<span class="line">    	stuName VARCHAR(),</span>
<span class="line">    	gender CHAR(1),</span>
<span class="line">    	seat INT ,</span>
<span class="line">    	age INT,</span>
<span class="line">        CONSTRAINT A PRIMARY KEY(id), #id约束</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>主键和唯一的对比</strong></p></blockquote><p><img src="`+y+'" alt="image-20210322145506748"></p><blockquote><p><strong>外键的特点</strong></p></blockquote><ol><li>要求在从表设置外键关系</li><li>从表的外键列的类型和主表的关联列的类型要求一致或兼容，名称无要求</li><li>主表的关联列必须时一个key(一般是主键或者唯一)</li><li>插入数据时，先插入主表，再插入从表，删数据时，先删从表，再删主表</li></ol><h5 id="修改表时添加约束" tabindex="-1"><a class="header-anchor" href="#修改表时添加约束"><span>修改表时添加约束</span></a></h5><p><img src="'+j+`" alt="image-20210322151405621"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#添加非空约束</span>
<span class="line">ALTER TABLE stuinfo MODIFY COLUMN stuname VARCHAR(20) NOT NULL;</span>
<span class="line">#添加默认约束</span>
<span class="line">ALTER TABLE stuinfo MODIFY COLUMN age INT DEFAULT 18;</span>
<span class="line">#添加主键</span>
<span class="line">#①列级约束</span>
<span class="line">ALTER TABLE stuinfo MODIFY COLUMN id INT PRIMARY KEY;</span>
<span class="line">#②表级约束</span>
<span class="line">ALTER TABLE stuinfo ADD PRIMARY KEY(id);</span>
<span class="line">#添加唯一</span>
<span class="line">#①列级约束</span>
<span class="line">ALTER TABLE stuinfo MODIFY COLUMN seat INT UNIQUE;</span>
<span class="line">#②表级约束</span>
<span class="line">ALTER TABLE stuinfo ADD UNIQUE(seat);</span>
<span class="line">#添加外键</span>
<span class="line">ALTER TABLE stuinfo ADD FOREIGN KEY(majorid) REFERENCES major(id);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修改表时删除约束" tabindex="-1"><a class="header-anchor" href="#修改表时删除约束"><span>修改表时删除约束</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#删除非空约束</span>
<span class="line">ALTER TABLE stuinfo MODIFY COLUMN stuname VARCHAR(20) NULL;</span>
<span class="line">#删除默认约束</span>
<span class="line">ALTER TABLE stuinfo MODIFY COLUMN age INT ;</span>
<span class="line">#删除主键</span>
<span class="line">ALTER TABLE stuinfo DROP PRIMARY KEY;</span>
<span class="line">#删除唯一</span>
<span class="line">ALTER TABLE stuinfo DROP INDEX seat;</span>
<span class="line">#删除外键</span>
<span class="line">ALTER TABLE stuinfo DROP FOREIGN KEY majorid;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="标识列" tabindex="-1"><a class="header-anchor" href="#标识列"><span>标识列</span></a></h4><h5 id="创建表时设置标识列" tabindex="-1"><a class="header-anchor" href="#创建表时设置标识列"><span>创建表时设置标识列</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE TABLE 表名(</span>
<span class="line">		id INT PRIMARY KEY AUTO_INCREMENT,#添加表示列</span>
<span class="line">		NAME VARCHAR(20)</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+_+`" alt="image-20210322153228392"></p><h5 id="修改表时设置标识列" tabindex="-1"><a class="header-anchor" href="#修改表时设置标识列"><span>修改表时设置标识列</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER TABLE tab_identity MODIFY COLUMN id INT PRIMARY KEY AUTO_INCREMENT;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="修改表时删除标识列" tabindex="-1"><a class="header-anchor" href="#修改表时删除标识列"><span>修改表时删除标识列</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER TABLE tab_identity MODIFY COLUMN id INT ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="tcl语言-transaction-事务控制语言" tabindex="-1"><a class="header-anchor" href="#tcl语言-transaction-事务控制语言"><span>TCL语言(Transaction 事务控制语言)</span></a></h4><p><img src="`+A+`" alt="image-20210322155528199"></p><h5 id="事务的创建" tabindex="-1"><a class="header-anchor" href="#事务的创建"><span>事务的创建</span></a></h5><blockquote><p><strong>隐式事务</strong></p></blockquote><p>事务没有明显的开始和结束标记</p><p>比如：insert update delete语句</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">delete from 表 where id = 1;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>显示事务</strong></p></blockquote><p>事务具有明显的开启和结束标记</p><blockquote><p>**前提：**必须先设置自动提交功能为禁用 set autocommit=0;</p></blockquote><p>步骤1：开启事务</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">set autocommit=0;</span>
<span class="line">start transaction; #可选的</span>
<span class="line"># 步骤2：编写事务中的SQL语句(select insert update delete)</span>
<span class="line"># 步骤3：结束事务</span>
<span class="line">commit; #提交事务</span>
<span class="line">rollback; #回滚事务</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>例子：</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#开启事务的语句：</span>
<span class="line">update 表 set zs的余额=500 where name=&#39;zs&#39;</span>
<span class="line">#结束事务的语句：</span>
<span class="line">update 表 set gx的余额=1500 where name=&#39;gx&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="事务的隔离级别" tabindex="-1"><a class="header-anchor" href="#事务的隔离级别"><span>事务的隔离级别</span></a></h5><blockquote><p><strong>事务的隔离级别</strong></p></blockquote><p><img src="`+E+`" alt="image-20210323075734400"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">read uncommitted; # 出现脏读、幻读、不可重复读</span>
<span class="line">read committed; # 避免出现脏读、出现幻读和不可重复读</span>
<span class="line">repeatable read; # 避免脏读、幻读  但会出现幻读</span>
<span class="line">serializable; # 避免出现脏读、幻读、不可重复读</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">savepoint 节点名; 设置保存点</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>用法:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">set autocommit=0;</span>
<span class="line">start transaction;</span>
<span class="line">delete from account where id=25;</span>
<span class="line">savepoint a; #设置保存点</span>
<span class="line">delete from account where id=28;</span>
<span class="line">rollback a;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MySQL中默认 从第三个隔离级别repeatable read</p></blockquote><p><img src="`+w+'" alt="image-20210322200443886"></p><p><img src="'+T+`" alt="image-20210322200621701"></p><h4 id="视图" tabindex="-1"><a class="header-anchor" href="#视图"><span>视图</span></a></h4><h5 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图"><span>创建视图</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create view 视图名</span>
<span class="line">as</span>
<span class="line"># 查询语句;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="视图的修改" tabindex="-1"><a class="header-anchor" href="#视图的修改"><span>视图的修改</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#方法一</span>
<span class="line">create or replace view 视图名</span>
<span class="line">as</span>
<span class="line">查询语句;</span>
<span class="line">#方法二</span>
<span class="line">alter view 视图名</span>
<span class="line">as</span>
<span class="line">查询语句;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图"><span>删除视图</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">drop view 视图名，视图名，...;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="查看视图" tabindex="-1"><a class="header-anchor" href="#查看视图"><span>查看视图</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">desc 视图名;</span>
<span class="line">show create view 视图名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="视图的更新" tabindex="-1"><a class="header-anchor" href="#视图的更新"><span>视图的更新</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create or replace view 视图名;</span>
<span class="line">as</span>
<span class="line">select last_name,email,salary*12*(1+ifnull(commission_pct,0)) &quot;annual salary&quot;</span>
<span class="line">from employees;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+L+`" alt="image-20210323102757046"></p><h4 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h4><h5 id="系统变量" tabindex="-1"><a class="header-anchor" href="#系统变量"><span>系统变量</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#查看所有的系统变量</span>
<span class="line">show global| [session] variables;</span>
<span class="line">#查看满足条件的部分系统变量</span>
<span class="line">show global| [session] variables like &#39;%char%&#39;;</span>
<span class="line">#查看指定的某个系统变量的值</span>
<span class="line">select @@global| [session].系统变量名;</span>
<span class="line">#为某个系统变量赋值</span>
<span class="line">1. set global| [session] 系统变量名=值;</span>
<span class="line">2. set @@global| [session].系统变量名=值;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="会话变量" tabindex="-1"><a class="header-anchor" href="#会话变量"><span>会话变量</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#查看所有的会话变量</span>
<span class="line">show session variables;</span>
<span class="line">#查看满足条件的部分会话变量</span>
<span class="line">show [session] variables like &#39;%char%&#39;;</span>
<span class="line">#查看指定的某个会话变量的值</span>
<span class="line">select @@session.会话变量名;</span>
<span class="line">select @@会话变量名</span>
<span class="line">#为某个会话变量赋值</span>
<span class="line">1. set session 会话变量名=值;</span>
<span class="line">2. set @@session.会话变量名=值;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自定义变量" tabindex="-1"><a class="header-anchor" href="#自定义变量"><span>自定义变量</span></a></h5><blockquote><p><strong>用户变量</strong></p><p>赋值的操作符：=或:=</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 声明并初始化</span>
<span class="line">set @用户变量名=值;或</span>
<span class="line">set @用户变量名:=值;或</span>
<span class="line">set @用户变量名:=值;</span>
<span class="line"># 赋值</span>
<span class="line">1.通过set或select</span>
<span class="line">set @用户变量名=值;或</span>
<span class="line">set @用户变量名:=值;或</span>
<span class="line">select @用户变量名:=值;</span>
<span class="line"></span>
<span class="line">2.通过select into</span>
<span class="line">select 字段 into 变量名</span>
<span class="line">from 表;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量"><span>局部变量</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 声明</span>
<span class="line">declare 变量名 类型;</span>
<span class="line">declare 变量名 类型 default 值;</span>
<span class="line"># 赋值</span>
<span class="line">1.通过set或select</span>
<span class="line">set 用户变量名=值;或</span>
<span class="line">set 用户变量名:=值;或</span>
<span class="line">select @用户变量名:=值;</span>
<span class="line"></span>
<span class="line">2.通过select into</span>
<span class="line">select 字段 into 变量名</span>
<span class="line">from 表;</span>
<span class="line"># 使用</span>
<span class="line">select 局部变量名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="储存过程语法" tabindex="-1"><a class="header-anchor" href="#储存过程语法"><span>储存过程语法</span></a></h4><h5 id="空参列表存储过程" tabindex="-1"><a class="header-anchor" href="#空参列表存储过程"><span>空参列表存储过程</span></a></h5><blockquote><p>结束标记 <strong>$</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 创建语法</span>
<span class="line">create procedure 储存过程名(参数列表)</span>
<span class="line">begin</span>
<span class="line">		存储过程体(一组合法的SQL语句)</span>
<span class="line">end $</span>
<span class="line"># 调用语法</span>
<span class="line">call 存储过程名(实参列表);</span>
<span class="line"># 查看</span>
<span class="line">show create procedure 存储过程名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>参数模式</strong>：in out inout</p></blockquote><h5 id="删除存储过程" tabindex="-1"><a class="header-anchor" href="#删除存储过程"><span>删除存储过程</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 语法：</span>
<span class="line">drop procedure 存储过程名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h4><blockquote><p><strong>创建语法</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create function 函数名(参数列表) returns 返回类型</span>
<span class="line">begin</span>
<span class="line">		函数体</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>使用delimiter语句设置结束标记 delimiter $;</strong></p><p>调用语法</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select 函数名(参数列表)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="查看函数" tabindex="-1"><a class="header-anchor" href="#查看函数"><span>查看函数</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">show create function 函数名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="删除函数" tabindex="-1"><a class="header-anchor" href="#删除函数"><span>删除函数</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">drop function 函数名;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="流程控制结构" tabindex="-1"><a class="header-anchor" href="#流程控制结构"><span>流程控制结构</span></a></h4><p><img src="`+R+`" alt="image-20210324090824045"></p><h5 id="分支结构" tabindex="-1"><a class="header-anchor" href="#分支结构"><span>分支结构</span></a></h5><blockquote><p>if函数 功能：实现简单的双分支</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 语法</span>
<span class="line">if(表达式1，表达式2，表达式3)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>case结构</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">case 变量|表达式|字段</span>
<span class="line">when 要判断的值 then 返回的值1</span>
<span class="line">when 要判断的值 then 返回的值2</span>
<span class="line">...</span>
<span class="line">else 要返回的值n</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>if结构 功能：实现多重分支</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">if 条件1 then 语句1;</span>
<span class="line">elseif 条件2 then 语句2;</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[else 语句n;]</p><p>end if; # 应用场合：在begin end中</p><h4 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构"><span>循环结构</span></a></h4><blockquote><p>分类</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">while loop repeat </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>循环控制</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">iterate类似于 continue 继续，结束本次循环，继续下一次</span>
<span class="line">leave类似于 break 跳出，结束当前所在的循环</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># while</span>
<span class="line">while 循环条件 do</span>
<span class="line">		循环体;</span>
<span class="line">end while [标签];</span>
<span class="line">#loop</span>
<span class="line">[标签] loop</span>
<span class="line">		循环体;</span>
<span class="line">end loop [标签];</span>
<span class="line">#repeat</span>
<span class="line">[标签]repeat</span>
<span class="line">		循环体;</span>
<span class="line">until 结束循环的条件</span>
<span class="line">end repeat [标签];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+N+'" alt="image-20210324094907951"></p>',239)]))}const O=e(I,[["render",M],["__file","index.html.vue"]]),B=JSON.parse('{"path":"/blogs/post-doc/2021/03/2021-03-25-mysqlzongjie/","title":"Mysql总结","lang":"en-US","frontmatter":{"title":"Mysql总结","date":"2021-03-25","categories":["mysql","blog"],"tags":["mysql","mysql命令","mysql基础"],"coverImage":"2.jpg"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/post-doc/2021/03/2021-03-25-mysql总结/index.md"}');export{O as comp,B as data};
