import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from 'react-apollo';

import CreditCard from '../components/credit-card';
import Screens from '.';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Category} from '../interfaces/Category';
import {CREDIT_CARDS} from '../scenes/CreditCards/graphql/credit-cards';
import Loading from '../shared/components/Loading';
import Error from '../shared/components/Error';

const CardListScreen: FC<{navigation: any}> = ({navigation: {navigate}}) => {
  const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const [index, setIndex] = useState(0);
  const [activeCategories, setActiveCategories] = useState<Category[]>();
  const carousel = useRef(null);

  const {loading, error, data} = useQuery(CREDIT_CARDS);

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

  // useEffect(() => {
  //   setActiveCategories(
  //     MockCategories.filter((cat) => {
  //       return MockCards[index].categories.includes(cat.id);
  //     }),
  //   );
  // }, [index]);
  if (loading) return <Loading />;
  if (error) return <Error />;

  const {creditCards} = data;

  return (
    <SafeAreaView>
      <Carousel
        layout="default"
        ref={carousel}
        data={creditCards}
        renderItem={renderCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={creditCards.length}
        activeDotIndex={index}
        carouselRef={carousel}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <View>
        {/* <FlatList
          data={activeCategories}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={(cat) => `${cat.id}`}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default CardListScreen;
