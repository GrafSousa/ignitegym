import { Heading, YStack } from 'tamagui';

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <YStack
      bg='$gray600'
      pb='$6'
      pt='$16'
      alignItems='center'
      justifyContent='center'
    >
      <Heading color='$gray100' fontSize='$xl'>
        {title}
      </Heading>
    </YStack>
  );
}
