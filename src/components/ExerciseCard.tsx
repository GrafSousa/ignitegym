import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from 'tamagui';
import { Heading, Image, XStack, YStack } from 'tamagui';
import { ChevronRight } from '@tamagui/lucide-icons';

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <XStack bg='$gray500' alignItems='center' p='$2' mb='$3' pr='$4' br='$2'>
        <Image
          alt='Imagem do exercício'
          w='$16'
          h='$16'
          br='$2'
          mr='$4'
          source={{
            uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_300x200.jpg',
          }}
        />

        <YStack f={1}>
          <Heading fontSize='$lg' color='$white'>
            Remada unilateral
          </Heading>

          <Text fontSize='$sm' color='$gray200' mt='1' numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </YStack>

        <ChevronRight color='$gray300' />
      </XStack>
    </TouchableOpacity>
  );
}
