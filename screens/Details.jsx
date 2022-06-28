import React, { useState } from 'react'
import { FlatList, Image, Modal, SafeAreaView, Text, View } from 'react-native'
import {
  CircleButton,
  DetailsDesc,
  DetailsVoluntary,
  FocusedStatusBar,
  RectButton,
  SubInfo,
} from '../components'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'
import api from '../services/api'

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={{ uri: data.imageUrl }}
      resizeMode='cover'
      style={{ width: '100%', height: '100%' }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={8}
    />
  </View>
)

const Details = ({ route, navigation }) => {
  const { data } = route.params

  const [modalVisible, setModalVisible] = useState(false)

  console.log(data)

  const handleParticipation = async () => {
    await api.post('participation', {
      userId: 'b2787b31-abd6-4fe9-b624-3dc3a1006905',
      projectId: '425e7e9e-7bc6-486b-a056-7473e4aa555a',
    })

    setModalVisible(true)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}
      >
        <Modal
          animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Text>
              Parabens! Você está participando do projeto{' '}
              <strong>{data.name}</strong>
            </Text>
            <RectButton
              title={'Voltar'}
              minWidth={170}
              fontSize={SIZES.large}
              {...SHADOWS.dark}
              handlePress={() => setModalVisible(false)}
            />
          </View>
        </Modal>

        <RectButton
          title={'Participar'}
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          handlePress={handleParticipation()}
        />
      </View>
      <FlatList
        data={data.participations}
        keyExtractor={item => item.userId}
        renderItem={({ item }) => <DetailsVoluntary voluntary={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo data={data} />

            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.participations.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Voluntários
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details
