import { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { FocusedStatusBar, HomeHeader, ProjectCard } from '../components';
import { COLORS, ProjectData } from '../constants';

const Home = () => {
  const [projectData, setProjectData] = useState(ProjectData);

  const handleSearch = value => {
    if (!value.length) return setProjectData(ProjectData);

    const filteredData = ProjectData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.length) {
      setProjectData(filteredData);
    } else {
      setProjectData(ProjectData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={projectData}
            renderItem={({ item }) => <ProjectCard data={item} />}
            keyExtractor={item => item.id}
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
  );
};

export default Home;
