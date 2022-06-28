import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, View } from 'react-native'
import { RectButton } from '../components/Button'
import { COLORS, SHADOWS, SIZES } from '../constants'
import { ProjectTitle, ProjectVacancy, SubInfo } from './SubInfo'

const ProjectCard = ({ data }) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={{ uri: data.imageUrl }}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <SubInfo data={data} />

      <View
        style={{
          width: '100%',
          padding: SIZES.font,
        }}
      >
        <ProjectTitle
          title={data.name}
          subTitle={data.participations[0].user.name}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ProjectVacancy vacancies={data.vacancies} />
          <RectButton
            title={'Participar'}
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  )
}

export default ProjectCard
