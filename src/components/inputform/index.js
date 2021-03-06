import React from 'react'
import {Container,Input,Button,Text,Group} from './styles/inputform'

export default function InputForm({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

InputForm.Input = function InputFormInput({...restProps}){
    return <Input {...restProps}/>
}

InputForm.Group = function InputFormInput({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

InputForm.Button = function InputFormButton({children,...restProps}){
    return <Button {...restProps}>
        {children}
    </Button>
}

InputForm.Text = function InputFormText({children,...restProps}){
    return <Text {...restProps}>
        {children}
    </Text>
}

