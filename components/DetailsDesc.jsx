import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { ProjectTitle, ProjectVacancy } from './SubInfo';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

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
          vacancies={data.vacancies}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
      </View>
      <ProjectVacancy vacancies={data.vacancies - data.volunteers.length} />

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Descrição
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
            {text}
            {!readMore && '...'}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? 'Mostrar menos' : 'Ler mais'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
