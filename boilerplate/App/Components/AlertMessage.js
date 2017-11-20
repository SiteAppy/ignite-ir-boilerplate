/* @flow */
import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/AlertMessageStyles'

type Props = {
  title: string,
  icon: string,
  style: any,
  show: boolean,
}

export default class AlertMessage extends React.Component<Props> {
  static defaultProps = { show: true }

  render() {
    const messageComponent = null
    if (this.props.show) {
      const { title } = this.props
      return (
        <View style={[styles.container, this.props.style]}>
          <View style={styles.contentContainer}>
            <Text allowFontScaling={false} style={styles.message}>
              {title && title.toUpperCase()}
            </Text>
          </View>
        </View>
      )
    }

    return messageComponent
  }
}
