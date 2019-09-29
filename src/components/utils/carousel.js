import React, { Component } from "react"
import PropTypes from "prop-types"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import carouselStyles from "../../styles/utils/carousel.module.css"

class Carousel extends Component {
  state = {
    index: 0,
    animating: false,
    isMobile: false,
    isTablet: false,
    visibleItemsClass: carouselStyles.visibleItems,
    previousItemsClass: carouselStyles.previousItems,
    nextItemsClass: carouselStyles.nextItems,
  }

  static propTypes = {
    numMobileItems: PropTypes.number.isRequired,
    numTabletItems: PropTypes.number.isRequired,
    numDesktopItems: PropTypes.number.isRequired,
    auto: PropTypes.bool,
  }

  handleWindowSizeChange = () => {
    const isMobile = window.matchMedia("(max-width: 575px)").matches
    const isTablet = window.matchMedia("(max-width: 767px)").matches
    this.setState({
      isMobile,
      isTablet,
    })

    if (isMobile && this.props.numMobileItems !== null) {
      this.NUM_VISIBLE_ITEMS = parseInt(this.props.numMobileItems)
    } else if (isTablet && this.props.numTabletItems !== null) {
      this.NUM_VISIBLE_ITEMS = parseInt(this.props.numTabletItems)
    } else if (this.props.numDesktopItems !== null) {
      this.NUM_VISIBLE_ITEMS = parseInt(this.props.numDesktopItems)
    }
  }

  componentDidMount = () => {
    if (typeof window !== "undefined") {
      this.handleWindowSizeChange()
      window.addEventListener("resize", this.handleWindowSizeChange)
    }

    if (this.props.auto) {
      setInterval(() => this.moveCarouselRight(this.props.children), 2000)
    }
  }

  componentWillUnmount = () => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.handleWindowSizeChange)
    }
  }

  getItems = (startIndex, allItems) => {
    let items = []
    if (startIndex + this.NUM_VISIBLE_ITEMS > allItems.length) {
      items.push(...allItems.slice(startIndex, allItems.length))
      items.push(
        ...allItems.slice(
          0,
          startIndex + this.NUM_VISIBLE_ITEMS - allItems.length
        )
      )
    } else {
      items = allItems.slice(startIndex, startIndex + this.NUM_VISIBLE_ITEMS)
    }

    return items
  }

  moveCarouselRight = items => {
    if (this.state.animating || this.NUM_VISIBLE_ITEMS >= items.length)
      return false

    this.setState(state => ({
      animating: true,
      visibleItemsClass: [
        state.visibleItemsClass,
        carouselStyles.moveLeft,
      ].join(" "),
      nextItemsClass: [state.nextItemsClass, carouselStyles.moveLeft].join(" "),
    }))

    setTimeout(() => {
      this.setState(state => ({
        index: (state.index + this.NUM_VISIBLE_ITEMS) % items.length,
        animating: false,
        visibleItemsClass: carouselStyles.visibleItems,
        nextItemsClass: carouselStyles.nextItems,
      }))
    }, 2000)
  }

  moveCarouselLeft = items => {
    if (this.state.animating || this.NUM_VISIBLE_ITEMS >= items.length)
      return false

    this.setState(state => ({
      animating: true,
      visibleItemsClass: [
        state.visibleItemsClass,
        carouselStyles.moveRight,
      ].join(" "),
      previousItemsClass: [
        state.previousItemsClass,
        carouselStyles.moveRight,
      ].join(" "),
    }))

    setTimeout(() => {
      this.setState(state => ({
        index:
          state.index - this.NUM_VISIBLE_ITEMS < 0
            ? items.length + state.index - this.NUM_VISIBLE_ITEMS
            : state.index - this.NUM_VISIBLE_ITEMS,
        animating: false,
        visibleItemsClass: carouselStyles.visibleItems,
        previousItemsClass: carouselStyles.previousItems,
      }))
    }, 1000)
  }

  handleKeyUp = (e, items) => {
    if (e.key === "ArrowRight") {
      this.moveCarouselRight(items)
    } else if (e.key === "ArrowLeft") {
      this.moveCarouselLeft(items)
    }
  }

  renderItems = items =>
    items.map(item => (
      <div key={item.key} style={{ width: 100 / this.NUM_VISIBLE_ITEMS + "%" }}>
        {item}
      </div>
    ))

  render = () => {
    const {
      index,
      previousItemsClass,
      nextItemsClass,
      visibleItemsClass,
    } = this.state
    const { children, auto } = this.props
    const items = this.renderItems(children)

    return (
      <div
        className={carouselStyles.carouselWrapper}
        onKeyUp={e => this.handleKeyUp(e, items)}
      >
        <div className={previousItemsClass}>
          {this.getItems(
            index - this.NUM_VISIBLE_ITEMS < 0
              ? items.length + index - this.NUM_VISIBLE_ITEMS
              : index - this.NUM_VISIBLE_ITEMS,
            items
          )}
        </div>
        <div className={carouselStyles.items}>
          <div
            className={[carouselStyles.button, carouselStyles.prevButton].join(
              " "
            )}
          >
            {!auto && (
              <button
                className={carouselStyles.circle}
                onClick={() => this.moveCarouselLeft(items)}
              >
                <FaAngleLeft className={carouselStyles.icon} />
              </button>
            )}
          </div>

          <div className={visibleItemsClass}>{this.getItems(index, items)}</div>
          <div
            className={[carouselStyles.button, carouselStyles.nextButton].join(
              " "
            )}
          >
            {!auto && (
              <button
                className={carouselStyles.circle}
                onClick={() => this.moveCarouselRight(items)}
              >
                <FaAngleRight className={carouselStyles.icon} />
              </button>
            )}
          </div>
        </div>
        <div className={nextItemsClass}>
          {this.getItems(
            (index + this.NUM_VISIBLE_ITEMS) % items.length,
            items
          )}
        </div>
      </div>
    )
  }
}

export default Carousel
