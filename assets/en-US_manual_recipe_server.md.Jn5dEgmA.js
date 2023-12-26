import{_ as e,p as a,n,R as s}from"./chunks/framework.6NFEWlby.js";const f=JSON.parse('{"title":"Deployment","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/recipe/server.md","filePath":"en-US/manual/recipe/server.md"}'),o={name:"en-US/manual/recipe/server.md"},t=s(`<h1 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to &quot;Deployment&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is vulnerable when you expose your Koishi on the Internet. You might need to limit the accessibility with <a href="./../usage/platform.html#控制台登录">User Authorization</a> or something else.</p></div><p>Koishi apps can only be accessed from localhost by default. You might need to access the Koishi Console or services provided by other plugins on the Internet.</p><ul><li>Allow more people to access your Koishi console</li><li>Use plugins as webhook servers (for example <a href="https://github.koishi.chat" target="_blank" rel="noreferrer">github</a>)</li></ul><p>This section would guide you in completing the deployment for a Koishi application.</p><h2 id="direct-exposure" tabindex="-1">Direct Exposure <a class="header-anchor" href="#direct-exposure" aria-label="Permalink to &quot;Direct Exposure&quot;">​</a></h2><p>Click &quot;Plugins Configuration&quot; on the left side of the console, select &quot;Global Configuration&quot; and change <code>host</code> to <code>0.0.0.0</code>, then click &quot;Reload Configuration&quot; in the top right.After Koishi restarts, you can use <code>IP:Port</code> to visit Koishi Console on any device on the LAN network.</p><p>If you have already prepared a domain, you also need to modify <code>selfUrl</code> to address that you can access the Koishi instance.</p><h2 id="reverse-proxy" tabindex="-1">Reverse Proxy <a class="header-anchor" href="#reverse-proxy" aria-label="Permalink to &quot;Reverse Proxy&quot;">​</a></h2><p>Reverse proxies are useful if you have more complex needs such as SSL and server name etc. Common solutions include nginx, Caddy, etc. You do not need to modify the <code>host</code> configuration item above when using reverse proxy.</p><h3 id="use-caddy" tabindex="-1">Use Caddy <a class="header-anchor" href="#use-caddy" aria-label="Permalink to &quot;Use Caddy&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># If you want to use a domain and also a SSL certificate</span></span>
<span class="line"><span># please change the :80 below to your domain</span></span>
<span class="line"><span># https://caddyserver.com/docs/caddyfile</span></span>
<span class="line"><span>:80 {</span></span>
<span class="line"><span>  reverse_proxy http://127.0.0.1:5140</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="use-nginx" tabindex="-1">Use nginx <a class="header-anchor" href="#use-nginx" aria-label="Permalink to &quot;Use nginx&quot;">​</a></h3><p>Below is a nginx configuration for reference:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># http://nginx.org/en/docs/http/websocket.html</span></span>
<span class="line"><span>map $http_upgrade $connection_upgrade {</span></span>
<span class="line"><span>  default upgrade;</span></span>
<span class="line"><span>  &#39;&#39; close;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>  # server_name, port, ssl, etc.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>    # 5140 corresponds to app.config.port</span></span>
<span class="line"><span>    proxy_pass http://127.0.0.1:5140/;</span></span>
<span class="line"><span>    proxy_redirect off;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Host $http_host;</span></span>
<span class="line"><span>    proxy_read_timeout 300s;</span></span>
<span class="line"><span>    proxy_send_timeout 300s;</span></span>
<span class="line"><span>    proxy_http_version 1.1;</span></span>
<span class="line"><span>    proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    proxy_set_header Connection $connection_upgrade;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="what-s-next" tabindex="-1">What&#39;s Next... <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s Next...&quot;">​</a></h2><p>Once the initial configuration has been completed, there are some additional community plugins to help you better deploy the Koishi Console.</p><h3 id="add-filing-information" tabindex="-1">Add filing information <a class="header-anchor" href="#add-filing-information" aria-label="Permalink to &quot;Add filing information&quot;">​</a></h3><p>If your server is in the Mainland of China, you need to add the filing information inquiry to your console to be able to access it successfully on the Internet.Then you can use plugins (like <a href="https://github.com/koishijs/koishi-plugin-footer" target="_blank" rel="noreferrer">footer</a>) to complete the configuration.</p>`,19),i=[t];function p(r,l,c,d,h,u){return n(),a("div",null,i)}const y=e(o,[["render",p]]);export{f as __pageData,y as default};
