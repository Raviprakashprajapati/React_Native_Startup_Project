import {View, Text, StyleSheet} from 'react-native';
import React, { useRef } from 'react';
import Video, { VideoRef } from 'react-native-video';

export default function Layout() {

    const videoRef = useRef<VideoRef>(null)

  return (
    <View style={styles.container}>

        <Video
        source={{uri:"https://scontent.cdninstagram.com/o1/v/t16/f2/m69/An80ycfEEDJ8Cng9mZ_u3xC4q1MAE9ng7JzZc9xwf_Vc1Oqx8QoiDTaMPP8Von1pVzcwfG4QuqoO6vnIfadMKzbo.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMTA4MC5kYXNoX2Jhc2VsaW5lXzEwODBwX3YxIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&strext=1&vs=187b0fbfd4e8d90e&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR0dLQmhPemZFUnkwQ1lGQU9ILWdKRWg4TGNEYnBSMUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEMy02aG9ZekplZ0FzSUJBS0NneFVzbkg5RU1icV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJtrvhejb6tYBFQIoAkMzLBdALHdLxqfvnhgWZGFzaF9iYXNlbGluZV8xMDgwcF92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AYCzhIG-yXI47H5R8qTZrHFAwxC8HLnw_DlkzQ4vNpyqdA&oe=66A3B9DC&_nc_sid=1d576d"}}
        ref={videoRef}
        />

      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.section1}>
          <Text>section1</Text>
        </View>
        <View style={styles.section2}>
          <Text>section2</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:2,
  },
  header: {
    flex: 1,
    backgroundColor: '#ba3713',
  },
  main: {
    flex: 3,
    flexDirection: 'row',
    gap:1,
  },
  section1: {
    flex: 3,
    backgroundColor: 'grey',
  },
  section2: {
    flex: 1,
    backgroundColor: '#8a797a',
  },
  footer: {
    flex: 1,
    backgroundColor: '#d1454e',
  },
});








