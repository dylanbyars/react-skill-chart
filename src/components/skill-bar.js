import React, { Component } from 'react';
import { TweenMax, Bounce } from 'gsap';
import classNames from 'classnames';

class SkillBar extends Component {

  componentWillAppear(callback) {

    // figure out what the final width should be for the particular bar
    const getWidth = () => {
      switch (this.props.prowess) {
        case 'virtuoso':
          return '65vw'
          break
        case 'cozy':
          return '55vw'
          break
        case 'learning':
          return '45vw'
          break
        case 'fiddled':
          return '35vw'
          break
        case 'read':
          return '25vw'
          break
        default:
          return '25vw'
      }
    }

    const el = this.container
    const loadDelay = this.props.delay
    const barWidth = getWidth()
    
    // grows the bar with a bounce
    TweenMax.fromTo(el, 1.1, {
      width: "0%"
    }, {
      width: barWidth,
      delay: loadDelay,
      ease: Bounce.easeOut,
      onComplete: callback
    })
  }

  render() {

    let { technology, prowess } = this.props

    let prowessStyles = classNames(prowess, 'bar')

    return (
      <div className="skill-bar">
        <div className="technology">{technology}</div>
        <div className="bar-container">
          <div className={prowessStyles} ref={c => this.container = c}>{prowess}</div>
        </div>
      </div>
    )
  }
}

export default SkillBar;