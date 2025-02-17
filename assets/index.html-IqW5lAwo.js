import{_ as s,c as a,a as e,o as l}from"./app-CZypL58b.js";const i={};function t(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>继承是面向对象的三大特征之一. <br> 也是实现软件复用的重要手段. <br> Java继承具有单继承的特点, 每个子类只有一个直接父类.</p><hr><h2 id="继承的概念" tabindex="-1"><a class="header-anchor" href="#继承的概念"><span>继承的概念</span></a></h2><p>继承是java面向对象编程技术的基础。</p><p>继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。</p><p><strong>例子：</strong></p><p>兔子和羊属于食草动物类，狮子和豹属于食肉动物类。</p><p>食草动物和食肉动物又是属于动物类。</p><p>所以继承需要符合的关系是：is-a，父类更通用，子类更具体。</p><p>虽然食草动物和食肉动物都是属于动物，但是两者的属性和行为上有差别，所以子类会具有父类的一般特性也会具有自身的特性。</p><h3 id="类的继承格式" tabindex="-1"><a class="header-anchor" href="#类的继承格式"><span>类的继承格式</span></a></h3><p>在 Java 中通过 extends 关键字可以申明一个类是从另外一个类继承而来的，一般形式如下：</p><h2 id="类的继承格式-1" tabindex="-1"><a class="header-anchor" href="#类的继承格式-1"><span>类的继承格式</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">class 父类 {</span>
<span class="line"> } </span>
<span class="line">class 子类 extends 父类 { </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么需要继承" tabindex="-1"><a class="header-anchor" href="#为什么需要继承"><span>为什么需要继承</span></a></h3><p>接下来我们通过实例来说明这个需求。</p><ul><li>人：属性（姓名，性别），方法（吃，睡，自我介绍）</li><li>狗：属性（姓名），方法（吃，跑，跳）</li></ul><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">class Teacher{</span>
<span class="line">	</span>
<span class="line">	String name;</span>
<span class="line">	</span>
<span class="line">	int age;</span>
<span class="line">	</span>
<span class="line">	String type;</span>
<span class="line">	</span>
<span class="line">	public void sleep(){</span>
<span class="line">		System.out.println(name+&quot;在睡觉&quot;);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class JavaTeacher extends Teacher{</span>
<span class="line"></span>
<span class="line">	public void teachJava(){</span>
<span class="line">		System.out.println(name+&quot;在教java&quot;);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class PHPTeacher extends Teacher{</span>
<span class="line">	</span>
<span class="line">	public void teachPHP(){</span>
<span class="line">		System.out.println(name+&quot;在教PHP&quot;);</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">public class TestTeacher1{</span>
<span class="line">	</span>
<span class="line">	public static void main(String[] args){</span>
<span class="line">		JavaTeacher jt = new JavaTeacher();</span>
<span class="line">		jt.name = &quot;桃李&quot;;</span>
<span class="line">		jt.age = 18;</span>
<span class="line">		jt.type = &quot;java&quot;;</span>
<span class="line">		jt.teachJava();</span>
<span class="line">		jt.sleep();</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		PHPTeacher pt = new PHPTeacher();</span>
<span class="line">		pt.name = &quot;龙哥&quot;;</span>
<span class="line">		pt.age = 18;</span>
<span class="line">		pt.type = &quot;php&quot;;</span>
<span class="line">		pt.teachPHP();</span>
<span class="line">		pt.sleep();</span>
<span class="line"></span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类的继承的特点" tabindex="-1"><a class="header-anchor" href="#类的继承的特点"><span>类的继承的特点</span></a></h2><ol><li>如果父类中包含了某些类中的共同的属性和行为，我们可以使用继承来设计程序。</li><li>子类会把父类所有的属性和方法继承下来（暂时不考虑final）</li><li>子类使用extends关键字继承父类的共同属性以外，子类还可以有自己特有的属性或者方法。</li><li>父类更通用，子类更具体。</li><li>子类只能获得父类中的非private的属性，如果想要继承就得提供公共的set和get的方法。 私有的方法 是无法继承下来的</li><li>java中只能做单继承</li></ol>`,22)]))}const d=s(i,[["render",t],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/blogs/post-doc/2020/05/2020-05-15-javajicheng/","title":"java继承","lang":"en-US","frontmatter":{"title":"java继承","date":"2020-05-15","categories":["java","blog"],"tags":["java","java基础","java学习","java学习框架"],"coverImage":"jc.png"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"继承的概念","slug":"继承的概念","link":"#继承的概念","children":[{"level":3,"title":"类的继承格式","slug":"类的继承格式","link":"#类的继承格式","children":[]}]},{"level":2,"title":"类的继承格式","slug":"类的继承格式-1","link":"#类的继承格式-1","children":[{"level":3,"title":"为什么需要继承","slug":"为什么需要继承","link":"#为什么需要继承","children":[]}]},{"level":2,"title":"实例：","slug":"实例","link":"#实例","children":[]},{"level":2,"title":"类的继承的特点","slug":"类的继承的特点","link":"#类的继承的特点","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/post-doc/2020/05/2020-05-15-java继承/index.md"}');export{d as comp,v as data};
