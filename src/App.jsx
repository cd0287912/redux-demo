import React from 'react'
import {Button, Select, Card} from 'antd'
import {changeTotal} from './store/createActions'
const {Option} = Select
const cardStyle = {
  width: '600px',
  margin: '100px auto'
};
const btnStyle = {
  margin: '0 10px'
}

class App extends React.Component {
  state = {
    selectValue:'1'
  };

  render() {
    const {total} = this.props.store.getState();
    const title = (
      <h1>click {total} times</h1>
    );
    return (
      <Card title={title} style={cardStyle}>
        <Select
          style={{width: 100, marginRight: 10}}
          defaultValue='1'
          onChange={(selectValue) => {this.setState({selectValue})}}
        >
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
          <Option value='3'>3</Option>
        </Select>
        <Button onClick={this.handleChangetotal.bind(this,'+')} type='primary'>+</Button>
        <Button onClick={this.handleChangetotal.bind(this,'-')} style={btnStyle} type='primary'>-</Button>
        <Button onClick={this.handleChangetotal.bind(this,'odd')} style={btnStyle} type='primary'>increateIfOdd</Button>
        <Button onClick={this.handleChangetotal.bind(this,'async')} type='primary'>increateAsync</Button>
      </Card>
    )
  }
  handleChangetotal = (type) => {
    const selectValue = this.state.selectValue * 1;
    const {total} = this.props.store.getState();
    if(type === '+') {
      this.props.store.dispatch(changeTotal(total + selectValue));
    } else if(type === '-') {
      this.props.store.dispatch(changeTotal(total - selectValue));
    } else if(type === 'odd') {
      if(selectValue % 2 === 0) return;
      this.props.store.dispatch(changeTotal(total + selectValue));
    } else {
      setTimeout(() => {
        this.props.store.dispatch(changeTotal(total + selectValue));
      },1000)
    }
  }
}

export default App;