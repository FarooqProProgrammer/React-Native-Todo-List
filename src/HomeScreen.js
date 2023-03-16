import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Input, Typeahead } from 'native-base'
import tw from 'twrnc';
import { TextInput } from 'react-native-web';


const HomeScreen = () => {
    const [todoList, setTodo] = useState([]);
    const [Todo, setTodoItem] = useState();

    const AddTodo = () => {
        setTodo([...todoList, Todo]);
        console.log(todoList)
    }

    return (
        <Box flex={1} justifyContent={"space-around"} alignItems={"center"}>

            {/* =========== Input Container ================== */}
            <Box style={tw`w-[300px] py-8  flex-row justify-around items-center`}>
                <TextInput style={tw`py-5 px-2`} onChangeText={text => setTodoItem(text)} placeholder="Enter Your Todo" w="50%" />
                <Button onPress={AddTodo}>Click Me</Button>
            </Box>

            <Box style={tw`w-[300px] py-10 border-2 border-black flex-row justify-around items-center`}>
                <Text>Todo</Text>
            </Box>

        </Box>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})