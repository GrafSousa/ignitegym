import { Heading, Text, XStack, YStack } from 'tamagui';

export function HistoryCard() {
  return (
    <XStack
      w='full'
      ph='$4'
      mb='$3'
      bg='$gray600'
      borderRadius={8}
      alignItems='center'
      paddingVertical='$5'
      justifyContent='space-between'
    >
      <YStack mr='$5'>
        <Heading color='$white' fontSize='$md' textTransform='capitalize'>
          Costas
        </Heading>

        <Text color='$gray100' fontSize='$lg' numberOfLines={1}>
          Puxada Frontal
        </Text>
      </YStack>

      <Text color='$gray300' fontSize='$md'>
        21:58
      </Text>
    </XStack>
  );
}
