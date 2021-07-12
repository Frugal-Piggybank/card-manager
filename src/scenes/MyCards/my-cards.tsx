import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Alert, Dimensions, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from 'react-apollo';

import CreditCard from './components/CreditCard/credit-card';
import Screens from '../../screens';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Category} from '@shared/interfaces/Category';
import {CREDIT_CARDS_QUERY} from './graphql/credit-cards';
import Loading from '@shared/components/Loading';
import Error from '@shared/components/Error';
import CategoriesList from './components/CategoriesList/categories-list';
import AddButton from '@shared/components/AddButton';
import {StyleSheet} from 'react-native';

const MyCards: FC<{navigation: any}> = ({navigation: {navigate}}) => {
  const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const [index, setIndex] = useState(0);
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const carousel = useRef(null);

  const {loading, error, data} = useQuery(CREDIT_CARDS_QUERY);

  const renderCard = useCallback(
    ({item: card}: any) => (
      <TouchableOpacity
        onPress={(): void =>
          navigate(`${Screens.CardDetail}`, {
            id: card.id,
            title: card.name,
          })
        }>
        <CreditCard card={card} />
      </TouchableOpacity>
    ),
    [navigate],
  );

  useEffect(() => {
    data?.creditCards &&
      setActiveCategories(data.creditCards[index].categories);
  }, [index, data]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const {creditCards} = data;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Carousel
          layout="default"
          ref={carousel}
          data={creditCards}
          renderItem={renderCard}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(i): void => setIndex(i)}
        />
        <Pagination
          dotsLength={creditCards.length}
          activeDotIndex={index}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <CategoriesList categories={activeCategories} />
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton onPress={() => Alert.alert('adding a category')} />
      </View>
    </SafeAreaView>
  );
};

export default MyCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesContainer: {
    flex: 1,
  },
  addButtonContainer: {
    // position: 'absolute',
    alignItems: 'flex-end',
    marginRight: 15,
    // right: 5,
  },
});
