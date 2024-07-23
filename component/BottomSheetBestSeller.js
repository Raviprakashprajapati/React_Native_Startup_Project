import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BottomSheet, { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet';

const BottomSheetBestSeller = ({ snapPoints, children, onChange,data ,title}) => {
  // Ref to control the BottomSheet
  const bottomSheetRef = useRef(null);

  // Callback when sheet changes
  const handleSheetChanges = useCallback((index) => {
    if (onChange) {
      onChange(index);
    }
  }, [onChange]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={snapPoints}
      
    >
        <Text style={{textAlign:"center",marginBottom:20}}>{title}</Text>
      <BottomSheetFlatList
        data={data}
        keyExtractor={(i)=>i.asin}
        renderItem={({item})=>(
          <View style={{display:"flex",justifyContent:"space-evenly",flexDirection:"row",alignItems:"center",gap:5,padding:5,backgroundColor:"#fff",margin:5}} >
            <Image source={{uri:item.product_photo}} style={{resizeMode:"contain",height:80,width:80}} />
            <Text style={{color:"black",fontSize:13}} >
              {item.product_title.substring(0,30)}
            </Text>
          </View>)}
      />
    </BottomSheet>
  );
};




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sheetContent: {
      flex: 1,
      padding: 16,
    },
    headerText: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18,
      marginBottom: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 8,
    },
    image: {
      resizeMode: 'contain',
      height: 80,
      width: 80,
      marginRight: 10,
    },
    itemText: {
      color: 'black',
      fontSize: 13,
      flexShrink: 1, // Ensure the text wraps if it's too long
    },
    bottomSheetBackground: {
      backgroundColor: 'white',
    },
    bottomSheetHandle: {
      backgroundColor: '#f0f0f0',
    },
    bottomSheetHandleIndicator: {
      backgroundColor: '#ccc',
    },
  });
export default BottomSheetBestSeller;
