# cross_domain_inframe

说明：
	index.html 为包含iframe的文件。
	b.html 和 d.js 均必须和 index.html 在同一个域名之下。

	www.creditintro.com中 需要修改 card_ranks 的两个（中文/英文）模版文件。
	其中必须包含
	<iframe id="myifr" style="display:none" src="https://www.uscreditcardguide.comt/b.html"></iframe>
  <script type="text/javascript" src="https://www.uscreditcardguide.com/d.js"></script>
