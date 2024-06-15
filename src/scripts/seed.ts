import 'dotenv/config';

import { addDoc, collection, getDocs } from 'firebase/firestore/lite';

import { db } from '../support/firebase';

async function main() {
  const usersRef = collection(db, 'users');
  const userRef = await addDoc(usersRef, {
    name: 'John',
    username: 'john',
    profilePictureUrl:
      'https://cdn.midjourney.com/9ed7a655-94a4-4d71-9276-0df8e5042ed0/0_2.png',
    createdAt: new Date().toISOString(),
  });

  const posts = [
    {
      userId: userRef.id,
      imageUrl:
        'https://github.com/sstur/sstur/assets/369384/3827f51b-7ed4-464a-89a3-a595a6d0d455',
      caption: 'Enjoying the beautiful scenery!',
    },
    {
      userId: userRef.id,
      imageUrl:
        'https://github.com/sstur/sstur/assets/369384/9bedbb26-c1dc-4269-8ee0-ec12a02040db',
      caption: 'A day well spent in nature.',
    },
    {
      userId: userRef.id,
      imageUrl:
        'https://github.com/sstur/sstur/assets/369384/f4810de1-b2ae-4ceb-b7d7-138559cc2a93',
      caption: 'Sunset by the beach.',
    },
  ];

  const postsRef = collection(db, 'posts');

  for (const post of posts) {
    await addDoc(postsRef, {
      userId: post.userId,
      imageUrl: post.imageUrl,
      caption: post.caption,
      createdAt: new Date().toISOString(),
    });
  }

  const postsSnapshot = await getDocs(postsRef);

  for (const post of postsSnapshot.docs) {
    console.log(post.id, post.data());
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
