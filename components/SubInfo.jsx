import { differenceInDays, parseISO } from 'date-fns'
import { Image, Text, View } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const ProjectTitle = ({
  title,
  subTitle,
  titleSize,
  subTitleSize,
  vacancies,
}) => {
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
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {/* {vacancies} Vagas Disponiveis */}
      </Text>
    </View>
  )
}

export const ProjectVacancy = ({ vacancies }) => {
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
        {vacancies} Vagas Disponiveis
      </Text>
    </View>
  )
}

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
  )
}

export const People = ({ data }) => {
  var images = data.participations.map(users => {
    const user = users.user
    return user
  })

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {data.participations.map((users, index) => (
        <ImageCMP
          imgUrl={users.user.imageUrl}
          index={index}
          key={`People-${index}`}
        />
      ))}
    </View>
  )
}

export const EndDate = ({ data }) => {
  const numberOfDays = differenceInDays(parseISO(data.endsIn), Date.now())

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
        Finaliza em
      </Text>

      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {numberOfDays} dias
      </Text>
    </View>
  )
}

export const SubInfo = ({ data }) => {
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
      <People data={data} />
      <EndDate data={data} />
    </View>
  )
}
