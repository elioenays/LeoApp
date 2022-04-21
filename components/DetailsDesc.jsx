import React from 'react';
import { Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { ProjectTitle, ProjectVacancy } from './SubInfo';

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ProjectTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <ProjectVacancy vacancies={data.vacancies} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {data.description}
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
