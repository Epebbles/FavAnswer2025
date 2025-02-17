import React, {useState, useEffect, useRef} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

interface MonthPaginationProps {
  monthFilter: number;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setMonthFilter: React.Dispatch<React.SetStateAction<number>>;
  setYearFilter: React.Dispatch<React.SetStateAction<number>>;
}

const months = [
  {key: 0, month: 'Jan', year: 2023},
  {key: 1, month: 'Feb', year: 2023},
  {key: 2, month: 'Mar', year: 2022},
  // {key: 3, month: 'Apr', year: 2022},
  // {key: 4, month: 'May', year: 2022},
  // {key: 5, month: 'Jun', year: 2022},
  // {key: 6, month: 'Jul', year: 2022},
  // {key: 7, month: 'Aug', year: 2022},
  // {key: 8, month: 'Sep', year: 2022},
  // {key: 9, month: 'Oct', year: 2022},
  // {key: 10, month: 'Nov', year: 2022},
  // {key: 11, month: 'Dec', year: 2022},
];

const currentMonth = () => {
  const d = new Date();
  const month = d.getMonth();
  return month;
};
const _spacing = 10;

const MonthPagination: React.FC<MonthPaginationProps> = ({index, setIndex, setMonthFilter, setYearFilter}) => {
  const [monthOrder, setMonthOrder] = useState<{ key: number; month: string; year: number }[]>([]);

  const ref = useRef<FlatList<{ key: number; month: string; year: number }> | null>(null);

  const getMonthOrder = () => {
    let monthIdx = new Date().getMonth();
    let monthOrderArray: { key: number; month: string; year: number }[] = [];
    for (let i = 0; i < 12; i++) {
      if (monthIdx == 11) {
        monthIdx = 0;
      } else {
        monthIdx++;
      }
      monthOrderArray.push(months[monthIdx]);
    }
    return monthOrderArray;
  };

  useEffect(() => {
    setIndex(new Date().getMonth());
    setMonthOrder(getMonthOrder());
  }, []);

  useEffect(() => {
  }, [monthOrder]);
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
      viewOffset: _spacing,
    });
  }, [index]);

  return (
    <View style={styles.container}>
      <FlatList
        initialScrollIndex={index}
        onScrollToIndexFailed={()=>{}}
        ref={ref}
        keyExtractor={(item) => item.key.toString()}
        data={months}
        style={[styles.monthContainer]}
        contentContainerStyle={{paddingLeft: _spacing}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index: findex}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setMonthFilter(item.key);
                setYearFilter(item.year);
                setIndex(findex);
              }}>
              <View
                style={[
                  styles.month,
                  {backgroundColor: findex == index ? '#ff8a58' : '#fff'},
                ]}
                key={index}>
                <Text
                  style={[
                    styles.monthText,
                    {color: findex == index ? '#fff' : '#000'},
                  ]}>
                  {item.month}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default MonthPagination;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  monthContainer: {
    // marginHorizontal: 200,
    flexDirection: 'row',
    flexGrow: 0,
  },
  month: {
    borderColor: '#ff8a58',
    borderWidth: 2,
    // color: '#',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  monthText: {
    color: '#000',

    paddingVertical: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 15,
  },
});
