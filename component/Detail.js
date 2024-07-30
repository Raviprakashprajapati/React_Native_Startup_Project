import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { DataTable,List } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

const Detail = () => {

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[2]
  );
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [items] = React.useState([
    {
      key: 1,
      model: 'iPhone 14',
      brand: 'Apple',
      price: '$799',
      batteryLife: '20 hours',
    },
    {
      key: 2,
      model: 'Galaxy S23',
      brand: 'Samsung',
      price: '$699',
      batteryLife: '25 hours',
    },
    {
      key: 3,
      model: 'Pixel 7',
      brand: 'Google',
      price: '$599',
      batteryLife: '24 hours',
    },
    {
      key: 4,
      model: 'OnePlus 11',
      brand: 'OnePlus',
      price: '$749',
      batteryLife: '22 hours',
    },
    {
      key: 5,
      model: 'Xperia 5 IV',
      brand: 'Sony',
      price: '$949',
      batteryLife: '23 hours',
    },
  ]);
  

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [dropdownItems, setDropdownItems] = React.useState([
      {label: 'Phone', value: 'phone'},
      {label: 'Hardware', value: 'hardware'},
      {label: 'Software', value: 'software'},
  ]);

  return (
    <ScrollView style={{padding:16}} >

        <DataTable style={{padding:15,borderColor:"grey",borderWidth:0.3}}>
            <DataTable.Header>
            <DataTable.Title>Model</DataTable.Title>
            <DataTable.Title numeric>Brand</DataTable.Title>
            <DataTable.Title numeric>Price</DataTable.Title>
            </DataTable.Header>

            {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
                <DataTable.Cell>{item.model}</DataTable.Cell>
                <DataTable.Cell numeric>{item.brand}</DataTable.Cell>
                <DataTable.Cell numeric>{item.price}</DataTable.Cell>
            </DataTable.Row>
            ))}

                <DataTable.Pagination
                
                        page={page}
                        numberOfPages={Math.ceil(items.length / itemsPerPage)}
                        onPageChange={page => setPage(page)}
                        label={`${from + 1}-${to} of ${items.length}`}
                        showFastPaginationControls
                        numberOfItemsPerPageList={numberOfItemsPerPageList}
                        numberOfItemsPerPage={itemsPerPage}
                        onItemsPerPageChange={onItemsPerPageChange}
                        selectPageDropdownLabel={'Rows per page'}
                />
        </DataTable>

        <View style={{marginVertical:20,marginHorizontal:35}} >
        <DropDownPicker
            open={open}
            value={value}
            items={dropdownItems}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setDropdownItems}
            placeholder={'Choose a Category.'}
        />
        </View>

        <List.Section title="Accordions" style={{marginBottom:60,display:"flex",gap:10,}}>

        <List.Accordion
            title="Uncontrolled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
        >
            <List.Item title="First item" />
            <List.Item title="Second item" />
        </List.Accordion>
       

        <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
        </List.Accordion>

        </List.Section>

            

    </ScrollView>
   
  );
};

export default Detail;