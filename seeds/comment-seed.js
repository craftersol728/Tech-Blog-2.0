const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: '谁也没有见过风，更别说你和我了；谁也没有见过爱情，直到有花束抛向自己。  ',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: '朋友，假使有一日不得不同你相别，你在我的记忆中也会如黄金般闪耀。  ',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: '在夜空所有星星熄灭的时候，所有梦想、所有溪流，都能汇入同一片大海中，那时我们终会相见。  ',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Q我们都还没有说再见，所以，我不会把它当做别离  ',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: '与君相别离，不知何日是归期，我如朝露转瞬晞  ',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: '趴在草地上，能听见大地的心跳。  ',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: '飘摇风雨中,睹物思故乡  ',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: '若知是梦何须醒，不比真如意相会  ',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: '风带来故事的种子，时间使其发芽。  ',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: '用自己的双脚丈量土地，将未知变为知识。  ',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: '心有所向，日复一日,必有精进。  ',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: '最初的鸟儿是不会飞翔的，飞翔是它们勇敢跃入峡谷的奖励。  ',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      '正是因为无法更改，无可违逆，只能接受，命运才会被称之为命运。  ',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      '欲买桂花同载酒...只可惜故人，何日再见呢?',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: '正是因为有大家的寄托，烟花才能以如此美妙的姿态一直存在下去吧。  ',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: '年年今日，灯明如昼。原火不灭，愿人依旧。  ',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      '总会有地上的生灵，敢于直面雷霆的威光  ',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: '它来自旅途的尽头世界的边缘。来自你我心中，永不停歇  ',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      '只有不失去你的崇高，整个世界都会向你敞开。  ',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      '漩涡无法击碎的磐岩，也终究会在时光的冲刷下磨损。  ',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: '人间归离复归离 ，借一浮生逃浮生  ',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: '有时明月无人夜，独向昭潭制恶龙。  ',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: '若你困于无风之地，我将为你奏响高天之歌。  ',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      '我虽无意逐鹿，却知苍生苦楚，只愿荡涤四方，护得浮世一隅。  ',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: '赌徒永远会把希望寄托在下一颗骰子上，但最后赚钱的，当然是从来不碰骰子的庄家。  ',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: '孩童时期的梦是最易碎的东西，哪怕放着不管，也总有一天会自己碎掉，所以一定要有人来保护才行吧。许下的承诺就该好好遵守，做错了事就该好好道歉，给予他的梦就该好好呵护到最后，这才是身为家人该有的样子，我只是不会放弃任何一个锻炼自己的机会而已，这就是我达达利亚不断变强的理由啊  ',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: '当你重新踏上旅途之后，一定要记得旅途本身的意义。提瓦特的飞鸟、诗和城邦，女皇、愚人和怪物……都是你旅途的一部分。终点并不意味着一切，在抵达终点之前，用你的眼睛，多多观察这个世界吧……  ',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: '站在向阳处必能成就英雄，站在背阴处亦可引导灾祸。  ',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: '只要你的渴望尚未平息，那抬头应该可以看到那无光的闪耀吧。  ',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: '罪人的后裔，必须独自挣脱复仇的枷锁。  ',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: '腾龙飞鳞，虽寿比山岳，终为土灰。  ',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: '无相之岩将外壳筑成高耸的岩柱，将自己抬升至高处，或许不仅是为了应敌。或许也是为了更加接近与它无缘的天空吧。  ',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: '阴阳有序, 命运无常. 死亡难以预测, 却也有它的规矩. 记住了, 无论何时何地, 无论有何原因, 人都不该轻易挑衅死之一事. 唯有认识它, 尊重它, 才能明白活着的价值。  ',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: '如果我们要再会，就在夕阳与海面相遇的地方再会吧。到那时，再让我看看你如同钻石一般明净而璀璨的灵魂，是否蒙上了一缕尘埃吧。  ',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: '曲高未必人不识，自有知音和清词。  ',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: '风向是会转变的，终有一天会吹向更加光亮的地方。所以，带着我的祝福，活的更加从容一些吧。  ',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: '就算古玩价值连城，给人的快乐，也只有刚拥有的一瞬  ',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: '岩石尚可有心，我亦是如此。  ',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: '我很喜欢枫叶，可惜，枫叶红时，总多离别。复白亘古事，诗人起歌喉。  ',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      '浮世景色，百千年依旧，人之在世，却如白鹿语泡影，虚无。  ',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      '轻盈的风，偶尔也会变得沉重……虽然，只是凡人难以察觉的短短一瞬  ',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: '力量若达到极，接着考验的便是人心。多亏了你，我才能来到这片未曾踏足的领域，在这里，心和灵魂就像一片云彩，生老病死，天地万象，尽在吾辈。  ',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: '一千种权力伴随着一千种责任  ',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      '在黎明到来之前，必须有人稍微照亮黑暗  ',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: '我的神明就交给你了  ',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: '不知道如何向前的话，总之先迈出第一步，后面的道路就会自然而然地展开了。  ',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      '再会了我的老友，今日一别，是为了他日再次重聚  ',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: '去追寻便好，哪怕只是须臾的光亮。至少，我们拥有此刻  ',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: '没有任何人有权利剥夺他人的愿望 ，即便是神 也不行  ',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;