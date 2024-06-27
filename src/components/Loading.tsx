import { Spinner, YStack } from 'tamagui';

export function Loading() {
  return (
    <YStack f={1} alignItems='center' justifyContent='center' bg='$gray700'>
      <Spinner color='$green500' />
    </YStack>
  );
}
