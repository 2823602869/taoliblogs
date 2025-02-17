import{_ as e,c as s,a,o as i}from"./app-D0tMrQXM.js";const l="/taoliblogs/assets/image-1-IE9hByZj.png",t={};function r(c,n){return i(),s("div",null,n[0]||(n[0]=[a(`<p>java.util.Scanner 是 Java5 的新特征，我们可以通过 Scanner 类来获取用户的输入。</p><p><strong>Scanner用法：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Scanner demo = new Scanner(System.in);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Scanner实例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/*</span>
<span class="line">   *</span>
<span class="line">   * 从控制台输入</span>
<span class="line">   *</span>
<span class="line"> **/</span>
<span class="line"></span>
<span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">public class Scannertest {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Scanner scr = new Scanner(System.in);</span>
<span class="line">        System.out.println(&quot;请输入你的姓名：&quot;);</span>
<span class="line">        String name = scr.next();</span>
<span class="line">        System.out.println(&quot;请输入你的年龄：&quot;);</span>
<span class="line">        int age = scr.nextInt();</span>
<span class="line">        System.out.println(&quot;你的名字是：&quot;+name);</span>
<span class="line">        System.out.println(&quot;你的年龄是：&quot;+age);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果：</strong></p><p><img src="`+l+'" alt=""></p><h3 id="next-与-nextline-区别" tabindex="-1"><a class="header-anchor" href="#next-与-nextline-区别"><span>next() 与 nextLine() 区别</span></a></h3><p>next():</p><ul><li>1、一定要读取到有效字符后才可以结束输入。</li><li>2、对输入有效字符之前遇到的空白，next() 方法会自动将其去掉。</li><li>3、只有输入有效字符后才将其后面输入的空白作为分隔符或者结束符。</li><li>next() 不能得到带有空格的字符串。</li></ul><p>nextLine()：</p><ul><li>1、以Enter为结束符,也就是说 nextLine()方法返回的是输入回车之前的所有字符。</li><li>2、可以获得空白。</li></ul>',12)]))}const p=e(t,[["render",r],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/blogs/post-doc/2020/05/2020-05-11-java-scannerlei/","title":"java Scanner类","lang":"en-US","frontmatter":{"title":"java Scanner类","date":"2020-05-11","categories":["java","blog"],"tags":["java","java基础","java学习","java学习框架"],"coverImage":"Scanner.png"},"headers":[{"level":3,"title":"next() 与 nextLine() 区别","slug":"next-与-nextline-区别","link":"#next-与-nextline-区别","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/post-doc/2020/05/2020-05-11-java-scanner类/index.md"}');export{p as comp,v as data};
