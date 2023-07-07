import {components} from 'react'
import './index.css'

class FruitsCounter extends components {
  state = {mangoesCount: 0, bananasCount: 0}

  mangoes = () => {
    this.setState(prevState => ({mangoesCount: mangoesCount + 1}))
  }
  bananas = () => {
    this.setState(prevState => ({bananasCount: bananasCount + 1}))
  }
  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="bg-color">
        <div className="innerBg">
          <h1 className="heading">
            Bob ate <span className="span-element">{mangoesCount}</span>mangoes
            <span className="span-element">{bananasCount}</span>
            bananas
          </h1>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img-prop"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.mangoes}>
                Eat Mangoes
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img-prop"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.bananas}>
                Eat bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
