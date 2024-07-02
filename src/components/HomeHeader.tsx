import { Heading, Text, XStack, YStack } from 'tamagui';
import { LogOut } from '@tamagui/lucide-icons';

import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
  return (
    <XStack bg='$gray600' pt='$16' pb='$5' ph='$8' alignItems='center'>
      <UserPhoto
        mr='$4'
        size='$16'
        source={{ uri: 'https://github.com/GrafSousa.png' }}
      />
      <YStack flex={1}>
        <Text color='$gray100' fontSize='$md'>
          Olá,{' '}
        </Text>

        <Heading color='$gray100' fontSize='$md'>
          Gustavo
        </Heading>
      </YStack>
      <LogOut color='$gray200' size='$7' />
    </XStack>
  );
}
