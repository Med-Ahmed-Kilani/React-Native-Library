import * as React from 'react';
import {StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import axios from 'axios';
import {UserCard} from '../../Components/Cards';
import {ItemSeperator} from '../../Components/Common';
//Types
import {CardsListProps} from './Types';
import {UserProps} from '../../Components/Cards/userCard/Types';
import {users} from './Utils';

const CardsList: React.FC<CardsListProps> = props => {
  const {navigation} = props;
  const dimensions = useWindowDimensions();
  // const [users, setUsers] = React.useState<UserProps[]>([]);

  // React.useEffect(() => {
  //   axios.get('https://dummyjson.com/users').then(res => {
  //     console.log(res.data.users[0].company);

  //     // setUsers(res.data.users);
  //   });
  // }, []);

  //functions
  const onPress = (item: UserProps) => () => {
    navigation.navigate('UserProfile', {item});
  };

  const onPressDelete = (id: string) => () => {
    // dispatch(deleteUser(id));
  };

  //render
  const renderItem = ({item, index}: {item: UserProps; index: number}) => {
    return (
      <UserCard
        key={index}
        item={item}
        onPress={onPress(item)}
        onDelete={onPressDelete(item.id)}
      />
    );
  };

  return (
    <FlatList
      data={users}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      ItemSeparatorComponent={ItemSeperator}
      style={styles.container}
      contentContainerStyle={styles.content}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default CardsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
  },
  content: {paddingBottom: 20},
  label: {color: '#FFF', fontWeight: 'bold', fontSize: 18},
  button: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#564787',
    height: 44,
    bottom: 14,
    borderRadius: 20,
  },
  form: {margin: 20},
  input: {
    borderColor: 'darkblue',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 14,
    width: '100%',
    margin: 4,
    marginHorizontal: 20,
  },
});
