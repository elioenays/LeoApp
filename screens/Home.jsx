import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { FocusedStatusBar, HomeHeader, ProjectCard } from '../components'
import { COLORS } from '../constants'
import api from '../services/api'

const Home = () => {
  const [projectData, setProjectData] = useState([])

  const getProject = async () => {
    const { data } = await api.get('project')
    setProjectData(data)
    console.log(data)
  }

  useEffect(() => {
    getProject()
  }, [])

  const handleSearch = value => {
    if (!value.length) return setProjectData([])

    const filteredData = projectData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    )

    if (filteredData.length) {
      setProjectData(filteredData)
    } else {
      setProjectData(projectData)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={projectData}
            keyExtractor={project => project.id}
            renderItem={({ item }) => <ProjectCard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
