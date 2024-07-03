import { useState } from 'react';
import { FlatList } from 'react-native';
import { YStack, XStack, Heading, Text, styled } from 'tamagui';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

const StyledFlatList = styled(FlatList<string>, {});

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'Ombro',
  ]);
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
  ]);
  const [selectedGroup, setSelectedGroup] = useState('costas');

  return (
    <YStack f={1}>
      <HomeHeader />

      <StyledFlatList
        horizontal
        ph='$8'
        mv={'$10'}
        maxHeight='$10'
        keyExtractor={(item) => item}
        data={groups}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              selectedGroup.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setSelectedGroup(item)}
          />
        )}
      />

      <YStack f={1} paddingHorizontal='$8'>
        <XStack justifyContent='space-between' alignItems='center' mb='$5'>
          <Heading color='$gray200' fontSize='$md'>
            Exercícios
          </Heading>
          <Text color='$gray200' fontSize='$sm'>
            4
          </Text>
        </XStack>

        <StyledFlatList
          data={exercises}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 154 }}
          renderItem={({ item }) => <ExerciseCard />}
        ></StyledFlatList>
      </YStack>
    </YStack>
  );
}
