<template>
    <div id="addresslist">
      <div class="head">
        <a class="head-jt" href="javascript:history.go(-1);"></a>
        <div class="head-text">城市选择</div>
      </div>
      <div class="center" @click="clickdata">
        <div class="weui-search-bar" id="searchBar">
            <input class="addresslist-search" placeholder="请输入城市名称或首字母" v-model="ct"/>
            <div class="cityxlk">
              <ul>
                <li data="dc4e11d2ea5d11e4966efa163e799362" class="addli A">安庆</li>
                <li data="dc4dd164ea5d11e4966efa163e799362" class="addli B">蚌埠</li>
                <li data="dc4e7109ea5d11e4966efa163e799362" class="addli B">亳州</li>
                <li data="dc4e84d7ea5d11e4966efa163e799362" class="addli C">池州</li>
                <li data="dc4e34c9ea5d11e4966efa163e799362" class="addli C">滁州</li>
                <li data="dc4e4318ea5d11e4966efa163e799362" class="addli F">阜阳</li>
                <li data="dc4daeeeea5d11e4966efa163e799362" class="addli H">合肥</li>
                <li data="dc4dfadcea5d11e4966efa163e799362" class="addli H">淮北</li>
                <li data="dc4de0e6ea5d11e4966efa163e799362" class="addli H">淮南</li>
                <li data="dc4e2029ea5d11e4966efa163e799362" class="addli H">黄山</li>
                <li data="dc4e678aea5d11e4966efa163e799362" class="addli L">六安</li>
                <li data="dc4df264ea5d11e4966efa163e799362" class="addli M">马鞍山</li>
                <li data="dc4e5803ea5d11e4966efa163e799362" class="addli S">宿州</li>
                <li data="dc4e068fea5d11e4966efa163e799362" class="addli T">铜陵</li>
                <li data="dc4dc6b8ea5d11e4966efa163e799362" class="addli W">芜湖</li>
                <li data="dc4e8b45ea5d11e4966efa163e799362" class="addli X">宣城</li>
                <li data="dc3bf0e9ea5d11e4966efa163e799362" class="addli B">北京</li>
                <li data="dc4e9626ea5d11e4966efa163e799362" class="addli F">福州</li>
                <li data="dc4f1bc1ea5d11e4966efa163e799362" class="addli L">龙岩</li>
                <li data="dc4f0673ea5d11e4966efa163e799362" class="addli N">南平</li>
                <li data="dc4f2a6eea5d11e4966efa163e799362" class="addli N">宁德</li>
                <li data="dc4eba9cea5d11e4966efa163e799362" class="addli P">莆田</li>
                <li data="dc4eddc2ea5d11e4966efa163e799362" class="addli Q">泉州</li>
                <li data="dc4ec8b2ea5d11e4966efa163e799362" class="addli S">三明</li>
                <li data="dc4eb234ea5d11e4966efa163e799362" class="addli S">厦门</li>
                <li data="dc4ef068ea5d11e4966efa163e799362" class="addli Z">漳州</li>
                <li data="2175ef36542c46e8ae4270d775f83a74" class="addli B">白银</li>
                <li data="108f3c498609477ea9b787a6e6e2b5a4" class="addli D">定西</li>
                <li data="978ab89e2c834d60ba6b28a60f1e5304" class="addli G">甘南藏族自治州</li>
                <li data="a5c11b8194124021a5349bd74fd5f10f" class="addli J">嘉峪关</li>
                <li data="19739e6dc22c46edac8a90f92e5a99cc" class="addli J">金昌</li>
                <li data="3ac8a01aaf9c48619c1928af898afd51" class="addli J">酒泉</li>
                <li data="12c2fbe7ccf743d2aae19d307d50e8a9" class="addli L">兰州</li>
                <li data="cfbbe8ef730b4fa29aa646e9b14fe924" class="addli L">临夏回族自治州</li>
                <li data="64e141dfc9d64a5187d86738ba5ac75a" class="addli L">陇南</li>
                <li data="4bcd87b8a51b42d998a8f425cb614b1c" class="addli P">平凉</li>
                <li data="c618af988f314fe2ac9ead1dd5b6db9c" class="addli Q">庆阳</li>
                <li data="bc486ecc5bfd404db066cb07b764337c" class="addli T">天水</li>
                <li data="22eea5beedc941a9b92eef4c825f1fd7" class="addli W">武威</li>
                <li data="b63d6ff92b05453fb76f191fa8edbb3d" class="addli Z">张掖</li>
                <li data="dc69a8cbea5d11e4966efa163e799362" class="addli C">潮州</li>
                <li data="dc69a40cea5d11e4966efa163e799362" class="addli D">东莞</li>
                <li data="dc68f141ea5d11e4966efa163e799362" class="addli F">佛山</li>
                <li data="dc68a023ea5d11e4966efa163e799362" class="addli G">广州</li>
                <li data="dc697584ea5d11e4966efa163e799362" class="addli H">河源</li>
                <li data="dc694d3fea5d11e4966efa163e799362" class="addli H">惠州</li>
                <li data="dc68feb2ea5d11e4966efa163e799362" class="addli J">江门</li>
                <li data="dc69af17ea5d11e4966efa163e799362" class="addli J">揭阳</li>
                <li data="dc691dcfea5d11e4966efa163e799362" class="addli M">茂名</li>
                <li data="dc695481ea5d11e4966efa163e799362" class="addli M">梅州</li>
                <li data="dc698832ea5d11e4966efa163e799362" class="addli Q">清远</li>
                <li data="dc68dee3ea5d11e4966efa163e799362" class="addli S">汕头</li>
                <li data="dc6960afea5d11e4966efa163e799362" class="addli S">汕尾</li>
                <li data="dc68b69eea5d11e4966efa163e799362" class="addli S">韶关</li>
                <li data="dc68ca64ea5d11e4966efa163e799362" class="addli S">深圳</li>
                <li data="dc697e3cea5d11e4966efa163e799362" class="addli Y">阳江</li>
                <li data="dc69c124ea5d11e4966efa163e799362" class="addli Y">云浮</li>
                <li data="dc69088dea5d11e4966efa163e799362" class="addli Z">湛江</li>
                <li data="dc6931faea5d11e4966efa163e799362" class="addli Z">肇庆</li>
                <li data="dc69a683ea5d11e4966efa163e799362" class="addli Z">中山</li>
                <li data="dc68da1bea5d11e4966efa163e799362" class="addli Z">珠海</li>
                <li data="dc6a7478ea5d11e4966efa163e799362" class="addli B">百色</li>
                <li data="dc6a26d0ea5d11e4966efa163e799362" class="addli B">北海</li>
                <li data="dc6acb23ea5d11e4966efa163e799362" class="addli C">崇左</li>
                <li data="dc6a3de8ea5d11e4966efa163e799362" class="addli F">防城港</li>
                <li data="dc6a4eccea5d11e4966efa163e799362" class="addli G">贵港</li>
                <li data="dc69f6e5ea5d11e4966efa163e799362" class="addli G">桂林</li>
                <li data="dc6aa38cea5d11e4966efa163e799362" class="addli H">河池</li>
                <li data="dc6a9346ea5d11e4966efa163e799362" class="addli H">贺州</li>
                <li data="dc6ab8a1ea5d11e4966efa163e799362" class="addli L">来宾</li>
                <li data="dc69dac3ea5d11e4966efa163e799362" class="addli L">柳州</li>
                <li data="dc69c9f2ea5d11e4966efa163e799362" class="addli N">南宁</li>
                <li data="dc6a48a2ea5d11e4966efa163e799362" class="addli Q">钦州</li>
                <li data="dc6a19adea5d11e4966efa163e799362" class="addli W">梧州</li>
                <li data="dc6a69e5ea5d11e4966efa163e799362" class="addli Y">玉林</li>
                <li data="dc8e4fdcea5d11e4966efa163e799362" class="addli A">安顺</li>
                <li data="d30a619f6f4f46a6afacafc75deac3e4" class="addli B">毕节地区</li>
                <li data="dc8e7a55ea5d11e4966efa163e799362" class="addli B">毕节</li>
                <li data="dc8dd0ecea5d11e4966efa163e799362" class="addli G">贵阳</li>
                <li data="dc8e08c9ea5d11e4966efa163e799362" class="addli L">六盘水</li>
                <li data="dc910642ea5d11e4966efa163e799362" class="addli Q">黔东南苗族侗族自治州</li>
                <li data="dc912d0dea5d11e4966efa163e799362" class="addli Q">黔南布依族苗族自治州</li>
                <li data="dc90f3baea5d11e4966efa163e799362" class="addli Q">黔西南布依族苗族自治州</li>
                <li data="078bda2b73ce454da50437b8edd8b97a" class="addli T">铜仁地区</li>
                <li data="dc90c91dea5d11e4966efa163e799362" class="addli T">铜仁</li>
                <li data="dc8e191aea5d11e4966efa163e799362" class="addli Z">遵义</li>
                <li data="dc6ad650ea5d11e4966efa163e799362" class="addli H">海口</li>
                <li data="dc6af338ea5d11e4966efa163e799362" class="addli S">三沙</li>
                <li data="dc6af038ea5d11e4966efa163e799362" class="addli S">三亚</li>
                <li data="dc6af7d9ea5d11e4966efa163e799362" class="addli S">省直辖</li>
                <li data="199ab6311ade40539e0498a602124e01" class="addli S">省直辖县级行政单位</li>
                <li data="dc3e5100ea5d11e4966efa163e799362" class="addli B">保定</li>
                <li data="dc3ee80eea5d11e4966efa163e799362" class="addli C">沧州</li>
                <li data="dc3ebf51ea5d11e4966efa163e799362" class="addli C">承德</li>
                <li data="dc3df7e9ea5d11e4966efa163e799362" class="addli H">邯郸</li>
                <li data="dc3f3171ea5d11e4966efa163e799362" class="addli H">衡水</li>
                <li data="dc3f0f8fea5d11e4966efa163e799362" class="addli L">廊坊</li>
                <li data="dc3ddd5cea5d11e4966efa163e799362" class="addli Q">秦皇岛</li>
                <li data="dc3d6da0ea5d11e4966efa163e799362" class="addli S">石家庄</li>
                <li data="dc3db312ea5d11e4966efa163e799362" class="addli T">唐山</li>
                <li data="dc3e24ceea5d11e4966efa163e799362" class="addli X">邢台</li>
                <li data="dc3e9080ea5d11e4966efa163e799362" class="addli Z">张家口</li>
                <li data="dc45fc56ea5d11e4966efa163e799362" class="addli D">大庆</li>
                <li data="dc46c59fea5d11e4966efa163e799362" class="addli D">大兴安岭地区</li>
                <li data="dc451a2cea5d11e4966efa163e799362" class="addli H">哈尔滨</li>
                <li data="dc45d255ea5d11e4966efa163e799362" class="addli H">鹤岗</li>
                <li data="dc46971aea5d11e4966efa163e799362" class="addli H">黑河</li>
                <li data="dc46380aea5d11e4966efa163e799362" class="addli J">佳木斯</li>
                <li data="dc45b7f2ea5d11e4966efa163e799362" class="addli J">鸡西</li>
                <li data="dc466ea8ea5d11e4966efa163e799362" class="addli M">牡丹江</li>
                <li data="dc457f41ea5d11e4966efa163e799362" class="addli Q">齐齐哈尔</li>
                <li data="dc466065ea5d11e4966efa163e799362" class="addli Q">七台河</li>
                <li data="dc45e391ea5d11e4966efa163e799362" class="addli S">双鸭山</li>
                <li data="dc46a722ea5d11e4966efa163e799362" class="addli S">绥化</li>
                <li data="dc460fd4ea5d11e4966efa163e799362" class="addli Y">伊春</li>
                <li data="dc55e2eaea5d11e4966efa163e799362" class="addli A">安阳</li>
                <li data="dc55fe09ea5d11e4966efa163e799362" class="addli H">鹤壁</li>
                <li data="dc5644e4ea5d11e4966efa163e799362" class="addli J">焦作</li>
                <li data="dc558e12ea5d11e4966efa163e799362" class="addli K">开封</li>
                <li data="dc5e4086ea5d11e4966efa163e799362" class="addli L">漯河</li>
                <li data="dc55a917ea5d11e4966efa163e799362" class="addli L">洛阳</li>
                <li data="dc5e6151ea5d11e4966efa163e799362" class="addli N">南阳</li>
                <li data="dc55cc2aea5d11e4966efa163e799362" class="addli P">平顶山</li>
                <li data="dc5e2a86ea5d11e4966efa163e799362" class="addli P">濮阳</li>
                <li data="dc5e5233ea5d11e4966efa163e799362" class="addli S">三门峡</li>
                <li data="dc5e7e52ea5d11e4966efa163e799362" class="addli S">商丘</li>
                <li data="dc5ed0ccea5d11e4966efa163e799362" class="addli S">省直辖</li>
                <li data="dc560e35ea5d11e4966efa163e799362" class="addli X">新乡</li>
                <li data="dc5e935cea5d11e4966efa163e799362" class="addli X">信阳</li>
                <li data="dc5e336dea5d11e4966efa163e799362" class="addli X">许昌</li>
                <li data="dc556fa8ea5d11e4966efa163e799362" class="addli Z">郑州</li>
                <li data="dc5ea5bdea5d11e4966efa163e799362" class="addli Z">周口</li>
                <li data="dc5ebf57ea5d11e4966efa163e799362" class="addli Z">驻马店</li>
                <li data="dc5fb108ea5d11e4966efa163e799362" class="addli E">恩施土家族苗族自治州</li>
                <li data="dc5f46f6ea5d11e4966efa163e799362" class="addli E">鄂州</li>
                <li data="dc5f8846ea5d11e4966efa163e799362" class="addli H">黄冈</li>
                <li data="dc5ef7d3ea5d11e4966efa163e799362" class="addli H">黄石</li>
                <li data="dc5f5a63ea5d11e4966efa163e799362" class="addli J">荆门</li>
                <li data="dc5f7c42ea5d11e4966efa163e799362" class="addli J">荆州</li>
                <li data="dc5fc828ea5d11e4966efa163e799362" class="addli S">省直辖</li>
                <li data="dfe65d173b164d9bb5174e504c645109" class="addli S">省直辖行政单位</li>
                <li data="dc5f0680ea5d11e4966efa163e799362" class="addli S">十堰</li>
                <li data="dc5fabf5ea5d11e4966efa163e799362" class="addli S">随州</li>
                <li data="dc5ed5e8ea5d11e4966efa163e799362" class="addli W">武汉</li>
                <li data="dc5f3283ea5d11e4966efa163e799362" class="addli X">襄阳</li>
                <li data="dc5fa05fea5d11e4966efa163e799362" class="addli X">咸宁</li>
                <li data="dc5f68c8ea5d11e4966efa163e799362" class="addli X">孝感</li>
                <li data="dc5f16b2ea5d11e4966efa163e799362" class="addli Y">宜昌</li>
                <li data="dc604729ea5d11e4966efa163e799362" class="addli C">常德</li>
                <li data="dc5fcfb0ea5d11e4966efa163e799362" class="addli Z">长沙</li>
                <li data="dc6082feea5d11e4966efa163e799362" class="addli C">郴州</li>
                <li data="dc5ffd6fea5d11e4966efa163e799362" class="addli H">衡阳</li>
                <li data="dc60e6c7ea5d11e4966efa163e799362" class="addli H">怀化</li>
                <li data="dc687b22ea5d11e4966efa163e799362" class="addli L">娄底</li>
                <li data="dc601d71ea5d11e4966efa163e799362" class="addli S">邵阳</li>
                <li data="dc5ff5a1ea5d11e4966efa163e799362" class="addli X">湘潭</li>
                <li data="dc688221ea5d11e4966efa163e799362" class="addli X">湘西土家族苗族自治州</li>
                <li data="dc606c7bea5d11e4966efa163e799362" class="addli Y">益阳</li>
                <li data="dc60b922ea5d11e4966efa163e799362" class="addli Y">永州</li>
                <li data="dc60377dea5d11e4966efa163e799362" class="addli Y">岳阳</li>
                <li data="dc606132ea5d11e4966efa163e799362" class="addli Z">张家界</li>
                <li data="dc5fdc61ea5d11e4966efa163e799362" class="addli Z">株洲</li>
                <li data="dc4776f7ea5d11e4966efa163e799362" class="addli C">常州</li>
                <li data="dc47eb05ea5d11e4966efa163e799362" class="addli H">淮安</li>
                <li data="dc47cf5bea5d11e4966efa163e799362" class="addli L">连云港</li>
                <li data="dc4716e6ea5d11e4966efa163e799362" class="addli N">南京</li>
                <li data="dc47aaabea5d11e4966efa163e799362" class="addli N">南通</li>
                <li data="dc4846aaea5d11e4966efa163e799362" class="addli S">宿迁</li>
                <li data="dc478cd0ea5d11e4966efa163e799362" class="addli S">苏州</li>
                <li data="dc483b46ea5d11e4966efa163e799362" class="addli T">泰州</li>
                <li data="dc473de9ea5d11e4966efa163e799362" class="addli W">无锡</li>
                <li data="dc475887ea5d11e4966efa163e799362" class="addli X">徐州</li>
                <li data="dc47fc3bea5d11e4966efa163e799362" class="addli Y">盐城</li>
                <li data="dc481eb1ea5d11e4966efa163e799362" class="addli Y">扬州</li>
                <li data="dc482731ea5d11e4966efa163e799362" class="addli Z">镇江</li>
                <li data="dc53cb98ea5d11e4966efa163e799362" class="addli F">抚州</li>
                <li data="dc536e82ea5d11e4966efa163e799362" class="addli G">赣州</li>
                <li data="dc539795ea5d11e4966efa163e799362" class="addli J">吉安</li>
                <li data="dc4f5001ea5d11e4966efa163e799362" class="addli J">景德镇</li>
                <li data="dc4f6e25ea5d11e4966efa163e799362" class="addli J">九江</li>
                <li data="dc4f3e93ea5d11e4966efa163e799362" class="addli N">南昌</li>
                <li data="dc4f5663ea5d11e4966efa163e799362" class="addli P">萍乡</li>
                <li data="dc53e8f3ea5d11e4966efa163e799362" class="addli S">上饶</li>
                <li data="dc4f9c97ea5d11e4966efa163e799362" class="addli X">新余</li>
                <li data="dc53b58aea5d11e4966efa163e799362" class="addli Y">宜春</li>
                <li data="dc4fb0a0ea5d11e4966efa163e799362" class="addli Y">鹰潭</li>
                <li data="dc44d401ea5d11e4966efa163e799362" class="addli B">白城</li>
                <li data="dc449137ea5d11e4966efa163e799362" class="addli B">白山</li>
                <li data="dc440243ea5d11e4966efa163e799362" class="addli Z">长春</li>
                <li data="dc44199dea5d11e4966efa163e799362" class="addli J">吉林</li>
                <li data="dc4464d3ea5d11e4966efa163e799362" class="addli L">辽源</li>
                <li data="dc444ae8ea5d11e4966efa163e799362" class="addli S">四平</li>
                <li data="dc44afdfea5d11e4966efa163e799362" class="addli S">松原</li>
                <li data="dc447285ea5d11e4966efa163e799362" class="addli T">通化</li>
                <li data="dc44e0a1ea5d11e4966efa163e799362" class="addli Y">延边朝鲜族自治州</li>
                <li data="dc42d8c2ea5d11e4966efa163e799362" class="addli A">鞍山</li>
                <li data="dc430bddea5d11e4966efa163e799362" class="addli B">本溪</li>
                <li data="dc43c460ea5d11e4966efa163e799362" class="addli C">朝阳</li>
                <li data="dc42b529ea5d11e4966efa163e799362" class="addli D">大连</li>
                <li data="dc431dbdea5d11e4966efa163e799362" class="addli D">丹东</li>
                <li data="dc42efc6ea5d11e4966efa163e799362" class="addli F">抚顺</li>
                <li data="dc43679bea5d11e4966efa163e799362" class="addli F">阜新</li>
                <li data="dc43da17ea5d11e4966efa163e799362" class="addli H">葫芦岛</li>
                <li data="dc433af6ea5d11e4966efa163e799362" class="addli J">锦州</li>
                <li data="dc43871fea5d11e4966efa163e799362" class="addli L">辽阳</li>
                <li data="dc439dffea5d11e4966efa163e799362" class="addli P">盘锦</li>
                <li data="dc428015ea5d11e4966efa163e799362" class="addli S">沈阳</li>
                <li data="dc43ae57ea5d11e4966efa163e799362" class="addli T">铁岭</li>
                <li data="dc43529fea5d11e4966efa163e799362" class="addli Y">营口</li>
                <li data="dc427613ea5d11e4966efa163e799362" class="addli A">阿拉善盟</li>
                <li data="dc4142bbea5d11e4966efa163e799362" class="addli B">包头</li>
                <li data="dc41e838ea5d11e4966efa163e799362" class="addli B">巴彦淖尔</li>
                <li data="dc416c0eea5d11e4966efa163e799362" class="addli C">赤峰</li>
                <li data="dc41a485ea5d11e4966efa163e799362" class="addli E">鄂尔多斯</li>
                <li data="dc41269eea5d11e4966efa163e799362" class="addli H">呼和浩特</li>
                <li data="dc41bd55ea5d11e4966efa163e799362" class="addli H">呼伦贝尔</li>
                <li data="dc418ed8ea5d11e4966efa163e799362" class="addli T">通辽</li>
                <li data="dc415e03ea5d11e4966efa163e799362" class="addli W">乌海</li>
                <li data="dc420340ea5d11e4966efa163e799362" class="addli W">乌兰察布</li>
                <li data="dc424a21ea5d11e4966efa163e799362" class="addli X">锡林郭勒盟</li>
                <li data="dc42306bea5d11e4966efa163e799362" class="addli X">兴安盟</li>
                <li data="9a3a9cea236e4a9586cb4a0c64c1a54c" class="addli G">固原</li>
                <li data="d64a6ca87b1d472b89c88cf168fa4564" class="addli S">石嘴山</li>
                <li data="f95fc42b12e5409e80c9f9ea1c6ed275" class="addli W">吴忠</li>
                <li data="c0f020dec44548209f1a90cd6fb7b8e8" class="addli Y">银川</li>
                <li data="1d76ca129fd745958b25175fd8e170f6" class="addli Z">中卫</li>
                <li data="56682b388f79418d89e113a7abafd2d2" class="addli G">果洛藏族自治州</li>
                <li data="5825276d8a734bd8a6302b0c763b5c5d" class="addli H">海北藏族自治州</li>
                <li data="d7fe7c2b65ef40ab96b56f8f8ee8c04b" class="addli H">海东地区</li>
                <li data="8aca8517d1e844aab6c5c5395c4d985e" class="addli H">海南藏族自治州</li>
                <li data="05c45f2f2205463b8cdae5834e4b49e0" class="addli H">海西蒙古族藏族自治州</li>
                <li data="c4aa2584a60c4da0b5cf5b86cab9ec29" class="addli H">黄南藏族自治州</li>
                <li data="33f82558216d40a5b71e99ce40b4870b" class="addli X">西宁</li>
                <li data="e957118e9c6346c59f7f9f403b0fcd04" class="addli Y">玉树藏族自治州</li>
                <li data="dc554386ea5d11e4966efa163e799362" class="addli B">滨州</li>
                <li data="dc5518a6ea5d11e4966efa163e799362" class="addli D">德州</li>
                <li data="dc545aeeea5d11e4966efa163e799362" class="addli D">东营</li>
                <li data="dc55573cea5d11e4966efa163e799362" class="addli H">菏泽</li>
                <li data="dc540902ea5d11e4966efa163e799362" class="addli J">济南</li>
                <li data="dc54a83dea5d11e4966efa163e799362" class="addli J">济宁</li>
                <li data="dc54f46eea5d11e4966efa163e799362" class="addli L">莱芜</li>
                <li data="dc553022ea5d11e4966efa163e799362" class="addli L">聊城</li>
                <li data="dc54f864ea5d11e4966efa163e799362" class="addli L">临沂</li>
                <li data="dc542325ea5d11e4966efa163e799362" class="addli Q">青岛</li>
                <li data="dc54e65aea5d11e4966efa163e799362" class="addli R">日照</li>
                <li data="dc54ccf2ea5d11e4966efa163e799362" class="addli T">泰安</li>
                <li data="dc548633ea5d11e4966efa163e799362" class="addli W">潍坊</li>
                <li data="dc54d543ea5d11e4966efa163e799362" class="addli W">威海</li>
                <li data="dc546634ea5d11e4966efa163e799362" class="addli Y">烟台</li>
                <li data="dc545295ea5d11e4966efa163e799362" class="addli Z">枣庄</li>
                <li data="dc543acbea5d11e4966efa163e799362" class="addli Z">淄博</li>
                <li data="dc46d81eea5d11e4966efa163e799362" class="addli S">上海</li>
                <li data="c9e6853fe2be4afb99a8072850606007" class="addli A">安康</li>
                <li data="6db2cdb3b41f458f92e14d7919679db2" class="addli B">宝鸡</li>
                <li data="dadb0d3e918a462da1afa1cb5cc549e1" class="addli H">汉中</li>
                <li data="127a17d1bfd14bd988944eef45723b9d" class="addli S">商洛</li>
                <li data="b00522a6182e462f85c8c425ba479107" class="addli T">铜川</li>
                <li data="237981c2c33b4d28978b1a49764927aa" class="addli W">渭南</li>
                <li data="63b510cdd72d4e378c9bf82277d4b659" class="addli X">西安</li>
                <li data="71711a8ff00b4094bd943cf9a54fc70a" class="addli X">咸阳</li>
                <li data="96ab54b1f4f64744887683b5be6ced30" class="addli Y">延安</li>
                <li data="a25d672033b8450bb1cbaa4d5b8553f7" class="addli Y">榆林</li>
                <li data="dc3f9f95ea5d11e4966efa163e799362" class="addli Z">长治</li>
                <li data="dc3f7342ea5d11e4966efa163e799362" class="addli D">大同</li>
                <li data="dc3fc5d5ea5d11e4966efa163e799362" class="addli J">晋城</li>
                <li data="dc3ff37eea5d11e4966efa163e799362" class="addli J">晋中</li>
                <li data="dc4080e3ea5d11e4966efa163e799362" class="addli L">临汾</li>
                <li data="dc40fb67ea5d11e4966efa163e799362" class="addli L">吕梁</li>
                <li data="dc3fe4fdea5d11e4966efa163e799362" class="addli S">朔州</li>
                <li data="dc3f4ec1ea5d11e4966efa163e799362" class="addli T">太原</li>
                <li data="dc404065ea5d11e4966efa163e799362" class="addli X">忻州</li>
                <li data="dc3f92eaea5d11e4966efa163e799362" class="addli Y">阳泉</li>
                <li data="dc401541ea5d11e4966efa163e799362" class="addli Y">运城</li>
                <li data="dc8cfdbeea5d11e4966efa163e799362" class="addli A">阿坝藏族羌族自治州</li>
                <li data="dc8cd026ea5d11e4966efa163e799362" class="addli B">巴中</li>
                <li data="dc8a4638ea5d11e4966efa163e799362" class="addli C">成都</li>
                <li data="dc8c898bea5d11e4966efa163e799362" class="addli D">达州</li>
                <li data="dc8afed7ea5d11e4966efa163e799362" class="addli D">德阳</li>
                <li data="dc8d3a3eea5d11e4966efa163e799362" class="addli G">甘孜藏族自治州</li>
                <li data="dc8c6c5fea5d11e4966efa163e799362" class="addli G">广安</li>
                <li data="dc8b4a99ea5d11e4966efa163e799362" class="addli G">广元</li>
                <li data="dc8b92c9ea5d11e4966efa163e799362" class="addli L">乐山</li>
                <li data="dc8d88a0ea5d11e4966efa163e799362" class="addli L">凉山彝族自治州</li>
                <li data="dc8adc10ea5d11e4966efa163e799362" class="addli L">泸州</li>
                <li data="dc8c03a8ea5d11e4966efa163e799362" class="addli M">眉山</li>
                <li data="dc8b1dbcea5d11e4966efa163e799362" class="addli M">绵阳</li>
                <li data="dc8bcaabea5d11e4966efa163e799362" class="addli N">南充</li>
                <li data="dc8b7acaea5d11e4966efa163e799362" class="addli N">内江</li>
                <li data="dc8abf7bea5d11e4966efa163e799362" class="addli P">攀枝花</li>
                <li data="dc8b687dea5d11e4966efa163e799362" class="addli S">遂宁</li>
                <li data="dc8ca995ea5d11e4966efa163e799362" class="addli Y">雅安</li>
                <li data="dc8c1f3eea5d11e4966efa163e799362" class="addli Y">宜宾</li>
                <li data="dc8a9e06ea5d11e4966efa163e799362" class="addli Z">自贡</li>
                <li data="dc8ced5aea5d11e4966efa163e799362" class="addli Z">资阳</li>
                <li data="dc3cf16dea5d11e4966efa163e799362" class="addli T">天津</li>
                <li data="c96ed6acdef941c1a3ee492e9cff5578" class="addli A">阿克苏地区</li>
                <li data="8e6d3ce87cb74881852147047857f90b" class="addli A">阿勒泰地区</li>
                <li data="32204760b08e44dc86d0d213436c00cc" class="addli B">巴音郭楞蒙古自治州</li>
                <li data="b80d6b37881742ee892a0afe8dadb9c5" class="addli B">博尔塔拉蒙古自治州</li>
                <li data="1558638f35aa407bad3534c6c1fd3bed" class="addli C">昌吉回族自治州</li>
                <li data="b45161b4ff59436383e95b9d804dee33" class="addli H">哈密地区</li>
                <li data="164bbaa417424be99e927629f72c57be" class="addli H">和田地区</li>
                <li data="893c770915c94662882e4c25b4fcd140" class="addli K">喀什地区</li>
                <li data="0f7296b6f5ac41ca88e44b6164b2807e" class="addli K">克拉玛依</li>
                <li data="937b017c244149c7b09ba293d01e819c" class="addli K">克孜勒苏柯尔克孜自治州</li>
                <li data="f37f18b953324905b3b12f3cf01d1f20" class="addli S">省直辖行政单位</li>
                <li data="05bf883fb4e84907bbe8931b100fd117" class="addli T">塔城地区</li>
                <li data="fb9dc9cb564a45cf92919a926c24cdd9" class="addli T">吐鲁番地区</li>
                <li data="b2ff1ea4385346ed94536bf9bb470c10" class="addli W">乌鲁木齐</li>
                <li data="9f1d49df5f60416c94c7acb44bb39585" class="addli Y">伊犁哈萨克自治州</li>
                <li data="6cf4e81374df42d497586267a0ff1aca" class="addli A">阿里地区</li>
                <li data="85315dca1ff94bc2a3d4c9faf4f59293" class="addli C">昌都地区</li>
                <li data="1d0a03ba5dbd4bcc8678c246fadd0306" class="addli L">拉萨</li>
                <li data="fadfe89901b6411a8815004f2affd28e" class="addli L">林芝地区</li>
                <li data="4bd6f508b9a14777b19b23188b1b10ca" class="addli N">那曲地区</li>
                <li data="73362c90567a48b39bd79ed05cc9e375" class="addli R">日喀则地区</li>
                <li data="0a8717e9308c436fba13e2595d727071" class="addli S">山南地区</li>
                <li data="dc919eb5ea5d11e4966efa163e799362" class="addli B">保山</li>
                <li data="c8c3453c56df40eeb9fd6952498aa80a" class="addli C">楚雄彝族自治州</li>
                <li data="5f74490288cd47749dc93e2d9e70a8d2" class="addli D">大理白族自治州</li>
                <li data="b16aa1e54e2c4f069d9c4e734bacc116" class="addli D">德宏傣族景颇族自治州</li>
                <li data="134952b9eaf4464ca9da98e78fbfa48a" class="addli D">迪庆藏族自治州</li>
                <li data="05db3b3581334d1e88329e6c15bb9ab9" class="addli H">红河哈尼族彝族自治州</li>
                <li data="dc914cdfea5d11e4966efa163e799362" class="addli K">昆明</li>
                <li data="cee95ccf22994d1e9b40db4c179b2b7a" class="addli L">丽江</li>
                <li data="73f450e2a475405cb62e2550bd7907ac" class="addli L">临沧</li>
                <li data="5ae88d64b6da43bc81df64d1329b44e9" class="addli N">怒江傈僳族自治州</li>
                <li data="dc9171c8ea5d11e4966efa163e799362" class="addli Q">曲靖</li>
                <li data="1810061f37754a1dadb201d32951dc4d" class="addli S">思茅</li>
                <li data="812d22ea69df4a87836f00190f3015d9" class="addli W">文山壮族苗族自治州</li>
                <li data="bec23df65e544fe69869b43d860bec07" class="addli X">西双版纳傣族自治州</li>
                <li data="dc918f0cea5d11e4966efa163e799362" class="addli Y">玉溪</li>
                <li data="dc91b7c9ea5d11e4966efa163e799362" class="addli Z">昭通</li>
                <li data="dc6b43aeea5d11e4966efa163e799362" class="addli Z">重庆</li>
                <li data="dc484efeea5d11e4966efa163e799362" class="addli H">杭州</li>
                <li data="dc4d4c71ea5d11e4966efa163e799362" class="addli H">湖州</li>
                <li data="dc48d3a0ea5d11e4966efa163e799362" class="addli J">嘉兴</li>
                <li data="dc4d5c07ea5d11e4966efa163e799362" class="addli J">金华</li>
                <li data="dc4da182ea5d11e4966efa163e799362" class="addli L">丽水</li>
                <li data="dc487107ea5d11e4966efa163e799362" class="addli N">宁波</li>
                <li data="dc4d766aea5d11e4966efa163e799362" class="addli Q">衢州</li>
                <li data="dc4d53c1ea5d11e4966efa163e799362" class="addli S">绍兴</li>
                <li data="dc4d84a5ea5d11e4966efa163e799362" class="addli T">台州</li>
                <li data="dc489b10ea5d11e4966efa163e799362" class="addli W">温州</li>
                <li data="dc4d7eadea5d11e4966efa163e799362" class="addli Z">舟山</li>
              </ul>
            </div>
        </div>
        <div class="hotcity">
          <div class="cityl">
            <ul>
              <li data="">全国</li>
              <li data="dc3bf0e9ea5d11e4966efa163e799362">北京</li>
              <li data="dc68ca64ea5d11e4966efa163e799362">深圳</li>
              <li data="dc46d81eea5d11e4966efa163e799362">上海</li>
              <li data="dc3cf16dea5d11e4966efa163e799362">天津</li>
              <li data="dc6b43aeea5d11e4966efa163e799362">重庆</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="addresslist-zm">
            A
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              安徽
            </div>
            <ul>
              <li data="dc4e11d2ea5d11e4966efa163e799362">安庆</li>
              <li data="dc4dd164ea5d11e4966efa163e799362">蚌埠</li>
              <li data="dc4e7109ea5d11e4966efa163e799362">亳州</li>
              <li data="dc4e84d7ea5d11e4966efa163e799362">池州</li>
              <li data="dc4e34c9ea5d11e4966efa163e799362">滁州</li>
              <li data="dc4e4318ea5d11e4966efa163e799362">阜阳</li>
              <li data="dc4daeeeea5d11e4966efa163e799362">合肥</li>
              <li data="dc4dfadcea5d11e4966efa163e799362">淮北</li>
              <li data="dc4de0e6ea5d11e4966efa163e799362">淮南</li>
              <li data="dc4e2029ea5d11e4966efa163e799362">黄山</li>
              <li data="dc4e678aea5d11e4966efa163e799362">六安</li>
              <li data="dc4df264ea5d11e4966efa163e799362">马鞍山</li>
              <li data="dc4e5803ea5d11e4966efa163e799362">宿州</li>
              <li data="dc4e068fea5d11e4966efa163e799362">铜陵</li>
              <li data="dc4dc6b8ea5d11e4966efa163e799362">芜湖</li>
              <li data="dc4e8b45ea5d11e4966efa163e799362">宣城</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <div class="addresslist-zm">
            F
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              福建
            </div>
            <ul>
              <li data="dc4e9626ea5d11e4966efa163e799362">福州</li>
              <li data="dc4f1bc1ea5d11e4966efa163e799362">龙岩</li>
              <li data="dc4f0673ea5d11e4966efa163e799362">南平</li>
              <li data="dc4f2a6eea5d11e4966efa163e799362">宁德</li>
              <li data="dc4eba9cea5d11e4966efa163e799362">莆田</li>
              <li data="dc4eddc2ea5d11e4966efa163e799362">泉州</li>
              <li data="dc4ec8b2ea5d11e4966efa163e799362">三明</li>
              <li data="dc4eb234ea5d11e4966efa163e799362">厦门</li>
              <li data="dc4ef068ea5d11e4966efa163e799362">漳州</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="addresslist-zm">
            G
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              甘肃
            </div>
            <ul>
              <li data="2175ef36542c46e8ae4270d775f83a74">白银</li>
              <li data="108f3c498609477ea9b787a6e6e2b5a4">定西</li>
              <li data="978ab89e2c834d60ba6b28a60f1e5304">甘南藏族自治州</li>
              <li data="a5c11b8194124021a5349bd74fd5f10f">嘉峪关</li>
              <li data="19739e6dc22c46edac8a90f92e5a99cc">金昌</li>
              <li data="3ac8a01aaf9c48619c1928af898afd51">酒泉</li>
              <li data="12c2fbe7ccf743d2aae19d307d50e8a9">兰州</li>
              <li data="cfbbe8ef730b4fa29aa646e9b14fe924">临夏回族自治州</li>
              <li data="64e141dfc9d64a5187d86738ba5ac75a">陇南</li>
              <li data="4bcd87b8a51b42d998a8f425cb614b1c">平凉</li>
              <li data="c618af988f314fe2ac9ead1dd5b6db9c">庆阳</li>
              <li data="bc486ecc5bfd404db066cb07b764337c">天水</li>
              <li data="22eea5beedc941a9b92eef4c825f1fd7">武威</li>
              <li data="b63d6ff92b05453fb76f191fa8edbb3d">张掖</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              广东
            </div>
            <ul>
              <li data="dc69a8cbea5d11e4966efa163e799362">潮州</li>
              <li data="dc69a40cea5d11e4966efa163e799362">东莞</li>
              <li data="dc68f141ea5d11e4966efa163e799362">佛山</li>
              <li data="dc68a023ea5d11e4966efa163e799362">广州</li>
              <li data="dc697584ea5d11e4966efa163e799362">河源</li>
              <li data="dc694d3fea5d11e4966efa163e799362">惠州</li>
              <li data="dc68feb2ea5d11e4966efa163e799362">江门</li>
              <li data="dc69af17ea5d11e4966efa163e799362">揭阳</li>
              <li data="dc691dcfea5d11e4966efa163e799362">茂名</li>
              <li data="dc695481ea5d11e4966efa163e799362">梅州</li>
              <li data="dc698832ea5d11e4966efa163e799362">清远</li>
              <li data="dc68dee3ea5d11e4966efa163e799362">汕头</li>
              <li data="dc6960afea5d11e4966efa163e799362">汕尾</li>
              <li data="dc68b69eea5d11e4966efa163e799362">韶关</li>
              <li data="dc68ca64ea5d11e4966efa163e799362">深圳</li>
              <li data="dc697e3cea5d11e4966efa163e799362">阳江</li>
              <li data="dc69c124ea5d11e4966efa163e799362">云浮</li>
              <li data="dc69088dea5d11e4966efa163e799362">湛江</li>
              <li data="dc6931faea5d11e4966efa163e799362">肇庆</li>
              <li data="dc69a683ea5d11e4966efa163e799362">中山</li>
              <li data="dc68da1bea5d11e4966efa163e799362">珠海</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              广西壮族自治区
            </div>
            <ul>
              <li data="dc6a7478ea5d11e4966efa163e799362">百色</li>
              <li data="dc6a26d0ea5d11e4966efa163e799362">北海</li>
              <li data="dc6acb23ea5d11e4966efa163e799362">崇左</li>
              <li data="dc6a3de8ea5d11e4966efa163e799362">防城港</li>
              <li data="dc6a4eccea5d11e4966efa163e799362">贵港</li>
              <li data="dc69f6e5ea5d11e4966efa163e799362">桂林</li>
              <li data="dc6aa38cea5d11e4966efa163e799362">河池</li>
              <li data="dc6a9346ea5d11e4966efa163e799362">贺州</li>
              <li data="dc6ab8a1ea5d11e4966efa163e799362">来宾</li>
              <li data="dc69dac3ea5d11e4966efa163e799362">柳州</li>
              <li data="dc69c9f2ea5d11e4966efa163e799362">南宁</li>
              <li data="dc6a48a2ea5d11e4966efa163e799362">钦州</li>
              <li data="dc6a19adea5d11e4966efa163e799362">梧州</li>
              <li data="dc6a69e5ea5d11e4966efa163e799362">玉林</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              贵州
            </div>
            <ul>
              <li data="dc8e4fdcea5d11e4966efa163e799362">安顺</li>
              <li data="d30a619f6f4f46a6afacafc75deac3e4">毕节地区</li>
              <li data="dc8e7a55ea5d11e4966efa163e799362">毕节</li>
              <li data="dc8dd0ecea5d11e4966efa163e799362">贵阳</li>
              <li data="dc8e08c9ea5d11e4966efa163e799362">六盘水</li>
              <li data="dc910642ea5d11e4966efa163e799362">黔东南苗族侗族自治州</li>
              <li data="dc912d0dea5d11e4966efa163e799362">黔南布依族苗族自治州</li>
              <li data="dc90f3baea5d11e4966efa163e799362">黔西南布依族苗族自治州</li>
              <li data="078bda2b73ce454da50437b8edd8b97a">铜仁地区</li>
              <li data="dc90c91dea5d11e4966efa163e799362">铜仁</li>
              <li data="dc8e191aea5d11e4966efa163e799362">遵义</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="addresslist-zm">
            H
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              海南
            </div>
            <ul>
              <li data="dc6ad650ea5d11e4966efa163e799362">海口</li>
              <li data="dc6af338ea5d11e4966efa163e799362">三沙</li>
              <li data="dc6af038ea5d11e4966efa163e799362">三亚</li>
              <li data="dc6af7d9ea5d11e4966efa163e799362">省直辖</li>
              <li data="199ab6311ade40539e0498a602124e01">省直辖县级行政单位</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              河北
            </div>
            <ul>
              <li data="dc3e5100ea5d11e4966efa163e799362">保定</li>
              <li data="dc3ee80eea5d11e4966efa163e799362">沧州</li>
              <li data="dc3ebf51ea5d11e4966efa163e799362">承德</li>
              <li data="dc3df7e9ea5d11e4966efa163e799362">邯郸</li>
              <li data="dc3f3171ea5d11e4966efa163e799362">衡水</li>
              <li data="dc3f0f8fea5d11e4966efa163e799362">廊坊</li>
              <li data="dc3ddd5cea5d11e4966efa163e799362">秦皇岛</li>
              <li data="dc3d6da0ea5d11e4966efa163e799362">石家庄</li>
              <li data="dc3db312ea5d11e4966efa163e799362">唐山</li>
              <li data="dc3e24ceea5d11e4966efa163e799362">邢台</li>
              <li data="dc3e9080ea5d11e4966efa163e799362">张家口</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              黑龙江
            </div>
            <ul>
              <li data="dc45fc56ea5d11e4966efa163e799362">大庆</li>
              <li data="dc46c59fea5d11e4966efa163e799362">大兴安岭地区</li>
              <li data="dc451a2cea5d11e4966efa163e799362">哈尔滨</li>
              <li data="dc45d255ea5d11e4966efa163e799362">鹤岗</li>
              <li data="dc46971aea5d11e4966efa163e799362">黑河</li>
              <li data="dc46380aea5d11e4966efa163e799362">佳木斯</li>
              <li data="dc45b7f2ea5d11e4966efa163e799362">鸡西</li>
              <li data="dc466ea8ea5d11e4966efa163e799362">牡丹江</li>
              <li data="dc457f41ea5d11e4966efa163e799362">齐齐哈尔</li>
              <li data="dc466065ea5d11e4966efa163e799362">七台河</li>
              <li data="dc45e391ea5d11e4966efa163e799362">双鸭山</li>
              <li data="dc46a722ea5d11e4966efa163e799362">绥化</li>
              <li data="dc460fd4ea5d11e4966efa163e799362">伊春</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              河南
            </div>
            <ul>
              <li data="dc55e2eaea5d11e4966efa163e799362">安阳</li>
              <li data="dc55fe09ea5d11e4966efa163e799362">鹤壁</li>
              <li data="dc5644e4ea5d11e4966efa163e799362">焦作</li>
              <li data="dc558e12ea5d11e4966efa163e799362">开封</li>
              <li data="dc5e4086ea5d11e4966efa163e799362">漯河</li>
              <li data="dc55a917ea5d11e4966efa163e799362">洛阳</li>
              <li data="dc5e6151ea5d11e4966efa163e799362">南阳</li>
              <li data="dc55cc2aea5d11e4966efa163e799362">平顶山</li>
              <li data="dc5e2a86ea5d11e4966efa163e799362">濮阳</li>
              <li data="dc5e5233ea5d11e4966efa163e799362">三门峡</li>
              <li data="dc5e7e52ea5d11e4966efa163e799362">商丘</li>
              <li data="dc5ed0ccea5d11e4966efa163e799362">省直辖</li>
              <li data="dc560e35ea5d11e4966efa163e799362">新乡</li>
              <li data="dc5e935cea5d11e4966efa163e799362">信阳</li>
              <li data="dc5e336dea5d11e4966efa163e799362">许昌</li>
              <li data="dc556fa8ea5d11e4966efa163e799362">郑州</li>
              <li data="dc5ea5bdea5d11e4966efa163e799362">周口</li>
              <li data="dc5ebf57ea5d11e4966efa163e799362">驻马店</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              湖北
            </div>
            <ul>
              <li data="dc5fb108ea5d11e4966efa163e799362">恩施土家族苗族自治州</li>
              <li data="dc5f46f6ea5d11e4966efa163e799362">鄂州</li>
              <li data="dc5f8846ea5d11e4966efa163e799362">黄冈</li>
              <li data="dc5ef7d3ea5d11e4966efa163e799362">黄石</li>
              <li data="dc5f5a63ea5d11e4966efa163e799362">荆门</li>
              <li data="dc5f7c42ea5d11e4966efa163e799362">荆州</li>
              <li data="dc5fc828ea5d11e4966efa163e799362">省直辖</li>
              <li data="dfe65d173b164d9bb5174e504c645109">省直辖行政单位</li>
              <li data="dc5f0680ea5d11e4966efa163e799362">十堰</li>
              <li data="dc5fabf5ea5d11e4966efa163e799362">随州</li>
              <li data="dc5ed5e8ea5d11e4966efa163e799362">武汉</li>
              <li data="dc5f3283ea5d11e4966efa163e799362">襄阳</li>
              <li data="dc5fa05fea5d11e4966efa163e799362">咸宁</li>
              <li data="dc5f68c8ea5d11e4966efa163e799362">孝感</li>
              <li data="dc5f16b2ea5d11e4966efa163e799362">宜昌</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              湖南
            </div>
            <ul>
              <li data="dc604729ea5d11e4966efa163e799362">常德</li>
              <li data="dc5fcfb0ea5d11e4966efa163e799362">长沙</li>
              <li data="dc6082feea5d11e4966efa163e799362">郴州</li>
              <li data="dc5ffd6fea5d11e4966efa163e799362">衡阳</li>
              <li data="dc60e6c7ea5d11e4966efa163e799362">怀化</li>
              <li data="dc687b22ea5d11e4966efa163e799362">娄底</li>
              <li data="dc601d71ea5d11e4966efa163e799362">邵阳</li>
              <li data="dc5ff5a1ea5d11e4966efa163e799362">湘潭</li>
              <li data="dc688221ea5d11e4966efa163e799362">湘西土家族苗族自治州</li>
              <li data="dc606c7bea5d11e4966efa163e799362">益阳</li>
              <li data="dc60b922ea5d11e4966efa163e799362">永州</li>
              <li data="dc60377dea5d11e4966efa163e799362">岳阳</li>
              <li data="dc606132ea5d11e4966efa163e799362">张家界</li>
              <li data="dc5fdc61ea5d11e4966efa163e799362">株洲</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="addresslist-zm">
            J
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              江苏
            </div>
            <ul>
              <li data="dc4776f7ea5d11e4966efa163e799362">常州</li>
              <li data="dc47eb05ea5d11e4966efa163e799362">淮安</li>
              <li data="dc47cf5bea5d11e4966efa163e799362">连云港</li>
              <li data="dc4716e6ea5d11e4966efa163e799362">南京</li>
              <li data="dc47aaabea5d11e4966efa163e799362">南通</li>
              <li data="dc4846aaea5d11e4966efa163e799362">宿迁</li>
              <li data="dc478cd0ea5d11e4966efa163e799362">苏州</li>
              <li data="dc483b46ea5d11e4966efa163e799362">泰州</li>
              <li data="dc473de9ea5d11e4966efa163e799362">无锡</li>
              <li data="dc475887ea5d11e4966efa163e799362">徐州</li>
              <li data="dc47fc3bea5d11e4966efa163e799362">盐城</li>
              <li data="dc481eb1ea5d11e4966efa163e799362">扬州</li>
              <li data="dc482731ea5d11e4966efa163e799362">镇江</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              江西
            </div>
            <ul>
              <li data="dc53cb98ea5d11e4966efa163e799362">抚州</li>
              <li data="dc536e82ea5d11e4966efa163e799362">赣州</li>
              <li data="dc539795ea5d11e4966efa163e799362">吉安</li>
              <li data="dc4f5001ea5d11e4966efa163e799362">景德镇</li>
              <li data="dc4f6e25ea5d11e4966efa163e799362">九江</li>
              <li data="dc4f3e93ea5d11e4966efa163e799362">南昌</li>
              <li data="dc4f5663ea5d11e4966efa163e799362">萍乡</li>
              <li data="dc53e8f3ea5d11e4966efa163e799362">上饶</li>
              <li data="dc4f9c97ea5d11e4966efa163e799362">新余</li>
              <li data="dc53b58aea5d11e4966efa163e799362">宜春</li>
              <li data="dc4fb0a0ea5d11e4966efa163e799362">鹰潭</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              吉林
            </div>
            <ul>
              <li data="dc44d401ea5d11e4966efa163e799362">白城</li>
              <li data="dc449137ea5d11e4966efa163e799362">白山</li>
              <li data="dc440243ea5d11e4966efa163e799362">长春</li>
              <li data="dc44199dea5d11e4966efa163e799362">吉林</li>
              <li data="dc4464d3ea5d11e4966efa163e799362">辽源</li>
              <li data="dc444ae8ea5d11e4966efa163e799362">四平</li>
              <li data="dc44afdfea5d11e4966efa163e799362">松原</li>
              <li data="dc447285ea5d11e4966efa163e799362">通化</li>
              <li data="dc44e0a1ea5d11e4966efa163e799362">延边朝鲜族自治州</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div>
          <div class="addresslist-zm">
            L
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              辽宁
            </div>
            <ul>
              <li data="dc42d8c2ea5d11e4966efa163e799362">鞍山</li>
              <li data="dc430bddea5d11e4966efa163e799362">本溪</li>
              <li data="dc43c460ea5d11e4966efa163e799362">朝阳</li>
              <li data="dc42b529ea5d11e4966efa163e799362">大连</li>
              <li data="dc431dbdea5d11e4966efa163e799362">丹东</li>
              <li data="dc42efc6ea5d11e4966efa163e799362">抚顺</li>
              <li data="dc43679bea5d11e4966efa163e799362">阜新</li>
              <li data="dc43da17ea5d11e4966efa163e799362">葫芦岛</li>
              <li data="dc433af6ea5d11e4966efa163e799362">锦州</li>
              <li data="dc43871fea5d11e4966efa163e799362">辽阳</li>
              <li data="dc439dffea5d11e4966efa163e799362">盘锦</li>
              <li data="dc428015ea5d11e4966efa163e799362">沈阳</li>
              <li data="dc43ae57ea5d11e4966efa163e799362">铁岭</li>
              <li data="dc43529fea5d11e4966efa163e799362">营口</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div>
          <div class="addresslist-zm">
            N
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              内蒙古自治区
            </div>
            <ul>
              <li data="dc427613ea5d11e4966efa163e799362">阿拉善盟</li>
              <li data="dc4142bbea5d11e4966efa163e799362">包头</li>
              <li data="dc41e838ea5d11e4966efa163e799362">巴彦淖尔</li>
              <li data="dc416c0eea5d11e4966efa163e799362">赤峰</li>
              <li data="dc41a485ea5d11e4966efa163e799362">鄂尔多斯</li>
              <li data="dc41269eea5d11e4966efa163e799362">呼和浩特</li>
              <li data="dc41bd55ea5d11e4966efa163e799362">呼伦贝尔</li>
              <li data="dc418ed8ea5d11e4966efa163e799362">通辽</li>
              <li data="dc415e03ea5d11e4966efa163e799362">乌海</li>
              <li data="dc420340ea5d11e4966efa163e799362">乌兰察布</li>
              <li data="dc424a21ea5d11e4966efa163e799362">锡林郭勒盟</li>
              <li data="dc42306bea5d11e4966efa163e799362">兴安盟</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              宁夏回族自治区
            </div>
            <ul>
              <li data="9a3a9cea236e4a9586cb4a0c64c1a54c">固原</li>
              <li data="d64a6ca87b1d472b89c88cf168fa4564">石嘴山</li>
              <li data="f95fc42b12e5409e80c9f9ea1c6ed275">吴忠</li>
              <li data="c0f020dec44548209f1a90cd6fb7b8e8">银川</li>
              <li data="1d76ca129fd745958b25175fd8e170f6">中卫</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div>
          <div class="addresslist-zm">
            Q
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              青海
            </div>
            <ul>
              <li data="56682b388f79418d89e113a7abafd2d2">果洛藏族自治州</li>
              <li data="5825276d8a734bd8a6302b0c763b5c5d">海北藏族自治州</li>
              <li data="d7fe7c2b65ef40ab96b56f8f8ee8c04b">海东地区</li>
              <li data="8aca8517d1e844aab6c5c5395c4d985e">海南藏族自治州</li>
              <li data="05c45f2f2205463b8cdae5834e4b49e0">海西蒙古族藏族自治州</li>
              <li data="c4aa2584a60c4da0b5cf5b86cab9ec29">黄南藏族自治州</li>
              <li data="33f82558216d40a5b71e99ce40b4870b">西宁</li>
              <li data="e957118e9c6346c59f7f9f403b0fcd04">玉树藏族自治州</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div>
          <div class="addresslist-zm">
            S
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              山东
            </div>
            <ul>
              <li data="dc554386ea5d11e4966efa163e799362">滨州</li>
              <li data="dc5518a6ea5d11e4966efa163e799362">德州</li>
              <li data="dc545aeeea5d11e4966efa163e799362">东营</li>
              <li data="dc55573cea5d11e4966efa163e799362">菏泽</li>
              <li data="dc540902ea5d11e4966efa163e799362">济南</li>
              <li data="dc54a83dea5d11e4966efa163e799362">济宁</li>
              <li data="dc54f46eea5d11e4966efa163e799362">莱芜</li>
              <li data="dc553022ea5d11e4966efa163e799362">聊城</li>
              <li data="dc54f864ea5d11e4966efa163e799362">临沂</li>
              <li data="dc542325ea5d11e4966efa163e799362">青岛</li>
              <li data="dc54e65aea5d11e4966efa163e799362">日照</li>
              <li data="dc54ccf2ea5d11e4966efa163e799362">泰安</li>
              <li data="dc548633ea5d11e4966efa163e799362">潍坊</li>
              <li data="dc54d543ea5d11e4966efa163e799362">威海</li>
              <li data="dc546634ea5d11e4966efa163e799362">烟台</li>
              <li data="dc545295ea5d11e4966efa163e799362">枣庄</li>
              <li data="dc543acbea5d11e4966efa163e799362">淄博</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              陕西
            </div>
            <ul>
              <li data="c9e6853fe2be4afb99a8072850606007">安康</li>
              <li data="6db2cdb3b41f458f92e14d7919679db2">宝鸡</li>
              <li data="dadb0d3e918a462da1afa1cb5cc549e1">汉中</li>
              <li data="127a17d1bfd14bd988944eef45723b9d">商洛</li>
              <li data="b00522a6182e462f85c8c425ba479107">铜川</li>
              <li data="237981c2c33b4d28978b1a49764927aa">渭南</li>
              <li data="63b510cdd72d4e378c9bf82277d4b659">西安</li>
              <li data="71711a8ff00b4094bd943cf9a54fc70a">咸阳</li>
              <li data="96ab54b1f4f64744887683b5be6ced30">延安</li>
              <li data="a25d672033b8450bb1cbaa4d5b8553f7">榆林</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              山西
            </div>
            <ul>
              <li data="dc3f9f95ea5d11e4966efa163e799362">长治</li>
              <li data="dc3f7342ea5d11e4966efa163e799362">大同</li>
              <li data="dc3fc5d5ea5d11e4966efa163e799362">晋城</li>
              <li data="dc3ff37eea5d11e4966efa163e799362">晋中</li>
              <li data="dc4080e3ea5d11e4966efa163e799362">临汾</li>
              <li data="dc40fb67ea5d11e4966efa163e799362">吕梁</li>
              <li data="dc3fe4fdea5d11e4966efa163e799362">朔州</li>
              <li data="dc3f4ec1ea5d11e4966efa163e799362">太原</li>
              <li data="dc404065ea5d11e4966efa163e799362">忻州</li>
              <li data="dc3f92eaea5d11e4966efa163e799362">阳泉</li>
              <li data="dc401541ea5d11e4966efa163e799362">运城</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              四川
            </div>
            <ul>
              <li data="dc8cfdbeea5d11e4966efa163e799362">阿坝藏族羌族自治州</li>
              <li data="dc8cd026ea5d11e4966efa163e799362">巴中</li>
              <li data="dc8a4638ea5d11e4966efa163e799362">成都</li>
              <li data="dc8c898bea5d11e4966efa163e799362">达州</li>
              <li data="dc8afed7ea5d11e4966efa163e799362">德阳</li>
              <li data="dc8d3a3eea5d11e4966efa163e799362">甘孜藏族自治州</li>
              <li data="dc8c6c5fea5d11e4966efa163e799362">广安</li>
              <li data="dc8b4a99ea5d11e4966efa163e799362">广元</li>
              <li data="dc8b92c9ea5d11e4966efa163e799362">乐山</li>
              <li data="dc8d88a0ea5d11e4966efa163e799362">凉山彝族自治州</li>
              <li data="dc8adc10ea5d11e4966efa163e799362">泸州</li>
              <li data="dc8c03a8ea5d11e4966efa163e799362">眉山</li>
              <li data="dc8b1dbcea5d11e4966efa163e799362">绵阳</li>
              <li data="dc8bcaabea5d11e4966efa163e799362">南充</li>
              <li data="dc8b7acaea5d11e4966efa163e799362">内江</li>
              <li data="dc8abf7bea5d11e4966efa163e799362">攀枝花</li>
              <li data="dc8b687dea5d11e4966efa163e799362">遂宁</li>
              <li data="dc8ca995ea5d11e4966efa163e799362">雅安</li>
              <li data="dc8c1f3eea5d11e4966efa163e799362">宜宾</li>
              <li data="dc8a9e06ea5d11e4966efa163e799362">自贡</li>
              <li data="dc8ced5aea5d11e4966efa163e799362">资阳</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div>
          <div class="addresslist-zm">
            X
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              新疆维吾尔自治区
            </div>
            <ul>
              <li data="c96ed6acdef941c1a3ee492e9cff5578">阿克苏地区</li>
              <li data="8e6d3ce87cb74881852147047857f90b">阿勒泰地区</li>
              <li data="32204760b08e44dc86d0d213436c00cc">巴音郭楞蒙古自治州</li>
              <li data="b80d6b37881742ee892a0afe8dadb9c5">博尔塔拉蒙古自治州</li>
              <li data="1558638f35aa407bad3534c6c1fd3bed">昌吉回族自治州</li>
              <li data="b45161b4ff59436383e95b9d804dee33">哈密地区</li>
              <li data="164bbaa417424be99e927629f72c57be">和田地区</li>
              <li data="893c770915c94662882e4c25b4fcd140">喀什地区</li>
              <li data="0f7296b6f5ac41ca88e44b6164b2807e">克拉玛依</li>
              <li data="937b017c244149c7b09ba293d01e819c">克孜勒苏柯尔克孜自治州</li>
              <li data="f37f18b953324905b3b12f3cf01d1f20">省直辖行政单位</li>
              <li data="05bf883fb4e84907bbe8931b100fd117">塔城地区</li>
              <li data="fb9dc9cb564a45cf92919a926c24cdd9">吐鲁番地区</li>
              <li data="b2ff1ea4385346ed94536bf9bb470c10">乌鲁木齐</li>
              <li data="9f1d49df5f60416c94c7acb44bb39585">伊犁哈萨克自治州</li>
            </ul>
          </div>
          <div class="addresslist-hr"></div>
          <div class="cityl">
            <div class="addresslist-sq">
              西藏自治区
            </div>
            <ul>
              <li data="6cf4e81374df42d497586267a0ff1aca">阿里地区</li>
              <li data="85315dca1ff94bc2a3d4c9faf4f59293">昌都地区</li>
              <li data="1d0a03ba5dbd4bcc8678c246fadd0306">拉萨</li>
              <li data="fadfe89901b6411a8815004f2affd28e">林芝地区</li>
              <li data="4bd6f508b9a14777b19b23188b1b10ca">那曲地区</li>
              <li data="73362c90567a48b39bd79ed05cc9e375">日喀则地区</li>
              <li data="0a8717e9308c436fba13e2595d727071">山南地区</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="addresslist-zm">
            Y
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              云南
            </div>
            <ul>
              <li data="dc919eb5ea5d11e4966efa163e799362">保山</li>
              <li data="c8c3453c56df40eeb9fd6952498aa80a">楚雄彝族自治州</li>
              <li data="5f74490288cd47749dc93e2d9e70a8d2">大理白族自治州</li>
              <li data="b16aa1e54e2c4f069d9c4e734bacc116">德宏傣族景颇族自治州</li>
              <li data="134952b9eaf4464ca9da98e78fbfa48a">迪庆藏族自治州</li>
              <li data="05db3b3581334d1e88329e6c15bb9ab9">红河哈尼族彝族自治州</li>
              <li data="dc914cdfea5d11e4966efa163e799362">昆明</li>
              <li data="cee95ccf22994d1e9b40db4c179b2b7a">丽江</li>
              <li data="73f450e2a475405cb62e2550bd7907ac">临沧</li>
              <li data="5ae88d64b6da43bc81df64d1329b44e9">怒江傈僳族自治州</li>
              <li data="dc9171c8ea5d11e4966efa163e799362">曲靖</li>
              <li data="1810061f37754a1dadb201d32951dc4d">思茅</li>
              <li data="812d22ea69df4a87836f00190f3015d9">文山壮族苗族自治州</li>
              <li data="bec23df65e544fe69869b43d860bec07">西双版纳傣族自治州</li>
              <li data="dc918f0cea5d11e4966efa163e799362">玉溪</li>
              <li data="dc91b7c9ea5d11e4966efa163e799362">昭通</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="addresslist-zm">
            Z
          </div>
          <div class="cityl">
            <div class="addresslist-sq">
              浙江
            </div>
            <ul>
              <li data="dc484efeea5d11e4966efa163e799362">杭州</li>
              <li data="dc4d4c71ea5d11e4966efa163e799362">湖州</li>
              <li data="dc48d3a0ea5d11e4966efa163e799362">嘉兴</li>
              <li data="dc4d5c07ea5d11e4966efa163e799362">金华</li>
              <li data="dc4da182ea5d11e4966efa163e799362">丽水</li>
              <li data="dc487107ea5d11e4966efa163e799362">宁波</li>
              <li data="dc4d766aea5d11e4966efa163e799362">衢州</li>
              <li data="dc4d53c1ea5d11e4966efa163e799362">绍兴</li>
              <li data="dc4d84a5ea5d11e4966efa163e799362">台州</li>
              <li data="dc489b10ea5d11e4966efa163e799362">温州</li>
              <li data="dc4d7eadea5d11e4966efa163e799362">舟山</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "addresslist",
        data() {
            return {
              ct:''
            }
        },
        created() {

        },
        methods: {
          clickdata(e){
            var clickobj=e.target;
            if(clickobj.tagName==="LI"){
            var data=clickobj.getAttribute("data");
              localStorage.setItem("address_id"+this.$util.projectOnlyName,data);
              localStorage.setItem("address_name"+this.$util.projectOnlyName,clickobj.innerHTML);
              //this.$router.push({path:'/groupshop'});   //页面跳转
              this.$router.go(-1);
            }
          }
        },
        watch: {
        ct: function (val, oldVal) {
          var cl=document.querySelectorAll(".addli");
          for(var j=0;j<cl.length;j++){
            cl[j].style.display="none";
          };
          if(val!==""){
            var str = /^[A-Za-z]*$/;
            if (str.test(val))
            {
              var val_=val.toUpperCase();
              var cls=document.querySelectorAll("."+val_);
              for(var i=0;i<cls.length;i++){
                cls[i].style.display="block";
              }
            }else{
              for(var j=0;j<cl.length;j++){
                var strhtml=cl[j].innerHTML;
                if(strhtml.indexOf(val)>=0){
                  cl[j].style.display="block";
                }
              };
            }
          }
        }
      }
    }
</script>
