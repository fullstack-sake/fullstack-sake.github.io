import{_ as s,o as n,c as t,b as a}from"./app-WuGmklff.js";const e={},p=a(`<blockquote><p>本项目基于<strong>STM32F746</strong>实现，鸟叫声音分类作为一种常见的环境音分类任务，也非常适合用于<strong>嵌入式AI</strong>应用的探索，并且在生态研究、鸟类保护、生物多样性监测都具有重要的现实意义。通过将鸟叫声音分类算法和模型压缩到小型设备中，可以将这些功能带到更多的场景和应用中，例如将鸟叫声音分类技术应用于智能鸟窝监控系统、无人机巡航监测系统等领域，用于评估生态系统的健康状态以及监测气候变化，也可以可以对鸟类的分布情况、迁徙路径、栖息地利用等进行监测和研究。</p></blockquote><h1 id="数据集" tabindex="-1"><a class="header-anchor" href="#数据集"><span>数据集</span></a></h1><blockquote><p>https://xeno-canto.org/ 这是一个致力于分享来自世界各地的鸟声的网站</p></blockquote><h2 id="原始下载" tabindex="-1"><a class="header-anchor" href="#原始下载"><span>原始下载</span></a></h2><ul><li><p>大小: 51.4 GB(55,284,289,304字节)</p></li><li><p>占用空间: 51.5 GB(55,297,847,296字节)</p></li><li><p>包含: 6,507个文件</p></li><li><p>你可以通过本段Python代码下载原始数据集：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="训练集选择" tabindex="-1"><a class="header-anchor" href="#训练集选择"><span>训练集选择</span></a></h2><p>鸟类具有很高的种间差异，我们选择的是四川省内及其附近的8种鸟类进行训练。</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;Locustella&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;sp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chengi&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ssp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sichuan Bush Warbler&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;Certhia&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;sp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tianquanensis&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ssp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sichuan Treecreeper&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;Anser&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;sp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;albifrons&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ssp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontalis&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Greater White-fronted Goose&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;Tragopan&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;sp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;caboti&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ssp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Cabots Tragopan&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span>    </span>
<span class="line">    <span class="token property">&quot;Chrysolophus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;sp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;amherstiae&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ssp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Lady Amhersts Pheasant&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;Tetraogallus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;sp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;himalayensis&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ssp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;koslowi&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Himalayan Snowcock&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span>    </span>
<span class="line">    <span class="token property">&quot;Bambusicola&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;sp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;thoracicus&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ssp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Chinese Bamboo Partridge&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;Arborophila&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;sp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;brunneopectus&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;ssp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bar-backed Partridge&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据预处理" tabindex="-1"><a class="header-anchor" href="#数据预处理"><span>数据预处理</span></a></h2><p>先将数据分割为1000ms的训练样本，然后通过梅尔滤波器提取特征</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="神经网络训练" tabindex="-1"><a class="header-anchor" href="#神经网络训练"><span>神经网络训练</span></a></h2><p>神经网络结构</p><ul><li>Input layer (3,168 features)</li><li>Reshape layer (32 columns)</li><li>1D conv / pool layer (16 neurons, 3 kernel size, 1 layer)</li><li>Dropout (rate 0.3)</li><li>1D conv / pool layer (32 neurons, 5 kernel size, 1 layer)</li><li>Dropout (rate 0.3)</li><li>Flatten layer</li><li>Dense layer (64 neurons)</li><li>Dropout (rate 0.3)</li><li>Output layer (9 classes)</li></ul><p>训练效果</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Accuracy： 93.3%</span>
<span class="line">Loss： 0.51</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>混淆矩阵</p><table><thead><tr><th></th><th>Anser</th><th>Arborophila</th><th>Bambusicola</th><th>Certhia</th><th>Chrysolophus</th><th>Locustella</th><th>Tetraogallus</th><th>Tragopan</th><th>noise</th></tr></thead><tbody><tr><td>Anser</td><td><strong>100%</strong></td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td></tr><tr><td>Arborophila</td><td>2.2%</td><td><strong>92.4%</strong></td><td>0%</td><td>0%</td><td>1.1%</td><td>1.1%</td><td>0%</td><td>1.1%</td><td>2.2%</td></tr><tr><td>Bambusicola</td><td>4.8%</td><td>0%</td><td><strong>90.5%</strong></td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>4.8%</td></tr><tr><td>Certhia</td><td>0%</td><td>0%</td><td>0%</td><td><strong>88%</strong></td><td>4%</td><td>8%</td><td>0%</td><td>0%</td><td>0%</td></tr><tr><td>Chrysolophus</td><td>6.3%</td><td>2.1%</td><td>2.1%</td><td>8.3%</td><td><strong>79.2%</strong></td><td>0%</td><td>0%</td><td>0%</td><td>2.1%</td></tr><tr><td>Locustella</td><td>0%</td><td>0%</td><td>0%</td><td>2.6%</td><td>5.3%</td><td><strong>89.5%</strong></td><td>0%</td><td>0%</td><td>2.6%</td></tr><tr><td>Tetraogallus</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td>0%</td><td><strong>95.5%</strong></td><td>0%</td><td>4.5%</td></tr><tr><td>Tragopan</td><td>0%</td><td>0%</td><td>0%</td><td>3.4%</td><td>0%</td><td>0%</td><td>0%</td><td><strong>96.6%</strong></td><td>0%</td></tr><tr><td>noise</td><td>0%</td><td>0%</td><td>0%</td><td>0.4%</td><td>1.2%</td><td>1.6%</td><td>0%</td><td>0%</td><td><strong>96.7%</strong></td></tr><tr><td>f1 score</td><td>0.86</td><td>0.96</td><td>0.93</td><td>0.81</td><td>0.82</td><td>0.86</td><td>0.98</td><td>0.97</td><td>0.97</td></tr></tbody></table><p>性能表现</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Inferencing time： 25 ms.</span>
<span class="line">Peak RAM usage： 9.5K</span>
<span class="line">Flash usage： 85.2K</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[p];function l(i,r){return n(),t("div",null,o)}const c=s(e,[["render",l],["__file","jiyuSTM32F746deshishiniaozhongshibie.html.vue"]]),u=JSON.parse(`{"path":"/blogs/jishu/jiyuSTM32F746deshishiniaozhongshibie.html","title":"基于STM32F746的实时鸟种识别","lang":"zh-CN","frontmatter":{"title":"基于STM32F746的实时鸟种识别","katex":true,"date":"2023/12/07","tags":["嵌入式","TinyML","课程","AI"],"categories":["技术"],"layout":"GlobalLayout","description":"本项目基于STM32F746实现，鸟叫声音分类作为一种常见的环境音分类任务，也非常适合用于嵌入式AI应用的探索，并且在生态研究、鸟类保护、生物多样性监测都具有重要的现实意义。通过将鸟叫声音分类算法和模型压缩到小型设备中，可以将这些功能带到更多的场景和应用中，例如将鸟叫声音分类技术应用于智能鸟窝监控系统、无人机巡航监测系统等领域，用于评估生态系统的健康状...","head":[["meta",{"property":"og:url","content":"https://sakee.cn/blogs/jishu/jiyustm32f746deshishiniaozhongshibie.html"}],["meta",{"property":"og:site_name","content":"sake's blog"}],["meta",{"property":"og:title","content":"基于STM32F746的实时鸟种识别"}],["meta",{"property":"og:description","content":"本项目基于STM32F746实现，鸟叫声音分类作为一种常见的环境音分类任务，也非常适合用于嵌入式AI应用的探索，并且在生态研究、鸟类保护、生物多样性监测都具有重要的现实意义。通过将鸟叫声音分类算法和模型压缩到小型设备中，可以将这些功能带到更多的场景和应用中，例如将鸟叫声音分类技术应用于智能鸟窝监控系统、无人机巡航监测系统等领域，用于评估生态系统的健康状..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"fullstacksake"}],["meta",{"property":"article:tag","content":"嵌入式"}],["meta",{"property":"article:tag","content":"TinyML"}],["meta",{"property":"article:tag","content":"课程"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:published_time","content":"2023-12-06T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于STM32F746的实时鸟种识别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-06T16:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"fullstacksake\\",\\"email\\":\\"fullstacksake@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"原始下载","slug":"原始下载","link":"#原始下载","children":[]},{"level":2,"title":"训练集选择","slug":"训练集选择","link":"#训练集选择","children":[]},{"level":2,"title":"数据预处理","slug":"数据预处理","link":"#数据预处理","children":[]},{"level":2,"title":"神经网络训练","slug":"神经网络训练","link":"#神经网络训练","children":[]}],"git":{},"filePathRelative":"blogs/技术/基于STM32F746的实时鸟种识别.md","autoDesc":true}`);export{c as comp,u as data};
