const { Post } = require('../models');

const postdata = [
  {
    title: '"A Journey of Art and Heritage" - Adeptal Tales: Inside Painting ',
    post_content: 'https://www.youtube.com/watch?v=duv6ylFoRWc',
    user_id: 10
  },
  {
    title: '"A Journey of Art and Heritage" - Adeptal Tales: New Year Woodblock',
    post_content: 'https://www.youtube.com/watch?v=jSzkRSi09O4',
    user_id: 8
  },
  {
    title: 'Lantern Rite Promotional Video: Dream Upon a Lantern',
    post_content: 'https://www.youtube.com/watch?v=2kY4raFWXtM',
    user_id: 1
  },
  {
    title: 'The Exquisite Night Chimes Cutscene Animation:',
    post_content: 'https://www.youtube.com/watch?v=DXcQSUZuOKk',
    user_id: 4
  },
  {
    title: 'Collected Miscellany - "Yaoyao: Sweet Clouds of Osmanthus" ',
    post_content: 'https://www.youtube.com/watch?v=jym31IdMZYM',
    user_id: 7
  },
  {
    title: 'Collected Miscellany - "Alhaitham: Profound Reasoning"',
    post_content: 'https://www.youtube.com/watch?v=g5fw5RAtl34',
    user_id: 4
  },
  {
    title: '"Endless Suffering" Short Trailer | Genshin Impact',
    post_content: 'https://www.youtube.com/watch?v=3RLhCbVtjEg',
    user_id: 1
  },
  {
    title: 'Character Demo - "Wanderer: Of Solitude Past and Present"',
    post_content: 'https://www.youtube.com/watch?v=NHEE_-87mNE',
    user_id: 1
  },
  {
    title: 'A Dream of Falling Branches" | Genshin Impact',
    post_content: 'https://www.youtube.com/watch?v=zgQG0b-Isbk&ab_channel=GenshinImpact',
    user_id: 9
  },
  {
    title: 'Character Demo - "Zhongli: The Listener" | Genshin Impact',
    post_content: 'https://www.youtube.com/watch?v=4oBpaBEMBIM&ab_channel=GenshinImpact',
    user_id: 5
  },
  {
    title: 'Yae Miko: Anecdote of a Divine Kitsune Guuji" ',
    post_content: 'https://www.youtube.com/watch?v=4yFiBhNIWYo&ab_channel=GenshinImpact',
    user_id: 3
  },
  {
    title: 'Only Old Memories Remain ',
    post_content: 'https://www.youtube.com/watch?v=ZVnfjTVZrWY&ab_channel=GenshinImpact',
    user_id: 10
  },
  {
    title: 'Character Teaser - "Wanderer: Ashes" | Genshin Impact',
    post_content: 'https://www.youtube.com/watch?v=AR2n2TsJuNE&ab_channel=GenshinImpact',
    user_id: 8
  },
  {
    title: 'Through the Eyes of a Dragon',
    post_content: 'https://www.youtube.com/watch?v=1jUemn6Jk-o&ab_channel=GenshinImpact',
    user_id: 3
  },
  {
    title: 'Flavors of the World',
    post_content: 'https://www.youtube.com/watch?v=sHshbPUOXo4&ab_channel=GenshinImpact',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;