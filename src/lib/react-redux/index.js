/*
* react-redux库的主要模块
* 1.react-redux向外暴露了2个api
*   provider组件类
*   connect函数
* 1.1 Provide组件
*   接收store属性
*   让所有容器组件都可以看到store，从而通过store读取/更新状态
* 1.2 connect函数
*    接收两个参数 mapStateToProps 、 mapDispatchToProps
*    mapStateToProps为一个函数，用来指定UI组件传递哪些一般属性
*    mapDispatchToProps为一个函数或者对象，用来指定UI组件传递哪些函数属性
*    connect()执行的返回值为一个高阶组件：包装UI组件，返回一个新的容器组件
*     容器组件会向UI传入前面指定的一般/函数类型属性
* */
import React from 'react'
import PropTypes from 'prop-types'

/*
* 向所有的容器组件提供store的组件类
* 通过context向所有的容器组件提供store
* */
export class Provider extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };
  // 声明提供的context的数据名称和类型
  static childContextTypes = {
    store: PropTypes.object
  };
  // 向所有声明子组件提供包含要传递数据的context对象
  static getChildContext = () => {
    return {
      store: this.props.store
    }
  };

  render() {
    return this.props.children
  }
}

/*
* connect 高阶函数，接收mapStateToProps / mapDispatchToProps
* 返回一个高阶组件函数
*
* */

export function connect(mapStateToProps, mapDispatchToProps) {
  return (UIComponent) => {
    return class ContainerComponent extends React.Component {
      // 声明接收的context数据的名称和类型
      static contextTypes = {
        store: PropTypes.object
      };
      render() {
        return <UIComponent></UIComponent>
      }
    }
  }
}