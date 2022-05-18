import React from 'react';
import { Image, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const DetailsVoluntary = ({ voluntary }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base,
      }}
    >
      <Image
        source={voluntary.image}
        resizeMode='contain'
        style={{ width: 48, height: 48 }}
      />

      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          {voluntary.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {voluntary.cargo}
        </Text>
      </View>
    </View>
  );
};

export default DetailsVoluntary;
