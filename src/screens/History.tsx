import { useState } from 'react';
import { Heading, Text, YStack } from 'tamagui';
import { SectionList } from 'react-native';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada Frontal', 'Remada Unilateral', 'Risotto'],
    },
    {
      title: '27.08.22',
      data: ['Puxada Frontal'],
    },
  ]);

  return (
    <YStack f={1}>
      <ScreenHeader title='Histórico de Exercícios' />

      <YStack ph='$8' f={1}>
        <SectionList
          sections={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <HistoryCard />}
          renderSectionHeader={({ section }) => (
            <Heading color='$gray200' fontSize='$md' mt='$10' mb='$3'>
              {section.title}
            </Heading>
          )}
          contentContainerStyle={
            exercises.length === 0 && {
              flex: 1,
              justifyContent: 'center',
            }
          }
          ListEmptyComponent={() => (
            <Text color='$gray100' textAlign='center'>
              Não há exercícios registrados ainda.{'\n'}
              Vamos fazer exercícios hoje?
            </Text>
          )}
        />
      </YStack>
    </YStack>
  );
}
