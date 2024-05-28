import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, YStack } from 'tamagui';

import { db } from '../support/firebase';

async function getPosts() {
  const allPosts = await getDocs(collection(db, 'posts'));
  return allPosts.docs.map((post) => ({ id: post.id, ...post.data() }));
}

export default function App() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Button
        onPress={async () => {
          const posts = await getPosts();
          for (const post of posts) {
            console.log('>>', post);
          }
        }}
      >
        Get Posts
      </Button>
    </YStack>
  );
}
