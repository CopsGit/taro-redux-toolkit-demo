import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'
import Button from "../../components/Button";

class Index extends Component<PropsWithChildren> {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
        <Button />
      </View>
    )
  }
}

export default Index

