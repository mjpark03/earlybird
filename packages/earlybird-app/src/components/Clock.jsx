import React, { Component } from 'react'
import './Clock.scss'

const Status = Object.freeze({
  READY: '오늘의 일과 시작!',
  STARTED: '오늘은 이 정도면 충분',
  FINISHED: 'Have a good day :D',
})

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      status: Status.READY,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  handleClick() {
    const next = this.state.status === Status.STARTED ? Status.FINISHED : Status.READY
    this.setState(prevState => ({
      status: prevState.status === Status.READY ? Status.STARTED : next,
    }))
  }

  render() {
    return (
      <div className="clock-area">
        <div className="clock">
          {this.state.date.toLocaleTimeString('ko-KR')}
        </div>
        <button className="btn btn-success btn-lg btn-block" onClick={this.handleClick}>
          {this.state.status}
        </button>
      </div>
    )
  }
}

export default Clock
