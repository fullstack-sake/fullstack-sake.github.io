import{_ as s,o as n,c as a,b as e}from"./app-WuGmklff.js";const l={},t=e(`<h2 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h2><p><code>Windows</code>会为<code>WSL2</code>创建<code>vhdx</code>后缀的磁盘镜像文件，但是只支持<strong>自动扩容</strong>，但是一般不会<strong>自动缩容</strong>。在<code>WSL2</code>内删除文件后<code>WSL2</code>磁盘空间不释放，占用很大的磁盘空间。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>首先清理<code>WSL2</code>的空间，一层层进去删除清理</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 查看最大占用空间的目录，当前为/</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-h</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;mnt*&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;proc*&quot;</span> <span class="token parameter variable">-d</span> <span class="token number">1</span> /</span>
<span class="line"><span class="token comment"># 查看当前目录占用</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-h</span> --max-depth<span class="token operator">=</span><span class="token number">1</span> </span>
<span class="line"><span class="token comment"># 查看当前目录占用，并按从大到小排序</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-h</span> --max-depth<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-hr</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>Windows</code>自带的工具清理</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 首先关闭正在运行的wsl2</span></span>
<span class="line">wsl <span class="token parameter variable">--shutdown</span></span>
<span class="line"><span class="token comment"># 打开diskpart</span></span>
<span class="line">diskpart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在新打开窗口运行命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">DISKPART<span class="token operator">&gt;</span> <span class="token keyword">select</span> vdisk <span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;F:\\Kali<span class="token entity" title="\\e">\\e</span>xt4.vhdx&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># DiskPart 已成功选择虚拟磁盘文件。</span></span>
<span class="line"></span>
<span class="line">DISKPART<span class="token operator">&gt;</span> attach vdisk <span class="token builtin class-name">readonly</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 100 百分比已完成</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># DiskPart 已成功连接虚拟磁盘文件。</span></span>
<span class="line"></span>
<span class="line">DISKPART<span class="token operator">&gt;</span> compact vdisk</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 100 百分比已完成</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># DiskPart 已成功压缩虚拟磁盘文件。</span></span>
<span class="line"></span>
<span class="line">DISKPART<span class="token operator">&gt;</span> detach vdisk</span>
<span class="line"></span>
<span class="line"><span class="token comment"># DiskPart 已成功分离虚拟磁盘文件。</span></span>
<span class="line"></span>
<span class="line">DISKPART<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果"><span>结果</span></a></h2><blockquote><p><code>WSL2</code>占用空间从 <strong>88.7 GB</strong> 降到 <strong>56.3 GB</strong></p></blockquote>`,11),i=[t];function p(c,o){return n(),a("div",null,i)}const d=s(l,[["render",p],["__file","WSL2-Dockershifangcipankongjian.html.vue"]]),m=JSON.parse(`{"path":"/blogs/zatan/WSL2-Dockershifangcipankongjian.html","title":"WSL2 Docker释放磁盘空间","lang":"zh-CN","frontmatter":{"title":"WSL2 Docker释放磁盘空间","katex":true,"date":"2024/01/20","tags":["Linux"],"categories":["杂谈"],"layout":"GlobalLayout","description":"问题分析 Windows会为WSL2创建vhdx后缀的磁盘镜像文件，但是只支持自动扩容，但是一般不会自动缩容。在WSL2内删除文件后WSL2磁盘空间不释放，占用很大的磁盘空间。 解决方案 首先清理WSL2的空间，一层层进去删除清理 使用Windows自带的工具清理 在新打开窗口运行命令 结果 WSL2占用空间从 88.7 GB 降到 56.3 GB","head":[["meta",{"property":"og:url","content":"https://sakee.cn/blogs/zatan/wsl2-dockershifangcipankongjian.html"}],["meta",{"property":"og:site_name","content":"sake's blog"}],["meta",{"property":"og:title","content":"WSL2 Docker释放磁盘空间"}],["meta",{"property":"og:description","content":"问题分析 Windows会为WSL2创建vhdx后缀的磁盘镜像文件，但是只支持自动扩容，但是一般不会自动缩容。在WSL2内删除文件后WSL2磁盘空间不释放，占用很大的磁盘空间。 解决方案 首先清理WSL2的空间，一层层进去删除清理 使用Windows自带的工具清理 在新打开窗口运行命令 结果 WSL2占用空间从 88.7 GB 降到 56.3 GB"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"fullstacksake"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2024-01-19T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WSL2 Docker释放磁盘空间\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-19T16:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"fullstacksake\\",\\"email\\":\\"fullstacksake@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"结果","slug":"结果","link":"#结果","children":[]}],"git":{},"filePathRelative":"blogs/杂谈/WSL2-Docker释放磁盘空间.md","autoDesc":true}`);export{d as comp,m as data};
