import { Image, Text, View } from 'react-native';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

export const ProjectTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const ProjectVacancy = ({ vagas }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {vagas} Vagas Disponiveis
      </Text>
    </View>
  );
};

export const ImageCMP = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode='contain'
      style={{
        width: 48,
        height: 48,
        borderRadius: 100,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {[assets.joao, assets.bob, assets.molusco, assets.plancton].map(
        (imgUrl, index) => (
          <ImageCMP imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ),
      )}
    </View>
  );
};

export const EndDate = ({ data }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>

      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        22 dias
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
