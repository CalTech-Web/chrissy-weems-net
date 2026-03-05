export const posts = [
  {
    slug: 'chrissy-weems-presents-at-tedx-talk-davenport',
    title: 'Chrissy Weems Presents At TEDx Talk Davenport',
    date: 'May 31, 2019',
    image: '/images/blog-tedtalk.png',
    excerpt: 'Chrissy Weems takes the TEDx stage in Davenport to share her inspiring journey from stay-at-home mom to CEO of a $250 million company, and the lessons learned along the way.',
    content: [
      'Origami Owl Co-Founder and CEO Chrissy Weems shares how a business founded on the hopes and dreams of her 14-year-old daughter did just that thanks to the power of emotional connection, a pay-it-forward mindset, and a focus on empowering others to reach their dreams.',
      'Starting with just $700 in combined savings, Chrissy and her daughter Bella embarked on a journey that would transform their lives and the lives of thousands of women across America. What began as a simple goal — helping Bella earn money for her first car — became a movement that would redefine what it means to build a business with heart.',
      'On the TEDx stage in Davenport, Chrissy shared the raw, unfiltered story of the early days — the kitchen table where the first lockets were assembled, the first jewelry bars hosted in living rooms, and the moment she realized they had created something much bigger than a business.',
      'The talk resonated deeply with the audience as Chrissy emphasized that success isn\'t measured solely in dollars, but in the lives touched, the dreams ignited, and the communities strengthened along the way.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=AOt-po0g1_8',
  },
  {
    slug: 'how-chrissy-weems-and-origami-owl-are-standing-up-against-bullying',
    title: 'How Chrissy Weems and Origami Owl Are Standing Up Against Bullying',
    date: 'December 21, 2018',
    image: '/images/blog-bullying.jpg',
    excerpt: 'Origami Owl launches a powerful anti-bullying campaign, with Chrissy Weems leading the charge to create safe spaces and empower young people to stand up for one another.',
    content: [
      'Bullying has been known to cause a lot of damage to people, and in extreme cases, the victims end up committing suicide if they cannot handle the pressure. Due to the vulnerability level of children, they tend to be more exposed to bullying than any other person in society. Women and teenagers are also vulnerable when it comes to bullying.',
      'One of the individuals who has shown her commitment to fighting bullying is Chrissy Weems, the CEO and co-founder of Origami Owl. Through its great achievements, Origami Owl has been participating in many charitable deeds, including support of the campaign against bullying.',
      'Chrissy was able to boldly and strongly come out in this campaign because she has childhood experience with bullying. She takes the issue personally and therefore is committed to helping children who have been mistreated, discriminated, or bullied in any form.',
      'Being a jewelry maker at Origami Owl, Chrissy began by introducing special jewelry which is badge-shaped reading "I am bullyproof." With this idea, she expects to create awareness of childhood bullying and at the same time encourage more people to come out and speak about their experiences as victims of bullying.',
      'This campaign would also help to raise money that would support anti-bullying programs and organizations such as Childhelp that have the same vision. Chrissy Weems targets to educate people on the dangers of bullying and on how to build an environment that does not tolerate bullying at all.',
      'When Origami Owl and Childhelp work together, there is hope that will not only create awareness of bullying problems but also assist the affected in getting the help they need.',
    ],
  },
  {
    slug: 'ontario-designer-turns-family-tragedy-into-force-for-good',
    title: 'Ontario Designer Turns Family Tragedy into Force for Good',
    date: 'December 21, 2018',
    image: '/images/blog-force-good.jpg',
    excerpt: 'An inspiring story of how personal challenges became the catalyst for creating a company that empowers thousands of women and gives back to communities worldwide.',
    content: [
      'Doing good has always been the philosophy behind why Origami Owl was born in the first place. Nikki Fitzpatrick is one designer from Ontario who turned a sudden tragedy into a new path in life.',
      'Cheryl Tofflemire had her world turned upside down two years ago after her daughter Danica went to visit their close family friends in Northern Ontario. In the blink of an eye, the car she was riding in, with her father Troy Tofflemire and their dog Missy, was struck by an impaired driver. The resulting crash left Troy and Missy dead, with Danica miraculously surviving.',
      'She survived, but with an Acquired Brain Injury (ABI) that left her fighting for her life, meaning that she would never walk again and may never even learn how to talk.',
      'The doctors told Cheryl that there was little hope for Danica, but she didn\'t accept it, and Danica began to slowly beat the odds. Nikki spent a lot of time at the hospital to not only help Danica but to support Cheryl through her daughter\'s healthcare and the death of her husband.',
      'Now, Danica has managed to feed herself and speak slowly in English and French again. Danica has defied the expectations of the doctors and is slowly rebuilding her life.',
      'It encouraged Nikki to join Origami Owl and become a force for good — channeling the pain and resilience she witnessed into something meaningful that could help others facing similar challenges.',
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getAllSlugs() {
  return posts.map((post) => post.slug);
}
