import React, { Component } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import carouselStyles from "./carousel.module.css"

class Carousel extends Component {
  state = {
    index: 0,
    animating: false,
    isMobile: false,
    visibleItemsClass: carouselStyles.visibleItems,
    previousItemsClass: carouselStyles.previousItems,
    nextItemsClass: carouselStyles.nextItems,
  }

  handleWindowSizeChange = () => {
    const isMobile = window.matchMedia("(max-width: 500px)").matches
    this.setState({
      isMobile,
    })
    this.NUM_VISIBLE_ITEMS = isMobile
      ? parseInt(this.props.numMobileItems)
      : parseInt(this.props.numDesktopItems)
  }

  componentDidMount = () => {
    if (typeof window !== "undefined") {
      this.handleWindowSizeChange()
      window.addEventListener("resize", this.handleWindowSizeChange)
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
    if (this.state.animating) return false

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
    }, 1000)
  }

  moveCarouselLeft = items => {
    if (this.state.animating) return false

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

  renderItems = (itemsData, renderItem) =>
    itemsData.map(itemData =>
      renderItem(itemData, { width: 100 / this.NUM_VISIBLE_ITEMS + "%" })
    )

  render = () => {
    const {
      index,
      previousItemsClass,
      nextItemsClass,
      visibleItemsClass,
    } = this.state
    const { itemsData, renderItem } = this.props
    const items = this.renderItems(itemsData, renderItem)

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
          <button
            className={carouselStyles.prevButton}
            onClick={() => this.moveCarouselLeft(items)}
          >
            <FaArrowLeft />
          </button>
          <div className={visibleItemsClass}>{this.getItems(index, items)}</div>
          <button
            className={carouselStyles.nextButton}
            onClick={() => this.moveCarouselRight(items)}
          >
            <FaArrowRight />
          </button>
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
