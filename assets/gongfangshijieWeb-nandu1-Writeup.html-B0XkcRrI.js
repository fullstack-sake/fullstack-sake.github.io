import{_ as t,r as p,o as i,c as l,d as s,e,a as o,b as n}from"./app-WuGmklff.js";const c="/assets/image-20221120212845367-UVVfbPic.webp",r="/assets/image-20220827001613505-GVBJnJxo.webp",d="/assets/image-20220827002012489-CL3xRh8m.webp",u="/assets/image-20220827002618959-qRU_dLd_.webp",h="/assets/image-20220827003343093-CL2ZkyMl.webp",g="/assets/image-20220827004000626-BxV6e6Oj.webp",b="/assets/image-20220827004443997-DAYIfy4j.webp",m="/assets/image-20220827092928940-DPgMLV6l.webp",v="/assets/image-20220827093025700-B8KE32xo.webp",k="/assets/image-20220827093230156-BWiPcKkF.webp",f="/assets/image-20220827093445536-MaartfHn.webp",_="/assets/image-20220827093651347-ndCqkByb.webp",w="/assets/image-20220827093818423-DGkOZAuC.webp",x="/assets/image-20220827093947345-CN2xxt_I.webp",y="/assets/image-20220827094819876-CF91_S3H.webp",q="/assets/image-20220827095527676-D9lNGeTf.webp",W="/assets/image-20220827095624544-DAJ2c1v-.webp",T="/assets/image-20220827095719055-CDWHyGHo.webp",C="/assets/image-20220827100525996-tyGw_Ian.webp",$="/assets/image-20220827100803181-Com-KaIN.webp",E="/assets/image-20220827102159371-Bd_kuSFq.webp",N={},j=n('<blockquote><p><strong>之前就把攻防世界Web难度1刷完了✅，今天打开发现难度1加了几题，补个WP水水💦博客</strong></p></blockquote><h2 id="file-include" tabindex="-1"><a class="header-anchor" href="#file-include"><span>file_include</span></a></h2><p>打开题目发现是个文件包含的题目，使用php://filter读文件发现存在过滤，通过控制变量得出过滤了<code>base64</code>，<code>read</code>这样的关键词</p><p><img src="'+c+`" alt="image-20221120212845367"></p><p>这里考虑使用<code>convert.iconv.*</code>转换过滤器，用法是</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">convert.iconv.<span class="token operator">&lt;</span>input-encoding<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>output-encoding<span class="token operator">&gt;</span> </span>
<span class="line">convert.iconv.<span class="token operator">&lt;</span>input-encoding<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>output-encoding<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),G=s("code",null,"<input-encoding>和<output-encoding>",-1),L={href:"https://www.php.net/manual/zh/mbstring.supported-encodings.php",target:"_blank",rel:"noopener noreferrer"},M=n(`<p>这里我们使用UCS-4转为UCS-4BE</p><h2 id="fileclude" tabindex="-1"><a class="header-anchor" href="#fileclude"><span><strong>fileclude</strong></span></a></h2><p>题目页面直接给了源码：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line">WRONG WAY! <span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token keyword">include</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;flag.php&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;file1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;file2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$file1</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;file1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token variable">$file2</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;file2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$file1</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$file2</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$file2</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;hello ctf&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">include</span><span class="token punctuation">(</span><span class="token variable">$file1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">        <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;NONONO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>include($file1)</code>处存在文件包含漏洞，使用php伪协议来绕过:<code>?file1=php://filter/read=convert.base64-encode/resource=flag.php</code></p><p>file2被放入了<code>file_get_contents</code>函数中，并要求返回值为hello ctf，我们可以使用<code>php://input</code>来绕过，同时POST传入hello ctf。或者是使用data://数据流封装器，以传递相应格式的数据。通常可以用来执行PHP代码。一般需要用到base64编码传输，所以这里我们可以：<code>file2=data://text/plain;base64,aGVsbG8gY3Rm</code>或者是<code>file2=data://text/plain,hello ctf</code></p><p>最终构造payload：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">?file1=php://filter/read=convert.base64-encode/resource=flag.php&amp;file2=data://text/plain,hello ctf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="fileinclude" tabindex="-1"><a class="header-anchor" href="#fileinclude"><span><strong>fileinclude</strong></span></a></h2><p>查看源码：</p><div class="language-php+HTML line-numbers-mode" data-highlighter="prismjs" data-ext="php+HTML" data-title="php+HTML"><pre class="language-php+HTML"><code><span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;&lt;/head&gt;</span>
<span class="line"></span>
<span class="line">&lt;br /&gt;</span>
<span class="line">&lt;b&gt;Notice&lt;/b&gt;:  Undefined index: language in &lt;b&gt;/var/www/html/index.php&lt;/b&gt; on line &lt;b&gt;9&lt;/b&gt;&lt;br /&gt;</span>
<span class="line">Please choose the language you want : English or Chinese</span>
<span class="line">&lt;h1&gt;Hi,EveryOne,The flag is in flag.php&lt;/h1&gt;&lt;html&gt;</span>
<span class="line">&lt;head&gt;&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;&lt;/head&gt;</span>
<span class="line"></span>
<span class="line">&lt;?php</span>
<span class="line">if( !ini_get(&#39;display_errors&#39;) ) {</span>
<span class="line">  ini_set(&#39;display_errors&#39;, &#39;On&#39;);</span>
<span class="line">  }</span>
<span class="line">error_reporting(E_ALL);</span>
<span class="line">$lan = $_COOKIE[&#39;language&#39;];</span>
<span class="line">if(!$lan)</span>
<span class="line">{</span>
<span class="line">	@setcookie(&quot;language&quot;,&quot;english&quot;);</span>
<span class="line">	@include(&quot;english.php&quot;);</span>
<span class="line">}</span>
<span class="line">else</span>
<span class="line">{</span>
<span class="line">	@include($lan.&quot;.php&quot;);</span>
<span class="line">}</span>
<span class="line">$x=file_get_contents(&#39;index.php&#39;);</span>
<span class="line">echo $x;</span>
<span class="line">?&gt;</span>
<span class="line">&lt;/html&gt;&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@include($lan.&quot;.php&quot;);</code>处存在文件包含漏洞，我们使php伪协议绕过，同时注意到变量lan的值来自于cookie，所以我们在cookie传入<code>language=php://filter/read=convert.base64-encode/resource=flag</code></p><h2 id="easyupload" tabindex="-1"><a class="header-anchor" href="#easyupload"><span><strong>easyupload</strong></span></a></h2><p>读题得知应考虑文件上传漏洞，利用fastcgi的.user.ini特性进行任意命令执行</p><p>这里需要绕过的点如下</p><ul><li>检查文件内容是否有php字符串——短标签绕过，例如<code>&lt;?=phpinfo();?&gt;</code></li><li>检查后缀中是否有htaccess或ph——上传.user.ini以及正常图片文件来进行getshell</li><li>检查文件头部信息——在文件头部添加一个图片的文件头，比如<code>GIF89a</code></li><li>文件MIME类型——修改上传时的Content-Type</li></ul><blockquote><p>.user.ini是php.ini的补充文件，当网页访问的时候就会自动查看当前目录下是否有.user.ini，然后将其补充进php.ini，并作为cgi的启动项。</p></blockquote><p>我们先创建一个.user.ini文件：</p><p><img src="`+r+'" alt="image-20220827001613505"></p><p>将其直接上传则会上传失败，显示“your filetype looks wicked”，这时我们将Content-Type改为image/png即可成功上传</p><p><img src="'+d+'" alt="image-20220827002012489"></p><p>接着我们上传php一句话，文件名改为in.webp</p><p><img src="'+u+'" alt="image-20220827002618959"></p><p>使用蚁剑连接即可访问目录打开flag</p><p><img src="'+h+'" alt="image-20220827003343093"></p><h2 id="inget" tabindex="-1"><a class="header-anchor" href="#inget"><span><strong>inget</strong></span></a></h2><p>题目提示输入id，尝试绕过，从而想到使用sql注入</p><p>payload：<code>?id=1&#39;or&#39;1</code></p><h2 id="baby-web" tabindex="-1"><a class="header-anchor" href="#baby-web"><span>baby_web</span></a></h2><p>访问/index.php，查看响应头</p><p><img src="'+g+'" alt="image-20220827004000626"></p><h2 id="simple-php" tabindex="-1"><a class="header-anchor" href="#simple-php"><span>simple_php</span></a></h2><p>php中有两种比较符号：</p><p>=== 会同时比较字符串的值和类型</p><p>== 会先将字符串换成相同类型，再作比较，属于弱类型比较</p><p><img src="'+b+'" alt="image-20220827004443997"></p><p>payload：</p><p><code>?a=a&amp;b=1234b</code></p><h2 id="weak-auth" tabindex="-1"><a class="header-anchor" href="#weak-auth"><span>weak_auth</span></a></h2><p>根据题意，应该是考擦弱密码相关，直接开burp爆破</p><p><img src="'+m+'" alt="image-20220827092928940"></p><p><img src="'+v+'" alt="image-20220827093025700"></p><p><img src="'+k+'" alt="image-20220827093230156"></p><p><img src="'+f+'" alt="image-20220827093445536"></p><p>得出用户名为admin，密码为123456</p><h2 id="disabled-button" tabindex="-1"><a class="header-anchor" href="#disabled-button"><span>disabled_button</span></a></h2><p>删除<code>disabled=&quot;&quot;</code>即可</p><p><img src="'+_+'" alt="image-20220827093651347"></p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>cookie</span></a></h2><p>直接看cookie，访问/cookie.php再看响应头</p><p><img src="'+w+'" alt="image-20220827093818423"></p><p><img src="'+x+'" alt="image-20220827093947345"></p><h2 id="backup" tabindex="-1"><a class="header-anchor" href="#backup"><span>backup</span></a></h2><p>访问/index.php.bak，再打开查看即可</p><h2 id="robots" tabindex="-1"><a class="header-anchor" href="#robots"><span>robots</span></a></h2><p>访问/robots.txt，再访问f1ag_1s_h3re.php即可</p><h2 id="get-post" tabindex="-1"><a class="header-anchor" href="#get-post"><span>get_post</span></a></h2><p>get提交a=1，post提交b=2</p><p><img src="'+y+'" alt="image-20220827094819876"></p><h2 id="view-source" tabindex="-1"><a class="header-anchor" href="#view-source"><span>view_source</span></a></h2><p>右键查看不了源代码，可以在网址前加view-source:再访问查看源代码，也可以ctrl+s保存网页到本地查看源代码</p><h2 id="ics-06" tabindex="-1"><a class="header-anchor" href="#ics-06"><span>ics-06</span></a></h2><p>注意到报表中心网址有个id参数，直接开burp爆破</p><p><img src="'+q+'" alt="image-20220827095527676"></p><p><img src="'+W+'" alt="image-20220827095624544"></p><p><img src="'+T+'" alt="image-20220827095719055"></p><p><img src="'+C+`" alt="image-20220827100525996"></p><p>请求参数id=2333即可</p><h2 id="unserialize3" tabindex="-1"><a class="header-anchor" href="#unserialize3"><span>unserialize3</span></a></h2><p>public属性序列化后格式为：数据类型:属性名长度:“属性名”;数据类型:属性值长度:“属性值”</p><p>本题目中，只存在一个变量，正常情况下序列化后结果为</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">O:4:&quot;xctf&quot;:1:{s:4:&quot;flag&quot;;s:3:&quot;111&quot;;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="`+$+`" alt="image-20220827100803181"></p><p>而wakeup()漏洞就是与整个属性个数值有关，当序列化字符串表示对象属性个数的值大于真实个数的属性时就会跳过wakeup的执行。</p><p>当我们将上述的序列化的字符串中的对象属性个数修改为大于1的数字，变为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">O:4:&quot;xctf&quot;:2:{s:4:&quot;flag&quot;;s:3:&quot;111&quot;;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再作为code参数请求即可</p><h2 id="php2" tabindex="-1"><a class="header-anchor" href="#php2"><span>php2</span></a></h2><p>phps文件就是php的源代码文件，通常用于提供给用户（访问者）查看php代码，因为用户无法直接通过Web浏览器看到php文件的内容，所以需要用phps文件代替。其实，只要不用php等已经在服务器中注册过的MIME类型为文件即可，但为了国际通用，所以才用了phps文件类型。它的MIME类型为：text/html, application/x-httpd-php-source, application/x-httpd-php3-source。</p><p>这题我们访问/index.phps，再查看源代码：</p><p><img src="`+E+'" alt="image-20220827102159371"></p><p>通过代码审计知道，要求传入的id参数url解码后为admin，则我们进行二次url编码：</p><p>admin二次编码为<code>%2561%2564%256d%2569%256e</code></p><p>payload：<code>?id=%2561%2564%256d%2569%256e</code></p><h2 id="training-www-robots" tabindex="-1"><a class="header-anchor" href="#training-www-robots"><span>Training-WWW-Robots</span></a></h2><p>访问/robots.txt，再访问/fl0g.php</p>',86);function O(P,I){const a=p("ExternalLinkIcon");return i(),l("div",null,[j,s("p",null,[G,e(" 就是编码方式，详细可以参见php的"),s("a",L,[e("编码表"),o(a)])]),M])}const H=t(N,[["render",O],["__file","gongfangshijieWeb-nandu1-Writeup.html.vue"]]),V=JSON.parse(`{"path":"/blogs/jishu/gongfangshijieWeb-nandu1-Writeup.html","title":"攻防世界Web-难度1-Writeup","lang":"zh-CN","frontmatter":{"title":"攻防世界Web-难度1-Writeup","katex":true,"date":"2022/10/12","tags":["Web"],"categories":["技术"],"layout":"GlobalLayout","description":"之前就把攻防世界Web难度1刷完了✅，今天打开发现难度1加了几题，补个WP水水💦博客 file_include 打开题目发现是个文件包含的题目，使用php://filter读文件发现存在过滤，通过控制变量得出过滤了base64，read这样的关键词 image-20221120212845367 这里考虑使用convert.iconv.*转换过滤器，...","head":[["meta",{"property":"og:url","content":"https://sakee.cn/blogs/jishu/gongfangshijieweb-nandu1-writeup.html"}],["meta",{"property":"og:site_name","content":"sake's blog"}],["meta",{"property":"og:title","content":"攻防世界Web-难度1-Writeup"}],["meta",{"property":"og:description","content":"之前就把攻防世界Web难度1刷完了✅，今天打开发现难度1加了几题，补个WP水水💦博客 file_include 打开题目发现是个文件包含的题目，使用php://filter读文件发现存在过滤，通过控制变量得出过滤了base64，read这样的关键词 image-20221120212845367 这里考虑使用convert.iconv.*转换过滤器，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"fullstacksake"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:published_time","content":"2022-10-11T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"攻防世界Web-难度1-Writeup\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-11T16:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"fullstacksake\\",\\"email\\":\\"fullstacksake@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"file_include","slug":"file-include","link":"#file-include","children":[]},{"level":2,"title":"fileclude","slug":"fileclude","link":"#fileclude","children":[]},{"level":2,"title":"fileinclude","slug":"fileinclude","link":"#fileinclude","children":[]},{"level":2,"title":"easyupload","slug":"easyupload","link":"#easyupload","children":[]},{"level":2,"title":"inget","slug":"inget","link":"#inget","children":[]},{"level":2,"title":"baby_web","slug":"baby-web","link":"#baby-web","children":[]},{"level":2,"title":"simple_php","slug":"simple-php","link":"#simple-php","children":[]},{"level":2,"title":"weak_auth","slug":"weak-auth","link":"#weak-auth","children":[]},{"level":2,"title":"disabled_button","slug":"disabled-button","link":"#disabled-button","children":[]},{"level":2,"title":"cookie","slug":"cookie","link":"#cookie","children":[]},{"level":2,"title":"backup","slug":"backup","link":"#backup","children":[]},{"level":2,"title":"robots","slug":"robots","link":"#robots","children":[]},{"level":2,"title":"get_post","slug":"get-post","link":"#get-post","children":[]},{"level":2,"title":"view_source","slug":"view-source","link":"#view-source","children":[]},{"level":2,"title":"ics-06","slug":"ics-06","link":"#ics-06","children":[]},{"level":2,"title":"unserialize3","slug":"unserialize3","link":"#unserialize3","children":[]},{"level":2,"title":"php2","slug":"php2","link":"#php2","children":[]},{"level":2,"title":"Training-WWW-Robots","slug":"training-www-robots","link":"#training-www-robots","children":[]}],"git":{},"filePathRelative":"blogs/技术/攻防世界Web-难度1-Writeup.md","autoDesc":true}`);export{H as comp,V as data};
